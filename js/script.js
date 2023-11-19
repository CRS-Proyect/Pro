//PARA EL NAVBAR SECUNDARIO
document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.getElementById("navBar");
    const blockNavBarSecundary = document.getElementById("navBarSecundary");
    blockNavBarSecundary.style.display = 'none';

    document.addEventListener('mousedown', e => {
        if(e.target === navBar) {
            if(blockNavBarSecundary.style.display === 'none') {
                blockNavBarSecundary.style.display = 'block';
            } else {
                blockNavBarSecundary.style.display = 'none';
            }
            return;
        }
    });

    document.addEventListener('click', e => {
        if(e.target != navBar && !blockNavBarSecundary.contains(e.target)) {
            blockNavBarSecundary.style.display = 'none';
        }
    });
});