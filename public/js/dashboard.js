


document.addEventListener('DOMContentLoaded', () => {


    //logout de google

    const button = document.getElementById('google_signout');

    if (button) {
        button.onclick = () => {
            google.accounts.id.disableAutoSelect();
            localStorage.clear();
            window.location = '/';
        }
    }

});