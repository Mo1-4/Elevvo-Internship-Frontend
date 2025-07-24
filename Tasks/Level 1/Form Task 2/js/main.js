document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault()
    const fullName = document.getElementById("fullname").value.trim()
    const email = document.getElementById("email").value.trim()
    const subject = document.getElementById("subject").value.trim()
    const message = document.getElementById("message").value.trim()
    const errorMessage = document.querySelector(".error")

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(emailRegex.test(email)){
        if (fullName.length < 20){
            errorMessage.innerHTML = "Full Name Field is lower than 20 Character"
        } else if (subject.length < 5){
            errorMessage.innerHTML = "Subject Field is lower than 5 Character"
        }else if (message.length < 30){
            errorMessage.innerHTML = "Message Field is lower than 30 Character"
        } else{
            errorMessage.style.color = "lightgreen"
            errorMessage.innerHTML = "Form Valid!"
            setTimeout(() =>{
                window.location.reload();
            }, 3000)
        }
    } else{
        errorMessage.innerHTML = "Email Field is Invalid"
    }
})