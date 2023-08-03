
const form = document.getElementById("form"); 
form.addEventListener("submit", function(e){
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    var login_id = document.getElementById("login_id").value;
    var password = document.getElementById("password").value;
    let raw = {
        "login_id":login_id,
        "password":password
    }
    console.log(raw);
    var requestOptions = {
        method: 'POST',
        // mode: 'no-cors',
        headers: myHeaders,
        body: JSON.stringify(raw),
        redirect: 'follow'
    };

    fetch("https://cors-anywhere.herokuapp.com/https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp", requestOptions)
        .then(res=>{
            // alert(res.ok);
            if (!res.ok) {
                // console.log(res.status);
                // if (res.status === 500) {
                throw new Error("Invalid authentication");
            }
            return res.json();
        })
        .then(data => {
            localStorage.setItem('token', data['access_token']);
            window.location.href = "home.html";
        })
        .catch(err => {
            // alert(err.message); 
            alert(err.message);
        });
        
});

function displayToken(){
    
};
