/* 1. Да се напише функција која ќе ги преврти цифрите на еден број. (757162 => 261757) */

function prevrti(broj) {
    let broj1;
    for (broj1 = ' '; broj > 0;) {
        broj1 += broj % 10;
        broj = broj / 10
        broj = Math.floor(broj);
    }
    return Number(broj1);
}
console.log(prevrti(757162));


/* 2. Да се напише функција која ќе ја испише Фибоначиевата низа до N */

function fibonaci(broj) {
    let broj1 = 0;
    console.log(broj1);
    let broj2 = 1;
    console.log(broj2);
    for (; broj > (broj1 + broj2);) {
        let broj3 = broj1 + broj2;
        broj1 = broj2;
        broj2 = broj3;
        console.log(broj2);
    }
}
fibonaci(100);



/* 3. Во една низа, да се соберат производите од елементите на соодветните позиции
Пример: niza1 = [1,2,3] niza2 = [4,5,6]   rezultat = (1 * 4) + (2 * 5) + (3 * 6) = 32 */

let niza1 = [1, 2, 3];
let niza2 = [4, 5, 6];
let niza = [(niza1[0] * niza2[0]), (niza1[1] * niza2[1]), (niza1[2] * niza2[2])];
console.log(niza);



/* 4. Во низата: ['i', 'i', 'i','i', 'i', 'i','i', 'i', 'i','i', 'i', 'i','i', 'i', 'i','i', 'i', 
'i','i', 'i', 'i','i', 'i', 'i','!','i', 'i', 'i','i', 'i', 'i','i', 'i', 'i','i', 'i', 'i','i', 'i', 'i'] 
да се најде позицијата (индексот) на елементот '!' */

// let nizaOdI = ['i', 'i', 'i','i', 'i', 'i','i', 'i', 'i','i', 'i', 'i','i', 'i', 'i','i', 'i', 
// 'i','i', 'i', 'i','i', 'i', 'i','!','i', 'i', 'i','i', 'i', 'i','i', 'i', 'i','i', 'i', 'i','i', 'i', 'i'];

// let index = nizaOdI.indexOf('!');
// console.log(index);

function findIndex(niza, index) {
    for (let i = 0; i < niza.length; i++) {
        if (niza[i] === index) return i;
    }
}
console.log(findIndex(['i', 'i', 'i','i', 'i', 'i','i', 'i', 'i','i', 'i', 'i','i', 'i', 'i','i', 'i', 
'i','i', 'i', 'i','i', 'i', 'i','!','i', 'i', 'i','i', 'i', 'i','i', 'i', 'i','i', 'i', 'i','i', 'i', 'i'], '!'));