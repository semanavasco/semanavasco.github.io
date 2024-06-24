// Focusing on the command input when the page is clicked
document.addEventListener("click", () => {
  const commandInput = document.getElementById("commandInput");

  commandInput.focus();
});

// Listening for key presses
document.addEventListener("keydown", async (event) => {
  const commandInput = document.getElementById("commandInput");

  const keyPressed = event.key;

  switch (keyPressed) {
    case "Enter":
      {
        // If the command is empty, create a new line
        if (commandInput.value.length === 0) {
          createLog(commandInput.value);
          createNewInputZone();
          return;
        }

        // Trying to execute the command
        const args = commandInput.value.split(" ");
        const command = args[0];

        await executeCommand(
          command,
          args.splice(1, args.length),
          commandInput.value,
        );
      }
      break;

    default:
      break;
  }
});

/**
 * Executes a command or returns an error if the command doesn't exist.
 * @param {string} name The name of the command.
 * @param {string[]} args The args of the command.
 * @param {string} content The integrity of the command.
 */
async function executeCommand(name, args, content) {
  createLog(content);

  try {
    const file = await import("../commands/" + name + ".js");

    await file.execute(args, content);
  } catch (error) {
    const message = {
      fr: `erreur: commande '${name}' non trouvée`,
      en: `error: command '${name}' not found`,
    };

    createResponse(message[language], "error");
  }

  createNewInputZone();
}

/**
 * Creates a log of the typed command.
 * @param {string} content The integrity of the command.
 */
function createLog(content) {
  const oldLine = document
    .getElementById("terminal")
    .appendChild(document.createElement("div"));

  oldLine.classList.add("terminalLines", "oldLine");

  oldLine.innerHTML = `<p><span class="information">visitor@semanavasco</span><span class="normalized">:</span><span class="comment">${currentDir}</span><span class="information">$</span> </p><p>${content}</p>`;

  const currentLine = document.getElementsByClassName("currentLine")[0];
  currentLine.remove();
}

/**
 * Creates a new line in the terminal with the specified response and colorscheme.
 * @param {string} response The content of the line.
 * @param {"normalized" | "command" | "information" | "comment" | "question" | "error" | "success" | "important" | "warning"} type The type of the message, sets the colorscheme.
 */
function createResponse(response, type) {
  const terminalReply = document
    .getElementById("terminal")
    .appendChild(document.createElement("div"));

  terminalReply.classList.add("terminalLines", "oldLine");

  terminalReply.innerHTML = `<p class="terminalOutput"><span class="${type}">${response}</span></p>`;
}

/**
 * Creates a new input zone for commands.
 */
function createNewInputZone() {
  const currentLine = document
    .getElementById("terminal")
    .appendChild(document.createElement("div"));

  currentLine.classList.add("terminalLines", "currentLine");

  currentLine.innerHTML = `<p><span class="information">visitor@semanavasco</span><span class="normalized">:</span><span class="comment">${currentDir}</span><span class="information">$</span> </p><input type="text" name="commandInput" id="commandInput" maxlength="100" autofocus>`;

  const commandInput = document.getElementById("commandInput");

  commandInput.focus();
}
