const eyesBtn = document.querySelector('.js-eyes-btn');
const icon = eyesBtn.querySelector('i');
const fieldPassword = document.querySelector('.subscribe-form-password');
const fieldEmail = document.querySelector('.subscribe-form-email');
const jsForm = document.querySelector('.js-form');
const sendBtn = document.querySelector('.subscribe-form-btn');

// вешаем обработчик события
eyesBtn.addEventListener('click', function() {
    if (icon.classList.contains('fa-lock')) {
        fieldPassword.setAttribute('type', 'text');
        icon.classList.remove('fa-lock');
        icon.classList.add('fa-unlock-alt');
    } else {
        fieldPassword.setAttribute('type', 'password');
        icon.classList.remove('fa-unlock-alt');
        icon.classList.add('fa-lock');
    }
});

jsForm.addEventListener('submit', formSubmit);

sendBtn.addEventListener('click', formSubmit);

function formSubmit(event) {
    event.preventDefault();

    if (fieldEmail.value && fieldPassword.value) {
        alert('Форма отправлена!');
        fieldEmail.value = '';
        fieldPassword.value = '';
    } else {
        alert('Заполните все поля!');
    }
}
