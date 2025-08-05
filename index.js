let formdata=document.querySelector(".form")
let submitButton=document.querySelector(".button")
let errorMessages=document.querySelectorAll(".error-message")
let emptyFields=document.querySelectorAll(".empty-field")
let showPasswordBtn=document.querySelector(".btn")
let firstName,lastName,email,password;
let fnTarget,lnTarget,eTarget,pwdTarget;
let field;
let fnflag, lnflag, eflag, pwdflag;

//Validation 
//its indicates leters a-z ,i indicates we can take captal leters also and + indicates we can allow more than one character
let nameRegx=/^[a-z]+$/i;
//([.-]?\w+) these means the characters before @ after must be .so after it is
let emailRegx=/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;
/* (?=.*\d) these will denotes atleast one digit ,(?=.[!@#$%^&]) these will define atleast one special character
(?=.[a-z]) these will define atleast one lower case letter, (?=.*[A-Z]) thesee will define atleast one uppercase(capital) letter
{8,} it will define atleast 8 characters(Ex: Vijay@123) */
let passwordRegx = /^(?=.*\d)(?=.*[!@#$%^&])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


//Hidding the error messages
for(let errorMessage of errorMessages){
  errorMessage.classList.add("d-none");
}

//Hidding Empty message like please fill the form
for(let emptyField of emptyFields){
  emptyField.classList.add("d-none")
}

formdata.addEventListener("keyup", (event)=>{
  event.preventDefault();
  //we can keep event.target.dataset.key it cannot shows name it shows like firstname and how many leters we can type increasing the count
  //we can keep event.target its coming input field code in console
  //we can keep event.target.value it shows when you are typing its also typing(possiblties or combination of name)
  field=event.target.dataset.key;
  switch(field){
    case "firstName":
      firstName=event.target.value;
      fnTarget=event.target
      break;
    case "lastName":
      lastName=event.target.value;
      lnTarget=event.target
      break;
    case "email":
      email=event.target.value;
      eTarget=event.target
      break;
    case "password":
      password=event.target.value;
      pwdTarget=event.target;
      break;
    default:
      firstName=lastName=email=password="";
      break;
    
  }
})

submitButton.addEventListener("click",(event)=>{
  event.preventDefault();
  console.log(firstName, lastName, email, password)

  //text means it checks the name is in nameRegx format or not, text is regular expression method(wether string is that patern or not)
  //firstName 

  if(firstName){
    emptyFields[0].classList.add("d-none")
    if (!nameRegx.test(firstName)){
      fnTarget.classList.add("error");
      errorMessages[0].classList.remove("d-none");
      fnflag=false;
    } else{
      fnTarget.classList.remove("error");
      errorMessages[0].classList.add("d-none");
      fnflag=true;
    }
  } else {
    emptyFields[0].classList.remove("d-none")
  }

//lastName

  if(lastName){
    emptyFields[1].classList.add("d-none")
    if (!nameRegx.test(lastName)){
      lnTarget.classList.add("error")
      errorMessages[1].classList.remove("d-none");
      lnflag=false;
    } else{
      lnTarget.classList.remove("error")
      errorMessages[1].classList.add("d-none")
      lnflag=true
    }
  } else {
    emptyFields[1].classList.remove("d-none")
  }
  
  //email

  if(email){
    emptyFields[2].classList.add("d-none")
    if(!emailRegx.test(email)){
      eTarget.classList.add("error")
      errorMessages[2].classList.remove("d-none");
      eflag=false;
    } else{
      eTarget.classList.remove("error")
      errorMessages[2].classList.add("d-none")
      eflag=true
    }
  } else{
    emptyFields[2].classList.remove("d-none")
  }

//password

  if(password){
    emptyFields[3].classList.add("d-none")
    if(!passwordRegx.test(password)){
      pwdTarget.classList.add("error")
      errorMessages[3].classList.remove("d-none");
      pwdflag=false;
    } else{
      pwdTarget.classList.remove("error")
      errorMessages[3].classList.add("d-none")
      pwdflag=true;
    }
  }else{
    emptyFields[3].classList.remove("d-none")
  }

  if(fnflag && lnflag && eflag && pwdflag){
    window.location.href="success.html";
    //these meaning is we can displayy login sucess after we can go back we can type data is not have
    fnTarget.value=lnTarget.value=eTarget.value=pwdTarget.value="";
  }
})


showPasswordBtn.addEventListener("click",(event)=>{
  event.preventDefault();
  if(pwdTarget.getAttribute("type")==="text"){
    pwdTarget.setAttribute("type","password");
  } else{
    pwdTarget.setAttribute("type","text");
  }
})