import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.rtl.min.css";  
import "jquery/dist/jquery.min.js"; 
import $ from 'jquery'; 
import "@popperjs/core";  
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Css/style.css";  
import "./jquery.plugin";
import "./jquery.countdown.min.js";
import "./jquery.countdown-ar";

$(function(){
        var day = new Date();
        day = new Date("January 01, 2023");
        $("#dayy").countdown({until: day, format:"odHMS"});
        
        // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
    


});