{   // Literals

    const cat = {
        name: 'barsik',
        age: '6',
        weight: '3'
    };

    console.log(cat);

}

{   // Literals expand
    const keyName = prompt('Введите нужный ключ')
    const valueName = prompt('Введите значение для ключа')
    const keyName2 = prompt('Введите нужный ключ 2')
    const valueName2 = prompt('Введите значение для ключа 2')

    const cat = {
        name: 'barsik',
        age: '6',
        weight: '3',
        [keyName]: valueName,
        [keyName2]: valueName2
    };

    console.log(cat);

}

{   // Literals copy
    const keyName = prompt('Введите нужный ключ')
    const valueName = prompt('Введите значение для ключа')
    const keyName2 = prompt('Введите нужный ключ 2')
    const valueName2 = prompt('Введите значение для ключа 2')

    const cat = {
        name: 'barsik',
        age: '6',
        weight: '3',
        [keyName]: valueName,
        [keyName2]: valueName2
    };

    console.log(cat);

    const keyName3 = prompt('Введите нужный ключ 3')
    const valueName3 = prompt('Введите значение для ключа 3')

    const obj = {
        [keyName3]: valueName3,
        ...cat
    };

    console.log(obj);
}

{   // Html tree, Parent, Change OK, Destructure

    const body = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        children: ['Enter a data please:'],
                    },
                    {
                        tagName: 'br',
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'name',
                        },
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'surname',
                        },
                    }
                ],
            },
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'ok',
                        },
                        children: ['OK'],
                    },
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'cancel',
                        },
                        childrenButton2: ['Cancel'],
                    },
                ],
            }
        ]
    }

    console.log(body.children[1].children[1].children);
    console.log(body.children[0].children[2].attrs.id);

    body.children[0].parent = body
    body.children[1].parent = body
    body.children[0].children[0].parent = body.children[0]
    body.children[0].children[1].parent = body.children[0]
    body.children[0].children[2].parent = body.children[0]
    body.children[0].children[3].parent = body.children[0]

    body.children[1].children[0].parent = body.children[1]
    body.children[1].children[1].parent = body.children[1]

    console.log(body)

    const attribute = prompt('Введите атребут для кнопки:')
    const attributeValue = prompt('Введите значение атрибута:')

    body.children[1].children[0].attrs[attribute] = attributeValue

    console.log(body)

    const { children: [{ children: [{ children }] }] } = body
    console.log(children)

    const { children: [, { children: [, { childrenButton2 }] }] } = body
    console.log(childrenButton2)

    const { children: [{ children: [, , , { attrs: { id } }] }] } = body
    console.log(id)
}

{   // Destruct array

    let arr = [1, 2, 3, 4, 5, "a", "b", "c"]

    const { 0: odd1, 1: even1, 2: odd2, 3: even2, 4: odd3, 5: letter1, 6: letter2, 7: letter3 } = arr;

    const oddNumber = [odd1, odd2, odd3].filter((e) => typeof e === "number");
    const evenNumber = [even1, even2].filter((e) => typeof e === "number");
    const lettersArr = [letter1, letter2, letter3].filter((e) => typeof e === "string");


    console.log(oddNumber);
    console.log(evenNumber);
    console.log(lettersArr);

}

{   // Destruct string

    let arr = [1, "abc"]

    const [number, string] = arr;

    const [s1, s2, s3] = string.split('')

    console.log(number);
    console.log(s1);
    console.log(s2);
    console.log(s3);

}

{   // Destruct 2

    let obj = {
        name: 'Ivan',
        surname: 'Petrov',
        children: [{ name: 'Maria' }, { name: 'Nikolay' }]
    }

    const { children: [{ name: name1 }, { name: name2 }] } = obj;

    console.log(name1, name2);
}

{   // Destruct 3

    let arr = [1, 2, 3, 4, 5, 6, 7, 10]

    const { 0: a, 1: b, ...restArr } = arr;
    const length = arr.length;

    console.log(a);
    console.log(b);
    console.log(length);

}

{   // Copy delete

    const cat = {
        name: 'barsik',
        age: '6',
        weight: '3'
    };

    const property = prompt('Введите ключ для удаления');

    const copyObjCat = { ...cat };
    delete copyObjCat[property];

    console.log(copyObjCat);

}

