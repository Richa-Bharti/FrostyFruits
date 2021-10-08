let spinnerWrapper = document.querySelector('.spinner-wrapper');
window.addEventListener('load', function () {
    // spinnerWrapper.style.display = 'none';
    setTimeout(function(){ spinnerWrapper.parentElement.removeChild(spinnerWrapper);}, 2000);
    // spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});