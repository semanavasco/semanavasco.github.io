export const name = "help";

export const description = {
  fr: "Il semblerait que vous sachiez déjà ce que cela fait.",
  en: "It seems like you already know what this does.",
};

export const usage = {
  fr: "erreur: mauvaise utilisation de commande; utilisation: help",
  en: "error: bad command usage; usage: help",
};

/**
 * Executes the command.
 * @param {string[]} args
 * @param {string} content
 */
export async function execute(args, content) {
  let helpText = "";

  for (const command of commandList) {
    const commandInfos = await import(`../commands/${command}.js`);

    helpText += `<span class="comment">${command}</span>${" ".repeat(
      15 - command.length
    )}<span class="question">${commandInfos.description[language]}</span><br/>`;
  }

  const terminalReply = document
    .getElementById("terminal")
    .appendChild(document.createElement("div"));

  terminalReply.classList.add("terminalLines", "oldLine");

  terminalReply.innerHTML = `<p class="terminalOutput">${helpText}</p>`;
}