{   // Currency real rate

    const originalCurrency = prompt('Введите исходную валюту: ').toUpperCase();
    const currencyToConvert = prompt('Введите валюту в которую конвертировать: ').toUpperCase();
    const amountInOriginalCurrency = +prompt('Введите сумму в исходной валюте: ');

    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {

            if (data.rates[originalCurrency], data.rates[currencyToConvert]) {
                const exchangeRate = data.rates[currencyToConvert] / data.rates[originalCurrency];
                const convertedAmount = amountInOriginalCurrency * exchangeRate;
                alert(`За ${amountInOriginalCurrency} ${originalCurrency}, вы получаете ${convertedAmount.toFixed(2)} ${currencyToConvert}`);
            } else {
                alert('Вы ввели какуй-то дичь')
            }

            console.log(data)
        })
        .catch((error) => alert(`Произошла ошибка ${error}`));

}

{   // Currency drop down

    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
            let str = "<select style = 'width: 150px;'>";
            for (let currency in data.rates) {
                str += `<option value="${currency}">${currency}</option>`
            }
            str += "</select>"
            console.log(data)
            document.write(str);
        })
        .catch((error) => alert(`Произошла ошибка ${error}`));

}

{   // Currency table

    fetch('https://open.er-api.com/v6/latest/USD')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            const currencies = Object.keys(data.rates);

            const table = document.createElement('table');
            table.style.borderCollapse = 'collapse';

            const headerRow = document.createElement('tr');
            const emptyHeaderCell = document.createElement('th');
            emptyHeaderCell.style.border = '2px solid black';
            headerRow.appendChild(emptyHeaderCell);
            currencies.forEach(currency => {
                const headerCell = document.createElement('th');
                headerCell.style.border = '2px solid black';
                headerCell.textContent = currency;
                headerRow.appendChild(headerCell);
            });
            table.appendChild(headerRow);

            currencies.forEach(sourceCurrency => {
                const row = document.createElement('tr');
                const sourceCurrencyCell = document.createElement('td');
                sourceCurrencyCell.textContent = sourceCurrency;
                sourceCurrencyCell.style.border = '2px solid black';
                row.appendChild(sourceCurrencyCell);

                currencies.forEach(targetCurrency => {
                    const cell = document.createElement('td');
                    if (sourceCurrency === targetCurrency) {
                        cell.textContent = '1';
                    } else {
                        const crossRate = data.rates[targetCurrency] / data.rates[sourceCurrency];
                        cell.textContent = crossRate.toFixed(4);

                    }
                    cell.style.border = '2px solid black';
                    row.appendChild(cell);

                });

                table.appendChild(row);
            });

            document.body.appendChild(table);
        })
        .catch((error) => alert(`Произошла ошибка ${error}`));

}

{   // Form

    const car = {
        "Name": "chevrolet chevelle malibu",
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 130,
        "Weight_in_lbs": 3504,
        "Origin": "USA",
        "in_production": false
    }

    const createForm = document.createElement('form');

    for (const key in car) {
        const createLabel = document.createElement('label');
        const createInput = document.createElement('input');

        createLabel.textContent = `${key}`

        if (typeof car[key] === 'number') {
            createInput.type = 'number';
            createInput.value = car[key];
        } else if (typeof car[key] === 'boolean') {
            createInput.type = 'checkbox';
            createInput.checked = car[key];
        } else {
            createInput.type = 'text';
            createInput.value = car[key];
        }

        createLabel.appendChild(createInput);
        createForm.appendChild(createLabel);
    }

    document.body.appendChild(createForm);

}

{    // Table

    const arr = [
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

    const columns = [];

    for (const keyArr of arr) {
        for (const key in keyArr) {
            if (!columns.includes(key)) {
                columns.push(key);
            }
        }

    }

    let table = `<table border = '1'></tr>`;
    for (const column of columns) {
        table += `<th>${column}</th>`;
    }
    table += `</tr>`;

    for (const person of arr) {
        table += '<tr>';
        for (const column of columns) {
            table += `<td>${person[column] || ''}</td>`;
        }
        table += '</tr>';
    }

    table += '</table>';

    document.body.innerHTML = table;

}