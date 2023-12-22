export const name = "help";

export const description = {
  fr: "Il semblerait que vous sachiez déjà ce que cela fait.",
  en: "It seems like you already know what this does.",
};

export const usage = {
  fr: "erreur: mauvaise utilisation de commande; utilisation: help",
  en: "error: bad command usage; usage: help",
};

export async function run(command, args) {
  var helpText = "";

  for (const cmd of commandList) {
    let cmdInfos = await import(`../commands/${cmd}.js`);

    helpText += `<span class="comment">${cmd}</span>${" ".repeat(
      15 - cmd.length
    )}<span class="question">${cmdInfos.description[lang]}</span><br/>`;
  }

  terminalReply(`<p class="terminalOutput">${helpText}</p>`);

  createNewInputZone();
}
