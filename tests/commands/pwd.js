export const name = "pwd";

export const description = {
  fr: "Affiche le chemin du répertoire courant dans le système de fichiers.",
  en: "Shows you the path of the current directory you are in within the file system.",
};

export const usage = {
  fr: "erreur: mauvaise utilisation de commande; utilisation: pwd",
  en: "error: bad command usage; usage: pwd",
};

/**
 * Executes the command.
 * @param {string[]} args
 * @param {string} content
 */
export async function execute(args, content) {
  createResponse(currentDir.replace("~", "/home/visitor"), "comment");
}
