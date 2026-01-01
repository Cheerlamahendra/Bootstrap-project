let submit = document.getElementById("signUp");

submit.addEventListener("submit",function(e){
    e.preventDefault();

    let formData = {};
    const username = document.getElementsByName("name")[0].value;
    const mobileNo = parseInt(document.getElementsByName("mobile")[0].value);
    const email = document.getElementsByName("email")[0].value;
    const password = document.getElementsByName("password")[0].value;

    console.log(username);
      console.log(mobileNo);
        console.log(email);
          console.log(password);
   fetch("http://localhost:8080/mahitech99/user/signUp",
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
                window.location.href = "login.html";

            }
        }).catch(function(error)
        {
            console.log("error",error);
            alert("server is down so please try again");
        })
          



})  
 