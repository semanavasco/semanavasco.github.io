// Run command function
function runCommand(command, args) {
  return new Promise(async function (resolve, reject) {
    // Checking if the command is empty
    if (command === "") return runError("empty", args[0]);

    // If the command isn't empty we continue

    // Finding the command file and returning an error if it doesn't exist
    let commandFileExists = await fileExists("../commands/" + args[0] + ".js");

    if (!commandFileExists) return runError("not-found", args[0]);

    // If there isn't any error we continue

    // Getting the command file and running the command
    var commandFile = await import("../commands/" + args[0] + ".js");

    return commandFile.run(command, args);
  });
}

// Checking if a file exists
function fileExists(path) {
  // Creating a promise
  return new Promise(function (resolve, reject) {
    // Creating a new XMLHttpRequest
    var http = new XMLHttpRequest();

    // Opening a new request to the file path
    http.open("HEAD", path);

    // Sending the request
    http.send();

    // Detecting when the state changes
    http.onreadystatechange = function () {
      // If the request is done
      if (this.readyState == this.DONE) {
        // Resolving the promise
        resolve(this.status != 404);
      }
    };
  });
}

// Running an error
function runError(error, command) {
  switch (error) {
    // If the command is empty
    case "empty":
      {
        createNewInputZone();
      }
      break;

    // If the command doesn't exist
    case "not-found":
      {
        terminalReply(
          `<p class="terminalOutput"><span class="error">error: '${command}' command not found</span></p>`
        );
        createNewInputZone();
      }
      break;

    // If there is an unknown error
    default:
      alert("Unknown error, please contact Vasco.");
      break;
  }
}

// Creating a new input zone (since we delete it every time the user presses enter to place it at the end of the terminal output)
function createNewInputZone() {
  let currentLine = document
    .getElementById("terminal")
    .appendChild(document.createElement("div"));

  currentLine.classList.add("lignes");
  currentLine.classList.add("ligneActuelle");

  currentLine.innerHTML = `<p><span class="information">visitor@semanavasco</span><span class="normalized">:</span><span class="comment">~</span><span class="information">$</span> </p>
                           <input type="text" name="zonetexte" id="zonetexte" maxlength="100" autofocus>`;

  var zoneTexte = document.getElementById("zonetexte");

  zoneTexte.focus();
}

// Terminal reply function
function terminalReply(reponse) {
  var terminalReply = document
    .getElementById("terminal")
    .appendChild(document.createElement("div"));

  terminalReply.classList.add("lignes");
  terminalReply.classList.add("ancienneLigne");

  terminalReply.innerHTML = reponse;
}
