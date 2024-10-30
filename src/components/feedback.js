import Inputmask from "../../dist/js/inputmask.min";
export class Feedback {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;
        this.nameInput = document.getElementById('name');
        this.nameInputError = document.getElementById('nameInput-error');
        this.emailInput = document.getElementById('email');
        this.emailInputError = document.getElementById('emailInput-error');
        this.phoneInput = document.getElementById('phone');
        this.phoneInputError = document.getElementById('phoneInput-error');
        this.textInput = document.getElementById('text');
        this.textInputError = document.getElementById('textInput-error');
        this.popUpElelemnt = document.getElementById('popup');
        Inputmask({"mask": "+375(99) 999-99-99"}).mask(this.phoneInput);

        document.getElementById('process-btn').addEventListener('click', this.sendData.bind(this));
        document.getElementById('popup-btn').addEventListener('click', this.showPopUp.bind(this));


    }

    showPopUp() {
        this.popUpElelemnt.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.getElementById('popup-btn-ok').addEventListener('click', ()=>{
            this.popUpElelemnt.style.display = 'none';
            document.body.style.overflow = '';
        });
    }
    validation() {
        let isValid = true;
        if (this.nameInput.value && this.nameInput.value.match(/^[А-Я][а-я]+\s*/)) {
            this.nameInput.classList.remove('is-invalid');
            this.nameInputError.style.display = 'none';
        } else {
            this.nameInput.classList.add('is-invalid');
            this.nameInputError.style.display = 'block';
            isValid = false;
        }
        if (this.emailInput.value && this.emailInput.value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
            this.emailInput.classList.remove('is-invalid');
            this.emailInputError.style.display = 'none';
        } else {
            this.emailInput.classList.add('is-invalid');
            this.emailInputError.style.display = 'block';
            isValid = false;
        }
        if (this.phoneInput.value) {
            this.phoneInput.classList.remove('is-invalid');
            this.phoneInputError.style.display = 'none';
        } else {
            this.phoneInput.classList.add('is-invalid');
            this.phoneInputError.style.display = 'block';
            isValid = false;
        }
        if (this.textInput.value) {
            this.textInput.classList.remove('is-invalid');
            this.textInputError.style.display = 'none';
        } else {
            this.textInput.classList.add('is-invalid');
            this.textInputError.style.display = 'block';
            isValid = false;
        }
        return isValid;
    }

    sendData() {
        if (this.validation()) {
            let body = {
                name: this.nameInput.value,
                email: this.emailInput.value,
                phone: this.phoneInput.value,
                text: this.textInput.value,
                date: new Date().toISOString()
            }
            let post = JSON.stringify(body)
            const url = "http://localhost:9090/api/registration";
            let xhr = new XMLHttpRequest()
            xhr.open('POST', url, true)
            xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
            xhr.send(post);

            xhr.onload = function () {
                if(xhr.status === 200) {
                    alert("Ваша заявка успешно отправлена");
                } else if (xhr.status === 400) {
                    alert("Серверная ошибка! Попробуйте позже.");
                }
            }

        }
    }

}