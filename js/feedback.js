const feedbackButton = document.querySelector('.button-feedback');
const feedbackPopup = document.querySelector('.modal-feedback');
const feedbackClose = document.querySelector('.modal-close-button');
const feedbackForm = document.querySelector('.feedback-form');
const feedName = document.querySelector('.feed-name');
const feedEmail = document.querySelector('.feed-email');
const feedText = document.querySelector('.feed-text');

feedbackButton.addEventListener('click', function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.add('modal-show');
});

feedbackClose.addEventListener('click', function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.remove('modal-show');
	feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener('submit', function (evt) {
	if (!feedName.value || !feedEmail.value || !feedText.value) {
		evt.preventDefault();
		feedbackPopup.classList.remove("modal-error");
		feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
		feedbackPopup.classList.add("modal-error");
	} 
});

window.addEventListener('keydown', function (evt){
	if (evt.keyCode === 27) {
		if (feedbackPopup.classList.contains('modal-show')) {
			evt.preventDefault();
			feedbackPopup.classList.remove('modal-show');
			feedbackPopup.classList.remove("modal-error");
		}
	}
});