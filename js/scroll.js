const button = document.querySelector('.scroll');

button.addEventListener('click', goTop);

function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function showTopButton() {
    if (document.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.querySelector('.scroll').style.display = "block";
    } else {
        document.querySelector('.scroll').style.display = "none";
    }
}

window.onscroll = () => {
    showTopButton();
}