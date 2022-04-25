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

//to use all the three elements
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button Clicked');

    /*
    here each button is in the for loop and all of them has a eventlistener
    
    classlist is used to display all the classes in the element here modal which contains its element
    it has multiple functions like add and remove which can be used to change/modify the class names in the element
    
    no need for the .[dot] notation because we are giving class name as input not as a selector
    
    */
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

//when 'x' button is clicked modal content and the overlay neeeds to be hidden so
//we are adding hidden class to it again
btnCloseModal.addEventListener('click', function () {
  // modal.classList.add('hidden');
  // overlay.classList.add('hidden');

  closeButton();
});
//it should exit the content if the overlay is clicked

//but we are writing the same thing twice so better make it a function and call it
overlay.eventlistener('click', function () {
  closeButton();
  // modal.classList.add('hidden');
  // overlay.classList.add('hidden');
});

//creating the function to call for hiding the modal and overlay
function closeButton() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
