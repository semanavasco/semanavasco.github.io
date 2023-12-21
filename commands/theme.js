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

export async function run(comamnd, args) {
  if (args.length === 1 || !usableArgs.includes(args[1])) {
    terminalReply(
      `<p class="terminalOutput"><span class="error">${usage[lang]}</span></p>`
    );
  } else {
    var styleLink = document.getElementById("lienStyle");

    styleLink.href = `styles/theme${args[1]}.css`;

    terminalReply(
      `<p class="terminalOutput"><span class="comment">${success[lang]}'${args[1]}'</span></p>`
    );
  }

  createNewInputZone();
}
