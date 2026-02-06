document.getElementById('createUserForm').addEventListener('submit', async (e) => {

    e.preventDefault();

    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        telephone: document.getElementById('telephone').value,
        dni: document.getElementById('dni').value
    };

    try {
        const resp = await fetch('/api/users/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await resp.json();

        if (!resp.ok) {
            alert(result.msg || 'Error creating user');
            return;
        }

        alert('User created successfully');
        window.location = '/api/users';

    } catch (error) {
        console.error(error);
        alert('Server error');
    }
});
