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

export async function run(command, args) {
  if (args.length === 1 || !usableArgs.includes(args[1])) {
    terminalReply(
      `<p class="terminalOutput"><span class="error">${usage[lang]}</span></p>`
    );
  } else {
    lang = args[1];

    var welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.innerHTML = textsLocalization.welcomeMessage[lang];

    var helpMessage = document.getElementById("helpMessage");
    helpMessage.innerHTML = textsLocalization.helpMessage[lang];

    terminalReply(
      `<p class="terminalOutput"><span class="comment">${success[lang]}'${args[1]}'</span></p>`
    );
  }

  createNewInputZone();
}
