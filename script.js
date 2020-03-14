// Progression 1 
// Check username @
// create a function called as checkUserName() @
// username should not be empty  @
// username should be a minimum of 8 characters and above @
// username should be less than 15 characters @
// No space is allowed in username @
// username should not contain special characters @
// the function should return true if all the conditions above are validated. @
// return false if the validation fails @
function checkUserName(){
    var userName = document.getElementById("usertext").value;
    console.log(userName);
    var words = userName.split(' ');
    var regex = /^[A-Za-z0-9 ]+$/;
    var isValid = regex.test(userName);
    if((userName != null) && (userName.length >= 8 && userName.length < 15) && (words.length == 1) && (isValid))
        return true;
    return false;      
}

// Progression 2 
// Check mail
// create a function called as checkEmail() @
// only @ , . , _ [at,dot,underscore] is allowed @
// It can be alphanumeric in nature @
// return true if it passses all validation and false otherwise @
function checkEmail(){
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById("emailtext").value;
    return regex.test(email);;
}

// Progression 3
// Check password
// create a function called as checkPassword() @
// should be alphanumeric in nature @
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_] @
// return true else return false @
function checkPassword(){
    var password = "Likhi99";
    var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    return regex.test(password);
}


