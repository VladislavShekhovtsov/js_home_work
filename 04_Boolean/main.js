const taskName = prompt('Введите название задачи');

if (taskName === 'Number: odd') {

    const numberUser = +prompt('Введите любое число');

    if (!isNaN(numberUser)) {
        numberUser % 2 === 0 ? alert('Число является чётным') : alert('Число не является чётным');
    } else {
        alert('Ошибка');
    }

} else if (taskName === 'String: lexics') {

    const str = prompt('Введите текст для проверки');
    const incorrectWords = 'пиво';

    if (str.indexOf(incorrectWords) === -1) {
        alert(`Ваш текст : ${str}`);
    } else {
        alert('В вашем тексте присутствуют некорректные слова, идите лесом :-)');
    }


} else if (taskName === 'Boolean') {
    const firstQuestion = confirm('Ты будешь чай?');
    const secondQuestion = confirm('Ты будешь кофе?');
    const thirdQuestion = confirm('Ты будешь пиво?');

    console.log(firstQuestion, secondQuestion, thirdQuestion);

} else if (taskName === 'Boolean: if') {
    const firstQuestion = confirm('Ты будешь чай?');

    if (firstQuestion) {
        alert('Ставь чайник');
    } else {
        alert('Как хочешь')
    }

    const secondQuestion = confirm('Ты будешь кофе?');

    if (secondQuestion) {
        alert('Ставь чайник');
    } else {
        alert('Как хочешь')
    }

    const thirdQuestion = confirm('Ты будешь пиво?');

    if (thirdQuestion) {
        alert('Гони в магаз');
    } else {
        alert('Каблук')
    }

} else if (taskName === 'Comparison: sizes') {
    const size = prompt('Введите ваш размер в международном формате (XL,XXL), для конвертации')

    if (size === 'XXS') {
        alert('Ваш размер по стандартам США: "8"');
    } else if (size === 'XS') {
        alert('Ваш размер по стандартам США: "10"');
    } else if (size === 'S') {
        alert('Ваш размер по стандартам США: "12"');
    } else if (size === 'M') {
        alert('Ваш размер по стандартам США: "14"');
    } else if (size === 'L') {
        alert('Ваш размер по стандартам США: "16"');
    } else if (size === 'XL') {
        alert('Ваш размер по стандартам США: "18"');
    } else if (size === 'XXL') {
        alert('Ваш размер по стандартам США: "20"');
    } else if (size === 'XXXL') {
        alert('Ваш размер по стандартам США: "22"');
    } else {
        alert('Шо за дичь?');
    }

} else if (taskName === 'Ternary') {

    const gender = confirm('Какого вы пола?') ? 'Вы мужчина' : 'Вы женщина';

    alert(gender)

} else if (taskName === 'Prompt: or') {
    const age = prompt('Укажите ваш возраст') || alert('Ошибка');
    const today = new Date();
    const now = today.getFullYear();

    const yearOfBirth = now - age;
    if (!isNaN(yearOfBirth)) {
        alert(`Ваш год рождения ${yearOfBirth}`)
    }

} else if (taskName === 'Confirm: or this days') {

    const shoppingRobot = confirm('Шопинг?') || alert('Ты бяка');

    console.log(shoppingRobot);

} else if (taskName === 'Confirm: if this days') {

    const shoppingRobot = confirm('Шопинг?')

    if (shoppingRobot) {
        alert('GO')
    } else {
        alert('Ты бяка')
    }

} else if (taskName === 'Default: or') {

    const surname = prompt('Введите вашу фамилию') || 'Иванов';
    const name = prompt('Введите ваше имя') || 'Иван';
    const patronymic = prompt('Введите ваше отчество') || 'Иванович';

    const fullName = `${surname} ${name} ${patronymic}`;

    alert(fullName);

} else if (taskName === 'Default: if') {

    let surname = prompt('Введите вашу фамилию');
    let name = prompt('Введите ваше имя');
    let patronymic = prompt('Введите ваше отчество');

    if (!surname) {
        surname = 'Иванов';
    }

    if (!name) {
        name = 'Иван';
    }

    if (!patronymic) {
        patronymic = 'Иванович';
    }

    const fullName = `${surname} ${name} ${patronymic}`;
    alert(fullName);

} else if (taskName === 'Login and password') {

    const login = prompt('Введите Login');
    const password = prompt('Введите Password');

    if (login === 'admin') {
        if (password === 'qwerty') {
            alert('ПОЗДРАВЛЯЮ')
        } else {
            alert('Пароль не верный')
        }
    } else {
        alert('Логин не верный')
    }

} else if (taskName === 'Currency exchange') {

    const currency = prompt('Введите названия валюты в любом регистре (uSd, euR, tugrik)').toUpperCase();
    const action = confirm('Вы хотите купить?');
    let rate;

    if (currency === 'USD') {
        rate = action ? 39.90 : 38.70;
    } else if (currency === 'EUR') {
        rate = action ? 43.32 : 42.70;
    } else if (currency === 'TUGRIK') {
        rate = action ? 5.40 : 4.70;
    } else {
        alert('Нет такой валюты')
    }

    const sum = +prompt('Введите сумму на обмен');

    if (!isNaN(sum)) {
        const result = action ? sum / rate : sum * rate;


        alert(`Вы получаете ${result.toFixed(2)} ${action ? currency : 'грн'}`)
    }



} else if (taskName === 'Scissors') {

    const users = prompt('Сделайте свой выбор:\n Камень\n Ножницы\n Бумага').toLowerCase();
    const computerRandomNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerRandomNumber === 0 ? 'камень' : (computerRandomNumber === 1 ? 'ножницы' : 'бумага')

    if (users === computerChoice) {
        alert(`Вы выбрали: ${users}.\n Компьютер выбрал: ${computerChoice}.\n Ничья!!!`)
    } else if (
        (users === 'камень' && computerChoice === 'ножницы') ||
        (users === 'ножницы' && computerChoice === 'бумага') ||
        (users === 'бумага' && computerChoice === 'камень')) {
        alert(`Вы выбрали: ${users}.\n Компьютер выбрал: ${computerChoice}.\n Вы победили!!!`)
    } else {
        alert(`Вы выбрали: ${users}.\n Компьютер выбрал: ${computerChoice}.\n Компьютер победил!!!`)
    }

} else if (taskName === 'Завдання на чорний пояс') {

    const users = prompt('Сделайте свой выбор:\n Камень\n Ножницы\n Бумага').toLowerCase();
    const computerRandomNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerRandomNumber === 0 ? 'камень' : (computerRandomNumber === 1 ? 'ножницы' : 'бумага')

    const result =
        users === computerChoice ? `Вы выбрали: ${users}.\n Компьютер выбрал: ${computerChoice}.\n Ничья!!!` :
            (users === 'камень' && computerChoice === 'ножницы') ||
            (users === 'ножницы' && computerChoice === 'бумага') ||
            (users === 'бумага' && computerChoice === 'камень') ? `Вы выбрали: ${users}.\n Компьютер выбрал: ${computerChoice}.\n Вы победили!!!` :
            `Вы выбрали: ${users}.\n Компьютер выбрал: ${computerChoice}.\n Компьютер победил!!!`;

    alert(result);

} else {
    alert('Такой задачи не существует')
}