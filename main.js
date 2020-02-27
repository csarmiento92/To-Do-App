// ************************************************************************
// Tips for completing lab

// Console log everything !!
// event
// .target
// .value
// .innerHTML
// .parentElement
// .lastElementChild
// .previousElementSibling
// .querySelector
let todoItemToUpdate
// Write your functions and then pass them as the 2nd argument of the event listener
function updateItem(event) {
    todoItemToUpdate = event.target.parentElement
    input.value = event.target.parentElement.childNodes[0].textContent
    submitBtn.remove()
    form.appendChild(saveBtn)
}

// someButton.addEventListener('click', createItem);

// --------------------------------

// Header Section

// Declare global variable to handle updating a list item's value; this var will hold the parent element of text to be updated;
// let todoItemToUpdate; 

// let button = document.querySelectorAll(".update-button");
// // button.addEventListener('click', updateItem(event));

// // Create function to handle updating an item from list
// const updateItem = event => {
//   // let parentElement = event.target.parentElement;
//   todoItemToUpdate = event.target.parentElement.value;
//   console.log(todoItemToUpdate)

//   input.value = todoItem; 


  // Grab parent element of update button - which is a li element
  
  
  // Retrieve todo's text value

    
      // change submit button to save button

//}

// Create a function that handles removing an item from list
const removeItem = event => {
  event.target.parentElement.remove()
  console.log(input.value)
}

// Create and append a div with id of page-container to the body element
let body = document.body;
let pageContainer = document.createElement('DIV');

pageContainer.id = "page-container";
pageContainer.style.height = "100vh";

body.appendChild(pageContainer);

// Create a container div with id of main-header for the header
let mainHeader = document.createElement('DIV');
mainHeader.id = "main-header";

// Create an 'inner container' which will be the direct child of mainHeader. This div should have a class of 'container'. It will also be the direct parent for your heading h1 element. 
let innerContainer = document.createElement('DIV');
innerContainer.className = "container";

// Finally create an H1 element with the title 'Todo App'. Give it an id of 'header-title'
let headerTitle = document.createElement('H1');
headerTitle.innerHTML = "Todo App";
headerTitle.style.fontSize = "40px";

// Append headerTitle to innerContainer, innerContainer to mainHeader and mainHeader to pageContainer
innerContainer.appendChild(headerTitle);
mainHeader.appendChild(innerContainer);
pageContainer.appendChild(mainHeader);

// Add styles to header
mainHeader.style.backgroundColor = "green";
mainHeader.style.height = "100px";
mainHeader.style.color = "white";
mainHeader.style.paddingTop = "10px";


// Content Section 
// Create container for content section
let contentContainer = document.createElement('DIV');
contentContainer.id = "content-container";

contentContainer.style.width = '80%'
contentContainer.style.margin = "20px auto";
contentContainer.style.border = "1px solid #c4c4c4";
contentContainer.style.borderRadius = "5px";

pageContainer.appendChild(contentContainer);

// Create inner container for content section
innerContainer = document.createElement('DIV');
innerContainer.className = "inner-container";
innerContainer.style.margin = "20px";

// Create add item card
let addItemCard = document.createElement('DIV');
addItemCard.className = "add-item";

// Create header for add item card
let addItemHeader = document.createElement('H2');
addItemHeader.innerHTML = "Add Todo";

// Create form for text input and submit button input
let form = document.createElement('FORM');
form.className = "form-inline";

// Create text input
let input = document.createElement('INPUT');
input.id = "item-to-add";
input.type = "text";
input.className = "form-control";
input.placeholder = "Something to do..";

// Create submit button input
let submitBtn = document.createElement('INPUT');
submitBtn.className = "btn btn-primary";
submitBtn.id = "submit-button";
submitBtn.type = "button";
submitBtn.value = "Submit"
submitBtn.style.marginLeft = "5px";

// Append inputs to form
form.appendChild(input);
form.appendChild(submitBtn);

addItemCard.appendChild(addItemHeader);
addItemCard.appendChild(form);

innerContainer.appendChild(addItemCard);
contentContainer.appendChild(innerContainer);

// Items list card

