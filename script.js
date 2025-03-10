document.getElementById('menu-toggle').addEventListener('click', function() { 
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
});

document.addEventListener('click', function(event) {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('menu-toggle');
    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
        sidebar.classList.remove('open');
    }
});

const sidebar = document.getElementById('sidebar');

sidebar.addEventListener('mouseleave', function() {
    sidebar.classList.remove('open');
});

const galleryContainer = document.querySelector('.gallery-container');
const previewImage = document.querySelector('.preview img');

galleryContainer.addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'IMG') {
        previewImage.src = event.target.src;
        previewImage.style.display = 'block';
    }
});

galleryContainer.addEventListener('mouseleave', function() {
    previewImage.style.display = 'none';
});
