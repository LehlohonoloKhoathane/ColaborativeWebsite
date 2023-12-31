//cookies section
document.addEventListener('DOMContentLoaded', function() {
    const cookiesBanner = document.getElementById('cookies-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const declineButton = document.getElementById('decline-cookies');
    function hideBanner() { cookiesBanner.style.display = 'none'; }
    function acceptCookies() {
        document.cookie = 'cookies_accepted=true; expires=' + new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000).toUTCString() + '; path=/';
        hideBanner();
    }
    function declineCookies() {
        hideBanner();
    }
    acceptButton.addEventListener('click', acceptCookies);
    declineButton.addEventListener('click', declineCookies);
    function checkCookiesAccepted() {
        if (document.cookie.indexOf('cookies_accepted=true') !== -1) { hideBanner(); }
        else { cookiesBanner.style.display = 'block'; }
    }
    checkCookiesAccepted();
});


//declaring variables 
    const myForm = document.getElementById('form');
    const nameInput = document.getElementById('fullName');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const commentInput = document.getElementById('comment');
    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const commentError = document.getElementById('commentError');

//creating a function to validate the name
    function validName(){
        const nameValue = nameInput.value;          //declaring the constant value to a name input
        if(!nameValue){                             //if the name section is empty
            nameError.textContent = 'Name is required.';    //returning the text content 
            return false;
        }else{
            nameError.textContent = '';
            return true;
        }
    }
    nameInput.addEventListener('input', function(){
        nameError.textContent = '';                 //clears the error message 
    })

    //creating a function to check the validity of a phone number
    function validPhone(){
        const phoneValue = phoneInput.value;
        const phoneValid = /^\d{10}$/;                  //phone format 
        if(!phoneValue){
            phoneError.textContent = 'Phone is required.';
            return false;
        }//else if(!phoneValid.test(phoneValue)){
           // phoneError.textContent = 'Please enter a valid phone number.';
            //return false;}
        else if(!phoneValid.test(phoneValue) || phoneValue.length !== 10){
            phoneError.textContent = 'Please enter a valid phone number.';
            return false;
        }else{
            phoneError.textContent = '';
            return true;
        }
    }
    phoneInput.addEventListener('input', function(){
        phoneError.textContent = '';                //clears the error message when typing
    })


    //creating a function to check the validity of an email
    function validEmail(){
        const emailValue = emailInput.value;
        const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,4}$/;        //email format
        if(!emailValue){
            emailError.textContent = 'Email is required.';
            return false;
        }else if(!emailValid.test(emailValue)){
            emailError.textContent = 'Please enter a valid email address.';
            return false;
        }else{
            emailError.textContent = '';
            return true;
        }
    }
    emailInput.addEventListener('input', function(){
        emailError.textContent = '';                 //clears the error message when typing
    })

    //creating a function to check if there is text in a comment section
    function validComment(){
        const commentValue = commentInput.value;
        if(!commentValue){
            commentError.textContent = 'Comment section is required.';
           return false;
       }else{
           commentError.textContent = '';
           return true;
       }
    }
    commentInput.addEventListener('input', function(){
        commentError.textContent = '';              //clears the error message 
    })

    //preventing the form submission if the values do not meet the requirement
    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const isNameValid = validName();
        const isPhoneValid = validPhone();      
        const isEmailValid = validEmail();
        const isCommentValid = validComment();

        //submitting the form if the values are all correct
        if(isNameValid && isPhoneValid && isEmailValid && isCommentValid){
            alert('Form Submitted successfully!');
            myForm.reset();
        }
    })

    function changeColor(link){
        link.style.color = 'skyblue';
    }
    function showFile(input) {
        let file = input.files[0];
        alert(`File name: ${file.name}`); 
      }


      ///////////////////////////////////////Cross Origin Resource Sharing part


 /*   
    //Cross Origin Resource Sharing
    document.getElementById("form").addEventListener("submit", function(event) {
        //const name = document.getElementById('fullName').value;
        //const email = document.getElementById('email').value;
        //const phone = document.getElementById('phone').value;
        //const comments = document.getElementById('comment').value;

        if(!isNameValid || !isPhoneValid || !isEmailValid || !isCommentValid) {
            alert('Please fill in all fields.');
            event.preventDefault(); // Prevent the form from submitting
        } else {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const formData = new FormData(this);       //create the new form from the previous one
    //initiating the fetch API request to the email URL using formspree
        fetch("https://formspree.io/f/xknlpqdq", { 
            method: "POST",
            headers: {                                                  //specifying that we expect to receive a JSON response
                "Accept": "application/json", // Specifying that we expect to receive a JSON file
            },
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log("Success:", data);
            alert("Form submitted!");
        })
        .catch(error => {
            console.error("Error:", error);
            alert("There was an error submitting the form. Please try again later.");
        });
    }
});
///////////////////////////////////////////////////////////////////////////////////////////////////
//cross origiin request 
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    const formData = new FormData(this);
    fetch('https://formspree.io/f/xknlpqdq', {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again later.');
    });
});
*/
function opeWindowPopup(){
    window.open('game.html', 'Game Window', 'width=600,height=400');
}
