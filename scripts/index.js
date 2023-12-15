var dossierActuel = "~";

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
    ancienneLigne.innerHTML = `<p><span class="information">visitor@semanavasco</span><span class="normalized">:</span><span class="comment">${
      dossiers.find((dossier) => dossier.name === dossierActuel).terminal
    }</span><span class="information">$</span> </p>
         <p>${commande}</p>`;

    // Séparer la commande en arguments
    var arguments = commande.split(" ");

    // Vérifier la commande
    if (arguments[0] === "help") {
      if (arguments.length > 1)
        reponseTerminal(
          `<p>   <span class="error">error: "help" command does not take any argument</span></p>`
        );
      else
        reponseTerminal(
          `<p>
           <span class="comment">help</span>           <span class="question">It seems like you already know what this does.</span><br/>
           <span class="comment">pwd</span>            <span class="question">Shows you the path of the current directory you are in within the file system.</span><br/>
           <span class="comment">ls</span>             <span class="question">Provides a listing of the contents of the specified directory.</span><br/>
           <span class="comment">cd</span>             <span class="question">Changes your current working directory to the specified directory.</span><br/>
           <span class="comment">clear</span>          <span class="question">Removes all previous commands and output from the terminal.</span><br/>
       </p>`
        );
    } else if (arguments[0] === "ls") {
      if (arguments.length === 1)
        reponseTerminal(
          `<p>   ${dossiers
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
          `<p>   ${dossiers
            .find((dossier) => dossier.name === arguments[1])
            .ls.join("   ")}</p>`
        );
      } else
        reponseTerminal(
          `<p>   <span class="error">error: folder "${arguments[1]}" does not exist</span></p>`
        );
    } else if (arguments[0] === "cd") {
      if (arguments.length === 1) dossierActuel = "~";
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
          `<p>   <span class="error">error: folder "${arguments[1]}" does not exist</span></p>`
        );
    } else if (arguments[0] === "clear") {
      // Sélectionner tous les éléments avec la classe "ancienneLigne"
      var elements = document.getElementsByClassName("ancienneLigne");

      // Convertir la collection d'éléments en un tableau
      var elementsArray = Array.from(elements);

      // Supprimer chaque élément du tableau
      elementsArray.forEach(function (element) {
        element.remove();
      });
    } else if (arguments[0] === "pwd") {
      reponseTerminal(
        `<p>
         <span class="comment">${
        dossiers.find((dossier) => dossier.name === dossierActuel).pwd
      }</span>
     </p>`
      );
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

    ligneActuelle.innerHTML = `<p><span class="information">visitor@semanavasco</span><span class="normalized">:</span><span class="comment">${
      dossiers.find((dossier) => dossier.name === dossierActuel).terminal
    }</span><span class="information">$</span> </p>
         <input type="text" name="zonetexte" id="zonetexte" maxlength="100" autofocus>`;

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
