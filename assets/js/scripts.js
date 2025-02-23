// Validación del formulario de contacto
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            clearErrors(); // Limpia errores anteriores

            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            let hasErrors = false;

            if (!nombre) {
                showError(document.getElementById("nombre"), "Por favor, ingresa tu nombre.");
                hasErrors = true;
            }

            if (!email) {
                showError(document.getElementById("email"), "Por favor, ingresa tu correo electrónico.");
                hasErrors = true;
            } else if (!validateEmail(email)) {
                showError(document.getElementById("email"), "Por favor, introduce un correo electrónico válido.");
                hasErrors = true;
            }

            if (!mensaje) {
                showError(document.getElementById("mensaje"), "Por favor, ingresa tu mensaje.");
                hasErrors = true;
            }

            if (hasErrors) {
                event.preventDefault(); // Evita que el formulario se envíe
            }
        });
    }

    // Función para mostrar mensajes de error
    function showError(input, message) {
        const errorElement = document.createElement("div");
        errorElement.className = "error-message";
        errorElement.textContent = message;
        input.parentNode.insertBefore(errorElement, input.nextSibling);
    }

    // Función para limpiar mensajes de error
    function clearErrors() {
        const errors = document.querySelectorAll(".error-message");
        errors.forEach((error) => error.remove());
    }

    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar emails
        return regex.test(email); // Retorna true si el email es válido
    }
});

// Botón de "scroll to top"
const scrollToTopButton = document.createElement("button");
scrollToTopButton.innerHTML = "&#9650;"; // Ícono de flecha hacia arriba
scrollToTopButton.id = "scrollToTopBtn";
document.body.appendChild(scrollToTopButton); // Agrega el botón al final del body

// Función para desplazarse al principio de la página
scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplazamiento suave
    });
});

// Mostrar u ocultar el botón según la posición del scroll
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) { // Si el scroll es mayor a 300px
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Animaciones al hacer scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Agrega la clase "visible"
            observer.unobserve(entry.target); // Deja de observar la sección
        }
    });
}, { threshold: 0.1 }); // Activa la animación cuando el 10% de la sección es visible

sections.forEach((section) => {
    observer.observe(section); // Observa cada sección
});

// Animación de hover para botones
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s ease';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});