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

export async function run(command, args) {
  if (args.length === 1)
    terminalReply(
      `<p class="terminalOutput">${folders
        .find((folder) => folder.name === currentFolder)
        .ls.join("   ")}</p>`
    );
  else if (
    currentFolder === "~" &&
    folders
      .find((folder) => folder.name === currentFolder)
      .childs.includes(args[1])
  ) {
    terminalReply(
      `<p class="terminalOutput">${folders
        .find((folder) => folder.name === args[1])
        .ls.join("   ")}</p>`
    );
  } else
    terminalReply(
      `<p class="terminalOutput"><span class="error">${error[lang]}</span></p>`
    );

  createNewInputZone();
}
