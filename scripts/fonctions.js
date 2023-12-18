// Envoie une nouvelle ligne dans le terminal avec la réponse spécifiée
function reponseTerminal(reponse) {
  var reponseTerminal = document
    .getElementById("terminal")
    .appendChild(document.createElement("div"));

  reponseTerminal.classList.add("lignes");
  reponseTerminal.classList.add("ancienneLigne");

  reponseTerminal.innerHTML = reponse;
}

// Trouve la valeur d'auto-complétion
function autoCompletion(argument, position) {
  const valeursCompletion =
    position === 0 ? autoCompletionArgument0 : autoCompletionArgument1;

  const suggestions = valeursCompletion.filter((valeur) =>
    valeur.startsWith(argument)
  );

  if (suggestions.length === 0) return argument;
  else return suggestions[0];
}

// Change le thème du terminal
function changerTheme(theme) {
  if (isNaN(theme) || Number(theme) < 0 || Number(theme) > 9)
    return reponseTerminal(
      `<p class="terminalOutput"><span class="error">${localisationTextes.themeInexistantErreur[lang]}'${theme}'${localisationTextes.themeEntreErreur[lang]}</span></p>`
    );

  var styleLink = document.getElementById("lienStyle");

  styleLink.href = `styles/theme${theme}.css`;

  return reponseTerminal(
    `<p class="terminalOutput"><span class="comment">${localisationTextes.themeChange[lang]}'${theme}'.</span></p>`
  );
}

// Change la langue du terminal
function changerLangue(langue) {
  if (langue !== "fr" && langue !== "en")
    return reponseTerminal(
      `<p class="terminalOutput"><span class="error">${localisationTextes.changementLangueErreur[lang]}</span></p>`
    );

  lang = langue;

  var welcomeMessage = document.getElementById("welcomeMessage");
  welcomeMessage.innerHTML = localisationTextes.welcomeMessage[lang];

  var helpMessage = document.getElementById("helpMessage");
  helpMessage.innerHTML = localisationTextes.helpMessage[lang];

  return reponseTerminal(
    `<p class="terminalOutput"><span class="comment">${localisationTextes.changementLangue[lang]}'${langue}'.</span></p>`
  );
}

// Ouvre une nouvelle page et affiche le message d'ouverture
function openSocialMedia(socialMedia) {
  if (socialMedia === "instagram") {
    window.open("https://www.instagram.com/vasco.smn/", "_blank");
    reponseTerminal(
      `<p class="terminalOutput">${localisationTextes.ouvertureInstagram[lang]}</p>`
    );
  } else if (socialMedia === "discord") {
    window.open("https://discord.com/users/svasco", "_blank");
    reponseTerminal(
      `<p class="terminalOutput">${localisationTextes.ouvertureDiscord[lang]}</p>`
    );
  } else if (socialMedia === "linkedin") {
    window.open("https://www.linkedin.com/in/vascosemana/", "_blank");
    reponseTerminal(
      `<p class="terminalOutput">${localisationTextes.ouvertureLinkedin[lang]}</p>`
    );
  } else if (socialMedia === "github") {
    window.open("https://github.com/semanavasco", "_blank");
    reponseTerminal(
      `<p class="terminalOutput">${localisationTextes.ouvertureGithub[lang]}</p>`
    );
  }
}

