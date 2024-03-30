import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputBtn = document.querySelector('button[type="submit"]');
const radioBtn = document.querySelectorAll('input[type="ratio"]');

inputBtn.addEventListener('click', handleClick);

let selectedValue = null;

function handleClick() {
  if (input.value < 0) {
    return;
  } else {
    radioBtn.forEach(item => {
      if (item.checked) {
        selectedValue = item.value;
      }
    });
    promise = new Promise((resolve, reject) => {
      if (selectedValue !== null) {
        resolve(selectedValue);
      } else {
        reject(selectedValue);
      }
    });
  }
}
