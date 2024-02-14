export const name = "project";

export const description = {
  fr: "Ouvre un projet spécifié dans une nouvelle fenêtre.",
  en: "Opens a specified project in a new window.",
};

export const usableArgs = ["sololeveling"];

export const usage = {
  fr: "erreur: mauvaise utilisation de commande; utilisez 'project [sololeveling]' à la place",
  en: "error: bad command usage; use 'project [sololeveling]' instead",
};

export async function run(command, args) {
  if (args.length === 1 || !usableArgs.includes(args[1])) {
    terminalReply(
      `<p class="terminalOutput"><span class="error">${usage[lang]}</span></p>`
    );
  } else {
    switch (args[1]) {
      case "sololeveling":
        terminalReply(
          `<p class="terminalOutput"><span class="comment">Soon.../Bientôt...</span></p>`
        );
        break;
    }
  }

  createNewInputZone();
}
