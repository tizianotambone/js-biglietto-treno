let età = parseInt(prompt("indica l'età"));
console.log (età);

let chilometri = parseFloat(prompt("indicare i chilometri da percorrere"));
console.log (chilometri);

// costo x chilometro

const costoalkm = 0.21;
// calcolo del costo base senza sconti

let costobase = chilometri * costoalkm
console.log (costobase)
// se luntente  è compreso tra 18 e 64 anni non ottiene sconto

let sconto = 0;

console.log(sconto)


if (età < 18){
    sconto =   costobase * 20 / 100
}
 else if (età > 64){
    sconto =  costobase * 40 / 100
 }



