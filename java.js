document.getElementById('clientTaxForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents page reload
    
    const form = e.target;
    const formData = new FormData(form);
    const name = document.getElementById('clientName').value;
    
    // Send the data to your email
    fetch(form.action, {
        method: 'POST',
        body: formData,
    }).then(() => {
        // Show success alert
        alert(`Shukriya ${name}! Aapki details humein mil gayi hain. Hum jald aapse rabta karenge.`);
        form.reset(); // Clear the form
    }).catch(error => {
        alert("Oops! Kuch galti ho gayi, please dobara koshish karein.");
    });
});