
        document.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault(); 

            const phoneNumber = document.getElementById('phone_number').value;
            const password = document.getElementById('password').value;

            
            localStorage.setItem('phone_number', phoneNumber);
            localStorage.setItem('password', password);

            alert('Form submitted successfully!');
        });

        
        document.getElementById('showPassword').addEventListener('click', function() {
            const passwordField = document.getElementById('password');
            const currentType = passwordField.type;
            
            if (currentType === 'password') {
                passwordField.type = 'text'; 
                this.textContent = 'Hide Password'; 
            } else {
                passwordField.type = 'password'; 
                this.textContent = 'Show Password'; 
            }
        });
       
function saveFormData(formData) {
    localStorage.setItem('formData', JSON.stringify(formData));
}


function getFormData() {
    const formData = localStorage.getItem('formData');
    return formData ? JSON.parse(formData) : null;
}
   