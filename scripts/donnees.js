// Mise en place du système de navigation des dossiers
var dossierActuel = "~";

var historiqueCommandesArrowUp = [];
var historiqueCommandesArrowDown = [];

dossiers = [
  {
    name: "~",
    terminal: "~",
    pwd: "/home/visitor",
    type: "folder",
    childs: ["AboutMe", "Studies", "Projects", "Ideas", "SocialMedia"],
    ls: [
      '<span class="comment">AboutMe</span>',
      '<span class="comment">Studies</span>',
      '<span class="comment">Projects</span>',
      '<span class="comment">Ideas</span>',
      '<span class="comment">SocialMedia</span>',
    ],
  },
  {
    name: "AboutMe",
    terminal: "/home/visitor/AboutMe",
    pwd: "/home/visitor/AboutMe",
    type: "folder",
    childs: ["whoami.txt"],
    ls: ['<span class="normalized">whoami.txt</span>'],
  },
  {
    name: "Studies",
    terminal: "/home/visitor/Studies",
    pwd: "/home/visitor/Studies",
    type: "folder",
    childs: ["bts_sio_slam.txt"],
    ls: ['<span class="normalized">bts_sio_slam.txt</span>'],
  },
  {
    name: "Projects",
    terminal: "/home/visitor/Projects",
    pwd: "/home/visitor/Projects",
    type: "folder",
    childs: ["personal.txt", "professional.txt"],
    ls: [
      '<span class="normalized">personal.txt</span>',
      '<span class="normalized">professional.txt</span>',
    ],
  },
  {
    name: "Ideas",
    terminal: "/home/visitor/Ideas",
    pwd: "/home/visitor/Ideas",
    type: "folder",
    childs: ["games.txt"],
    ls: ['<span class="normalized">games.txt</span>'],
  },
  {
    name: "whoami.txt",
    terminal: "/home/visitor/AboutMe/whoami.txt",
    pwd: "/home/visitor/AboutMe",
    type: "file",
    content: `<span class="normalized">Hi, I'm Vasco, an 18 year old Portuguese student in France, pursuing my BTS SIO specialized in Software Solutions (SLAM). I'm passionate about coding, and I love learning new stuff ! I make video-games, websites, bash scripts, discord bots, and more for fun !</span>`,
  },
  {
    name: "bts_sio_slam.txt",
    terminal: "/home/visitor/Studies/bts_sio_slam.txt",
    pwd: "/home/visitor/Studies",
    type: "file",
    content: `<span class="normalized">I am currently on my first year of the BTS SIO degree with a specialization in Software Solutions (SLAM). I'm an apprentice at SAB System, a company that I really enjoy working at since I always learn new stuff ! So far I've been working on an automation project with bash on Linux. It's actually what has pushed me into starting this new project of recreating a Linux Terminal as a portfolio, I really enjoy using it at work.</span>`,
  },
  {
    name: "personal.txt",
    terminal: "/home/visitor/Projects/personal.txt",
    pwd: "/home/visitor/Projects",
    type: "file",
    content: `<span class="normalized">Not written yet.</span>`,
  },
  {
    name: "professional.txt",
    terminal: "/home/visitor/Projects/professional.txt",
    pwd: "/home/visitor/Projects",
    type: "file",
    content: `<span class="normalized">Not written yet.</span>`,
  },
  {
    name: "games.txt",
    terminal: "/home/visitor/Ideas/games.txt",
    pwd: "/home/visitor/Ideas",
    type: "file",
    content: `<span class="normalized">Not written yet.</span>`,
  },
];

// Configuration des options de localisation

var lang = "en";

var localisationTextes = {
  welcomeMessage: {
    fr: `Bienvenue sur le <span class="information">portfolio terminal</span>, présenté par <span class="information">svasco</span>.`,
    en: `Welcome to the <span class="information">terminal portfolio</span>, presented by <span class="information">svasco</span>.`,
  },
  helpMessage: {
    fr: `Tapez <span class="important">'help'</span> pour afficher la liste des commandes disponibles.`,
    en: `Type <span class="important">'help'</span> to get a list of the available commands.`,
  },
  helpDescription: {
    fr: "Il semblerait que vous sachiez déjà ce que cela fait.",
    en: "It seems like you already know what this does.",
  },
  cdDescription: {
    fr: "Change votre répertoire de travail courant vers le répertoire spécifié.",
    en: "Changes your current working directory to the specified directory.",
  },
  lsDescription: {
    fr: "Fournit une liste du contenu du répertoire spécifié.",
    en: "Provides a listing of the contents of the specified directory.",
  },
  pwdDescription: {
    fr: "Affiche le chemin du répertoire courant dans le système de fichiers.",
    en: "Shows you the path of the current directory you are in within the file system.",
  },
  clearDescription: {
    fr: "Supprime toutes les commandes et sorties précédentes du terminal.",
    en: "Removes all previous commands and output from the terminal.",
  },
  catDescription: {
    fr: "Affiche le contenu d'un fichier spécifié.",
    en: "Prints the content of a specified file.",
  },
  themeDescription: {
    fr: "Change l'apparence du terminal portfolio.",
    en: "Changes the look of the portfolio terminal.",
  },
  langDescription: {
    fr: "Change la langue du terminal portfolio.",
    en: "Changes the language of the portfolio terminal.",
  },
  helpErreur: {
    fr: "erreur: la commande 'help' ne prend aucun argument",
    en: "error: 'help' command does not take any argument",
  },
  dossierErreur: {
    fr: "erreur: le dossier ",
    en: "error: folder ",
  },
  fichierErreur: {
    fr: "erreur: le fichier ",
    en: "error: file ",
  },
  existepasErreur: {
    fr: " n'existe pas",
    en: " does not exist",
  },
  catErreur: {
    fr: "erreur: la commande 'cat' requiert un nom de fichier en argument",
    en: 'error: "cat" command requires a file name as argument',
  },
  themeErreur: {
    fr: "erreur: la commande 'theme' requiert un numéro de thème (0-9)",
    en: "error: 'theme' command requires a theme number (0-9)",
  },
  erreur: {
    fr: "erreur: ",
    en: "error: ",
  },
  themeInexistantErreur: {
    fr: "erreur: aucun thème avec le numéro ",
    en: "error: no such theme ",
  },
  themeEntreErreur: {
    fr: " le numéro de thème doit être entre 0 et 9",
    en: " theme number must be between 0 and 9",
  },
  themeChange: {
    fr: "Thème changé en ",
    en: "Theme changed to ",
  },
  changementLangue: {
    fr: "Langue changée en ",
    en: "Language changed to ",
  },
  changementLangueErreur: {
    fr: "erreur: la commande 'lang' requiert un argument (fr/en)",
    en: "error: 'lang' command requires an argument (fr/en)",
  },
};
