export const validatePassword = paswword => {
  const testPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
  return testPassword.test(paswword);
};

export const passwordVisibility = (evt, id) => {
  const passwordInput = document.getElementById(`${id}`);
  const visibleIcon = evt.currentTarget.firstElementChild;
  const nonVisibleIcon = visibleIcon.nextElementSibling;

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    visibleIcon.classList.toggle('hidden');
    nonVisibleIcon.classList.toggle('hidden');
  } else {
    passwordInput.type = 'password';
    visibleIcon.classList.toggle('hidden');
    nonVisibleIcon.classList.toggle('hidden');
  }
};
