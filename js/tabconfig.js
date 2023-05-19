import {microsoftTeams} from "@microsoft/teams-js"

function btnPush() {
    let codeSession = document.getElementById("idSessionCode").value;

    // redirection sur la page tab.html
    window.location.href = "tab.html?Session=" + codeSession;
}

function InitMSTeam() {
    microsoftTeams.app.initialize().then(() => {
        microsoftTeams.pages.config.registerOnSaveHandler((saveEvent) => {

            const tabName = document.getElementById("idTabName").value;
            const sessionCode = document.getElementById("idSessionCode").value;

            microsoftTeams.pages.config.setConfig({
                suggestedDisplayName: tabName,
                entityId: "Yellow",
                contentUrl: "tab.html?Session=" + codeSession,
                websiteUrl: "https://yellowintegration.azurewebsites.net",
            }).then(() => {
                saveEvent.notifySuccess();
            });
        });

        microsoftTeams.pages.config.setValidityState(true);
    });
}