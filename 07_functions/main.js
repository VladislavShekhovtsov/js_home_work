{   // Temperature

    const temperature = (a) => (a * 9 / 5) + 32

}

{   // RGB 

    const rgb = (r, g, b) => {

        const hex = (number) => {
            const hexNumber = number.toString(16).toUpperCase();

            return hexNumber.length === 1 ? '0' + hexNumber : hexNumber;
        }

        const hexR = hex(r);
        const hexG = hex(g);
        const hexB = hex(b);

        return `#${hexR}${hexG}${hexB}`;

    }

    rgb(
        +prompt('Введите значение цвета RED в диапазоне (0 - 255)'),
        +prompt('Введите значение цвета BLUE в диапазоне (0 - 255)'),
        +prompt('Введите значение цвета GREEN в диапазоне (0 - 255)')
    )
}

{   // Flats

    const flats = (numberOfFloors, numberOfApartments, neededApartment) => {

        const calculation = numberOfApartments * numberOfFloors;
        const calculationApartment = neededApartment % calculation || calculation

        const calculationEntrance = Math.ceil(neededApartment / calculation);
        const floor = Math.ceil(calculationApartment / numberOfApartments);

        return { entrace: calculationEntrance, floor: floor };
    }

    flats(
        +prompt('Введите колличество этажей в доме'),
        +prompt('Введите колличество квартир на этаже'),
        +prompt('Введите номер нужной квартиры')
    )

}

{   // Credentials

    const credentialsFunctions = () => {

        const capitalize = str => {
            let result
            result = str[0].toUpperCase() + str.slice(1).toLowerCase();
            return result
        }

        const name = capitalize(prompt('Введите ваше имя'));
        const surname = capitalize(prompt('Введите вашу фамилию'));
        const fatherName = capitalize(prompt('Введите ваше отчество'));

        const fullName = `${name} ${surname} ${fatherName}`

        return { name, surname, fatherName, fullName }
    }

    credentialsFunctions();
}

{   // New line

    const newLine = (str) => str.split('\\n').join('\n');

    const str = prompt('Введите что нибудь используя маркер \\n')

    const result = newLine(str)

    console.log(result)
}

{   // Prompt OR

    const promptOr = (str, defaultValue) => prompt(str) || defaultValue;

    const userInput = promptOr('Введите строку', 'Вы ничего не ввели');

    alert(userInput);

}

{   // Login And Password

    const functionCheck = (correctLogin, correctPassword) => {

        const loginInput = prompt('Введите Login');
        const passwordInput = prompt('Введите Password')

        return loginInput === correctLogin && passwordInput === correctPassword;

    }

    const login = 'admin';
    const password = 'qwerty';

    const check = functionCheck(login, password);

    console.log(check)

}

{   // For Table

    const table = (arr) => {
        let tableHtml = '<table>'

        for (const row of arr) {
            tableHtml += '<tr>'

            for (const cell of row) {
                tableHtml += `<td>${cell}</td>`;
            }
            tableHtml += '</tr>';
        }
        tableHtml += '</table>';
        return tableHtml;
    };

    const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12, 13]]

    const tableInBody = table(arr);

    document.write(tableInBody);
}

{   // Filter Lexics

    const arr = ['кофе', 'чай', 'пиво'];

    const filterFunction = (str, arr) => {
        const strSplit = str.split(' ').map(elem => arr.includes(elem.toLowerCase()) ? 'BEEP' : elem);
        const strJoin = strSplit.join(' ');

        return strJoin;
    };

    const strPrompt = prompt('Введите строку')
    const result = filterFunction(strPrompt, arr);

    alert(result);
}

{   // Currency Table

    const functionFetch = () => {
        fetch('https://open.er-api.com/v6/latest/USD')
            .then(res => res.json())
            .then(data => {
                console.log(data);

                const exchangeRates = [];

                for (const currency in data.rates) {
                    exchangeRates.push([currency, data.rates[currency]]);
                }

                const table = (arr) => {
                    let tableHtml = '<table border = "1">'

                    for (const row of arr) {
                        tableHtml += '<tr>'

                        for (const cell of row) {
                            tableHtml += `<td>${cell}</td>`;

                        }
                        tableHtml += '</tr>';
                    }
                    tableHtml += '</table>';
                    return tableHtml;
                };

                document.write(table(exchangeRates));
            })
            .catch((error) => alert(`Произошла ошибка ${error}`));
    }

    functionFetch();
}

{   // Form

    const createForm = (formConfig) => {
        const form = document.createElement('form');

        for (const key in formConfig) {
            const createLabel = document.createElement('label');
            const createInput = document.createElement('input');

            createLabel.textContent = `${key}`

            if (typeof formConfig[key] === 'number') {
                createInput.type = 'number';
                createInput.value = formConfig[key];
            } else if (typeof formConfig[key] === 'boolean') {
                createInput.type = 'checkbox';
                createInput.checked = formConfig[key];
            } else {
                createInput.type = 'text';
                createInput.value = formConfig[key];
            }

            createLabel.appendChild(createInput);
            form.appendChild(createLabel);
        }
        document.body.appendChild(form)
    }
    ///////////////////  Проверка
    const formConfig = {
        "Name": "chevrolet chevelle malibu",
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 130,
        "Weight_in_lbs": 3504,
        "Origin": "USA",
        "in_production": false
    }

    createForm(formConfig);
}

