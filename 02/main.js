//   ДЗ: Типи даних, числа та порожні типи


{   //   Number: age
    const age = prompt('Укажите ваш возраст');
    const today = new Date();
    const now = today.getFullYear();

    const yearOfBirth = now - age;
    alert(`Ваш год рождения ${yearOfBirth}`)
}

{   //   Number: temperature
    const temperature = prompt('Укажите температуру в градусах Цельсия');
    const formula = (temperature * 9 / 5) + 32;

    alert(`Температура по Фаренгейту ${formula}`);
}

{   //  Number: divide

    const firstValue = prompt('Введите первое значение');
    const secondValue = prompt('Введите второе значение');

    const calculation = firstValue % secondValue;

    const result = Math.round(calculation);

    alert(`Остаток от деления ${result}`);

}

{   //  Number: currency
    const amountToExchange = prompt('Введите сумму которую вы хотите обменять ₴');
    const rate = 37.45

    const calculation = amountToExchange * rate;

    const result = calculation.toFixed(2);

    alert(`За ${amountToExchange} ₴, Вы получаете ${result} $`);

}

{   //  Number: RGB

    const red = parseInt(prompt('Введите значение цвета RED в диапазоне (0 - 255)'));
    const blue = parseInt(prompt('Введите значение цвета BLUE в диапазоне (0 - 255)'));
    const green = parseInt(prompt('Введите значение цвета GREEN в диапазоне (0 - 255)'));

    const redHex = red.toString(16).toUpperCase();
    const blueHex = blue.toString(16).toUpperCase();
    const greenHex = green.toString(16).toUpperCase();

    const result = `#${redHex}${blueHex}${greenHex}`;

    alert(result);

}

{   //  Number: flats
    const numberOfFloors = parseInt(prompt('Введите колличество этажей в доме'));
    const numberOfApartments = parseInt(prompt('Введите колличество квартир на этаже'));
    const neededApartment = parseInt(prompt('Введите номер нужной квартиры'));

    const calculation = numberOfApartments * numberOfFloors  //  Колличество квартир в подъезде
    const calculationApartment = neededApartment % calculation || calculation  //  квартира по счёту в этом подъезде. Оператор ИЛИ для того чтобы не писало 0 если квартира
                                                                                // находится на последнем этаже
    const calculationEntrance = Math.ceil(neededApartment / calculation);    // находим подъезд

    const floor = Math.ceil(calculationApartment / numberOfApartments); // находим этаж нужной нам квартиры


    alert(`Нужная квартира находится в ${calculationEntrance} подъезде на ${floor} этаже`);
}