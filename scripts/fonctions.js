function reponseTerminal(reponse) {
    var reponseTerminal = document
      .getElementById("terminal")
      .appendChild(document.createElement("div"));
  
    reponseTerminal.classList.add("lignes");
    reponseTerminal.classList.add("ancienneLigne");
  
    reponseTerminal.innerHTML = reponse;
  }
  
  function changerTheme(theme) {
    if (isNaN(theme) || Number(theme) < 0 || Number(theme) > 9)
      return reponseTerminal(
        `<p>   <span class="error">${localisationTextes.themeInexistantErreur[lang]}'${theme}'${localisationTextes.themeEntreErreur[lang]}</span></p>`
      );
  
    var styleLink = document.getElementById("lienStyle");
  
    styleLink.href = `styles/theme${theme}.css`;
  
    return reponseTerminal(
      `<p>   <span class="comment">${localisationTextes.themeChange[lang]}'${theme}'.</span></p>`
    );
  }
  
  function changerLangue(langue) {
    if (langue !== "fr" && langue !== "en")
      return reponseTerminal(
        `<p>   <span class="error">${localisationTextes.changementLangueErreur[lang]}</span></p>`
      );
  
    lang = langue;
  
    var welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.innerHTML = localisationTextes.welcomeMessage[lang];
  
    var helpMessage = document.getElementById("helpMessage");
    helpMessage.innerHTML = localisationTextes.helpMessage[lang];
  
    return reponseTerminal(
      `<p>   <span class="comment">${localisationTextes.changementLangue[lang]}'${langue}'.</span></p>`
    );
  }