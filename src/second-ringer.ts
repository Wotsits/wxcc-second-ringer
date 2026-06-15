import { LitElement, html, css } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import "./assets/ring.mp3";
// import "@wxcc-desktop/sdk"
@customElement("second-ringer")
export class SecondRinger extends LitElement {
    @state() audioDevices1: any = [];
    @state() hideMe = true;
    @state() isActive = false;
    @state() selectedDeviceId: string | null = null;
    @query("#ring") hmm!: HTMLAudioElement;
    static styles = [
        css`
            :host {
                display: block;
                font-family: var(--brand-font-regular);
            }
            .container {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 1rem;
                border: solid black;
                border-radius: 12px;
                overflow: hidden;
                z-index: 99;
                background-color: rgba(5, 5, 5, 0.5);
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            .hidden {
                display: none;
            }
            .ringer-button {
                float: right;
            }
            button {
                padding: 0.3rem 0.75rem;
                border: none;
                background: black;
                font-weight: bold;
                font-family: var(--brand-font-bold);
                font-weight: var(--brand-font-weight-bold);
                background-color: var(--tabs-primary-bg-color);
                color: var(--tabs-primary-text-color);
                box-shadow: inset 0 0 0 0 var(--tabs-default-active-border);
                border-radius: 0.5rem;
                cursor: pointer;
                user-select: none;
            }
            select {
                padding: 0.5rem;
                background-color: var(--button-idle-bg-color);
                color: var(--button-secondary-text-color);
                border: 1px solid var(--button-idle-border-color);
                border-radius: 0.5rem;
            }
            .top-container,
            .bottom-container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
            }
        `,
    ];
    async connectedCallback() {
        super.connectedCallback();

        this.populateAudio();
        window.AGENTX_SERVICE.aqm.contact.eAgentOfferContact.listen(() => {
            console.warn("eAgentOfferContact triggered the playing of sound");
            this.playSound();
        });
        window.AGENTX_SERVICE.aqm.contact.eAgentOfferConsult.listen(() => {
            console.warn("eAgentOfferConsult triggered the playing of sound");
            this.playSound();
        });
        window.AGENTX_SERVICE.aqm.contact.eAgentContactAssigned.listen(() => {
            this.stopSound();
        });
        window.AGENTX_SERVICE.aqm.contact.eAgentContactEnded.listen(() => {
            this.stopSound();
        });
        window.AGENTX_SERVICE.aqm.contact.eAgentOfferContactRona.listen(() => {
            this.stopSound();
        });
        window.AGENTX_SERVICE.aqm.contact.eAgentConsulting.listen(() => {
            this.stopSound();
        });
    }
    async firstUpdated() {
        // get the persisted state from localStorage
        const selectedId = localStorage.getItem("secondaryRingerSelectedId");
        if (selectedId && this.hmm) {
            this.hmm.setSinkId(selectedId);
            this.selectedDeviceId = selectedId;
        }
        const isActive = localStorage.getItem("secondaryRingerIsActive");
        if (isActive === "true") this.isActive = true;
        // ------------------------------------
    }
    populateAudio() {
        navigator.mediaDevices.getUserMedia({ audio: true });
        this.listAudioDevices();
    }
    _handleSelect(event: any) {
        // persist to localStorage
        localStorage.setItem("secondaryRingerSelectedId", event.target.value);
        // update local state
        this.selectedDeviceId = event.target.value;
        this.hmm.setSinkId(event.target.value);
    }
    _handleIsActive() {
        const newState = !this.isActive;
        this.isActive = newState;
        localStorage.setItem("secondaryRingerIsActive", newState.toString());
    }
    playSound() {
        if (this.isActive) {
            this.hmm.play();
        }
    }
    stopSound() {
        this.hmm.load();
    }
    async listAudioDevices() {
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const audioDevices = devices.filter(
                (device) =>
                    device.kind === "audiooutput" &&
                    device.deviceId !== "default" &&
                    device.deviceId !== "communications",
            );
            this.audioDevices1 = audioDevices.map(
                (d: any) =>
                    html`<option
                        value=${d.deviceId}
                        ?selected=${d.deviceId === this.selectedDeviceId}
                    >
                        ${d.label}
                    </option>`,
            );
            if (audioDevices.length === 0) {
                this.populateAudio();
            }
        } catch (error) {
            console.error("Error enumerating devices:", error);
        }
    }
    render() {
        return html`
            <button
                class="ringer-button"
                @click=${() => (this.hideMe = !this.hideMe)}
            >
                Second Ringer
            </button>
            <div class=${"container" + (this.hideMe ? " hidden" : "")}>
                <div class="top-container">
                    <audio
                        id="ring"
                        src="https://intranet.corp.conwy.gov.uk/edge-extensions/wxcc-second-ringer-widget/dist/ring.mp3"
                        type="audio/mp3"
                        controls
                        loop
                    ></audio>
                    <button @click=${this._handleIsActive}>
                        ${this.isActive ? "Enabled" : "Disabled"}
                    </button>
                </div>
                <div class="bottom-container">
                    <select @change=${this._handleSelect}>
                        ${this.audioDevices1}
                    </select>
                    <button @click="${this.listAudioDevices}">Load</button>
                </div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "second-ringer": SecondRinger;
    }
}
