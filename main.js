const eyesBtn = document.querySelector('.js-eyes-btn');
const icon = eyesBtn.querySelector('i');
const fieldPassword = document.querySelector('.subscribe-form-password');

// вещаем обработчик события
eyesBtn.addEventListener('click', function() {
    if (icon.classList.contains('fa-eye')) {
        fieldPassword.setAttribute('type', 'text');
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        fieldPassword.setAttribute('type', 'password');
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});
