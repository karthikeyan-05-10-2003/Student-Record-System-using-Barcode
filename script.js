document.addEventListener('DOMContentLoaded', function () {
    const subscriptionForm = document.getElementById('subscription-form');

    subscriptionForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;

        // You can perform further validation and subscription logic here
        // For this example, we'll just display the entered email in an alert
        alert(`OTP SEND SUCCESSFULLY !\nEmail: ${email}`);
    });
});
