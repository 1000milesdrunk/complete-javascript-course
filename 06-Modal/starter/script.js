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
for (let i = 0; i < btnsOpenModal.length; i++)
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
