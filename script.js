document.addEventListener('DOMContentLoaded', function() {
    // Obtén los elementos del DOM
    const form = document.getElementById('registration-form');
    const thankYouMessage = document.getElementById('thank-you-message');
    const submitButton = document.getElementById('submit-button');
    const thankYouHeader = document.getElementById('thank-you-header');
    const thankYouText = document.getElementById('thank-you-text');
    
    submitButton.addEventListener('click', function() {
        // Obtén los valores del formulario
        const name = document.getElementById('name').value.trim();
        const princess = document.getElementById('princess').value.trim();

        // Verifica si los campos están completos antes de mostrar el mensaje
        if (name && princess) {
            // Actualiza el contenido del mensaje de agradecimiento
            thankYouHeader.textContent = `Bienvenida princesa ${name}, es un honor tenerla aquí con nosotros.`;
            thankYouText.textContent = `Tanto Magus Cine como la Princesa ${princess} estamos muy felices de que empiece esta hermosa aventura junto a nosotros.`;

            // Oculta el formulario
            form.style.display = 'none';
            // Muestra el mensaje de agradecimiento
            thankYouMessage.style.display = 'block';
        } else {
            // Puedes agregar aquí un mensaje de error o alerta si es necesario
            alert('Por favor, complete todos los campos.');
        }
    });
});
