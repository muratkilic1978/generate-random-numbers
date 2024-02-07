// Generate and Display Random Number

function generateAndDisplayRandomNumber() {
    // Generate a random number between 0 and 100 (inclusive)

    // Display the random number on the page by calling the function displayRandNumber as parameter
    
    // Add the random number to the history list
    addToHistoryList(randomNumber);
}


// Create a function named 'displayRandomNumber' with a parameter named 'number'

    // Get the element with the id "message" and save it in a variable named messageElement
    

    // Set the text content of the 'messageElement' to display the random number including a text `Random Number: ${??}`


function addToHistoryList(number) {
    let container = document.getElementById("historyList");
    let newListItem = createListItem(number);

    container.appendChild(newListItem);
}

// Create a function named 'createListItem' with a parameter named 'elem'

    // Create a new <li> list item and store it in a variable named 'listItem'
    
    
    // Set the className of the listItem variable to "histdata"
   

    // Set the textContent of the listItem variable to the given elem
    

    // finally return the variable listItem
    

function deleteLastRandomNumber() {
    let container = document.getElementById("historyList");

    if (container.children.length > 0) {
    container.removeChild(container.lastChild);
    updateMessage("Last Random Number deleted");
    } else {
    updateMessage("History is empty");
    }
}

function updateMessage(message) {

    // Get the element with the id "message" and save it in a variable named messageElement
    let messageElement = document.getElementById("message");

    // Set the textContent of the messageElement to the provided message argument
    messageElement.textContent = message;
}

function handleEmptyHistory() {
    let container = document.getElementById("historyList");

    if (container.children.length === 0) {
    updateMessage("History is empty");
    }
}
