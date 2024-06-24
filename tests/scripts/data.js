const commandList = ["theme", "pwd", "ls", "lang", "help", "echo"];

// Used to display text in different languages
const locales = {
  welcomeMessage: {
    fr: `Bienvenue sur le <span class="information">terminal portfolio</span>, présenté par <span class="information">svasco</span>.`,
    en: `Welcome to the <span class="information">terminal portfolio</span>, presented by <span class="information">svasco</span>.`,
  },
  helpMessage: {
    fr: `Tapez <span class="important">'help'</span> pour afficher la liste des commandes disponibles.`,
    en: `Type <span class="important">'help'</span> to get a list of the available commands.`,
  },
};

// File system
const directories = [
  {
    name: "~",
    terminal: "~",
    type: "folder",
    children: ["AboutMe", "Studies", "Projects", "Ideas", "SocialMedia"],
  },
  {
    name: "AboutMe",
    terminal: "~/AboutMe",
    type: "folder",
    children: ["whoami.txt"],
  },
  {
    name: "Studies",
    terminal: "~/Studies",
    type: "folder",
    children: ["bts_sio_slam.txt"],
  },
  {
    name: "Projects",
    terminal: "~/Projects",
    type: "folder",
    children: ["personal.txt", "professional.txt"],
  },
  {
    name: "Ideas",
    terminal: "~/Ideas",
    type: "folder",
    children: ["games.txt"],
  },
  {
    name: "SocialMedia",
    terminal: "~/SocialMedia",
    type: "folder",
    children: ["instagram.sh", "discord.sh", "linkedin.sh", "github.sh"],
  },
  {
    name: "whoami.txt",
    terminal: "~/AboutMe/whoami.txt",
    type: "file",
  },
  {
    name: "bts_sio_slam.txt",
    terminal: "~/Studies/bts_sio_slam.txt",
    type: "file",
  },
  {
    name: "personal.txt",
    terminal: "~/Projects/personal.txt",
    type: "file",
  },
  {
    name: "professional.txt",
    terminal: "~/Projects/professional.txt",
    type: "file",
  },
  {
    name: "games.txt",
    terminal: "~/Ideas/games.txt",
    type: "file",
  },
  {
    name: "instagram.sh",
    terminal: "~/SocialMedia/instagram.sh",
    type: "executable",
    bash: `window.open("https://www.instagram.com/vasco.smn/", "_blank");`,
  },
  {
    name: "discord.sh",
    terminal: "~/SocialMedia/discord.sh",
    type: "executable",
    bash: `window.open("https://discord.com/users/svasco", "_blank");`,
  },
  {
    name: "linkedin.sh",
    terminal: "~/SocialMedia/linkedin.sh",
    type: "executable",
    bash: `window.open("https://www.linkedin.com/in/vascosemana/", "_blank");`,
  },
  {
    name: "github.sh",
    terminal: "~/SocialMedia/github.sh",
    type: "executable",
    bash: `window.open("https://github.com/semanavasco", "_blank");`,
  },
];
