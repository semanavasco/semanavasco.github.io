export const name = "help";

export const description = {
  fr: "Nettoie le terminal pour retrouver son apparence d'origine.",
  en: "Cleans the terminal to get back to its original appearance.",
};

export const usage = {
  fr: "erreur: mauvaise utilisation de commande; utilisation: banner",
  en: "error: bad command usage; usage: banner",
};

export async function execute(args, content) {
  const lines = document.querySelectorAll(".oldLine");

  lines.forEach((line) => line.remove());

  const terminal = document.getElementById("terminal");

  const logoMessage = terminal.appendChild(document.createElement("h1"));
  logoMessage.id = "logoMessage";
  logoMessage.classList.add("terminalLines", "oldLine");
  logoMessage.innerHTML =
    "░██████╗███████╗███╗░░░███╗░█████╗░███╗░░██╗░█████╗░<br />██╔════╝██╔════╝████╗░████║██╔══██╗████╗░██║██╔══██╗<br />╚█████╗░█████╗░░██╔████╔██║███████║██╔██╗██║███████║<br />░╚═══██╗██╔══╝░░██║╚██╔╝██║██╔══██║██║╚████║██╔══██║<br />██████╔╝███████╗██║░╚═╝░██║██║░░██║██║░╚███║██║░░██║<br />╚═════╝░╚══════╝╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝<br />━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━";

  const welcomeMessage = terminal.appendChild(document.createElement("p"));
  welcomeMessage.id = "welcomeMessage";
  welcomeMessage.classList.add("terminalLines", "oldLine");
  welcomeMessage.innerHTML = locales.welcomeMessage[language];

  const helpMessage = terminal.appendChild(document.createElement("p"));
  helpMessage.id = "helpMessage";
  helpMessage.classList.add("terminalLines", "oldLine");
  helpMessage.innerHTML = locales.helpMessage[language];
}
