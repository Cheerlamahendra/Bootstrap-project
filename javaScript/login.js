const submit = document.getElementById("login")



submit.addEventListener("submit",function(e)
{
    e.preventDefault();
    const email1 = document.getElementsByName("email")[0].value;
    const password1 = document.getElementsByName("password")[0].value;

    console.log(email1);
    console.log(password1);

    fetch("https://springbootlogincredentials-production.up.railway.app/mahitech99/user/login",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
                email:email1,
                password:password1})
         }).then(function(response)
        {
            return response.json();
        }).then(function(data)
        {
            if(data.success == "true")
            {
                alert(`${data.message}`)
                console.log(data.username);
                localStorage.setItem("username",data.username);
                window.location.href = "index.html";
               

            }
            else
            {
                alert(`${data.message}`)
            }
        }).catch(function(error)
        {
            console.error("error",error);
            alert("server is down so please try aagain later")
        })
   
    
    

});
