const navBar = document.getElementById("navBar");
const blockNavBarSecundary = document.getElementById("navBarSecundary");

navBar.addEventListener('mouseenter', () => {
    blockNavBarSecundary.style.display = "block";
});

navBar.addEventListener('mouseout', () => {
    blockNavBarSecundary.style.display = "none";
});