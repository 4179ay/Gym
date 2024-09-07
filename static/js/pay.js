document.addEventListener("DOMContentLoaded", function () {
    const paymentMethodSelect = document.getElementById("payment-method");
    const cardPaymentSection = document.getElementById("card-payment");
    const upiPaymentSection = document.getElementById("upi-payment");

    // Listen for changes in the Payment Method select field
    paymentMethodSelect.addEventListener("change", function () {
        if (paymentMethodSelect.value === "card") {
            // Show the Card Payment section and hide the UPI Payment section
            cardPaymentSection.style.display = "block";
            upiPaymentSection.style.display = "none";
        } else if (paymentMethodSelect.value === "upi") {
            // Show the UPI Payment section and hide the Card Payment section
            upiPaymentSection.style.display = "block";
            cardPaymentSection.style.display = "none";
        }
    });
});
