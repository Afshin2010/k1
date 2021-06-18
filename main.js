function addUser() {
    new_user = document.getElementById("user_name").value;
    localStorage.setItem("un", new_user)
    window.location = "index2.html";
}