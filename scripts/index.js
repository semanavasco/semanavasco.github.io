var dossierActuel = "~";

var correspondanceDossiers = [
  {
    dossierActuel: "~",
    dossierPWD: "/home/visitor",
    sousDossiers: ["AboutMe", "Studies", "Projects", "Ideas", "SocialMedia"],
  },
];

// Trouver le div terminal
var terminal = document.getElementById("terminal");

// Créer la mise en page principale
var logo = terminal.appendChild(document.createElement("h1"));
logo.insertAdjacentHTML(
  "beforeend",
  "░██████╗███████╗███╗░░░███╗░█████╗░███╗░░██╗░█████╗░<br />██╔════╝██╔════╝████╗░████║██╔══██╗████╗░██║██╔══██╗<br />╚█████╗░█████╗░░██╔████╔██║███████║██╔██╗██║███████║<br />░╚═══██╗██╔══╝░░██║╚██╔╝██║██╔══██║██║╚████║██╔══██║<br />██████╔╝███████╗██║░╚═╝░██║██║░░██║██║░╚███║██║░░██║<br />╚═════╝░╚══════╝╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝<br />━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
);
logo.className = "ancienneLigne";

var welcome = terminal.appendChild(document.createElement("p"));
welcome.insertAdjacentHTML(
  "beforeend",
  `Welcome to the <span class="information">terminal portfolio</span>, presented by <span class="information">svasco</span>.`
);
welcome.className = "ancienneLigne";

var help = terminal.appendChild(document.createElement("p"));
help.insertAdjacentHTML(
  "beforeend",
  `Use <span class=\"important\">'help'</span> to get a list of the available commands.`
);
help.className = "ancienneLigne";

// Créer un nouveau paragraphe dans le terminal
var paragraphe = terminal.appendChild(document.createElement("p"));
paragraphe.className = "lignes";
paragraphe.insertAdjacentHTML(
  "beforeend",
  `<span class="information">visitor@semanavasco</span><span class="normalized">:</span><span class="comment">${dossierActuel}</span><span class="information">$ </span> `
);

