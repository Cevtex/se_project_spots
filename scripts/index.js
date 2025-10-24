// Selectors updated to match markup in index.html
const editProfileBtn = document.querySelector('.profile__edit-button');
const editProfileModal = document.querySelector('.edit-profile-modal');
const editProfileCloseBtn = editProfileModal ? editProfileModal.querySelector('.modal__close-btn') : null;

const newPostBtn = document.querySelector('.profile__add-button');
const newPostModal = document.querySelector('#new-post-modal');
const newPostCloseBtn = newPostModal ? newPostModal.querySelector('.modal__close-btn') : null;

// Add/remove open class with safety checks
if (editProfileBtn && editProfileModal) {
    editProfileBtn.addEventListener('click', () => {
        editProfileModal.classList.add('modal_is-open');
    });
}

if (editProfileCloseBtn && editProfileModal) {
    editProfileCloseBtn.addEventListener('click', () => {
        editProfileModal.classList.remove('modal_is-open');
    });
}

if (newPostBtn && newPostModal) {
    newPostBtn.addEventListener('click', () => {
        newPostModal.classList.add('modal_is-open');
    });
}

if (newPostCloseBtn && newPostModal) {
    newPostCloseBtn.addEventListener('click', () => {
        newPostModal.classList.remove('modal_is-open');
    });
}