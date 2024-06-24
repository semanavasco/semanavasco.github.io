export const name = "echo";

export const description = {
  fr: "Écrit un message dans le terminal.",
  en: "Prints a message in the terminal.",
};

export const usage = {
  fr: "erreur: mauvaise utilisation de commande; utilisez 'echo \"votre phrase\"' à la place",
  en: "error: wrong command usage; use 'echo \"your sentence\"' instead",
};

/**
 * Executes the command.
 * @param {string[]} args
 * @param {string} content
 */
export async function execute(args, content) {
  if (args.length === 0) return createResponse(usage[language], "error");

  let echoText = content.match(/'(.*?)'/)
    ? content.match(/'(.*?)'/)
    : content.match(/"(.*?)"/);

  if (echoText === null) return createResponse(usage[language], "error");

  createResponse(echoText[1], "normalized");
}
