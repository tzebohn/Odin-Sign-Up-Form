//Add event listener for form when submitted
const form = document.getElementById("signup-form")
form.addEventListener("submit", (e) => {

    e.preventDefault() //Stop form from submitting and refreshing page

    //Iterate through each input and validate it
    const fields = [ //Fields that we need to validate
      { id: 'first-name', message: 'First name is required.' }, 
      { id: 'last-name', message: 'Last name is required.' },
      { id: 'email', message: 'Please enter a valid email.' },
      { id: 'phone', message: 'Phone number must be 10 digits.' },
      { id: 'password', message: 'Password is required.' },
      { id: 'confirm-password', message: 'Passwords do not match.' }
    ];
    let validForm = true

    //Clear previous error message if there are any
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    document.querySelectorAll('input').forEach(input => input.classList.remove('invalid'));

    fields.forEach(field => {
        const input = document.getElementById(field.id)
        const value = input.value.trim()
        let isValid = true

        //Check if value is empty 
        if (!value) {
            isValid = false
        }

        //check password
        if (field.id === "confirm-password") {
            //Get password
            const password = document.getElementById("password")
            isValid = value === password.value.trim() && value.length > 0
        }

        //Show error message if not valid
        if (!isValid) {
            validForm = false
            input.classList.add('invalid')

            const error = document.createElement('div')
            error.className = 'error-message'
            error.textContent = field.message
            input.parentNode.appendChild(error)
        }
    });

    //Form is valid submit
    if (validForm) {
        console.log("Form is valid! Submitting...")
        form.submit()
    }
})
