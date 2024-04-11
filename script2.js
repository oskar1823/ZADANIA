
        const validUsername = "3i2";
        const validPassword = "arekverse";

        

        function validateLogin() {
            // Pobierz dane z formularza
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Sprawdź, czy podane dane są poprawne
            if (username === validUsername && password === validPassword) {
                // Jeśli dane są poprawne, przekieruj na stronę główną
                window.location.href = "glowna.html";
                return false; // Zatrzymaj wysyłanie formularza
            } else {
                // W przeciwnym razie wyświetl komunikat o błędzie
                document.getElementById("loginMessage").textContent = "Nieprawidłowy login lub hasło.";
                return false; // Zatrzymaj wysyłanie formularza
            }
        }
