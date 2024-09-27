const main = document.querySelector('main');
const h1 = document.querySelector('h1');

const eightball = () => {
    const question = prompt('Pregunta: ');
    const random = Math.floor(Math.random() * 8);
    const options = [
        'Si',
        'No',
        'Tal Vez',
        'XD',
        'No lo se Rick',
        'No tambien quieres un Helado',
        'Preguntale al ChatGTP',
        'Ora, apoco si mai',
    ]
    h1.innerText = options[random];
}

main.addEventListener('click', eightball);