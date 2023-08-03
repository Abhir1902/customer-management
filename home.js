function setList(){
    var bearerToken = localStorage.getItem("token"); 
    var myHeaders = new Headers ();
    myHeaders.append("Authorization",`Bearer ${bearerToken}`);
    var requestOptions = {
        method: "GET",
        headers: myHeaders,
    };
    fetch("https://cors-anywhere.herokuapp.com/https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list", requestOptions) 
        .then(res=>{
            if(!res.ok){
                throw new Error(res.status);
            }
            return res.json();
        })
        .then(data => {
            // const  = document.
            const table = document.getElementById("customerlist").getElementsByTagName('tbody')[0];
            data.forEach(element => {
                var row = table.insertRow();
                var firstName = row.insertCell();
                var lastName = row.insertCell();
                var address = row.insertCell();
                var city = row.insertCell();
                var state = row.insertCell();
                var email = row.insertCell(); 
                var phone = row.insertCell();
                var action = row.insertCell();
                var update_btn = document.createElement("button");
                update_btn.className = "action_btn";
                update_btn.addEventListener("click", handleUpdateClick(element.uuid));
                var delete_btn = document.createElement("button");
                delete_btn.className = "delete_btn"; 
                delete_btn.addEventListener("click", handleDeleteClick(element.uuid));
                // Set the content of each cell with customer data
                
                firstName.textContent = element.first_name;
                lastName.textContent = element.last_name;
                address.textContent = element.address;
                city.textContent = element.city;
                state.textContent = element.state;
                email.textContent = element.email; 
                phone.textContent = element.phone;
                action.appendChild(update_btn);
                action.appendChild(delete_btn);
                console.log(element);
            });
        })
        .catch(err=>{
            alert(err.message); 
        })

};

setList();

function handleDeleteClick(uuid){
    var deleteHeaders = new Headers();
    var bearerToken = localStorage.getItem("token"); 
    deleteHeaders.append("Authorization",`Bearer ${bearerToken}`);
    var requestOptions = {
        method: "POST", 
        headers: deleteHeaders
    }
    fetch(`https://cors-anywhere.herokuapp.com/https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=delete&uuid=${uuid}`, requestOptions)
        .then(res=>{
            return res.text();
        })
        .then(data => {
            console.log(data);
        })
        .catch(err=>{
            console.log(err.message);
        })
}; 
function handleUpdateClick(uuid){
    
};