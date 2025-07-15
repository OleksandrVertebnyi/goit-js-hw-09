const STORAGE_KEY = 'feedback-form-state';


const formData = {
    email: '',
    message: '',
};

const form = document.querySelector('.feedback-form');


function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function loadFromLocalStorage() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);

            if (parsedData.email) {
                form.elements.email.value = parsedData.email;
                formData.email = parsedData.email;
            }
            if (parsedData.message) {
                form.elements.message.value = parsedData.message;
                formData.message = parsedData.message;
            }
        } catch (error) {
            console.error('Error parsing saved form data', error);
        }
    }
}

loadFromLocalStorage();

form.addEventListener('input', event => {
    const { name, value } = event.target;

    if (name === 'email' || name === 'message') {
        formData[name] = value.trim();
        saveToLocalStorage();
    }
});


form.addEventListener('submit', event => {
    event.preventDefault();


    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }


    console.log('Form submitted:', formData);


    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData.email = '';
    formData.message = '';
});


