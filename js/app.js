let spinnerWrapper = document.querySelector('.spinner-wrapper');
window.addEventListener('load', function () {
    setTimeout(function(){ spinnerWrapper.parentElement.removeChild(spinnerWrapper);}, 500);
    // spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});