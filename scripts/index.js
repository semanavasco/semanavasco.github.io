// Making it so that the command input is always focused
document.addEventListener("DOMContentLoaded", function () {
  // When the page is loaded
  let commandInput = document.getElementById("commandInput");

  commandInput.focus();
  commandInput.value = "";
});

document.addEventListener("click", function () {
  // When the page is clicked
  let commandInput = document.getElementById("commandInput");

  commandInput.focus();
});

// Detecting when the user presses a key
document.addEventListener("keydown", async function (event) {
  let pressedKey = event.key;

  // Sending a command when the user presses enter
  if (pressedKey === "Enter") {
    var commandInput = document.getElementById("commandInput");

    var command = commandInput.value;
    var arguments = command.split(" ");

    // Logging the command typed before answering
    var oldLine = document
      .getElementById("terminal")
      .appendChild(document.createElement("div"));

    // Giving the old line class to the div
    oldLine.classList.add("terminalLines");
    oldLine.classList.add("oldLine");

    // Setting the content of the oldLine with the command content
    oldLine.innerHTML = `<p><span class="information">visitor@semanavasco</span><span class="normalized">:</span><span class="comment">${
      folders.find((folder) => folder.name === currentFolder).terminal
    }</span><span class="information">$</span> </p>
           <p>${command}</p>`;

    // Deleting the current input zone
    let currentLine = document.getElementsByClassName("currentLine")[0];
    currentLine.remove();

    // Adding the command to the list of commands used
    commandsUsedArrowUp.push(command);

    // Running the command
    await runCommand(command, arguments);
  }
  // Detecting when the user presses tab for autocompletion
  else if (pressedKey === "Tab") {
    event.preventDefault();

    var commandInput = document.getElementById("commandInput");

    var command = commandInput.value;
    var arguments = command.split(" ");

    // Autocompleting the command
    if (arguments.length === 1) {
      // If the user is typing a command

      // Getting the usable commands
      const suggestions = commandList.filter((value) =>
        value.startsWith(arguments)
      );

      // Autocompleting the command or returning if there are no suggestions
      if (suggestions.length === 0) return;
      else commandInput.value = suggestions[0];
    } else {
      // If the user is typing a command's argument

      // Checking if the command exists
      if (!(await fileExists("../commands/" + arguments[0] + ".js"))) return;

      // Importing the command file
      var commandFile = await import("../commands/" + arguments[0] + ".js");

      // Getting the usable arguments
      const suggestions = commandFile.usableArgs.filter((value) =>
        value.startsWith(arguments[1])
      );

      // Autocompleting the argument or returning if there are no suggestions
      if (suggestions.length === 0) return;
      else commandInput.value = arguments[0] + " " + suggestions[0];
    }
  }
  // Detecting when the user presses the up or down arrow to get the previous commands
  else if (pressedKey === "ArrowUp") {
    var commandInput = document.getElementById("commandInput");

    if (commandsUsedArrowUp.length > 0) {
      commandInput.value = commandsUsedArrowUp[commandsUsedArrowUp.length - 1];
      commandsUsedArrowUp.pop();
      commandsUsedArrowDown.push(commandInput.value);
    } else commandInput.value = "";
  } else if (pressedKey === "ArrowDown") {
    var commandInput = document.getElementById("commandInput");

    if (commandsUsedArrowDown.length > 0) {
      commandInput.value =
        commandsUsedArrowDown[commandsUsedArrowDown.length - 1];
      commandsUsedArrowDown.pop();
      commandsUsedArrowUp.push(commandInput.value);
    } else commandInput.value = "";
  }
});
