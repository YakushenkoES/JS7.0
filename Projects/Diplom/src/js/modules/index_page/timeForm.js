import preparePostData from './preparePostData';
const timeForm = (selector) => {
    const form = document.querySelector(selector),
        inputEmail = form.querySelector('#schedule_email'),
        inputDate = form.querySelector('#schedule_meetdate');


        inputEmail.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[а-яё]+/ig, "");
        });
        inputDate.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d\/\.]+/ig, "");
        });
    // Post data
    preparePostData(selector, 'server.php');
};

export default timeForm;