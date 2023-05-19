function getMeetingIHM(sessionCode) {
    //return '<div><h1>Meeting Page</h1><input id="idChamp" value = "' + sessionCode + '"></input><\div>';

    window.location.href = "https://yellowintegration.azurewebsites.net/whiteboard/" + sessionCode + "/Guest";
    return '<div><h1>Chargement...</h1><\div>';
}

function getSideIHM(sessionCode) {
    return '<div><h1>Side Page</h1><input id="idChamp" value = "' + sessionCode + '"></input><\div>';
}

function getDetailIHM(sessionCode) {
    return '<div><h1>Meeting Detail</h1><input id="idChamp" value = "' + sessionCode + '"></input><\div>';
}

function setupPage(sessionCode) {
    var mode = 0;
    var str = "";

    switch (mode) {
        case 0: str = getMeetingIHM(sessionCode); break;
        case 1: str = getSideIHM(sessionCode); break;
        case 2: str = getDetailIHM(sessionCode); break;
    }

    document.getElementById("main").innerHTML = str;
}


function initPage() {
    // récupération du code de Session en paramètre
    var parameters = location.search.substring(1).split("&");
    var parameter = parameters[0].split("=");
    var sessionParam = parameter[0];
    var sessionCode = decodeURI(parameter[1]);

    setupPage(sessionCode);
}

