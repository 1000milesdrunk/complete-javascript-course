'use strict';
//Storing the queries in a variable then using the variable access the queries

//modal is the content that needs to be displayes when button is clicked
const modal = document.querySelector('.modal');
//hides and blurs the background when button is clicked
const overlay = document.querySelector('.overlay');

//this is for the x button on the content
const btnCloseModal = document.querySelector('.close-modal');

//querySelectorAll is used to get all the elements containing the same class name
//all the elements with the same class name are as anode list which can be accessed like an array
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//to use all the three elements
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
  // console.log('Button Clicked');

  /*
    here each button is in the for loop and all of them has a eventlistener
    
    classlist is used to display all the classes in the element here modal which contains its element
    it has multiple functions like add and remove which can be used to change/modify the class names in the element
    
    no need for the .[dot] notation because we are giving class name as input not as a selector
    
    */
  // modal.classList.remove('hidden');
  // overlay.classList.remove('hidden');
}

//when 'x' button is clicked modal content and the overlay neeeds to be hidden so
//we are adding hidden class to it again
btnCloseModal.addEventListener('click', () => closeButton());
// modal.classList.add('hidden');
// overlay.classList.add('hidden');

//it should exit the content if the overlay is clicked

//but we are writing the same thing twice so better make it a function and call it
overlay.addEventListener('click', () => closeButton());
// modal.classList.add('hidden');
// overlay.classList.add('hidden');

//creating the function to call for hiding the modal and overlay
function closeButton() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

//there are different types of events like keyup,keydown,...

//when any key is pressed in keyboard a event object is created by javascript anf the function is called
//we can give any name as a parameter to function but we give e to say its a event(even event is acceptable)
//e contains all the info about the event and since e is a object the properties can be accessed by obj.key
//to know which key was press e.key will give the key pressed
document.addEventListener('keydown', function (e) {
  //return the key pressed in the event
  console.log(e.key);

  //it should work only if esc key is pressed and if the content is not hidden
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeButton();
  }
});
