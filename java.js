// 1. Email Submission Logic (Pehle wala code)
document.getElementById('clientTaxForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents page reload
    
    const form = e.target;
    const formData = new FormData(form);
    const name = document.getElementById('clientName').value;
    
    // Send the data to your email via FormSubmit
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

// 2. WhatsApp Direct Message Logic (Naya code)
document.getElementById('whatsappDirectBtn').addEventListener('click', function() {
    // Form ki values ko get karna
    const name = document.getElementById('clientName').value.trim();
    const phone = document.getElementById('clientPhone').value.trim();
    const cnic = document.getElementById('cnic').value.trim();
    const service = document.getElementById('serviceRequired').value;
    const message = document.getElementById('clientMessage').value.trim();

    // Basic Validation: Ensure zaroori fields khali na hon
    if(!name || !phone || !service) {
        alert("WhatsApp par details bhejne se pehle Name, Phone aur Service zaroor select karein!");
        return; // Code yahin ruk jayega agar details mukammal nahi hain
    }

    // WhatsApp Message ka Format banana
    let whatsappText = `*New FBR Client Lead*\n\n`;
    whatsappText += `*Name:* ${name}\n`;
    whatsappText += `*Phone:* ${phone}\n`;
    
    if (cnic) {
        whatsappText += `*CNIC:* ${cnic}\n`;
    }
    
    whatsappText += `*Service Required:* ${service}\n`;
    
    if (message) {
        whatsappText += `*Details:* ${message}\n`;
    }

    // URL encode karna (takay spaces aur new lines theek se WhatsApp par show hon)
    const encodedText = encodeURIComponent(whatsappText);

    // Aap ka WhatsApp Number (with country code but no plus sign)
    const whatsappNumber = "923177616631"; 

    // WhatsApp Link generate karna aur open karna
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappURL, '_blank');
});
