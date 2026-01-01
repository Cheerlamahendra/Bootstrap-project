document.addEventListener("DOMContentLoaded",function()
{
   const username1 = localStorage.getItem("username");
    if(username1)
    {
        document.getElementById("usernameSet").textContent = username1;

    }
})