{   // Array of objects sort

    const sortArray = (arr, key, direction = true) => {
        const compare = (a, b) => {
            const valueA = a[key];
            const valueB = b[key];

            let comparison = 0

            if (valueA > valueB) {
                comparison = 1;
            } else if (valueA < valueB) {
                comparison = -1;
            }

            return direction ? comparison : -comparison
        };
        return arr.slice().sort(compare);
    }

    /////////// Проверка

    const persons = [
        { name: "Иван", age: 17 },
        { name: "Мария", age: 35 },
        { name: "Алексей", age: 73 },
        { name: "Яков", age: 12 },
    ]

    sortArray(persons, 'age', false);
}

{   // Table

    const sortArray = (arr, key, direction = true) => {

        const copyArr = [...arr];

        const compare = (a, b) => {
            const valueA = a[key];
            const valueB = b[key];

            let comparison = 0

            if (valueA > valueB) {
                comparison = 1;
            } else if (valueA < valueB) {
                comparison = -1;
            }

            return direction ? comparison : -comparison
        };

        const createTable = (arr) => {
            let tableHtml = '<table border = "1">';

            for (const row of arr) {
                tableHtml += '<tr>';

                for (const cell in row) {
                    tableHtml += `<td>${row[cell]}</td>`;
                }

                tableHtml += '</tr>';
            }

            tableHtml += '</table>';
            return tableHtml;
        }

        document.write(createTable(copyArr));

        return copyArr.sort(compare);

    }

    /////////////////  Проверка
    var array = [
        {
            "Name": "chevrolet chevelle malibu",
            "Cylinders": 8,
            "Displacement": 307,
            "Horsepower": 130,
            "Weight_in_lbs": 3504,
            "Origin": "USA"
        },
        {
            "Name": "buick skylark 320",
            "Miles_per_Gallon": 15,
            "Cylinders": 8,
            "Displacement": 350,
            "Horsepower": 165,
            "Weight_in_lbs": 3693,
            "Acceleration": 11.5,
            "Year": "1970-01-01",
        },
        {
            "Miles_per_Gallon": 18,
            "Cylinders": 8,
            "Displacement": 318,
            "Horsepower": 150,
            "Weight_in_lbs": 3436,
            "Year": "1970-01-01",
            "Origin": "USA"
        },
        {
            "Name": "amc rebel sst",
            "Miles_per_Gallon": 16,
            "Cylinders": 8,
            "Displacement": 304,
            "Horsepower": 150,
            "Year": "1970-01-01",
            "Origin": "USA"
        },
    ]

    sortArray(array, 'age');

}

{   // Divide

    const calcResult = () => {
        console.log(firstNumber.value, secondNumber.value, divisionResult.innerHTML);
        const calc = firstNumber.value % secondNumber.value;
        const result = Math.round(calc);
        if (!isNaN(result)) {
            divisionResult.innerHTML = `${result}`;
        } else {
            divisionResult.innerHTML = '<strong>Введите второе значение</strong>';
        }
    }

    firstNumber.oninput = secondNumber.oninput = calcResult

}

{   // Calc Func

    const calcFunc = (currentCounterValue, previousCounterValue, electricityCost) => {

        const electricityUsed = currentCounterValue - previousCounterValue;
        const pay = electricityUsed * electricityCost;

        return {
            pay: pay,
        }
    }

    calcFunc(
        +prompt('Введите текущее значение счётчика'),
        +prompt('Введите предидущее значение счётчика'),
        +prompt('Введите стоимость электроэнергии (Кв/Ч)')
    );

}

{   // Calc Live
    
    const currentCounterValue = document.createElement('input');
    currentCounterValue.type = 'number';
    currentCounterValue.id = 'currentCounterValue';
    const previousCounterValue = document.createElement('input');
    previousCounterValue.type = 'number';
    previousCounterValue.id = 'previousCounterValue';
    const electricityCost = document.createElement('input');
    electricityCost.type = 'number';
    electricityCost.id = 'electricityCost';
    const div = document.createElement('div');

    document.body.appendChild(currentCounterValue)
    document.body.appendChild(previousCounterValue)
    document.body.appendChild(electricityCost)
    document.body.appendChild(div)

    const calcFunc = () => {
        const electricityUsed = parseFloat(currentCounterValue.value) - parseFloat(previousCounterValue.value);
        const pay = electricityUsed * parseFloat(electricityCost.value);

        if (!isNaN(pay)) {
            div.innerHTML = `${pay}`;
        } else {
            div.innerHTML = '<strong>Введите второе значение</strong>';
        }
    }

    currentCounterValue.oninput = previousCounterValue.oninput = calcFunc
    electricityCost.oninput = calcFunc;

}