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
            .modal__container {
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
            .modal__header-container {
                display: flex;
                justify-content: space-between;
            }
            .modal__title {
                margin-top: 0;
                margin-bottom: 0;
                color: white;
                font-size: large;
                font-weight: bold;
            }
            .modal__close-svg path {
                fill: var(--tabs-primary-text-color);
            }
            .modal__top-container,
            .modal__bottom-container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
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
        `,
    ];
    async connectedCallback() {
        super.connectedCallback();

        this.populateAudio();
        window.AGENTX_SERVICE.aqm.contact.eAgentOfferContact.listen(
            (event: any) => {
                if (event.data.interaction.contactDirection.type === "INBOUND")
                    this.playSound();
            },
        );
        window.AGENTX_SERVICE.aqm.contact.eAgentOfferConsult.listen(
            (event: any) => {
                if (event.data.interaction.contactDirection.type === "INBOUND")
                    this.playSound();
            },
        );
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
            <div class=${"modal__container" + (this.hideMe ? " hidden" : "")}>
                <div class="modal__header-container">
                    <p class="modal__title">Second Ringer Configuration</p>
                    <button
                        class="modal__close-button"
                        @click=${() => (this.hideMe = true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            height="20px"
                            width="auto"
                            class="modal__close-svg"
                        >
                            <!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
                            <path
                                d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                            />
                        </svg>
                    </button>
                </div>
                <div class="modal__top-container">
                    <audio
                        id="ring"
                        src="https://intranet.corp.conwy.gov.uk/edge-extensions/wxcc-second-ringer-widget/ring.mp3"
                        type="audio/mp3"
                        controls
                        loop
                    ></audio>
                    <button @click=${this._handleIsActive}>
                        ${this.isActive ? "Enabled" : "Disabled"}
                    </button>
                </div>
                <div class="modal__bottom-container">
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
