// Envoie une nouvelle ligne dans le terminal avec la réponse spécifiée
function reponseTerminal(reponse) {
  var reponseTerminal = document
    .getElementById("terminal")
    .appendChild(document.createElement("div"));

  reponseTerminal.classList.add("lignes");
  reponseTerminal.classList.add("ancienneLigne");

  reponseTerminal.innerHTML = reponse;
}

// Change le thème du terminal
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

// Change la langue du terminal
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
      contenu.innerHTML = "<span class=\"normalized\">Solo Leveling - RPG Discord</span>";
      
      break;
  }
}
