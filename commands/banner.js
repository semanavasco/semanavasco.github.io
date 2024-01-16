export const name = "help";

export const description = {
  fr: "Nettoie le terminal pour retrouver son apparence d'origine.",
  en: "Cleans the terminal to get back to its original appearance.",
};

export const usage = {
  fr: "erreur: mauvaise utilisation de commande; utilisation: banner",
  en: "error: bad command usage; usage: banner",
};

export async function run(command, args) {
  var elements = document.getElementsByClassName("oldLine");

  var elementsArray = Array.from(elements);

  elementsArray.forEach(function (element) {
    element.remove();
  });

  let terminal = document.getElementById("terminal");

  let logoMessage = terminal.appendChild(document.createElement("h1"));
  logoMessage.id = "logoMessage";
  logoMessage.classList.add("terminalLines");
  logoMessage.classList.add("oldLine");
  logoMessage.innerHTML =
    "░██████╗███████╗███╗░░░███╗░█████╗░███╗░░██╗░█████╗░<br />██╔════╝██╔════╝████╗░████║██╔══██╗████╗░██║██╔══██╗<br />╚█████╗░█████╗░░██╔████╔██║███████║██╔██╗██║███████║<br />░╚═══██╗██╔══╝░░██║╚██╔╝██║██╔══██║██║╚████║██╔══██║<br />██████╔╝███████╗██║░╚═╝░██║██║░░██║██║░╚███║██║░░██║<br />╚═════╝░╚══════╝╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝<br />━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━";

  let welcomeMessage = terminal.appendChild(document.createElement("p"));
  welcomeMessage.id = "welcomeMessage";
  welcomeMessage.classList.add("terminalLines");
  welcomeMessage.classList.add("oldLine");
  welcomeMessage.innerHTML = textsLocalization.welcomeMessage[lang];

  let helpMessage = terminal.appendChild(document.createElement("p"));
  helpMessage.id = "helpMessage";
  helpMessage.classList.add("terminalLines");
  helpMessage.classList.add("oldLine");
  helpMessage.innerHTML = textsLocalization.helpMessage[lang];

  createNewInputZone();
}
