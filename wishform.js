function savedata(){
    const email = document.getElementById("email").value
    const namebook = document.getElementById("namebook").value
    const author = document.getElementById("nameauthor").value
    const isbn = document.getElementById("isbn").value

    if(email=="" || namebook=="" || author=="" ||isbn==""){
        alert("Please Fill all the required fields")
        return false;
    }
    else{
        alert("Successfully requested for "+namebook+". You will be notified based on it's availability soon!")
        document.location.href="./wishlistform.html";
        return true;
    }
}
