import axios from 'axios';

const callbackForm = document.querySelector('.callback__form');
console.dir(callbackForm);

const TOKEN = '6755016444:AAE9QL601cMD22Yv8nzXsELemNX_mJQKASQ';
const CHAT_ID = '';
const URL_TG = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

callbackForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let message = `<b>Контактна інформація з сайту</b> \n`;
  message += `<b>${callbackForm.tell.value}</b>`;

  axios.post(URL_TG, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message,
  });
  console.log(message);
  callbackForm.tell.value = '';
}
