const mapOpen = document.querySelector('.modal-map-show');
const mapPopup = document.querySelector('.modal-map');
const mapClose = document.querySelector('.map-close-button');

mapOpen.addEventListener('click', function (evt) {
	evt.preventDefault();
	mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		if (mapPopup.classList.contains('modal-show')) {
			evt.preventDefault();
			mapPopup.classList.remove('modal-show');
		}
	}
});