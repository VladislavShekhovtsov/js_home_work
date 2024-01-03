{   // blocks

    let a = 10
    {
        let b = 20
        {
            let c = 30
            //a= 10, b= 21, c= 30 d= undefined

            b++
            a *= 10
        }
        {
            let c = 50
            //a= 100, b= 21, c= 50, d= undefined
            b += 500
        }
        {
            const a = 100500
            const d = "value"
            //a= 100500, b= 521, c= undefined, d= "value"
            {
                let a = -50
                b = 1000
                //a= -50, b= 1000, c= undefined, d= "value"
            }
            //a= 100500, b= 1000, c= undefined, d= "value"
        }
        //a= 100500, b=1000, c= undefined, d= undefined
    }
    //a= 100500, b= 1000, c= undefined, d= undefined

}

{   // comparison if

    var age = +prompt("Сколько вам лет?", "");

    if (age < 0) {
        alert("Отрицательный возраст?");
    } else if (age < 18) {
        alert("школьник");
    } else if (age >= 18 && age < 30) {
        alert("молодеж");
    } else if (age >= 30 && age < 45) {
        alert("зрелость");
    } else if (age >= 45 && age < 60) {
        alert("закат");
    } else if (age >= 60) {
        alert("как пенсия?");
    } else {
        alert("то ли киборг, то ли KERNESS");
    }
}

{   // switch: sizes

    const size = prompt('Введите ваш размер в международном формате (XL,XXL), для конвертации')

    switch (size) {
        case 'XXS':
            alert('Ваш размер по стандартам США: "8"');
            break;
        case 'XS':
            alert('Ваш размер по стандартам США: "10"');
            break;
        case 'S':
            alert('Ваш размер по стандартам США: "12"');
            break;
        case 'M':
            alert('Ваш размер по стандартам США: "14"');
            break;
        case 'L':
            alert('Ваш размер по стандартам США: "16"');
            break;
        case 'XL':
            alert('Ваш размер по стандартам США: "18"');
            break;
        case 'XXL':
            alert('Ваш размер по стандартам США: "20"');
            break;
        case 'XXXL':
            alert('Ваш размер по стандартам США: "22"');
            break;

        default:
            alert('Шо за дичь?');
    }

}

{   // switch: if

    let color = prompt("Введите цвет", "");

    if (color === "red") {
        document.write("<div style='background-color: red;'>красный</div>");
        document.write("<div style='background-color: black; color: white;'>черный</div>");
    } else if (color === "black") {
        document.write("<div style='background-color: black; color: white;'>черный</div>");
    } else if (color === "blue") {
        document.write("<div style='background-color: blue;'>синий</div>");
        document.write("<div style='background-color: green;'>зеленый</div>");
    } else if (color === "green") {
        document.write("<div style='background-color: green;'>зеленый</div>");
    } else {
        document.write("<div style='background-color: gray;'>Я не понял</div>");
    }


}

{   // noswitch

    const noSwitch = (key, cases, defaultKey = 'default') => {
        if (drink in cases)
            cases[drink]()
        else
            cases.default()
    }

    const drink = prompt("Что вы любите пить")
    noSwitch(drink, {
        воду: () => console.log('Самый здоровый выбор!'),
        чай() {
            console.log('Вкусная и полезная штука. Не переусердствуйте с сахаром')
        },
        "пиво": () => console.log('Хорошо летом, да в меру'),
        виски: function () {
            console.log('Да вы, батенька, эстет! Не забудьте лед и сигару')
        },
        default() {
            console.log('шото я не понял')
        }
    })

}

{   // closure calc

    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {

            const container = document.createElement('div');

            for (const currency in data.rates) {
                const button = document.createElement('button');
                button.innerText = currency;
                container.appendChild(button);

                button.onclick = () => {
                    const sum = +prompt('Введите сумму для обмена')

                    const keyUsd = 'USD'
                    const exchangeRate = data.rates[currency] / data.rates[keyUsd];
                    const convertedAmount = sum * exchangeRate;
                    if (!isNaN(sum)) {
                        alert(`За ${sum}USD Вы получаете ${convertedAmount.toFixed(2)}${currency}`);
                    } else {
                        alert('Вы ввели некорректную сумму');
                    }

                }
            }

            document.body.appendChild(container)

            console.log(data)
        })

}

{   // closure calc 2

    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {

            const selectFrom = document.getElementById('from');
            const selectTo = document.getElementById('to');
            const divRate = document.getElementById('rate');
            const inputAmount = document.getElementById('amount');
            const divResult = document.getElementById('result');
            selectFrom.style.width = '100px';
            selectFrom.style.textAlign = 'center';
            selectTo.style.width = '100px';
            selectTo.style.textAlign = 'center';


            for (const currency in data.rates) {
                const optionFrom = document.createElement('option');
                optionFrom.innerText += currency;
                selectFrom.append(optionFrom);

                const optionTo = document.createElement('option');
                optionTo.innerText += currency
                selectTo.append(optionTo);

            }

            const updateRate = () => {
                const fromValue = from.value;
                const toValue = to.value;

                const crossRate = data.rates[toValue] / data.rates[fromValue]
                divRate.innerText = crossRate.toFixed(4);

                updateResult();
            }

            selectFrom.onchange = updateRate;
            selectTo.onchange = updateRate;

            const updateResult = () => {
                const fromValue = from.value;
                const toValue = to.value;
                const amount = +inputAmount.value;

                const resultAmount = amount * (data.rates[toValue] / data.rates[fromValue])

                divResult.innerText = resultAmount.toFixed(4);
            }

            inputAmount.oninput = updateResult;

            updateRate();

            console.log(data)
        })

}

{   // countries and cities

    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json').then(res => res.json())
        .then(data => {

            const countriesSelected = document.getElementById('countries');
            const citiesSelected = document.getElementById('cities');

            for (const countries in data) {
                const optionCountries = document.createElement('option');
                optionCountries.value = countries;
                optionCountries.innerText += countries;
                countriesSelected.append(optionCountries);

            }

            const functionOnChange = () => {
                const citiesOfCountry = countriesSelected.value;
                    citiesSelected.innerHTML = ''
                for (const city of data[citiesOfCountry]) {
                    const optionSities = document.createElement('option');
                    optionSities.value = city;
                    optionSities.innerText += city
                    citiesSelected.append(optionSities);
                }
            }

            countriesSelected.onchange = functionOnChange;


            console.log(data)
        })

}