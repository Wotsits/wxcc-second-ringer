# Webex Second Ringer Widget

This is a widget which adds a second external ringer to the Webex web interface. When enabled, when a uer receives an incoming call whilst a headset is plugged in, the ringtone will be heard through both the headset and a chosen external speaker. This project builds on the tremendous work of (kevsimps)[https://github.com/kevsimps] who created a (POC that can be found here)[https://apphub.webex.com/applications/wxcc-second-ringer-widget-playbook]

## Setup

1. If you don't already have a copy of the repo on your machine, clone the repo:

```bash
git clone https://github.com/kevsimps/second-ringer.git
cd second-ringer
npm install
```

2. Decide where you will host the built static artifacts and update the audio element in `second-ringer.ts` to point at that location.
3. Inside the repo root, run `npm run build` to generate the `dist/` folder containing build artifacts.
4. Host the built artifacts in your own hosting location.
5. Download second-ringer_Layout.json.
6. Update the `agent.area.advancedHeader[1]` object to point at the hosted location of your built `index.js` script.
7. Create the desktop layout in Control Hub
    1. Sign in to Control Hub as a WxCC administrator.
    2. Navigate to Contact Center > Agent Experience > Desktop Layouts.
    3. Click New Layout.
    4. Upload `second-ringer_Layout.json` (with the URL updated in Step 6.)
    5. Give the layout a name (e.g. Second Ringer Layout) and save.
8. Assign the layout to an agent team
    1. In Control Hub, navigate to Contact Center > Teams.
    2. Select the team whose agents should have the Second Ringer widget.
    3. Under Desktop Layout, select the layout created in Step 7.
    4. Save.
9. Log in with the team which has the desktop layout assigned.
10. Click the **Second Ringer** button in the header.
11. Select the audio device you want to have the second ringer to played when a new inbound contact is offered.
    1. You can test the audio and adjust the volume using the audio controls.
12. Click the button labeled **Disabled** to toggle the widget to Enabled.
13. Click the **Second Ringer** button to dismiss the dialog box.
14. Make an inbound test call.

## Development Notes

### Listenable Events

The following events are listenable on the window.AGENTX_SERVICE.aqm.contact object:

- "eAgentContact",
- "eAgentContactAssigned",
- "eAgentContactAssignFailed",
- "eAgentContactEnded",
- "eAgentContactWrappedUp",
- "eAgentOfferContact",
- "eAgentOfferContactRona",
- "eAgentContactReserved",
- "eAgentInviteFailed",
- "eAgentOfferConsult",
- "eAgentWrapup",
- "eAgentOfferCampaignReserved",
- "eAgentCampaignContactUpdated",
- "eAgentAddCampaignReserved",
- "eAgentContactHeld",
- "eResumeRecording",
- "ePauseRecording",
- "eConsultTransfer",
- "eAgentConsultTransferFailed",
- "eContactMerged",
- "eAgentblindTransferred",
- "eAgentvteamTransfer",
- "eCallRecordingStarted",
- "eAgentContactUnHeld",
- "eAgentConsultCreated",
- "eAgentConsultConferenced",
- "eAgentConsultEnded",
- "eAgentCtqCancelled",
- "eAgentConsultConferenceEnded",
- "eAgentConsulting",
- "eAgentConsultFailed",
- "eAgentConsultEndFailed",
- "eAgentCtqFailed",
- "eAgentCtqCancelFailed",
- "eAgentConsultConferenceEndFailed",
- "eAgentContactCleanup",
- "eContactCallbackFailed",
- "eContactOwnerChanged",
- "eParticipantJoinedConference",
- "eParticipantLeftConference",
- "eParticipantPostCallActivity",
- "eConsultedParticipantMoving",
- "eAgentConferenceTransferred",
- "eAgentConsultConferencing",
- "eAgentConsultTransferring",
- "eAgentMediaForkUpdate",
- "eAgentContactAniUpdated",
