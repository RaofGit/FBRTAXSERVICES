// Mobile Menu Toggle Logic
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if(mobileMenu) {
    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
}

// 1. Email Submission Logic (Redirect to Thanks Page)
const taxForm = document.getElementById('clientTaxForm');
if(taxForm) {
    taxForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        const form = e.target;
        const formData = new FormData(form);
        const btn = form.querySelector('.form-submit');
        
        // Button text change so user knows it's processing
        btn.innerText = "Submitting...";
        
        fetch(form.action, {
            method: 'POST',
            body: formData,
        }).then(response => {
            if(response.ok) {
                // Successful submission -> Redirect to thanks.html
                window.location.href = "thanks.html";
            } else {
                alert("Oops! Kuch galti ho gayi, please dobara koshish karein.");
                btn.innerText = "Submit Details";
            }
        }).catch(error => {
            alert("Network error! Please check your connection.");
            btn.innerText = "Submit Details";
        });
    });
}

// 2. WhatsApp Direct Message Logic
const whatsappBtn = document.getElementById('whatsappDirectBtn');
if(whatsappBtn) {
    whatsappBtn.addEventListener('click', function() {
        const name = document.getElementById('clientName').value.trim();
        const phone = document.getElementById('clientPhone').value.trim();
        const cnic = document.getElementById('cnic').value.trim();
        const service = document.getElementById('serviceRequired').value;
        const message = document.getElementById('clientMessage').value.trim();

        if(!name || !phone || !service) {
            alert("WhatsApp par details bhejne se pehle Name, Phone aur Service zaroor enter karein!");
            return; 
        }

        let whatsappText = `*New FBR Client Lead*\n\n`;
        whatsappText += `*Name:* ${name}\n`;
        whatsappText += `*Phone:* ${phone}\n`;
        if (cnic) { whatsappText += `*CNIC:* ${cnic}\n`; }
        whatsappText += `*Service Required:* ${service}\n`;
        if (message) { whatsappText += `*Details:* ${message}\n`; }

        const encodedText = encodeURIComponent(whatsappText);
        const whatsappNumber = "923177616631"; 
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
        
        window.open(whatsappURL, '_blank');
    });
}
