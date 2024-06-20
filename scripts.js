function showPaymentInfo() {
    document.getElementById("paymentModal").style.display = "block";
}

function closePaymentInfo() {
    document.getElementById("paymentModal").style.display = "none";
}

// Close the modal when clicking outside of the modal
window.onclick = function(event) {
    const modal = document.getElementById("paymentModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
