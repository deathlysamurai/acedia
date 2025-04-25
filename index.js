document.querySelector('.contact-form').addEventListener('submit', function (e) {
e.preventDefault();

const data = {
    fields: [
    { name: "name", value: document.querySelector('#name').value },
    { name: "email", value: document.querySelector('#email').value },
    { name: "phone", value: document.querySelector('#phone').value },
    { name: "pharmacy_name", value: document.querySelector('#pharmacy').value },
    { name: "address", value: document.querySelector('#address').value },
    { name: "top_5_plans", value: document.querySelector('#plans').value },
    { name: "consultation", value: document.querySelector('#consultation').checked ? "Yes" : "No" },
    { name: "ivr_interest", value: document.querySelector('#ivr').checked ? "Yes" : "No" }
    ]
};

const mailtoLink = `mailto:Getinsured@acediahealth.com?subject=Partnership Interest&body=${encodeURIComponent(`
  Name: ${data.fields[0].value}
  Email: ${data.fields[1].value}
  Preferred Phone Number: ${data.fields[2].value}
  Pharmacy Name: ${data.fields[3].value}
  Pharmacy Address: ${data.fields[4].value}
  Top 5 Plans: ${data.fields[5].value}
  Consultation: ${data.fields[6].value}
  IVR Interest: ${data.fields[7].value}
`)}`;
window.location.href = mailtoLink;

// fetch('https://api.hsforms.com/submissions/v3/integration/submit/YOUR_PORTAL_ID/YOUR_FORM_GUID', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//   .then(res => {
//     if (res.ok) {
//       showFormMessage('success', '✅ Thank you! Your message has been submitted.');
//       document.querySelector('.contact-form').reset(); // Clear form
//     } else {
//       showFormMessage('error', '⚠️ Something went wrong. Please try again or call us.');
//     }
//   })
//   .catch(err => {
//     showFormMessage('error', '❌ Error submitting the form. Please check your connection.');
//   });
});

function showFormMessage(type, message) {
    const msgBox = document.getElementById('form-message');
    const msgText = document.getElementById('form-message-text');
  
    msgBox.className = `form-message ${type}`;
    msgText.textContent = message;
    msgBox.style.display = 'block';
}

function hideFormMessage() {
    const msgBox = document.getElementById('form-message');
    msgBox.style.display = 'none';
}