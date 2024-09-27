const btnPlay = document.querySelector('button');
const h3User = document.querySelector('#user span');
const h3Compu = document.querySelector('#compu span');
const h1Result = document.querySelector('h1');

const play = () => {
    const choiceUser = prompt('Elige: \n Piedra \n Papel \n Tijera');
    const choices = ['Piedra', 'Papel', 'Tijera'];
    const choiceCompu = choices[Math.floor(Math.random() * 3)];
    let message = '';
    if(choiceUser === choiceCompu ){
        message = 'Empate 😮';
    }else if(
        (choiceUser === 'Piedra' && choiceCompu === 'Tijera') ||
        (choiceUser === 'Papel' && choiceCompu === 'Piedra') ||
        (choiceUser === 'Tijera' && choiceCompu === 'Papel')
    ){
        message = 'Ganaste 🎉';
    }else{
        message = 'Perdiste 👎';
    }
    h3User.innerText = choiceUser;
    h3Compu.innerText = choiceCompu;
    h1Result.innerText = message;
}
btnPlay.addEventListener('click', play);