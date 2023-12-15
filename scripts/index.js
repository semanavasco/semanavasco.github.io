var dossierActuel = "~";

var dossiers = [
  {
    name: "~",
    pwd: "/home/visitor",
    type: "folder",
    content: [
      {
        name: "AboutMe",
        pwd: "/home/visitor/AboutMe",
        type: "folder",
        content: [
          {
            name: "AboutMe.txt",
            type: "file",
            content:
              "Hello, my name is Semana Vasco. I am a 20 year old student from the Netherlands. I am currently studying Computer Science at the University of Amsterdam. I am a very curious person and I love to learn new things. I am also very passionate about programming and I am always looking for new challenges.",
          },
        ],
      },
      {
        name: "Studies",
        pwd: "/home/visitor/Studies",
        type: "folder",
        content: [
          {
            name: "Studies.txt",
            type: "file",
            content:
              "I am currently studying Computer Science at the University of Amsterdam. I am in my second year of the Bachelor's programme and I am really enjoying it so far. I am also currently doing a minor in Artificial Intelligence.",
          },
        ],
      },
      {
        name: "Projects",
        pwd: "/home/visitor/Projects",
        type: "folder",
        content: [
          {
            name: "Projects.txt",
            type: "file",
            content: "I am currently working on a project called 'The Terminal'.",
          },
        ],
      },
      {
        name: "Ideas",
        pwd: "/home/visitor/Ideas",
        type: "folder",
        content: [
          {
            name: "Ideas.txt",
            type: "file",
            content:
              "I have a lot of ideas for projects that I want to work on. I am currently working on a project called 'The Terminal'.",
          },
        ],
      },
      {
        name: "SocialMedia",
        pwd: "/home/visitor/SocialMedia",
        type: "folder",
        content: [
          {
            name: "SocialMedia.txt",
            type: "file",
            content:
              "I am currently active on Instagram and LinkedIn. You can find my social media accounts in the footer of this website.",
          },
        ],
      },
    ],
  }
]

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

  if (toucheAppuyee === "Enter") {
    // Obtenir la valeur de la commande
    var commande = document.getElementById("zonetexte").value;

    // Créer un élément HTML <div>
    var ancienneLigne = document
      .getElementById("terminal")
      .appendChild(document.createElement("div"));
    ancienneLigne.classList.add("lignes");
    ancienneLigne.classList.add("ancienneLigne");
    ancienneLigne.innerHTML = `<p><span class="information">visitor@semanavasco</span><span class="normalized">:</span><span class="comment">${dossierActuel}</span><span class="information">$</span> </p>
         <p>${commande}</p>`;

    // Vérifier la commande
    if (commande === "help") {
      reponseTerminal(
        `<p>
           <span class="comment">help</span>           <span class="question">It seems like you already know what this does.</span><br/>
           <span class="comment">pwd</span>            <span class="question">Shows you the path of the current directory you are in within the file system.</span><br/>
           <span class="comment">ls</span>             <span class="question">Provides a listing of the contents of the specified directory.</span><br/>
           <span class="comment">cd</span>             <span class="question">Changes your current working directory to the specified directory.</span><br/>
           <span class="comment">clear</span>          <span class="question">Removes all previous commands and output from the terminal.</span><br/>
       </p>`
      );
    }
    if (commande === "ls") {
      if (dossierActuel === "~")
        reponseTerminal(
          `<p>
           <span class="question">AboutMe</span>   <span class="question">Studies</span>   <span class="question">Projects</span>   <span class="question">Ideas</span>   <span class="question">SocialMedia</span>
       </p>`
        );
    } else if (commande === "cd") {
      reponseTerminal(
        `<p>
           <span class="error">error: "cd" command needs a parameter</span>
       </p>`
      );
    } else if (commande === "clear") {
      // Sélectionner tous les éléments avec la classe "ancienneLigne"
      var elements = document.getElementsByClassName("ancienneLigne");

      // Convertir la collection d'éléments en un tableau
      var elementsArray = Array.from(elements);

      // Supprimer chaque élément du tableau
      elementsArray.forEach(function (element) {
        element.remove();
      });
    } else if (commande.trim().length >= 1) {
      reponseTerminal(
        `<p>   <span class="error">error: "${commande}" command not found</span></p>`
      );
    }

    var ligneActuelle = document.getElementsByClassName("ligneActuelle")[0];
    ligneActuelle.remove();

    ligneActuelle = document
      .getElementById("terminal")
      .appendChild(document.createElement("div"));

    ligneActuelle.classList.add("lignes");
    ligneActuelle.classList.add("ligneActuelle");

    ligneActuelle.innerHTML = `<p><span class="information">visitor@semanavasco</span><span class="normalized">:</span><span class="comment">${dossierActuel}</span><span class="information">$</span> </p>
         <input type="text" name="zonetexte" id="zonetexte" autofocus>`;

    var zoneTexte = document.getElementById("zonetexte");

    zoneTexte.focus();
  }
});

function reponseTerminal(reponse) {
  var reponseTerminal = document
    .getElementById("terminal")
    .appendChild(document.createElement("div"));

  reponseTerminal.classList.add("lignes");
  reponseTerminal.classList.add("ancienneLigne");

  reponseTerminal.innerHTML = reponse;
}
