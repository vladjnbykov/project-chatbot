// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const inputWrapper = document.getElementById('input-wrapper');





// Global variables, if you need any, declared here

var dish;
var fill;


// Functions declared here
const botReply = (msg) => {
  showMessage(msg, 'bot')
}
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}



// Starts here
const greeting = () => {
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}







// Set up your eventlisteners here





form.addEventListener('submit', (event)=>{
  event.preventDefault();
  const value = document.getElementById('name-input').value;

  showMessage(`${value}`, "user")
//Set time, 3 second 
  showMessage(`Hello ${value}`, "bot")
  
  //Set time, 3 second 
  showMessage (`What would you like to order? We have three excellent 
  menu choices just for you`, "bot")
  setTimeout(() => showFoodOptions(), 1000)
   
})

const showFoodOptions = () => {
  inputWrapper.innerHTML = `
    <button id="hp-btn">Harry Potter</button>
    <button id="hrg-btn">Hermione</button>
    <button id="rw-btn">Ron Weasley</button>
    `
  

  document
    .getElementById('hp-btn')
    .addEventListener('click', () => showMenu('Harry Potter'))
  document
    .getElementById('hrg-btn')
    .addEventListener('click', () => showMenu('Hermione'))
  document
    .getElementById('rw-btn')
    .addEventListener('click', () => showMenu('Ron Weasley'))  

  

}



const showMenu = (dish) => {
  botReply(`${dish} burger is a great choice! Please select your favourite fillig`)
  window.dish = `${dish}`
  inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Your filling...</option>
        <option value="meat">Meat</option>
        <option value="chicken">Chicken</option>
        <option value="fish">Fish</option>
        <option value="vegeterian">Vegetarian filling</option>
      </select>
      `


  const select = document.getElementById('select')
  select.addEventListener('change', () => sideDish(select.value).fill)
    
}
 

const sideDish = (fill) => {
  botReply(`You have ordered ${dish} with ${fill}. 
  Please choose your favourite side dish.`)
  window.fill = `${fill}`

}




// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.



setTimeout(greeting, 1000)
