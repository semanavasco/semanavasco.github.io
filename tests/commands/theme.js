export const name = "theme";

export const description = {
  fr: "Change l'apparence du terminal.",
  en: "Changes the look of the terminal.",
};

export const usableArgs = ["0", "1", "2"];

export const usage = {
  fr: "erreur: mauvaise utilisation de commande; utilisez 'theme [0-2]' à la place",
  en: "error: bad command usage; use 'theme [0-2]' instead",
};

export const success = {
  fr: "nouveau thème appliqué avec succès: thème ",
  en: "new theme successfully set: theme ",
};

/**
 * Executes the command.
 * @param {string[]} args
 * @param {string} content
 */
export async function execute(args, content) {
  if (args.length === 0 || !usableArgs.includes(args[1]))
    return createResponse(usage[language], "error");

  const styleLink = document.getElementById("styleLink");

  styleLink.href = `styles/theme${args[0]}.css`;

  createResponse(`${success[lang]}'${args[1]}'`, "comment");
}
