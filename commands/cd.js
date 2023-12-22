export const name = "cd";

export const description = {
  fr: "Change votre répertoire de travail courant vers le répertoire spécifié.",
  en: "Changes your current working directory to the specified directory.",
};

export const usage = {
  fr: "erreur: mauvaise utilisation de commande; utilisation: cd",
  en: "error: bad command usage; usage: cd",
};

export const error = {
  fr: "erreur: le répertoire spécifié n'existe pas",
  en: "error: the specified directory does not exist",
};

export async function run(command, args) {
  if (args.length === 1 || args[1] === "") currentFolder = "~";
  else if (
    currentFolder === "~" &&
    folders
      .find((folder) => folder.name === currentFolder)
      .childs.includes(args[1])
  )
    currentFolder = args[1];
  else if (args[1] === ".." && currentFolder !== "~") {
    currentFolder = "~";
  } else
    terminalReply(
      `<p class="terminalOutput"><span class="error">${error[lang]}</span></p>`
    );

  createNewInputZone();
}
