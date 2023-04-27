/*
RMIT University Vietnam
Course: COSC2430 Web Programming
Semester: 2023A
Assessment: Assignment 1
Author: Gustav Joachim Elbroend
ID: S3995055
Acknowledgement: https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
 */

document.addEventListener('DOMContentLoaded', () => {
const toggleButtom = document.querySelector('.toggle-buttom');
const navbarMenues = document.getElementsByClassName('navbar-menues')[0];

toggleButtom.addEventListener('click', () => {
    navbarMenues.classList.toggle('active')
})

});