export const name = "clear";

export const description = {
  fr: "Nettoie le contenu du terminal.",
  en: "Clears the terminal's content.",
};

export const usage = {
  fr: "erreur: mauvaise utilisation de commande; utilisation: clear",
  en: "error: bad command usage; usage: clear",
};

export async function run(command, args) {
  var elements = document.getElementsByClassName("oldLine");

  var elementsArray = Array.from(elements);

  elementsArray.forEach(function (element) {
    element.remove();
  });

  createNewInputZone();
}
