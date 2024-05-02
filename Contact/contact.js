const firebaseConfig = {
    apiKey: "AIzaSyDVdJi4sZvFnTmTwcF0wGFyY1EEoKa_WIg",
    authDomain: "contact-form-21e34.firebaseapp.com",
    databaseURL: "https://contact-form-21e34-default-rtdb.firebaseio.com",
    projectId: "contact-form-21e34",
    storageBucket: "contact-form-21e34.appspot.com",
    messagingSenderId: "579953759531",
    appId: "1:579953759531:web:9981f5e06ebe462db8a16e",
    measurementId: "G-W1NP69VXKN"
  };
//initalize firebase
  firebase.initializeApp(firebaseConfig);
// reference your data base

var contactformDB=firebase.database().ref('contactForm')

document.getElementById('contactForm').addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    var name=getElementVal("name");
    var email=getElementVal("email");
    var Phone=getElementVal("Phone");
    var city=getElementVal("city");

    saveMessages(name,email,Phone,city);

    // //enable alert
    // document.querySelector('.alert').style.display = "block";
    // //remove alert
    // setTimeout(() =>{
    //     document.querySelector('.alert').style.display = "none";
    // }, 3000);
    // //reset form
    document.getElementById('contactForm').reset();
}

const saveMessages=(name,email,Phone,city) =>{
    var newContactForm=contactformDB.push();

    newContactForm.set({
        name : name,
        email : email,
        Phone : Phone,
        city : city,
    })
};

const getElementVal=(id) =>{
    return document.getElementById(id).value;
};