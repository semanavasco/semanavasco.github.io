export const name = "bash";

export const description = {
  fr: "Exécute un script bash spécifié.",
  en: "Executes a specified bash script.",
};

export const usage = {
  fr: "erreur: mauvaise utilisation de commande; utilisez 'bash fichier.sh' à la place",
  en: "error: bad command usage; use 'bash file.sh' instead",
};

export const error = {
  fr: "erreur: le fichier spécifié n'existe pas",
  en: "error: the specified file does not exist",
};

export const bashScripts = {
  "instagram.sh": {
    fr: "Ouverture d'Instagram...",
    en: "Opening Instagram...",
  },
  "discord.sh": {
    fr: "Ouverture de Discord...",
    en: "Opening Discord...",
  },
  "linkedin.sh": {
    fr: "Ouverture de LinkedIn...",
    en: "Opening LinkedIn...",
  },
  "github.sh": {
    fr: "Ouverture de Github...",
    en: "Opening Github...",
  },
};

export async function run(command, args) {
  if (args.length === 1)
    terminalReply(
      `<p class="terminalOutput"><span class="error">${usage[lang]}</span></p>`
    );
  else if (
    folders
      .find((folder) => folder.name === currentFolder)
      .childs.includes(args[1]) &&
    args[1].endsWith(".sh")
  ) {
    eval(folders.find((folder) => folder.name === args[1]).bash);
    terminalReply(
      `<p class="terminalOutput"><span class="normalized">${
        bashScripts[args[1]][lang]
      }</span></p>`
    );
  } else if (
    args[1].includes("/") &&
    folders
      .find((folder) => folder.name === args[1].split("/")[0])
      .childs.includes(args[1].split("/")[1]) &&
    args[1].split("/")[1].endsWith(".sh")
  ) {
    eval(folders.find((folder) => folder.name === args[1].split("/")[1]).bash);
    terminalReply(
      `<p class="terminalOutput"><span class="normalized">${
        bashScripts[args[1].split("/")[1]][lang]
      }</span></p>`
    );
  } else
    terminalReply(
      `<p class="terminalOutput"><span class="error">${error[lang]}</span></p>`
    );

  createNewInputZone();
}
