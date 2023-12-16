// Mise en place du système de navigation des dossiers
var dossierActuel = "~";

var historiqueCommandesArrowUp = [];
var historiqueCommandesArrowDown = [];

var dossiers = [
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
  projectDescription: {
    fr: "Ouvre un projet spécifié dans une nouvelle fenêtre.",
    en: "Opens a specified project in a new window.",
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
  ouvertureProjetErreur: {
    fr: "erreur: la commande 'project' requiert un nom de projet en argument (sololeveling)",
    en: "error: 'project' command requires a project name as argument (sololeveling)",
  },
  ouvertureProjetInexistantErreur: {
    fr: "erreur: aucun projet avec le nom ",
    en: "error: no such project ",
  },
  ouvertureProjetInexistantErreur2: {
    fr: " projets actuels : sololeveling",
    en: " current projects : sololeveling",
  },
  ouvertureProjet: {
    fr: "Ouverture du projet ",
    en: "Opening project ",
  },
  projetSoloLevelingDescription1: {
    fr: "Le projet Solo Leveling consistait à créer un Bot Discord de type RPG basé sur le manhwa Solo Leveling. Celui-ci offrait la possiblité de créer un personnage, l'équiper avec plus de 500 pièces d'équipement pour affronter des ennemis avec nos amis.",
    en: "The Solo Leveling project consisted in creating a Discord Bot of RPG type based on the Solo Leveling manhwa. It offered the possibility to create a character, equip it with more than 500 pieces of equipment to fight enemies with our friends.",
  },
  projetSoloLevelingDescription2: {
    fr: "- C'est un projet développé en JavaScript à l'aide de la librairie Discord.JS.",
    en: "- It is a project developed in JavaScript using the Discord.JS library.",
  },
  projetSoloLevelingDescription3: {
    fr: "- Je l'ai développé entièrement seul et l'ai recommencé plusieurs fois au fûr et à mesure que j'apprenais de nouvelles choses.",
    en: "- I developed it entirely alone and restarted it several times as I learned new things.",
  },
  projetSoloLevelingDescription4: {
    fr: "- Retour lors de la création du personnage récapitulant toutes les informations de celui-ci (classe, métier, etc).",
    en: "- Feedback when creating the character summarizing all its information (class, profession, etc.).",
  },
  projetSoloLevelingDescription5: {
    fr: "- Affichage du profil du joueur avec la commande /profil. Les barres de vie, mana et exp sont réactives.",
    en: "- Display of the player's profile with the command /profil. The life, mana and exp bars are reactive.",
  },
  projetSoloLevelingDescription6: {
    fr: "- Affichage de l'inventaire du joueur avec la commande /inventaire, celui-ci se mets à jour automatiquement lorsque le joueur déséquipe/équipe un item avec /déséquiper ou /équiper.",
    en: "- Display of the player's inventory with the command /inventory, it is updated automatically when the player unequips/equips an item with /unequip or /equip.",
  },
  projetSoloLevelingDescription7: {
    fr: "- Affichage de la monnaie (ayant une vraie valeur économique, elle permet d'acheter des items, appartements, etc) du joueur ainsi que la quantité de cristaux (matériau d'amélioration) possédés.",
    en: "- Display of the player's currency (that has a real economic value, it allows to buy items, apartments, etc.) as well as the amount of crystals (improvement material) owned.",
  },
  projetSoloLevelingDescription8: {
    fr: "- Affichage du groupe du joueur avec la commande /groupe. Ce groupe permets aux joueurs d'automatiquement partager les récompenses entre eux lors des affrontements.",
    en: "- Display of the player's group with the command /group. This group allows players to automatically share rewards between them during confrontations.",
  },
  projetSoloLevelingDescription9: {
    fr: "- Système d'intéractions avec  des PNJs (personnages non joueurs), ayant chacun des dialogues et possiblités différentes. Plus de 50 PNJs ont été créés, cela englobe leur histoire, leur caractère, leurs dialogues, etc.",
    en: "- Interaction system with NPCs (non-player characters), each with different dialogues and possibilities. More than 50 NPCs have been created, this includes their history, their personality, their dialogues, etc.",
  },
  projetSoloLevelingDescription10: {
    fr: "- Système d'échange entre joueurs et de gestion de l'inventaire en permettant aux joueurs de lâcher des objets dans la carte.",
    en: "- Exchange system between players and inventory management by allowing players to drop items on the map.",
  },
  projetSoloLevelingDescription11: {
    fr: "- Un système de récompenses basé sur l'activité du joueur et proposant une version payante (mais pouvant être obtenue gratuitement par la complétion de certaines quêtes).",
    en: "- A reward system based on the player's activity and offering a paid version (but which can be obtained for free by completing certain quests).",
  },
};
