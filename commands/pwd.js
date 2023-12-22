export const name = "pwd";

export const description = {
  fr: "Affiche le chemin du répertoire courant dans le système de fichiers.",
  en: "Shows you the path of the current directory you are in within the file system.",
};

export const usage = {
  fr: "erreur: mauvaise utilisation de commande; utilisation: pwd",
  en: "error: bad command usage; usage: pwd",
};

export async function run(command, args) {
  terminalReply(
    `<p class="terminalOutput"><span class="comment">${
      folders.find((folder) => folder.name === currentFolder).pwd
    }</span>
   </p>`
  );

  createNewInputZone();
}
