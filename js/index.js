const formConfig = {
  "form-inputs": [
    {
      "name": "cellSize",
      "placeholder": "Enter cell size",
      "label": "Cell Size",
      "type": "number"
    },
    {
      "name": "width",
      "placeholder": "Enter game canvas width",
      "label": "Canvas width",
      "type": "number"
    },
    {
      "name": "height",
      "placeholder": "Enter game canvas height",
      "label": "Canvas height",
      "type": "number"
    }
  ],
  "form-controls": [
    {
      "type": "btn",
      "label": "Save",
    }
  ],
  "onformsubmit": (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    for (let index = 0; index < e.target.elements.length - 1; index++) {
      console.log(e.target.elements[index].value);
    }
  }
};

const main = () => {
  createForm(formConfig, 'form-dest');
};

window.onload = main;