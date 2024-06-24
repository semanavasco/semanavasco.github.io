export const name = "clear";

export const description = {
  fr: "Nettoie le contenu du terminal.",
  en: "Clears the terminal's content.",
};

export const usage = {
  fr: "erreur: mauvaise utilisation de commande; utilisation: clear",
  en: "error: bad command usage; usage: clear",
};

/**
 * Executes the command.
 * @param {string[]} args
 * @param {string} content
 */
export async function execute(args, content) {
  const lines = document.querySelectorAll(".oldLine");

  lines.forEach((line) => line.remove());
}
