// Making it so that the command input is always focused
document.addEventListener("DOMContentLoaded", function () {
  // When the page is loaded
  let commandInput = document.getElementById("zonetexte");

  commandInput.focus();
  commandInput.value = "";
});

document.addEventListener("click", function () {
  // When the page is clicked
  let commandInput = document.getElementById("zonetexte");

  commandInput.focus();
});

// Detecting when the user presses a key
document.addEventListener("keydown", async function (event) {
  let pressedKey = event.key;

  // Sending a command when the user presses enter
  if (pressedKey === "Enter") {
    var commandInput = document.getElementById("zonetexte");

    var command = commandInput.value;
    var arguments = command.split(" ");

    // Logging the command typed before answering
    var oldLine = document
      .getElementById("terminal")
      .appendChild(document.createElement("div"));

    // Giving the old line class to the div
    oldLine.classList.add("terminalLines");
    oldLine.classList.add("ancienneLigne");

    // Setting the content of the oldLine with the command content
    oldLine.innerHTML = `<p><span class="information">visitor@semanavasco</span><span class="normalized">:</span><span class="comment">${
      folders.find((folder) => folder.name === currentFolder).terminal
    }</span><span class="information">$</span> </p>
           <p>${command}</p>`;

    // Deleting the current input zone
    let currentLine = document.getElementsByClassName("currentLine")[0];
    currentLine.remove();

    // Running the command
    await runCommand(command, arguments);
  }
});
