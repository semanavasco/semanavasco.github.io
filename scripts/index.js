document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner l'élément input par son ID
  var zoneTexte = document.getElementById("zonetexte");

  zoneTexte.focus();
  zoneTexte.value = "";
});

// Écouter le clic de la souris sur la page pour donner le focus à l'élément input
document.addEventListener("click", function () {
  // Sélectionner l'élément input par son ID
  var zoneTexte = document.getElementById("zonetexte");

  zoneTexte.focus();
});

// Écouter les touches du clavier pour détecter la touche Entrée
document.addEventListener("keydown", async function (event) {
  var toucheAppuyee = event.key;

  if (toucheAppuyee === "Tab") {
    event.preventDefault();
  } else if (toucheAppuyee === "ArrowUp") {
    var zoneTexte = document.getElementById("zonetexte");

    if (historiqueCommandesArrowUp.length > 0) {
      zoneTexte.value =
        historiqueCommandesArrowUp[historiqueCommandesArrowUp.length - 1];
      historiqueCommandesArrowUp.pop();
      historiqueCommandesArrowDown.push(zoneTexte.value);
    } else zoneTexte.value = "";
  } else if (toucheAppuyee === "ArrowDown") {
    var zoneTexte = document.getElementById("zonetexte");

    if (historiqueCommandesArrowDown.length > 0) {
      zoneTexte.value =
        historiqueCommandesArrowDown[historiqueCommandesArrowDown.length - 1];
      historiqueCommandesArrowDown.pop();
      historiqueCommandesArrowUp.push(zoneTexte.value);
    } else zoneTexte.value = "";
  } else if (toucheAppuyee === "Enter") {
    // Obtenir la valeur de la commande
    var commande = document.getElementById("zonetexte").value;

    // Créer un élément HTML <div>
    var ancienneLigne = document
      .getElementById("terminal")
      .appendChild(document.createElement("div"));
    ancienneLigne.classList.add("lignes");
    ancienneLigne.classList.add("ancienneLigne");
    ancienneLigne.innerHTML = `<p><span class="information">visitor@semanavasco</span><span class="normalized">:</span><span class="comment">${
      dossiers.find((dossier) => dossier.name === dossierActuel).terminal
    }</span><span class="information">$</span> </p>
         <p>${commande}</p>`;

    // Séparer la commande en arguments
    var arguments = commande.split(" ");

    // Ajouter la commande à la liste des commandes tapées
    historiqueCommandesArrowUp.push(commande);

    // Vérifier la commande
    switch (arguments[0]) {
      case "":
        break;

      case "help":
        if (arguments.length > 1)
          reponseTerminal(
            `<p class="terminalOutput"><span class="error">${localisationTextes.helpErreur[lang]}</span></p>`
          );
        else
          reponseTerminal(
            `<p class="terminalOutput">
        <span class="comment">help</span>           <span class="question">${localisationTextes.helpDescription[lang]}</span><br/>
        <span class="comment">pwd</span>            <span class="question">${localisationTextes.pwdDescription[lang]}</span><br/>
        <span class="comment">ls</span>             <span class="question">${localisationTextes.lsDescription[lang]}</span><br/>
        <span class="comment">cd</span>             <span class="question">${localisationTextes.cdDescription[lang]}</span><br/>
        <span class="comment">clear</span>          <span class="question">${localisationTextes.clearDescription[lang]}</span><br/>
        <span class="comment">cat</span>            <span class="question">${localisationTextes.catDescription[lang]}</span><br/>
        <span class="comment">project</span>        <span class="question">${localisationTextes.projectDescription[lang]}</span><br/>
        <span class="comment">theme</span>          <span class="question">${localisationTextes.themeDescription[lang]}</span><br/>
        <span class="comment">lang</span>           <span class="question">${localisationTextes.langDescription[lang]}</span><br/>
       </p>`
          );
        break;

      case "ls":
        if (arguments.length === 1)
          reponseTerminal(
            `<p class="terminalOutput">${dossiers
              .find((dossier) => dossier.name === dossierActuel)
              .ls.join("   ")}</p>`
          );
        else if (
          dossierActuel === "~" &&
          dossiers
            .find((dossier) => dossier.name === dossierActuel)
            .childs.includes(arguments[1])
        ) {
          reponseTerminal(
            `<p class="terminalOutput">${dossiers
              .find((dossier) => dossier.name === arguments[1])
              .ls.join("   ")}</p>`
          );
        } else
          reponseTerminal(
            `<p class="terminalOutput"><span class="error">${localisationTextes.dossierErreur[lang]}"${arguments[1]}"${localisationTextes.existepasErreur[lang]}</span></p>`
          );
        break;

      case "cd":
        if (arguments.length === 1 || arguments[1] === "") dossierActuel = "~";
        else if (
          dossierActuel === "~" &&
          dossiers
            .find((dossier) => dossier.name === dossierActuel)
            .childs.includes(arguments[1])
        )
          dossierActuel = arguments[1];
        else if (arguments[1] === ".." && dossierActuel !== "~") {
          dossierActuel = "~";
        } else
          reponseTerminal(
            `<p class="terminalOutput"><span class="error">${localisationTextes.dossierErreur[lang]}"${arguments[1]}"${localisationTextes.existepasErreur[lang]}</span></p>`
          );
        break;

      case "clear":
        // Sélectionner tous les éléments avec la classe "ancienneLigne"
        var elements = document.getElementsByClassName("ancienneLigne");

        // Convertir la collection d'éléments en un tableau
        var elementsArray = Array.from(elements);

        // Supprimer chaque élément du tableau
        elementsArray.forEach(function (element) {
          element.remove();
        });
        break;

      case "pwd":
        reponseTerminal(
          `<p class="terminalOutput"><span class="comment">${
            dossiers.find((dossier) => dossier.name === dossierActuel).pwd
          }</span>
         </p>`
        );
        break;

      case "cat":
        if (arguments.length === 1)
          reponseTerminal(
            `<p class="terminalOutput"><span class="error">${localisationTextes.catErreur[lang]}</span></p>`
          );
        else if (
          dossiers
            .find((dossier) => dossier.name === dossierActuel)
            .childs.includes(arguments[1])
        ) {
          reponseTerminal(
            `<p class="terminalOutput">${
              localisationTextes[arguments[1]][lang]
            }</p>`
          );
        } else if (
          arguments[1].includes("/") &&
          dossiers
            .find((dossier) => dossier.name === arguments[1].split("/")[0])
            .childs.includes(arguments[1].split("/")[1])
        ) {
          reponseTerminal(
            `<p class="terminalOutput">${
              localisationTextes[arguments[1].split("/")[1]][lang]
            }</p>`
          );
        } else
          reponseTerminal(
            `<p class="terminalOutput"><span class="error">${localisationTextes.fichierErreur[lang]}'${arguments[1]}'${localisationTextes.existepasErreur[lang]}</span></p>`
          );
        break;

      case "theme":
        if (arguments.length === 1)
          reponseTerminal(
            `<p class="terminalOutput"><span class="error">${localisationTextes.themeErreur[lang]}</span></p>`
          );
        else changerTheme(arguments[1]);
        break;

      case "lang":
        if (arguments.length === 1)
          reponseTerminal(
            `<p class="terminalOutput"><span class="error">${localisationTextes.changementLangueErreur[lang]}</span></p>`
          );
        else changerLangue(arguments[1]);
        break;

      case "project":
        if (arguments.length === 1)
          reponseTerminal(
            `<p class="terminalOutput"><span class="error">${localisationTextes.ouvertureProjetErreur[lang]}</span></p>`
          );
        else if (arguments[1] !== "sololeveling") {
          reponseTerminal(
            `<p class="terminalOutput"><span class="error">${localisationTextes.ouvertureProjetInexistantErreur[lang]}'${arguments[1]}'${localisationTextes.ouvertureProjetInexistantErreur2[lang]}</span></p>`
          );
        } else {
          reponseTerminal(
            `<p class="terminalOutput"><span class="comment">${localisationTextes.ouvertureProjet[lang]}'${arguments[1]}'.</span></p>`
          );

          ouvrirProjet(arguments[1]);
        }
        break;

      case "bash":
        if (arguments.length === 1)
          reponseTerminal(
            `<p class="terminalOutput"><span class="error">${localisationTextes.bashError[lang]}</span></p>`
          );
        else if (
          dossiers
            .find((dossier) => dossier.name === dossierActuel)
            .childs.includes(arguments[1]) &&
          arguments[1].endsWith(".sh")
        ) {
          eval(
            dossiers.find(
              (dossier) => dossier.name === arguments[1]
            ).bash
          );
        } else if (
          arguments[1].includes("/") &&
          dossiers
            .find((dossier) => dossier.name === arguments[1].split("/")[0])
            .childs.includes(arguments[1].split("/")[1]) &&
          arguments[1].split("/")[1].endsWith(".sh")
        ) {
          eval(
            dossiers.find(
              (dossier) => dossier.name === arguments[1].split("/")[1]
            ).bash
          );
        } else
          reponseTerminal(
            `<p class="terminalOutput"><span class="error">${localisationTextes.fichierErreur[lang]}'${arguments[1]}'${localisationTextes.existepasErreur[lang]}</span></p>`
          );
        break;

      default:
        reponseTerminal(
          `<p class="terminalOutput"><span class="error">${localisationTextes.erreur[lang]}'${commande}'${localisationTextes.existepasErreur[lang]}</span></p>`
        );
        break;
    }

    // Création d'une nouvelle ligne où l'utilisateur peut taper une nouvelle commande
    var ligneActuelle = document.getElementsByClassName("ligneActuelle")[0];
    ligneActuelle.remove();

    ligneActuelle = document
      .getElementById("terminal")
      .appendChild(document.createElement("div"));

    ligneActuelle.classList.add("lignes");
    ligneActuelle.classList.add("ligneActuelle");

    ligneActuelle.innerHTML = `<p><span class="information">visitor@semanavasco</span><span class="normalized">:</span><span class="comment">${
      dossiers.find((dossier) => dossier.name === dossierActuel).terminal
    }</span><span class="information">$</span> </p>
         <input type="text" name="zonetexte" id="zonetexte" maxlength="100" autofocus>`;

    var zoneTexte = document.getElementById("zonetexte");

    zoneTexte.focus();
  }
});
