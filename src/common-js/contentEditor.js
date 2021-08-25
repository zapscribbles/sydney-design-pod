// Prepare some helper data for identifying elements etc
var buildVersion = document.currentScript.getAttribute('buildVersion');
var urlPathArray = window.location.pathname.split('/');
var urlSlug = urlPathArray[urlPathArray.length - 2];
var lsPrefix = `sdp_${buildVersion}_${urlSlug}_`;
var editableElements = document.querySelectorAll('[contenteditable]');

// Add an identifying class for each element and event listeners for saving changes
// TODO: Each build version will trigger new content to be saved/loaded, this could cause problems (if I make code changes but Jill isn't done with content changes and "loses" them)
editableElements.forEach(function (element, index) {
    // Add identifier class
    var identifyingClass = 'editable-' + index;
    element.classList.add(identifyingClass);

    // Update content with previously saved content (if any exists)
    var savedContent = window.localStorage.getItem(lsPrefix + identifyingClass);
    if (savedContent != null) {
        element.innerText = savedContent;
    }

    // Add event listener
    element.addEventListener('keyup', function (e) {
        contentEdited(e.target, identifyingClass);
    });
});

function contentEdited(element, identifyingClass) {
    window.localStorage.setItem(lsPrefix + identifyingClass, element.innerText);
}
