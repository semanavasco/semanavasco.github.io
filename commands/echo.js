export const name = "echo";

export const description = {
  fr: "Écrit un message dans le terminal.",
  en: "Prints a message in the terminal.",
};

export const usage = {
  fr: "erreur: mauvaise utilisation de commande; utilisez 'echo \"votre phrase\"' à la place",
  en: "error: wrong command usage; use 'echo \"your sentence\"' instead",
};

export async function run(command, args) {
  if (args.length === 1)
    terminalReply(
      `<p class="terminalOutput"><span class="error">${usage[lang]}</span></p>`
    );
  else {
    var echoText = command.match(/'(.*?)'/)
      ? command.match(/'(.*?)'/)
      : command.match(/"(.*?)"/);

    if (echoText && echoText.length > 1) {
      terminalReply(
        `<p class="terminalOutput"><span class="normalized">${echoText[1]}</span></p>`
      );
    } else
      terminalReply(
        `<p class="terminalOutput"><span class="error">${usage[lang]}</span></p>`
      );
  }

  createNewInputZone();
}
