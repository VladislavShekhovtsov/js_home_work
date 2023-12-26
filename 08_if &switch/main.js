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