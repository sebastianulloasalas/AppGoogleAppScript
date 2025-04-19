
const form = document.getElementById('formTarea');
const message = document.getElementById('mensaje');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const tarea = document.getElementById('tarea').value;
  const fecha = document.getElementById('fecha').value;

  const data = { tarea, fecha };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbw9jcwa_NIx3JhKoSh0iq1_ZWw_7JjU5zRkHYWR3lysXzQlW7ABy5cfehyhAZVi_E56yQ/exec', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
    message.textContent = result.message || 'Tarea guardada con éxito';
    form.reset();
  } catch (error) {
    message.textContent = 'Error al guardar la tarea.';
    console.error(error);
  }
});