// Defines the language used by the terminal
var lang = "en";

// A list of all the commands available
var commandList = [
  "help",
  "banner",
  "pwd",
  "ls",
  "cd",
  "cat",
  "echo",
  "clear",
  "bash",
  "project",
  "theme",
  "lang",
];

// A list of the commands used
var commandsUsedArrowUp = [];
var commandsUsedArrowDown = [];

// Used to display text in different languages
var textsLocalization = {
  welcomeMessage: {
    fr: `Bienvenue sur le <span class="information">terminal portfolio</span>, présenté par <span class="information">svasco</span>.`,
    en: `Welcome to the <span class="information">terminal portfolio</span>, presented by <span class="information">svasco</span>.`,
  },
  helpMessage: {
    fr: `Tapez <span class="important">'help'</span> pour afficher la liste des commandes disponibles.`,
    en: `Type <span class="important">'help'</span> to get a list of the available commands.`,
  },
};

// The current folder the user is in
var currentFolder = "~";

// A complete list of all the folders and files available in the terminal (used by commands such as 'ls', 'cd', 'cat', 'project'...)
var folders = [
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
    terminal: "~/AboutMe",
    pwd: "/home/visitor/AboutMe",
    type: "folder",
    childs: ["whoami.txt"],
    ls: ['<span class="normalized">whoami.txt</span>'],
  },
  {
    name: "Studies",
    terminal: "~/Studies",
    pwd: "/home/visitor/Studies",
    type: "folder",
    childs: ["bts_sio_slam.txt"],
    ls: ['<span class="normalized">bts_sio_slam.txt</span>'],
  },
  {
    name: "Projects",
    terminal: "~/Projects",
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
    terminal: "~/Ideas",
    pwd: "/home/visitor/Ideas",
    type: "folder",
    childs: ["games.txt"],
    ls: ['<span class="normalized">games.txt</span>'],
  },
  {
    name: "SocialMedia",
    terminal: "~/SocialMedia",
    pwd: "/home/visitor/SocialMedia",
    type: "folder",
    childs: ["instagram.sh", "discord.sh", "linkedin.sh", "github.sh"],
    ls: [
      '<span class="success">instagram.sh</span>',
      '<span class="success">discord.sh</span>',
      '<span class="success">linkedin.sh</span>',
      '<span class="success">github.sh</span>',
    ],
  },
  {
    name: "whoami.txt",
    terminal: "~/AboutMe/whoami.txt",
    pwd: "/home/visitor/AboutMe",
    type: "file",
  },
  {
    name: "bts_sio_slam.txt",
    terminal: "~/Studies/bts_sio_slam.txt",
    pwd: "/home/visitor/Studies",
    type: "file",
  },
  {
    name: "personal.txt",
    terminal: "~/Projects/personal.txt",
    pwd: "/home/visitor/Projects",
    type: "file",
  },
  {
    name: "professional.txt",
    terminal: "~/Projects/professional.txt",
    pwd: "/home/visitor/Projects",
    type: "file",
  },
  {
    name: "games.txt",
    terminal: "~/Ideas/games.txt",
    pwd: "/home/visitor/Ideas",
    type: "file",
  },
  {
    name: "instagram.sh",
    terminal: "~/SocialMedia/instagram.sh",
    pwd: "/home/visitor/SocialMedia",
    type: "executable",
    bash: `window.open("https://www.instagram.com/vasco.smn/", "_blank");`,
  },
  {
    name: "discord.sh",
    terminal: "~/SocialMedia/discord.sh",
    pwd: "/home/visitor/SocialMedia",
    type: "executable",
    bash: `window.open("https://discord.com/users/svasco", "_blank");`,
  },
  {
    name: "linkedin.sh",
    terminal: "~/SocialMedia/linkedin.sh",
    pwd: "/home/visitor/SocialMedia",
    type: "executable",
    bash: `window.open("https://www.linkedin.com/in/vascosemana/", "_blank");`,
  },
  {
    name: "github.sh",
    terminal: "~/SocialMedia/github.sh",
    pwd: "/home/visitor/SocialMedia",
    type: "executable",
    bash: `window.open("https://github.com/semanavasco", "_blank");`,
  },
];
