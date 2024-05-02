function SignUpFunction(){
    email = document.getElementById("signup_email_field").value;
    pswd = document.getElementById("signup_pass_field").value;

    firebase.auth().createUserWithEmailAndPassword(email, pswd).then(function(){
        // console.log('User Created !! ');

        var user = firebase.auth().currentUser;

        user.updateProfile({
            photoURL: document.getElementById("signup_image_field").value,
            displayName: document.getElementById("signup_uname_field").value
        });

    
    }).catch(function(error){
        window.alert(error.message);
        console.log('Error !!!');
    });

}

firebase.auth().onAuthStateChanged(user => {
    if(user){
        window.open('index1.html', target="_self");
        document.title = "PROFILE PAGE";

    }
})