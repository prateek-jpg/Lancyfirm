
  var firebaseConfig = {
    apiKey: "AIzaSyD9QTz5kVE6iQoDRKveRAsBONjv2qRnEKU",
    authDomain: "lancyfirm2.firebaseapp.com",
    projectId: "lancyfirm2",
    storageBucket: "lancyfirm2.appspot.com",
    messagingSenderId: "408040379421",
    appId: "1:408040379421:web:ce832d8297ee410cee62f4",
    measurementId: "G-FCYW8T314D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
   
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, subject, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }