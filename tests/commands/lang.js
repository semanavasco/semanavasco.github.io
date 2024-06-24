export const name = "lang";

export const description = {
  fr: "Change la langue du terminal.",
  en: "Changes the language of the terminal.",
};

export const usableArgs = ["fr", "en"];

export const usage = {
  fr: "erreur: mauvaise utilisation de commande; utilisez 'lang [fr/en]' à la place",
  en: "error: bad command usage; use 'lang [fr/en]' instead",
};

export const success = {
  fr: "langue changée en: ",
  en: "language changed to: ",
};

/**
 * Executes the command.
 * @param {string[]} args
 * @param {string} content
 */
export async function execute(args, content) {
  if (args.length === 0 || !usableArgs.includes(args[0]))
    return createResponse(usage[language], "error");

  language = args[0];

  const welcomeMessage = document.getElementById("welcomeMessage");
  if (welcomeMessage)
    welcomeMessage.innerHTML = locales.welcomeMessage[language];

  const helpMessage = document.getElementById("helpMessage");
  if (helpMessage) helpMessage.innerHTML = locales.helpMessage[language];

  createResponse(`${success[language]}'${args[0]}'`, "comment");
}
