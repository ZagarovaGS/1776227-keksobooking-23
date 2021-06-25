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
    if (!actualFeatures.includes(classes[1])) {
      element.remove();
    }
  });
};

const randerPhotos = (element, photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photoUrl) => {
    const photoElement = element.cloneNode(true);
    photoElement.src = photoUrl;
    fragment.appendChild(photoElement);
  });
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

export {
  removeExtraFeatures,
  randerPhotos,
  setOrRemove,
  disableForms,
  enableForms,
};
