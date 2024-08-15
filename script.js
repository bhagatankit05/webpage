document.addEventListener('DOMContentLoaded', function () {
    const courseSelect = document.getElementById('course');
    const branchContainer = document.getElementById('branchContainer');

    // Show or hide the branch selection based on the selected course
    courseSelect.addEventListener('change', function () {
        if (courseSelect.value === 'btech') {
            branchContainer.style.display = 'block';
        } else {
            branchContainer.style.display = 'none';
        }
    });

    // Form validation and submission logic
    const registrationForm = document.getElementById('registrationForm');

    function validateForm() {
        let isValid = true;
        const inputs = registrationForm.querySelectorAll('input, select');

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                isValid = false;
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            }
        });

        return isValid;
    }

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateForm()) {
            alert('Registration Successful!');
            registrationForm.reset();
            branchContainer.style.display = 'none';  // Reset the branch selection display
        } else {
            alert('Please fill out all required fields correctly.');
        }
    });

    const inputs = registrationForm.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('input', function () {
            validateForm();
        });
    });
});
