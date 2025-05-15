const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.getElementById("form").addEventListener("submit",function(event){

    alert("This is for testing");
    let text = document.getElementById("text").value;
    let email = document.getElementById("email").value;
    let lastname = document.getElementById("lname").value;

    alert(`student number is: ${snumber}\n
        firstname is: ${firstname}\n
        lastname is: ${lastname}\n
        `);
});