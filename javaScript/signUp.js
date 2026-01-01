let submit = document.getElementById("signUp");
let error = document.getElementById("error");

submit.addEventListener("submit",function(e){
    e.preventDefault();

    let formData = {};
    const username = document.getElementsByName("name")[0].value;
    const mobileNo = parseInt(document.getElementsByName("mobile")[0].value);
    const email = document.getElementsByName("email")[0].value;
    const password = document.getElementsByName("password")[0].value;

     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
      if (!emailPattern.test(email)) {
       
        error.innerText = " Invalid email format";
        error.style.color = "red";
        return;
      }
       if (!passwordPattern.test(password)) {
            
            error.innerText = " Password must be 8 characters, include uppercase, lowercase, number & special character";
            error.style.color = "red";
            return;
         }
    error.style.color = "green";
    error.innerText = "Email and password are valid";


    console.log(username);
      console.log(mobileNo);
        console.log(email);
          console.log(password);
   fetch("https://springbootlogincredentials-production.up.railway.app/mahitech99/user/signUp",
        {method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                username:username,
                mobile:mobileNo,
                email:email,
                password:password})
        }).then(function(response)
        {
            return response.json();
        }).then(function(data)
        {
           console.log(data);
           if(data.success == "true")
            {
              alert(`${data.message}`)
              window.location.href = "login.html";
            } 
            else
            {
                alert(`${data.message}`)
                //window.location.href = "login.html";

            }
        }).catch(function(error)
        {
            console.log("error",error);
            alert("server is down so please try again");
        })
          



})  
 