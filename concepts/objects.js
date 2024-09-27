const tsuru = {
    model: 2022,
    color: 'verde',
    kilometraje: 200000,
    engine: '2.0 litros'
}

console.log(tsuru);
console.log(tsuru.model);
console.log(tsuru.color);
tsuru.engine = '4.0 litros'
console.log(tsuru);

tsuru.collitions = 5;
console.log(tsuru);
tsuru['numero_placas'] = 'XD 666 X'
console.log(tsuru);
tsuru.services = [2005, 2010, 2015, 2020];
console.log(tsuru);

// Tsuru tuneado =)

tsuru.start = function() {
    console.log('Revision del Sistema');
    console.log('Revision de Niveles');
    console.log('Ruuuunnnnn');
    console.log('Runnnnnnnn');
    this.status = 'Encendido'
}
tsuru.start();
console.log(tsuru.status);
tsuru['turn_off'] = function() {
    console.log('Apagando Motor');
    this.estatus = 'Apagado'
    console.log(this.estatus)
}
tsuru['turn_off']();

delete tsuru['numero_placas'];
console.log(tsuru);