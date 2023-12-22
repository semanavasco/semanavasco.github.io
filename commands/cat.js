export const name = "cat";

export const description = {
  fr: "Affiche le contenu d'un fichier spécifié.",
  en: "Prints the content of a specified file.",
};

export const usage = {
  fr: "erreur: mauvaise utilisation de commande; utilisez 'cat fichier' à la place",
  en: "error: bad command usage; use 'cat file' instead",
};

export const error = {
  fr: "erreur: le fichier spécifié n'existe pas",
  en: "error: the specified file does not exist",
};

export const filesContent = {
  "whoami.txt": {
    fr: `<span class="normalized">Bonjour, je suis Vasco, un étudiant portugais de 18 ans résidant en France, je commence mon BTS SIO spécialisé en Solutions Logicielles (SLAM). Je suis passionné par la programmation, et j'adore apprendre de nouvelles choses ! Je fais des jeux-vidéos, des sites web, des scripts bash, des bots discord, et bien plus pour le fun !</span>`,
    en: `<span class="normalized">Hi, I'm Vasco, an 18 year old Portuguese student in France, pursuing my BTS SIO specialized in Software Solutions (SLAM). I'm passionate about coding, and I love learning new stuff ! I make video-games, websites, bash scripts, discord bots, and more for fun !</span>`,
  },
  "bts_sio_slam.txt": {
    fr: `<span class="normalized">Je suis actuellement en première année d'un BTS SIO spécialisé en Solutions Logicielles (SLAM). Je suis apprenti chez SAB System, une entreprise que j'apprécie beaucoup car j'y apprends toujours de nouvelles choses ! J'ai travaillé sur un projet d'automatisation avec bash sur Linux. C'est d'ailleurs ce qui m'a poussé à commencer ce nouveau projet de recréer un Terminal Linux en tant que portfolio, j'adore utiliser un terminal au travail.</span>`,
    en: `<span class="normalized">I am currently on my first year of the BTS SIO degree with a specialization in Software Solutions (SLAM). I'm an apprentice at SAB System, a company that I really enjoy working at since I always learn new stuff ! So far I've been working on an automation project with bash on Linux. It's actually what has pushed me into starting this new project of recreating a Linux Terminal as a portfolio, I really enjoy using it at work.</span>`,
  },
  "personal.txt": {
    fr: `<span class="normalized">Pas encore rédigé.</span>`,
    en: `<span class="normalized">Not written yet.</span>`,
  },
  "professional.txt": {
    fr: `<span class="normalized">Pas encore rédigé.</span>`,
    en: `<span class="normalized">Not written yet.</span>`,
  },
  "games.txt": {
    fr: `<span class="normalized">Pas encore rédigé.</span>`,
    en: `<span class="normalized">Not written yet.</span>`,
  },
  "instagram.sh": {
    fr: `<span class="normalized">#!/bin/bash</span><br/><span class="normalized">open https://www.instagram.com/vasco.smn/</span><br/><span class="normalized">echo "Ouverture d'Instagram..."</span>`,
    en: `<span class="normalized">#!/bin/bash</span><br/><span class="normalized">open https://www.instagram.com/vasco.smn/</span><br/><span class="normalized">echo "Opening Instagram..."</span>`,
  },
  "discord.sh": {
    fr: `<span class="normalized">#!/bin/bash</span><br/><span class="normalized">open https://discord.com/users/svasco</span><br/><span class="normalized">echo "Ouverture de Discord..."</span>`,
    en: `<span class="normalized">#!/bin/bash</span><br/><span class="normalized">open https://discord.com/users/svasco</span><br/><span class="normalized">echo "Opening Discord..."</span>`,
  },
  "linkedin.sh": {
    fr: `<span class="normalized">#!/bin/bash</span><br/><span class="normalized">open https://www.linkedin.com/in/vascosemana/</span><br/><span class="normalized">echo "Ouverture de LinkedIn..."</span>`,
    en: `<span class="normalized">#!/bin/bash</span><br/><span class="normalized">open https://www.linkedin.com/in/vascosemana/</span><br/><span class="normalized">echo "Opening LinkedIn..."</span>`,
  },
  "github.sh": {
    fr: `<span class="normalized">#!/bin/bash</span><br/><span class="normalized">open https://github.com/semanavasco</span><br/><span class="normalized">echo "Ouverture de Github..."</span>`,
    en: `<span class="normalized">#!/bin/bash</span><br/><span class="normalized">open https://github.com/semanavasco</span><br/><span class="normalized">echo "Opening Github..."</span>`,
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
      .childs.includes(args[1])
  ) {
    terminalReply(
      `<p class="terminalOutput">${filesContent[args[1]][lang]}</p>`
    );
  } else if (
    args[1].includes("/") &&
    folders
      .find((folder) => folder.name === args[1].split("/")[0])
      .childs.includes(args[1].split("/")[1])
  ) {
    terminalReply(
      `<p class="terminalOutput">${
        filesContent[args[1].split("/")[1]][lang]
      }</p>`
    );
  } else
    terminalReply(
      `<p class="terminalOutput"><span class="error">${error[lang]}</span></p>`
    );

  createNewInputZone();
}
