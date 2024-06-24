export const name = "ls";

export const description = {
  fr: "Fournit une liste du contenu du répertoire spécifié.",
  en: "Provides a listing of the contents of the specified directory.",
};

export const usage = {
  fr: "erreur: mauvaise utilisation de commande; utilisez 'ls' à la place",
  en: "error: bad command usage; use 'ls' instead",
};

export const error = {
  fr: "erreur: le répertoire spécifié n'existe pas",
  en: "error: the specified directory does not exist",
};

/**
 * Executes the command.
 * @param {string[]} args
 * @param {string} content
 */
export async function execute(args, content) {
  let path = currentDir;

  if (args.length > 0) path = args[0];

  const directory =
    directories.find((dir) => dir.name === path) ||
    directories.find((dir) => dir.terminal === path);

  if (directory === undefined) return createResponse(error[language], "error");

  createResponse(
    directory.children
      .map((dir) => `${dir.replace("/home/visitor/", "")}   `)
      .toString()
      .replaceAll(",", ""),
    "comment"
  );
}
