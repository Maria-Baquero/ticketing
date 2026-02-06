document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const url = '/api/users/register'; 

    form.addEventListener('submit', async (ev) => {
        
        ev.preventDefault();

        const formData = {};

        for (let el of form.elements) {
            if (el.name) formData[el.name] = el.value;
        }

        try {
            const resp = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' }
            });

            const data = await resp.json();

            if (!resp.ok) {
                console.error(data.msg || data);
                alert(data.msg || 'Error registering user');
                return;
            }

            // Guardar JWT si tu backend lo devuelve
            if (data.token) localStorage.setItem('token', data.token);

            alert('User registered successfully!');
            window.location = '/api/auth/login'; // redirige a login

        } catch (error) {
            console.error(error);
            alert('Error connecting to server');
        }
    });
});
