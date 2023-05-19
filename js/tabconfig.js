function btnPush() {
    let codeSession = document.getElementById("idSessionCode").value;

    // redirection sur la page tab.html
    window.location.href = "tab.html?Session=" + codeSession;
}


