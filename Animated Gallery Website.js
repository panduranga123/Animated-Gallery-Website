const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.querySelector('.close-button');
const lightboxCaption = document.getElementById('lightbox-caption');

galleryItems.forEach(item => {
    const img = item.querySelector('img');
    const overlay = item.querySelector('.overlay');
    const title = overlay.querySelector('h3').textContent;
    const description = overlay.querySelector('p').textContent;

    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightboxCaption.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
        document.body.style.overflow = 'hidden';
    });
});

closeButton.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
});

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
});
