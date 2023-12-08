// Arrays

{   // Confirms

    const arr = [
        confirm('Любишь ли ты чай?'),
        confirm('Любишь ли ты пиво?'),
        confirm('Любишь ли ты кофе?')
    ];
    console.log(arr);


}

{   // Prompts
    const arr = [];

    arr[0] = prompt('Как жизнь?');
    arr[1] = prompt('Какие планы?');
    arr[2] = prompt('Сколько времени?');

    console.log(arr);
}

{    //Item access

    const arr = [10, 20, 30, 40, 50, 60,]
    const prompts = prompt('Введите индекс в массиве');

    console.log(arr[prompts]);
}

{   // Item change

    const arr = [10, 20, 30, 40, 50, 60,]
    const prompts = prompt('Введите индекс в массиве');
    const arrValue = prompt('Введите значение');

    arr[prompts] = arrValue;

    console.log(arr);

}

{   // Multiply table

    const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];

    console.log(arr[2][3]); // === 6

}

{   // Multiply table slice

    const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];

    const multiplyTable = arr.slice(1).map(x => x.slice(1));

    console.log(multiplyTable);

}

{   // IndexOf Word

    const str = prompt('Введите строку из нескольких слов:');
    const searchWord = prompt('Введите искомое слово:');

    const strSplit = str.split(' ').indexOf(searchWord);

    console.log(strSplit);

    strSplit === -1 ? alert('Слово не найдено!') : alert(`Ваше искомое слово ${strSplit + 1} по счёту`);

}

{   // Reverse, Reverse 2 

    const arr = [];

    for (let i = 0; i < 5; i++) {
        const elem = prompt('Введите элемент');

        arr.push(elem);
    }

    const copyArr = [];

    while (arr.length > 0) {
        copyArr.push(arr.pop());
    }

    console.log(arr, copyArr);

    while (copyArr.length > 0) {
        arr.unshift(copyArr.shift());
    }

    console.log(arr, copyArr);
}

{   // Copy

    const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
    const copyArr = [...arr];

    console.log(arr, copyArr);
}

{   // Deep Copy

    const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];

    const deepCopyArr = JSON.parse(JSON.stringify(arr));

    console.log(deepCopyArr)

}

{   // Array Equals

    const arr = [1, 2, 3, 4]

    const arr2 = arr;

}

{   // Flat

    const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];

    const arr2 = [...arr[0], ...arr[1], ...arr[2], ...arr[3], ...arr[4]];

    console.log(arr2.length);

}

{   // Destruct

    const str = prompt('Введите строку');

    const [, secondLetter = '!', , fourthLetter = '!', fifthLetter = '!'] = str;

    alert(`Буквы ${secondLetter}, ${fourthLetter}, ${fifthLetter}`);

}

{   // Multiply table rest

    const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];

    const [, [, ...arr1], [, ...arr2], [, ...arr3], [, ...arr4]] = arr

    const result = [...arr1, ...arr2, ...arr3, ...arr4];

    console.log(result);

}

{   // For Alert

    const arr = ["John", "Paul", "George", "Ringo"];

    for (let name of arr) {
        alert(name);
    }

}

{   // For Select Option

    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<select style = 'width: 100px;'>";
    for (let currency of currencies) {
        str += `<option value="${currency}">${currency}</option>`
    }
    str += "</select>"
    document.write(str)

}

{   // For Table Horizontal

    const names = ["John", "Paul", "George", "Ringo"]
    let str = "<table border = '1'>"
    for (const name of names) {
        str += `<th>${name}</th>`
    }
    str += "</table>"
    document.write(str)

}

{   // For Table Vertical

    const names = ["John", "Paul", "George", "Ringo"]
    let str = "<table border = '1'>"
    for (const name of names) {
        str += `<tr><td>${name}</td></tr>`
    }
    str += "</table>"
    document.write(str)

}

{   // For Table Letters

    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<table border = '1' style = 'width: 150px; text-align: center;'>"

    for (let currency of currencies) {

        str += `<tr></tr>`
        console.log(currency)
        for (let letter of currency) {
            str += `<td>${letter}</td>`
            console.log(letter)
        }
    }
    str += "</table>"
    document.write(str)

}

{   // For Multiply Table

    const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];

    let str = "<table border='1' style = 'width: 150px; text-align: center;'>";

    for (let row of arr) {
        str += "<tr></tr>";
        for (let cell of row) {
            cell === 0 ? str += `<th>${cell}</th>` : str += `<td>${cell}</td>`;
        }
    }

    str += "</table>";
    document.write(str);

}

{   // Function Capitalize

    const capitalize = str => {
        let result
        result = str[0].toUpperCase() + str.slice(1).toLowerCase();
        return result
    }
    console.log(capitalize(prompt('Напиши что либо')))

}

{   // Map Capitalize
    const capitalize = str => {
        let result
        result = str[0].toUpperCase() + str.slice(1).toLowerCase();
        return result
    }

    const str = prompt('Введите строку').split(' ').map(word => capitalize(word)).join(' ');
    console.log(str);

}

{   // Filter Lexics
    const blockStrArr = ['кофе', 'чай', 'пиво'];
    const str = prompt('Введите строку').split(' ')
    console.log(str);
    const filterStr = str.filter(elem => !blockStrArr.includes(elem.toLowerCase())).join(' ');

    console.log(filterStr)

}

{   // Beep Lexics
    const blockStrArr = ['кофе', 'чай', 'пиво'];
    const str = prompt('Введите строку').split(' ')

    const strMap = str.map(elem => blockStrArr.includes(elem.toLowerCase()) ? 'BEEP' : elem)

    console.log(strMap)
}

{   // Reduce HTML

    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<select>"
    str += currencies.reduce((a, b) => a + `<option>${b}</option>`, "")
    str += "</select>"

    document.write(str);
}

{   // For Brackets Hell Check

    const line = prompt('Введите строку c любыми парными скобками в ней: (), [], {}')

    const bracketsStack = []
    let i = 0
    for (let character of line) {

        if (character === '[' || character === '(' || character === '{') {
            bracketsStack.push(character);

        } else if (character === ']' || character === ')' || character === '}') {
            bracketsStack.pop(character);

            if (bracketsStack.length === 0) {
                console.log('GOOD: все скобки парные');

            } else {
                console.log('Ошибка: Есть непарная скобка');
            }
            i++
        }
    }
    console.log(bracketsStack)
}