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

export { loadData, saveData };
