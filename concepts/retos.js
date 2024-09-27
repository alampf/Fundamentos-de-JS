// Regalos Envueltos
function wrapping(gifts) {
    const envuelto = [];
    for (let gift of gifts) {
        let tapa = '*'.repeat(gift.length + 2);
        let g = `${tapa}\n*${gift}*\n${tapa}`;
        envuelto.push(g);
    }
    return envuelto;
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)

// Cubo
// function createCube(size) {
//     const space = ' ';
//     const faceA = '/\\';
//     const backA = '_\\';
//     const faceB = '\\/';
//     const backB = '_/';
//     let cubeA = '';
//     for(let i = 0; i < size; i++){
//         let line = space.repeat(i);
//         line += faceA.repeat(size - i);
//         line += backA.repeat(size);
//         cubeA = line + '\n' + cubeA;
//     }
//     let cubeB = '';
//     for(let i = 0; i < size; i++){
//         let line = space.repeat(size - i - 1);
//         line += faceB.repeat(i + 1);
//         line += backB.repeat(size);
//         cubeB = line + '\n' + cubeB;
//     }
//     console.log(cubeA + cubeB);
//     return ''
// }

// const cube = createCube(3)
// console.log(cube)

// function messageSpam(repeat){
//     let mensaje = '';
//     for(let i = 0; i < repeat; i++){
//         mensaje += 'Hola'.repeat(i + 1);
//     }
//     return mensaje;
// }

// const mensaje = messageSpam(3);
// console.log(mensaje);