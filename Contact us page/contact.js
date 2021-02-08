jQuery(document).ready(function() {
  $("#contact__banner > div:gt(0)").hide();

  setInterval(function() { 
    $('#contact__banner > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#contact__banner');
  },  3000);

  var contactForm = document.forms.contactForm;
  var fname = contactForm.firstname;
  var lname = contactForm.lastname;
  var msg = contactForm.firstname;
  var msgDisplay = document.getElementById("thankyou")
  
  contactForm.onsubmit = processForm
  function processForm(){ 
    if(fname.value === "" || fname.value === null ){ 
      
      fname.style.background = "red";
      return false;
			shipping.focus();
     
		}
		if(lname.value === "" || lname.value === null) { 
			lname.style.background = "red";
			lname.focus();
			return false;
		}
		if(msg.value === "" || msg.value === null) { 
			msg.style.background = "red";
			msg.focus();
			return false;
		}
  
    msgDisplay.innerHTML="Thank you " + fname.value + " " + lname.value + " your message has been received!"

    return false;
  }

});

