const scriptURL = 'https://script.google.com/macros/s/AKfycbyBJucfFKzLGPO3SQ7ajVcc1Tq7VRJcZojR1vSluWy5SxMr4xmClfxi2POuALBxK59D/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank You For Subscribing!";
        setTimeout(function() {
            msg.innerHTML = "";
        }, 5000);  // Corrected: setTimeout with a capital "T"
        form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});