let itemsCard = document.createElement('DIV');
itemsCard.className = "items-card";
innerContainer.appendChild(itemsCard);

// Items list card header element
let itemsCardHeader = document.createElement('H2');
itemsCardHeader.innerHTML = "Todos";
itemsCard.appendChild(itemsCardHeader);

// Items list card ul element
let listOfItems = document.createElement('UL');
listOfItems.id = "items";
listOfItems.className = "list-group";
itemsCard.appendChild(listOfItems);

function appendDeleteButton(parentElement){
  let deleteButton = document.createElement('BUTTON');
  deleteButton.className = "btn btn-danger btn-xs pull-right delete-button";
  deleteButton.style.marginLeft = "5px";
  deleteButton.innerHTML = "x";
  deleteButton.addEventListener('click', removeItem)
  parentElement.appendChild(deleteButton)
}

function appendUpdateButton(parentElement){
  let updateButton = document.createElement('BUTTON');
  updateButton.className = "btn btn-danger btn-xs pull-right delete-button";
  updateButton.style.marginLeft = "5px";
  updateButton.innerHTML = "&#x21bb";
  updateButton.addEventListener('click', updateItem) //added an event listener 
  parentElement.appendChild(updateButton)
}

// Create and append 4 li elements to ul
for (let i = 1; i < 5; i++) {
    let item = document.createElement('li');
    item.className = "list-group-item";
    item.appendChild(document.createTextNode("Item  " + i));
    // item.innerHTML = " Item " + i; // also works fine

    // Create buttons for li items
    // Could be refactored to using appendDelete and appendUpdate functions created below
    appendDeleteButton(item) //calling the function
    appendUpdateButton(item) //calling the function
    
    // Append buttons to li, append li to ul element
    listOfItems.appendChild(item);
}


//// ***************** EVENTS *****************


  ///////////////////////////////////////////////////
 //                  Create item                  //
///////////////////////////////////////////////////

// Add event listener to submit button which handles adding user's todo items to list
submitBtn.addEventListener('click', function(event) {

  // Grab input field where user's to do item is entered
      console.log(input.value)
       // Create li element 
      let item = document.createElement('li');
      item.className = "list-group-item"
       // Add users input to li element
      item.appendChild(document.createTextNode(input.value))
      // Append delete button and update button
      appendDeleteButton(item) //calling the function
      appendDeleteButton(item) //calling the function

      // Append new item to list of items
      // Clear user's to do item from input field
      input.value = ""
      listOfItems.appendChild(item)
});


  ///////////////////////////////////////////////////
 //                  Delete item                  //
///////////////////////////////////////////////////

// grab all elements with class .delete-button

// Add the remove item event listener to existing to do items


  ///////////////////////////////////////////////////
 //                  Update item                  //
///////////////////////////////////////////////////

// grab all elements with class .update-button

// Add updateItem event listener to update buttons already existing on page load.


  ///////////////////////////////////////////////////
 //                   Save item                   //
///////////////////////////////////////////////////

// Create 'Save' button for saving updated todos
let saveBtn = document.createElement('INPUT');
saveBtn.className = "btn btn-primary";
saveBtn.id = "save-button";
saveBtn.type = "button";
saveBtn.value = "Save"
saveBtn.style.marginLeft = "5px";
saveBtn.style.backgroundColor = "green";

// Save item event listener
const saveUpdatedTodo = event => {

    // Targets the input value, where todo is updated
      todoItemToUpdate.innerHTML = input.value
        // Target the item to update with new value
        // Use todoItemToUpdate, the global variable we set when selecting item to update ( li element )

        // Append delete button and update button

        // grab delete button so that we can reappend remove item event listener

        // grab update button such that we can reappend update item event listener
        appendDeleteButton(todoItemToUpdate) 
        appendUpdateButton(todoItemToUpdate) 


        // Add the remove item event listener

        // Add the update item event listener

        // Clear user's to do item from input field
      input.value = ""
        // change save button to submit button
        saveBtn.remove()
        form.appendChild(submitBtn)
}
saveBtn.addEventListener("click", saveUpdatedTodo)
// Add event listener to save button
