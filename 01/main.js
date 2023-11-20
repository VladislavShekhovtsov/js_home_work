// Calc
{
    let currentCounterValue = prompt('Введите текущее значение счётчика'); 
    let previousCounterValue = prompt('Введите предидущее значение счётчика');
    const electricityCost = prompt('Введите стоимость электроэнергии (Кв/Ч)');

    let electricityUsed = currentCounterValue - previousCounterValue;
    let pay = electricityUsed * electricityCost;

    alert(`Использованно ${electricityUsed} КВ. К оплате ${pay} грн.`);
}

// Завдання на синій пояс
{
    const credentials = {
        login: 'admin',
        password: 'qwerty',
    };

    const button = document.getElementById('button');

    const checkFunction = () => {
        const login = document.getElementById('login');
        const password = document.getElementById('password');
        const resultDiv = document.getElementById('result');

        if (login.value === credentials.login && password.value === credentials.password) {
            resultDiv.style.backgroundColor = 'green';
            resultDiv.innerHTML = 'Привет' + ' ' + credentials.login
        } else {
            resultDiv.style.backgroundColor = 'red';
            resultDiv.innerHTML = 'Ошибка';
        }
        console.log('Вы кликнули по кнопке!')
    }

    button.addEventListener('click', function () {
        checkFunction();
    })


}