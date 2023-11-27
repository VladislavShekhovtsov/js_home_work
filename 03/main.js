{   // String: greeting
    const name = prompt('Как вас зовут?');
    alert(`Здравствуйте ${name} !!!`);
}

{   // String: gopni4ek
    const str = prompt('Напиши что либо');

    const remadeStr = str.split(',').join(', блин ');

    console.log(remadeStr);
}

{   // String: capitalize
    const str = prompt('Напиши что либо');
    const result = str[0].toUpperCase() + str.slice(1).toLowerCase();

    console.log(result);

}

{   // String: word count
    const str = prompt('Напиши что либо');

    const result = str.split(' ').length;

    console.log(`В данной строке ${result} слов`);
}

{   // String: credentials

    const surname = prompt('Введите вашу фамилию').trim();
    const modSurname = surname[0].toUpperCase() + surname.slice(1).toLowerCase();

    const name = prompt('Введите ваше имя').trim();
    const modName = name[0].toUpperCase() + name.slice(1).toLowerCase();

    const patronymic = prompt('Введите ваше отчество').trim();
    const modPatronymic = patronymic[0].toUpperCase() + patronymic.slice(1).toLowerCase();

    const fullName = `${modSurname} ${modName} ${modPatronymic}`;

    console.log(fullName);

}

{   // String: beer

    const str = "Было жарко. Василий пил пиво вприкуску с креветками"
    const modStr = str.split("пиво").join("чай");

    console.log(modStr);

}

{   // String: no tag

    const str = "какой-то текст в котором есть один тэг <br /> и всякое другое";
    const indexFirstSumbol = str.indexOf('<'); // находим индекс символа начала тега
    const indexLastSumbol = str.indexOf('>'); // находим индекс символа конца тега

    const result = str.slice(0, indexFirstSumbol - 1) + str.slice(indexLastSumbol + 1); // В данном случае -1, чтобы удалить лишний пробел перед тэгом

    console.log(result);
}

{   // String: big tag

    const str = "какой-то текст в котором есть один тэг <br /> и всякое другое";
    const indexFirstSumbol = str.indexOf('<'); // находим индекс символа начала тега
    const indexLastSumbol = str.indexOf('>'); // находим индекс символа конца тега

    const tag = str.slice(indexFirstSumbol + 1, indexLastSumbol - 1);
    const modifiedString = str.slice(0, indexFirstSumbol) + '<' + tag.toUpperCase() + '/>' + str.slice(indexLastSumbol + 1);

    console.log(modifiedString);

}

{   // String: new line

    const str = prompt('Введите что нибудь используя маркер \n');
    const strLine = str.split('\\n').join('\n');

    alert(strLine);


}

{   // String: youtube

    const link = prompt('Введите ссылку на YouTube');
    const regularExpression = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    const arr = link.match(regularExpression);
    const id = arr[1];
    const htmlCodeVideos = `<div style = "display: flex; justify-content: center;" ><iframe width="900" height="500" src="https://www.youtube.com/embed/${id}?si=gT2n21HUH_2001P1"
                                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                                encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                                </iframe></div>`
    document.write(htmlCodeVideos);
}