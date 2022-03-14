

(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_JfE7ENagpIBLReZLrb3AS');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_3c3cs23', 'template_ijcbghs', this)
            .then(function() {
                alert('已送出');
                console.log('SUCCESS!');
                document.getElementById("contact-form").reset();
                document.getElementById("check").disabled=true;
                setTimeout(function(){
                    document.getElementById("check").disabled=false;
                },10000)
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

// $('#exampleModa3').modal('show')