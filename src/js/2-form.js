const formData = {
    email: "",
    message: "",
}

const localStorageKey = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const input = form.elements.email;
const textarea = form.elements.message;

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";
  input.value = formData.email;
  textarea.value = formData.message;
}

form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  });


  form.addEventListener("submit", (event) => {
    event.preventDefault();
      
    if (!formData.email || !formData.message) {
       alert("Fill please all fields");
       return;
    }

    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
    formData.email = "";
    formData.message = "";
  });