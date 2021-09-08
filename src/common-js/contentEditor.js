/* Stephen's Simple CMS
    This is about as simple as it gets!
    This is useful for initial builds or brand new pages - for ongoing content management, something like Netlify CMS would be more appropriate.

    Here's how it works:
    1) In code, add the contenteditable attribute to any HTML elements you want to be editable. N.B. I don't recommend using it on interactive elements like buttons
    2) End user will then be able to edit that content when they're viewing the site
    3) Changes they make to content are saved in their browser's localStorage, so do not that this is device and browser specific!
    4) They can then click "Copy All Changes" in the menu to copy all changed content fields from localStorage to their clipboard in JSON format
    5) This can then be pasted into an email to the developer to update content accordingly

    TODO: Send JSON data automatically, either opening a new email, or even better via an API/using Zapier
    TODO: Better way of ensuring fields (and therefore content) are consistent across build versions, so if the end user is editing a live version but the dev is working on a local version/different branch they will still be able to match the content data they receive to the right fields
    TODO: Automatically update the content and save it to code without any dev interaction. This is the dream.
*/

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
