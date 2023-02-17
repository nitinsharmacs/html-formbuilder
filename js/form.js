const formInput = ({ label, name, placeholder, type }) => {
  const inputLabel = document.createElement('label');
  inputLabel.innerText = label;
  inputLabel.for = name;
  inputLabel.classList.add('form-label');

  const input = document.createElement('input');
  input.type = type;
  input.name = name;
  input.placeholder = placeholder;
  input.classList.add('form-input');

  const formSection = document.createElement('section');
  formSection.classList.add('form-details-section');
  formSection.appendChild(inputLabel);
  formSection.appendChild(input);

  return formSection;
};

const formLogo = ({ src, name: alt }) => {
  const logo = document.createElement('img');
  logo.src = src;
  logo.alt = alt;
  logo.classList.add('form-logo');
  return logo;
};

const formButton = ({ label }) => {
  const button = document.createElement('input');
  button.type = 'submit';
  button.value = label;
  button.classList.add('form-btn', 'primary');

  return button;
};

const formHeader = (headerDetails) => {
  const formName = document.createElement('h1');
  formName.innerText = headerDetails['form-name'];

  const nameDiv = document.createElement('div');
  nameDiv.classList.add('form-name');

  const logo = formLogo(headerDetails['form-logo']);
  const header = document.createElement('header');

  header.appendChild(logo);
  header.appendChild(nameDiv);
  return header;
};

const formInputs = (formInputs) => {
  const formInputsElement = document.createElement('div');
  formInputsElement.classList.add('form-details');

  formInputs.forEach(formInputDetail => {
    formInputsElement.appendChild(formInput(formInputDetail));
  });

  return formInputsElement;
};

const formControls = (controls) => {
  const controlsElement = document.createElement('div');
  controlsElement.classList.add('form-controls');

  controls.forEach(control => {
    controlsElement.appendChild(formButton(control));
  });

  return controlsElement;
};

const createForm = (form, targetId) => {
  const header = form['form-header'] && formHeader(form['form-header']);
  const inputs = formInputs(form['form-inputs']);
  const controls = formControls(form['form-controls']);

  const formElement = document.createElement('form');
  formElement.classList.add('form-body', 'form-shadow');

  header && formElement.appendChild(header);
  formElement.appendChild(inputs);
  formElement.appendChild(controls);

  document.getElementById(targetId).appendChild(formElement);

  const onFormSubmit = (event) => {
    form['onformsubmit'](event);
    formElement.removeEventListener('submit', onFormSubmit);
  };

  form['onformsubmit'] && formElement.addEventListener('submit', onFormSubmit);
};