// Ajouter un écouteur d'événement pour détecter les touches du clavier
document.addEventListener("keydown", function (event) {
  // La propriété "key" de l'objet event contient la valeur de la touche pressée
  var toucheAppuyee = event.key;

  if (toucheAppuyee === "Enter") {
    if (
      paragraphe.innerHTML
        .replace(
          `<span class="information">visitor@semanavasco</span><span class="normalized">:</span><span class="comment">${dossierActuel}</span><span class="information">$ </span>`,
          ""
        )
        .trim().length === 0
    ) {
      // Déplacer l'ancien paragraphe dans une nouvelle classe
      paragraphe.className = "ancienneLigne";

      // Créer un nouveau paragraphe dans le terminal
      paragraphe = terminal.appendChild(document.createElement("p"));

      paragraphe.className = "lignes";

      paragraphe.insertAdjacentHTML(
        "beforeend",
        `<span class="information">visitor@semanavasco</span><span class="normalized">:</span><span class="comment">${dossierActuel}</span><span class="information">$ </span> `
      );
    } else {
      switch (
        paragraphe.innerHTML.replace(
          `<span class="information">visitor@semanavasco</span><span class="normalized">:</span><span class="comment">${dossierActuel}</span><span class="information">$ </span> `,
          ""
        )
      ) {
        case "help":
          // Déplacer l'ancien paragraphe dans une nouvelle classe
          paragraphe.className = "ancienneLigne";

          // Créer un nouveau paragraphe dans le terminal
          paragraphe = terminal.appendChild(document.createElement("p"));

          paragraphe.className = "lignes";

          paragraphe.insertAdjacentHTML(
            "beforeend",
            `<p>
                   <span class="comment">help</span>           <span class="question">It seems like you already know what this does.</span><br/>
                   <span class="comment">pwd</span>            <span class="question">Shows you the path of the current directory you are in within the file system.</span><br/>
                   <span class="comment">ls</span>             <span class="question">Provides a listing of the contents of the specified directory.</span><br/>
                   <span class="comment">cd</span>             <span class="question">Changes your current working directory to the specified directory.</span><br/>
                   <span class="comment">clear</span>          <span class="question">Removes all previous commands and output from the terminal.</span><br/>
            </p>`
          );

          // Déplacer l'ancien paragraphe dans une nouvelle classe
          paragraphe.className = "ancienneLigne";

          // Créer un nouveau paragraphe dans le terminal
          paragraphe = terminal.appendChild(document.createElement("p"));

          paragraphe.className = "lignes";

          paragraphe.insertAdjacentHTML(
            "beforeend",
            `<span class="information">visitor@semanavasco</span><span class="normalized">:</span><span class="comment">${dossierActuel}</span><span class="information">$ </span> `
          );
          break;

        case "pwd":
          // Déplacer l'ancien paragraphe dans une nouvelle classe
          paragraphe.className = "ancienneLigne";

          // Créer un nouveau paragraphe dans le terminal
          paragraphe = terminal.appendChild(document.createElement("p"));

          paragraphe.className = "lignes";

          paragraphe.insertAdjacentHTML(
            "beforeend",
            `<p>
                   <span class="comment">${
                correspondanceDossiers.find(
                  (val) => val.dossierActuel === dossierActuel
                ).dossierPWD
              }</span>
            </p>`
          );

          // Déplacer l'ancien paragraphe dans une nouvelle classe
          paragraphe.className = "ancienneLigne";

          // Créer un nouveau paragraphe dans le terminal
          paragraphe = terminal.appendChild(document.createElement("p"));

          paragraphe.className = "lignes";

          paragraphe.insertAdjacentHTML(
            "beforeend",
            `<span class="information">visitor@semanavasco</span><span class="normalized">:</span><span class="comment">${dossierActuel}</span><span class="information">$ </span> `
          );
          break;

        case "ls":
          // Déplacer l'ancien paragraphe dans une nouvelle classe
          paragraphe.className = "ancienneLigne";

          // Créer un nouveau paragraphe dans le terminal
          paragraphe = terminal.appendChild(document.createElement("p"));

          paragraphe.className = "lignes";

          paragraphe.insertAdjacentHTML(
            "beforeend",
            `<p><span class="question">   ${correspondanceDossiers.find(val => val.dossierActuel === dossierActuel).sousDossiers.join("   ")}</span></p>`
          );

          // Déplacer l'ancien paragraphe dans une nouvelle classe
          paragraphe.className = "ancienneLigne";

          // Créer un nouveau paragraphe dans le terminal
          paragraphe = terminal.appendChild(document.createElement("p"));

          paragraphe.className = "lignes";

          paragraphe.insertAdjacentHTML(
            "beforeend",
            `<span class="information">visitor@semanavasco</span><span class="normalized">:</span><span class="comment">${dossierActuel}</span><span class="information">$ </span> `
          );
          break;

        case "cd":
          break;

        case "clear":
          // Déplacer l'ancien paragraphe dans une nouvelle classe
          paragraphe.className = "ancienneLigne";

          // Créer un nouveau paragraphe dans le terminal
          paragraphe = terminal.appendChild(document.createElement("p"));

          paragraphe.className = "lignes";

          paragraphe.insertAdjacentHTML(
            "beforeend",
            `<span class="information">visitor@semanavasco</span><span class="normalized">:</span><span class="comment">${dossierActuel}</span><span class="information">$ </span> `
          );

          // Sélectionner tous les éléments avec la classe "ancienneLigne"
          var elements = document.getElementsByClassName("ancienneLigne");

          // Convertir la collection d'éléments en un tableau
          var elementsArray = Array.from(elements);

          // Supprimer chaque élément du tableau
          elementsArray.forEach(function (element) {
            element.remove();
          });
          break;
      }
    }
  } else if (toucheAppuyee === "Backspace") {
    paragraphe.innerHTML = paragraphe.innerHTML.slice(0, -1);
  } else if (toucheAppuyee.length > 1) {
    return;
  } else {
    if (toucheAppuyee === " ") toucheAppuyee = " ";
    paragraphe.insertAdjacentHTML("beforeend", toucheAppuyee);
  }
});
