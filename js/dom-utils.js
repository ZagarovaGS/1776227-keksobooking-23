import {ERROR_LOAD, KEYCODE_NUMBER} from './constants.js';
const AD_FORM = document.querySelector('.ad-form');
const MAP_FILTERES_FORM = document.querySelector('.map__filters');

const FORMS = [
  {
    element: AD_FORM,
    disabledClass: 'ad-form--disabled',
    selector: 'ad-form__element',
  },
  {
    element: MAP_FILTERES_FORM,
    disabledClass: 'map__filters--disabled',
    selector: 'select, fieldset',
  },
];
const removeExtraFeatures = (elements, actualFeatures) => {
  elements.forEach((element) => {
    const classes = element.classList[1].split('--');
    if (!actualFeatures || !actualFeatures.includes(classes[1])) {
      element.remove();
    }
  });
};

const randerPhotos = (element, photos) => {
  const fragment = document.createDocumentFragment();
  if (photos) {
    photos.forEach((photoUrl) => {
      const photoElement = element.cloneNode(true);
      photoElement.src = photoUrl;
      fragment.appendChild(photoElement);
    });
    element.remove();
  }
  element.remove();
  return fragment;
};

const setOrRemove = (element, value, text) => {
  if (!value) {
    element.remove();
    return;
  }
  element.textContent = text || value;
};

const switchForm = (form, className, selector, enable) => {
  if (enable) {
    form.classList.remove(className);
  } else {
    form.classList.add(className);
  }

  const controls = form.querySelectorAll(selector);
  controls.forEach((control) => {
    if (enable) {
      control.removeAttribute('disabled');
    } else {
      control.setAttribute('disabled', true);
    }
  });
};

const switchForms = (enable) => {
  FORMS.forEach(({ element, disabledClass, selector }) => {
    switchForm(element, disabledClass, selector, enable);
  });
};

const disableForms = () => switchForms(false);

const enableForms = () => switchForms(true);

const errorTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');

const ERROR = errorTemplate.cloneNode(true);
const ERROR_BTN = ERROR.querySelector('.error__button');
const ERROR_TEXT = ERROR.querySelector('.error__message');

const showError = () => document.body.append(ERROR);

const handleClick = () => ERROR.classList.add('hidden');
const onClickEsc = (evt) => {
  if (evt.keyCode === KEYCODE_NUMBER) {
    handleClick();
  }
};
ERROR_TEXT.textContent = ERROR_LOAD;

document.addEventListener('keydown', onClickEsc);
document.addEventListener('mousedown', handleClick);
ERROR_BTN.addEventListener('click', handleClick);

export {
  removeExtraFeatures,
  randerPhotos,
  setOrRemove,
  disableForms,
  enableForms,
  showError,
  ERROR,
  ERROR_BTN,
  ERROR_TEXT
};
