// Optional JavaScript code to validate form input
var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  var name = document.querySelector('#name');
  var email = document.querySelector('#email');
  var address = document.querySelector('#address');
  var creditCard = document.querySelector('#credit-card');
  var expiryDate = document.querySelector('#expiry-date');
  var cvv = document.querySelector('#cvv');
  
  if (name.value.trim() === '' || email.value.trim() === '' || address.value.trim() === '' || creditCard.value.trim() === '' || expiryDate.value.trim() === '' || cvv.value.trim() === '') {
    event.preventDefault();
    alert('Please fill out all required fields.');
  }
});
