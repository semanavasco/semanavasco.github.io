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
      contenu.classList.add("titreProjet");
      contenu.innerHTML =
        '<span class="information">Solo Leveling - Discord RPG</span>';
      contenu.style.fontWeight = "bold";
      contenu.style.fontSize = "1.5em";
      contenu.style.marginTop = "2%";
      contenu.style.marginLeft = "2%";

      contenu = contenuFenetre.appendChild(document.createElement("p"));
      contenu.classList.add("courteDescriptionProjet");
      contenu.innerHTML = `<span class="normalized">Le projet Solo Leveling consistait à créer un Bot Discord de type RPG basé sur le manhwa Solo Leveling. Celui-ci offrait la possiblité de créer un personnage, l'équiper avec plus de 500 pièces d'équipement pour affronter des ennemis avec nos amis.</span>`;
      contenu.style.marginLeft = "10%";
      contenu.style.marginRight = "10%";

      contenu = contenuFenetre.appendChild(document.createElement("p"));
      contenu.classList.add("sousTitre1Projet");
      contenu.innerHTML = `<span class="question">Développement</span>`;
      contenu.style.fontWeight = "bold";
      contenu.style.fontSize = "1.5em";
      contenu.style.marginLeft = "2%";

      contenu = contenuFenetre.appendChild(document.createElement("p"));
      contenu.classList.add("courteDescriptionProjet");
      contenu.innerHTML = `<span class="normalized">- C'est un projet développé en JavaScript à l'aide de la librairie Discord.JS.</span><br/><span class="normalized">- Je l'ai développé entièrement seul et l'ai recommencé plusieurs fois au fûr et à mesure que j'apprenais de nouvelles choses.</span>`;
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
      contenu.innerHTML = `<span class="normalized">- Retour lors de la création du personnage récapitulant toutes les informations de celui-ci (classe, métier, etc).</span>`;
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
      contenu.innerHTML = `<span class="normalized">- Affichage du profil du joueur avec la commande /profil. Les barres de vie, mana et exp sont réactives.</span>`;
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
      contenu.innerHTML = `<span class="normalized">- Affichage de l'inventaire du joueur avec la commande /inventaire, celui-ci se mets à jour automatiquement lorsque le joueur déséquipe/équipe un item avec /déséquiper ou /équiper.</span>`;
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
      contenu.innerHTML = `<span class="normalized">- Affichage de la monnaie (ayant une vraie valeur économique, elle permet d'acheter des items, appartements, etc) du joueur ainsi que la quantité de cristaux (matériau d'amélioration) possédés.</span>`;
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
      contenu.innerHTML = `<span class="normalized">- Affichage du groupe du joueur avec la commande /groupe. Ce groupe permets aux joueurs d'automatiquement partager les récompenses entre eux lors des affrontements.</span>`;
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
      contenu.innerHTML = `<span class="normalized">- Système d'intéractions avec  des PNJs (personnages non joueurs), ayant chacun des dialogues et possiblités différentes. Plus de 50 PNJs ont été créés, cela englobe leur histoire, leur caractère, leurs dialogues, etc.</span>`;
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
      contenu.innerHTML = `<span class="normalized">- Système d'échange entre joueurs et de gestion de l'inventaire en permettant aux joueurs de lâcher des objets dans la carte.</span>`;
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
      contenu.innerHTML = `<span class="normalized">- Un système de récompenses basé sur l'activité du joueur et proposant une version payante (mais pouvant être obtenue gratuitement par la complétion de certaines quêtes).</span>`;
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
