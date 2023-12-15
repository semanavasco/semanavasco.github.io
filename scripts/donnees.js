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
    childs: ["highschool.txt", "university.txt"],
    ls: [
      '<span class="normalized">highschool.txt</span>',
      '<span class="normalized">university.txt</span>',
    ],
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
];
