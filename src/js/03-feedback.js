import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const feedbackFormStateKey = 'feedback-form-state';

const saveFormData = () => {
  const feedbackFormState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(feedbackFormStateKey, JSON.stringify(feedbackFormState));
};

const updateFormFields = () => {
  const feedbackFormState = JSON.parse(
    localStorage.getItem(feedbackFormStateKey)
  );
  if (feedbackFormState) {
    emailInput.value = feedbackFormState.email;
    messageInput.value = feedbackFormState.message;
  }
};

const clearFormData = () => {
  localStorage.removeItem(feedbackFormStateKey);
  emailInput.value = '';
  messageInput.value = '';
};

const saveFormDataThrottled = throttle(saveFormData, 500);

form.addEventListener('input', saveFormDataThrottled);
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log({ email: emailInput.value, message: messageInput.value });
  clearFormData();
});

updateFormFields();