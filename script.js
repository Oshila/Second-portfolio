'use strict'

// element toggle funtion

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar varibles

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle funcationality for mobile 

sidebar.addEventListener("click", function () { elementToggleFunc(sidebar); });

// contact for variables

const form = document.querySelector("[data-form]");
const formInput = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");


// add event to all form input field

for (let i = 0; i < formInput.length; i++) {
  formInput[i].addEventListener("input", function () {

    if (form.checkVisibility()) {
      formBtn.removeAttribute("disabled");
    }

    else {
       formBtn.setAttribute("disabled", "")
    }
  });
}