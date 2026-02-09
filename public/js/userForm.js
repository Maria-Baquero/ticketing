document.getElementById('editUserForm').addEventListener('submit', async (e) => {

    e.preventDefault();

    const id = document.getElementById('uid').value;

    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        telephone: document.getElementById('telephone').value,
        dni: document.getElementById('dni').value
    };

    console.log('id:', id)

    try {
        const resp = await fetch(`/api/users/edit/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!resp.ok) {
            alert('Error updating user');
            return;
        }

        alert('User updated successfully');
        window.location = '/api/users';

    } catch (error) {
        console.error(error);
        alert('Server error');
    }

});
