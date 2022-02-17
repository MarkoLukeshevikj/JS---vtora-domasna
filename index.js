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

function soberi(niza1, niza2) {
    let rezultat = 0;
        for (let i = 0; i < niza2.length; i++) {
        rezultat += niza1[i] * niza2[i];
    }
    return rezultat;
}
console.log(soberi(niza1, niza2))



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

/* 5. Na dadena niza [ 1, 2, 3, 5] da i se dodade brojot 4 na pozicija 3 i da se kreira nova niza koja bi izgledala [1 , 2, 3, 4, 5] (edited)  */
  
  let aray = [ 1, 2, 3, 5];
  
  function dodadiBroj(niza) {
    let aray2 = [];
    for (let i = 0; i < niza.length; i++) {
        if (i === 3) {
            aray2.push(4);
            aray2.push(niza[i]);
        }
        else aray2.push(niza[i]);
    }
   return aray2;
  }
  console.log(dodadiBroj(aray))

/* 6. Na dadena niza [ a , b, v, v ,g] da se izvadi elementot v koj e duplikat od nizata i da se dobie niza [ a ,b  , v ,g ] .*/

function trgniDuplikat(niza) {
    let nizaBezDuplikati = [];
    for (let i = 0; i < niza.length; i++) {
        let duplikat = 0;
        for (let j = i + 1; j < niza.length; j++) {
          if (niza[i] === niza[j]) duplikat++
        }
        if (duplikat === 0) nizaBezDuplikati.push(niza[i]);
    }
    return nizaBezDuplikati;
}

console.log(trgniDuplikat(['a ', 'b', 'v', 'v' ,'g']));


/* 7. Na dadena niza [ 1 , 3 , 3 ,4 ,5 ,6 ,6 ] da se proveri kolku duplikati ima. ( na primerot ima 2 duplikati 3 i 6 ) */

  function kolkuDuplikati(niza) {
      let duplikati = 0;
      for (let i = 0; i < niza.length; i++) {
          let duplikat = 0;
          for (let j = i + 1; j < niza.length; j++) {
            if (niza[i] === niza[j]) duplikat++
          }
          if (duplikat > 0) duplikati++
      }
      return duplikati;
  }

  console.log(kolkuDuplikati([1 , 3 , 3 ,4 ,5 ,6 ,6,]));


