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

      //cookies section
      
      setCookie = (cName, cValue, expDays) => {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + ";" + expires + "; path=/";
      }
    
      document.getElementById("cookiesBtn").addEventListener("click", () => {
        document.querySelector("#cookies").style.display = "hidden";
        setCookie("cookie", true, 30);
      }) 

