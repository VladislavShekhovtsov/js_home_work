{   // while confirm

    while (!confirm('Продолжим?')) {

    }

}

{   // array fill

    const array = [];

    while (true) {
        const elements = prompt('Введите элемент для добавления в массив')

        if (elements === null) {
            break;
        } else {
            array.push(elements);
        }

        console.log(array);
    }

}

{   // array fill nopush

    const array = [];
    let i = 0;

    while (true) {
        const elements = prompt('Введите элемент для добавления в массив')

        if (elements === null) {
            break;
        } else {
            array[i] = elements;
            i++
        }

        console.log(array);
    }
}

{   // infinite probability

    let i = 0;

    while (true) {
        i++

        if (Math.random() > 0.9) {
            break;
        }
    }

    alert(i);

}

{   // empty loop

    while (true) {
        const element = prompt('Введите что нибудь')

        if (element === null) {

        } else {
            break;
        }
    }

}

{   // progression sum

    let n = prompt('Введите значение n :');
    let sum = 0;

    for (let i = 0; i <= n; i += 3) {
        sum += i;
    }

    console.log(sum);
}

{   // chess one line

    let strLength = 10
    let result = '';

    for (let i = 0; i < strLength; i++) {
        result += (i % 2 === 0) ? ' ' : '#';
    }

    console.log(result);

}

{   // numbers

    let str = '';

    for (let i = 0; i < 10; i++) {

        for (let j = 0; j < 10; j++) {
            str += j
        }
        str += '\n'
    }

    console.log(str);
}

{   // chess
    debugger;
    let strLength = 12
    let result = '';

    for (let i = 0; i < strLength; i++) {
        for (let j = 0; j < strLength; j++) {
            result += ((i + j) % 2 === 0) ? '.' : '#';
        }
        result += '\n'
    }
    console.log(result);

}

{   // cubes

    const n = prompt('Введите желаемый размер массива')
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(Math.pow(i, 3));  // Метод Math.pow возводит в куб индекс, можно было использовать логистический оператор **
    }

    console.log(arr);
}

{   // multiply table

    const arrSize = 10
    const arr = []

    for (let i = 1; i <= arrSize; i++) {
        arr[i] = [];
        for (let j = 1; j <= arrSize; j++) {
            arr[i][j] = i * j;
        }
    }
    console.log(arr)

}

{   // read array of objects

    const readArrayOfObjects = () => {
        const arr = [];

        while (true) {
            const obj = {};
            let continueInput = true;

            while (continueInput) {
                const key = prompt('Введите ключ')

                if (key === null) {
                    continueInput = false;
                    break;
                }

                const value = prompt(`Введите значение для ключа ${key}`)

                obj[key] = value;
            }

            arr.push(obj);

            const questionForContinuation = confirm('Желаете продолжить?');

            if (!questionForContinuation) {
                break;
            }
        }
        return arr;
    }
    console.log(readArrayOfObjects());
}

{   // ромбик

    const rhombus = (height) => {
        const result = [];

        for (let i = 1; i <= height; i += 2) {
            const dot = '.'.repeat((height - i) / 2);
            const hash = '#'.repeat(i);
            result.push(dot + hash + dot);
        }

        for (let i = height - 2; i > 0; i -= 2) {
            const dot = '.'.repeat((height - i) / 2);
            const hash = '#'.repeat(i);
            result.push(dot + hash + dot);
        }

        return result.join('\n');
    }

    const heightRomb = prompt('Введите высоту ромба (нечетное число):'); // если будет четное число, то ромбик обрезается. 

    console.log(rhombus(heightRomb))

}

{   // DOM: multiply table

    const createTable = () => {
        const table = document.createElement('table');
        table.style.border = '1px solid black';
        table.style.width = '300px';
        table.style.textAlign = 'center';

        for (let i = 1; i <= 10; i++) {
            const row = document.createElement('tr');

            for (let j = 1; j <= 10; j++) {
                const cell = document.createElement('td');
                cell.style.border = '1px solid black';
                cell.innerText = i * j;
                row.appendChild(cell);

                const eventCell = (i, j, row) => {
                    cell.addEventListener('mouseover', () => {
                        row.style.backgroundColor = 'lightblue';
                        for (let k = 0; k < table.rows.length; k++) {
                            table.rows[k].cells[j - 1].style.backgroundColor = "lightcoral";
                        }
                    })
                    cell.addEventListener('mouseout', () => {
                        row.style.backgroundColor = '';
                        for (let k = 0; k < table.rows.length; k++) {
                            table.rows[k].cells[j - 1].style.backgroundColor = "";
                        }
                    })
                }
                eventCell(i, j, row);

            }

            table.appendChild(row);
        }


        document.body.appendChild(table);
    }

    createTable();
}