// Ouvre un projet dans une nouvelle fenêtre à l'intérieur de la page web
function ouvrirProjet(projet) {
  switch (projet) {
    case "sololeveling":
      // Création d'une nouvelle fenêtre où afficher le contenu du projet
      var fenetre = document
        .getElementById("page")
        .appendChild(document.createElement("div"));

      fenetre.classList.add("fenetre");

      // Création de la barre de navigation de la fenêtre
      var navigationFenetre = fenetre.appendChild(
        document.createElement("div")
      );
      navigationFenetre.classList.add("navigationFenetre");

      // Création de la zone qui contiendra les informations du projet
      var contenuFenetre = fenetre.appendChild(document.createElement("div"));
      contenuFenetre.classList.add("contenuFenetre");

      // Création du titre de la fenêtre
      var titreFenetre = navigationFenetre.appendChild(
        document.createElement("div")
      );
      titreFenetre.classList.add("titreFenetre");
      titreFenetre.innerHTML = "Bot Discord - Solo Leveling";

      // Création du bouton pour fermer la fenêtre
      var boutonFermer = navigationFenetre.appendChild(
        document.createElement("button")
      );
      boutonFermer.classList.add("boutonFermer");
      boutonFermer.innerHTML = "x";
      boutonFermer.addEventListener("click", () => {
        fenetre.remove();
      });

      // Contrôle du déplacement de la fenêtre avec la souris
      navigationFenetre.addEventListener("mousedown", initiateDrag);

      let isDragging = false;
      let offsetX, offsetY;

      function initiateDrag(e) {
        e.preventDefault();
        isDragging = true;
        offsetX = e.clientX - parseInt(window.getComputedStyle(fenetre).left);
        offsetY = e.clientY - parseInt(window.getComputedStyle(fenetre).top);
        document.addEventListener("mousemove", handleDrag);
        document.addEventListener("mouseup", stopDrag);
        navigationFenetre.style.cursor = "grabbing";
      }

      function handleDrag(e) {
        if (isDragging) {
          const newX = e.clientX - offsetX;
          const newY = e.clientY - offsetY;
          fenetre.style.left = newX + "px";
          fenetre.style.top = newY + "px";
        }
      }

      function stopDrag() {
        isDragging = false;
        document.removeEventListener("mousemove", handleDrag);
        document.removeEventListener("mouseup", stopDrag);
        navigationFenetre.style.cursor = "grab";
      }

      // Ajout du contenu dans la fenêtre du projet
      var contenu = contenuFenetre.appendChild(document.createElement("p"));
      contenu.classList.add("titreProjet");
      contenu.innerHTML =
        '<span class="information">Solo Leveling - Discord RPG</span>';
      contenu.style.fontWeight = "bold";
      contenu.style.fontSize = "1.5em";
      contenu.style.marginTop = "2%";
      contenu.style.marginLeft = "2%";

      contenu = contenuFenetre.appendChild(document.createElement("p"));
      contenu.classList.add("courteDescriptionProjet");
      contenu.innerHTML = `<span class="normalized">${localisationTextes.projetSoloLevelingDescription1[lang]}</span>`;
      contenu.style.marginLeft = "10%";
      contenu.style.marginRight = "10%";

      contenu = contenuFenetre.appendChild(document.createElement("div"));
      contenu.classList.add("technologiesProjet");
      contenu.style.marginTop = "2%";
      contenu.style.marginBottom = "2%";
      contenu.style.display = "flex";
      contenu.style.justifyContent = "space-around";
      contenu.style.alignItems = "center";
      contenu = contenu.appendChild(document.createElement("img"));
      contenu.src = "/assets/images/discord.png";
      contenu.alt = "Discord logo.";
      contenu.style.width = "10%";
      contenu.style.height = "auto";
      contenu = document
        .getElementsByClassName("technologiesProjet")[0]
        .appendChild(document.createElement("img"));
      contenu.src = "/assets/images/nodejs.png";
      contenu.alt = "NodeJS logo.";
      contenu.style.width = "10%";
      contenu.style.height = "auto";

      contenu = contenuFenetre.appendChild(document.createElement("p"));
      contenu.classList.add("sousTitre1Projet");
      contenu.innerHTML = `<span class="question">Développement</span>`;
      contenu.style.fontWeight = "bold";
      contenu.style.fontSize = "1.5em";
      contenu.style.marginLeft = "2%";

      contenu = contenuFenetre.appendChild(document.createElement("p"));
      contenu.classList.add("courteDescriptionProjet");
      contenu.innerHTML = `<span class="normalized">${localisationTextes.projetSoloLevelingDescription2[lang]}</span><br/><span class="normalized">${localisationTextes.projetSoloLevelingDescription3[lang]}</span>`;
      contenu.style.marginLeft = "10%";
      contenu.style.marginRight = "10%";

      contenu = contenuFenetre.appendChild(document.createElement("p"));
      contenu.classList.add("sousTitre2Projet");
      contenu.innerHTML = `<span class="question">Images</span>`;
      contenu.style.fontWeight = "bold";
      contenu.style.fontSize = "1.5em";
      contenu.style.marginLeft = "2%";

      contenu = contenuFenetre.appendChild(document.createElement("p"));
      contenu.classList.add("courteDescriptionProjet");
      contenu.innerHTML = `<span class="normalized">${localisationTextes.projetSoloLevelingDescription4[lang]}</span>`;
      contenu.style.marginLeft = "10%";
      contenu.style.marginRight = "10%";

      contenu = contenuFenetre.appendChild(document.createElement("img"));
      contenu.classList.add("imageProjet");
      contenu.src = "assets/images/sololeveling/personnage.png";
      contenu.alt = "Création du personnage.";
      contenu.style.marginLeft = "10%";
      contenu.style.marginRight = "10%";
      contenu.style.width = "80%";
      contenu.style.height = "auto";

      contenu = contenuFenetre.appendChild(document.createElement("p"));
      contenu.classList.add("courteDescriptionProjet");
      contenu.innerHTML = `<span class="normalized">${localisationTextes.projetSoloLevelingDescription5[lang]}</span>`;
      contenu.style.marginLeft = "10%";
      contenu.style.marginRight = "10%";

      contenu = contenuFenetre.appendChild(document.createElement("img"));
      contenu.classList.add("imageProjet");
      contenu.src = "assets/images/sololeveling/profil.png";
      contenu.alt = "Affichage du profil du joueur.";
      contenu.style.marginLeft = "10%";
      contenu.style.marginRight = "10%";
      contenu.style.width = "80%";
      contenu.style.height = "auto";

      contenu = contenuFenetre.appendChild(document.createElement("p"));
      contenu.classList.add("courteDescriptionProjet");
      contenu.innerHTML = `<span class="normalized">${localisationTextes.projetSoloLevelingDescription6[lang]}</span>`;
      contenu.style.marginLeft = "10%";
      contenu.style.marginRight = "10%";

      contenu = contenuFenetre.appendChild(document.createElement("img"));
      contenu.classList.add("imageProjet");
      contenu.src = "assets/images/sololeveling/inventaire.png";
      contenu.alt = "Affichage de l'inventaire du joueur.";
      contenu.style.marginLeft = "10%";
      contenu.style.marginRight = "10%";
      contenu.style.width = "80%";
      contenu.style.height = "auto";

      contenu = contenuFenetre.appendChild(document.createElement("p"));
      contenu.classList.add("courteDescriptionProjet");
      contenu.innerHTML = `<span class="normalized">${localisationTextes.projetSoloLevelingDescription7[lang]}</span>`;
      contenu.style.marginLeft = "10%";
      contenu.style.marginRight = "10%";

      contenu = contenuFenetre.appendChild(document.createElement("img"));
      contenu.classList.add("imageProjet");
      contenu.src = "assets/images/sololeveling/monnaies.png";
      contenu.alt = "Affichage de la monnaie du joueur.";
      contenu.style.marginLeft = "10%";
      contenu.style.marginRight = "10%";
      contenu.style.width = "80%";
      contenu.style.height = "auto";

      contenu = contenuFenetre.appendChild(document.createElement("p"));
      contenu.classList.add("courteDescriptionProjet");
      contenu.innerHTML = `<span class="normalized">${localisationTextes.projetSoloLevelingDescription8[lang]}</span>`;
      contenu.style.marginLeft = "10%";
      contenu.style.marginRight = "10%";

      contenu = contenuFenetre.appendChild(document.createElement("img"));
      contenu.classList.add("imageProjet");
      contenu.src = "assets/images/sololeveling/groupes.png";
      contenu.alt = "Affichage du groupe du joueur.";
      contenu.style.marginLeft = "10%";
      contenu.style.marginRight = "10%";
      contenu.style.width = "80%";
      contenu.style.height = "auto";

      contenu = contenuFenetre.appendChild(document.createElement("p"));
      contenu.classList.add("courteDescriptionProjet");
      contenu.innerHTML = `<span class="normalized">${localisationTextes.projetSoloLevelingDescription9[lang]}</span>`;
      contenu.style.marginLeft = "10%";
      contenu.style.marginRight = "10%";

      contenu = contenuFenetre.appendChild(document.createElement("video"));
      contenu.classList.add("imageProjet");
      contenu.controls = true;
      contenu.innerHTML = `<source src="assets/images/sololeveling/pnjs.mp4" type="video/mp4">...`;
      contenu.style.marginLeft = "10%";
      contenu.style.marginRight = "10%";
      contenu.style.width = "80%";
      contenu.style.height = "auto";

      contenu = contenuFenetre.appendChild(document.createElement("p"));
      contenu.classList.add("courteDescriptionProjet");
      contenu.innerHTML = `<span class="normalized">${localisationTextes.projetSoloLevelingDescription10[lang]}</span>`;
      contenu.style.marginLeft = "10%";
      contenu.style.marginRight = "10%";

      contenu = contenuFenetre.appendChild(document.createElement("video"));
      contenu.classList.add("imageProjet");
      contenu.controls = true;
      contenu.innerHTML = `<source src="assets/images/sololeveling/echange.mp4" type="video/mp4">...`;
      contenu.style.marginLeft = "10%";
      contenu.style.marginRight = "10%";
      contenu.style.width = "80%";
      contenu.style.height = "auto";

      contenu = contenuFenetre.appendChild(document.createElement("p"));
      contenu.classList.add("courteDescriptionProjet");
      contenu.innerHTML = `<span class="normalized">${localisationTextes.projetSoloLevelingDescription11[lang]}</span>`;
      contenu.style.marginLeft = "10%";
      contenu.style.marginRight = "10%";

      contenu = contenuFenetre.appendChild(document.createElement("img"));
      contenu.classList.add("imageProjet");
      contenu.src = "assets/images/sololeveling/recompenses.png";
      contenu.alt = "Système de récompenses d'activité.";
      contenu.style.marginLeft = "10%";
      contenu.style.marginRight = "10%";
      contenu.style.width = "80%";
      contenu.style.height = "auto";
      break;

    default:
      reponseTerminal(
        `<p>   <span class="error">${localisationTextes.ouvertureProjetInexistantErreur[lang]}'${projet}'${localisationTextes.ouvertureProjetInexistantErreur2[lang]}</span></p>`
      );
      break;
  }
}
