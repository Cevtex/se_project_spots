// ====================================================================
// ELEMENT SELECTION
// ====================================================================

// --- Edit Profile Modal Elements ---
const editProfileBtn = document.querySelector('.profile__edit-button');
const editProfileModal = document.querySelector('.edit-profile-modal');
const editProfileCloseBtn = editProfileModal.querySelector('.modal__close-btn');

const editProfileForm = editProfileModal.querySelector('.modal__form');
const editProfileNameInput = editProfileModal.querySelector('#profile-name-input');
// Note: Using the correct HTML ID: #profile-description-input
const editProfileDescriptionInput = editProfileModal.querySelector('#profile-description-input'); 

// --- New Post Modal Elements ---
const newPostBtn = document.querySelector('.profile__add-button');
const newPostModal = document.querySelector('#new-post-modal');
const newPostCloseBtn = newPostModal.querySelector('.modal__close-btn');

const addCardFormElement = newPostModal.querySelector('.modal__form');
const cardTitleInput = newPostModal.querySelector('#card-title-input');
const cardImageLinkInput = newPostModal.querySelector('#card-image-input');

// --- Profile Elements (Displayed on Page) ---
const profileNameEl = document.querySelector('.profile__name');
// Note: Using the correct HTML class: .profile__description
const profileDescriptionEl = document.querySelector('.profile__description'); 


// ====================================================================
// MODAL HANDLERS
// ====================================================================

/**
 * Opens the given modal element by adding the 'modal_is-open' class.
 * @param {HTMLElement} modal The modal DOM element to open.
 */
function openModal(modal) {
    modal.classList.add('modal_is-open');
}

/**
 * Closes the given modal element by removing the 'modal_is-open' class.
 * @param {HTMLElement} modal The modal DOM element to close.
 */
function closeModal(modal) {
    modal.classList.remove('modal_is-open');
}


// Task 2: Handler for Edit Profile form submission
function handleEditProfileSubmit(evt) {
    evt.preventDefault();
    
    // Get new values from input fields
    const newName = editProfileNameInput.value;
    const newDescription = editProfileDescriptionInput.value;
    
    // Update profile elements on the page
    profileNameEl.textContent = newName;
    profileDescriptionEl.textContent = newDescription;
    
    // Close the modal
    closeModal(editProfileModal); // REFACTORED: Using reusable function
}

// Task 3: Handler for New Post form submission
function handleAddCardSubmit(evt) {
    evt.preventDefault();
    
    // Get and log both input values to the console.
    const title = cardTitleInput.value;
    const link = cardImageLinkInput.value;
    
    console.log(`New Post Title: ${title}`);
    console.log(`New Post Link: ${link}`);

    // Optional: Clear the form fields after submission
    addCardFormElement.reset(); 
    
    // Close the modal.
    closeModal(newPostModal); // REFACTORED: Using reusable function
}


// ====================================================================
// EVENT LISTENERS
// ====================================================================

// --- Task 1: Fill form fields and open modal (Edit Profile) ---
if (editProfileBtn && editProfileModal) {
    editProfileBtn.addEventListener('click', () => {
        // Assign the current profile textContent to the input value
        editProfileNameInput.value = profileNameEl.textContent;
        editProfileDescriptionInput.value = profileDescriptionEl.textContent; 
        
        openModal(editProfileModal); // REFACTORED: Using reusable function
    });
}

// --- Close button listeners (General Modal Toggling) ---
if (editProfileCloseBtn && editProfileModal) {
    editProfileCloseBtn.addEventListener('click', () => {
        closeModal(editProfileModal); // REFACTORED: Using reusable function
    });
}

if (newPostBtn && newPostModal) {
    newPostBtn.addEventListener('click', () => {
        openModal(newPostModal); // REFACTORED: Using reusable function
    });
}

if (newPostCloseBtn && newPostModal) {
    newPostCloseBtn.addEventListener('click', () => {
        closeModal(newPostModal); // REFACTORED: Using reusable function
    });
}

// --- Task 2: Edit Profile form submission listener ---
editProfileForm.addEventListener('submit', handleEditProfileSubmit);

// --- Task 3: New Post form submission listener ---
addCardFormElement.addEventListener('submit', handleAddCardSubmit);