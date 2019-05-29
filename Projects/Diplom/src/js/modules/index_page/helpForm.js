import maskInputPhone from '../phonemask';
import preparePostData from './preparePostData';

const helpForm = (selector) => {
    const form = document.querySelector(selector),
        inputEmail = form.querySelector('#join_email'),
        inputPhone = form.querySelector('#join_phone');

    inputEmail.addEventListener('input', (e) => {
        console.log(e.target);
        console.log(e.target.value);
        e.target.value = e.target.value.replace(/[а-яё]+/ig, "");
    });
    maskInputPhone(inputPhone, inputPhone.placeholder);

    // Post data
    preparePostData(selector, 'server.php');
 
};

export default helpForm;

