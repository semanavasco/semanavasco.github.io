var oui = document.getElementById("oui");
var non = document.getElementById("non");
var erreur = document.getElementById("erreur");
var titre = document.getElementById("titre");
var img = document.getElementById("img");

var erreurs = [
  "Faut appuyer sur oui.",
  "Appuie sur oui.",
  "Arrête, appuie sur oui.",
  "À quoi tu joues, appuie sur oui.",
  "Mais, appuie sur oui.",
  "T'es sérieuse ? Réessaye.",
  "Je suis sûr que tu t'es trompé de bouton.",
  "Je rigole pas, appuie sur oui.",
];

var nombreNons = 0;

oui.addEventListener("click", ouiClick);

function ouiClick() {
  oui.remove();
  non.remove();
  img.remove();
  erreur.remove();

  if (nombreNons === 0)
    titre.textContent = "❤️ Très bien. Go au resto ce soir alors. ❤️";
  else
    titre.textContent =
      "Bah moi non... T'as quand même appuyé " +
      nombreNons +
      " fois sur non...";
}

non.addEventListener("click", nonClick);

function nonClick() {
  erreur.textContent = erreurs[Math.floor(Math.random() * erreurs.length)];

  non.style.position = "absolute";

  var i = Math.floor(Math.random() * window.innerWidth) + 1;
  var j = Math.floor(Math.random() * window.innerHeight) + 1;

  non.style.left = i + "px";
  non.style.top = j + "px";

  nombreNons++;
}
