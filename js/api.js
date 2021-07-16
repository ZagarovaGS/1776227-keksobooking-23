const loadData = (url, onSuccess, onFail) => {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Не удалось получить данные. Попробуйте еще раз');
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onFail(error);
    });
};

const saveData = (url, body, onSuccess, onFail) => {
  fetch(url, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Не удалось получить данные. Попробуйте еще раз');
    })
    .then(() => {
      onSuccess();
    })
    .catch((error) => {
      onFail(error);
    });
};

const ERROR_TEMPLATE = document
  .querySelector('#error')
  .content.querySelector('.error');

const error = ERROR_TEMPLATE.cloneNode(true);
const ERROR_BTN = error.querySelector('.error__button');

const showError = () => document.body.append(error);

const handleError = () => error.classList.add('hidden');
const onErrorEsc = (evt) => {
  if (evt.keyCode === 27) {
    handleError();
  }
};

document.addEventListener('keydown', onErrorEsc);
document.addEventListener('mousedown', handleError);
ERROR_BTN.addEventListener('click', handleError);
export { loadData, saveData, showError };
