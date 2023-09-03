if (document.querySelector(".gallery__item")) {

	const container = document.querySelector(".container");

	const galleryItem = document.querySelectorAll(".gallery__item");

	const cleaner = () => {

		galleryItem.forEach((gallery) => {

			gallery.classList.remove("--active");

		});

	};

	galleryItem.forEach((gallery, i) => {

		gallery.addEventListener("click", () => {

			cleaner();

			gallery.classList.add("--active");

			if (i === 0) {

				container.style.backgroundColor = "#000";

			}

			if (i === 1) {

				container.style.backgroundColor = "#000";

			}

			if (i === 2) {

				container.style.backgroundColor = "#000";

			}

			if (i === 3) {

				container.style.backgroundColor = "#000";

			}

			if (i === 4) {

				container.style.backgroundColor = "#000";

			}

		});

	});

}

const dropContainer = document.getElementById('drop-container');
const fileInput = document.getElementById('file-input');
const imagePreview = document.getElementById('image-preview');

dropContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropContainer.style.border = '2px dashed #007bff';
});

dropContainer.addEventListener('dragleave', () => {
    dropContainer.style.border = '2px dashed #ccc';
});

dropContainer.addEventListener('drop', (e) => {
    e.preventDefault();
    dropContainer.style.border = '2px dashed #ccc';

    const file = e.dataTransfer.files[0];
    handleFile(file);
});

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    handleFile(file);
});

function handleFile(file) {
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please select a valid image file.');
    }
}
const draggableImages = document.querySelectorAll('.draggable');

draggableImages.forEach((image) => {
    image.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', image.id);
    });
});

draggableImages.forEach((image) => {
    image.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    image.addEventListener('drop', (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        const sourceImage = document.getElementById(data);

        if (sourceImage !== image) {
            // Swap the source and target images
            const sourceImageSrc = sourceImage.src;
            sourceImage.src = image.src;
            image.src = sourceImageSrc;
        }
    });
});