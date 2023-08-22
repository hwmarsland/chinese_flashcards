/*
USEFUL GUI FUNCTIONS

This file contains functions that are generally useful for interacting with GUI elements

Harris Marsland
*/


// Function to hide a given GUI element
function hideElement(element) {
    element.style.opacity = 0;
    element.style.pointerEvents = 'none';
}

// Function to show a given GUI element at a given opacity
function showElement(element, opacity) {
    element.style.opacity = opacity;
    element.style.pointerEvents = 'all';
}