/*
3. Problem :
    Parametre olarak bir Array ve bir de rakam değeri alacak. 
    Array elemanlarını büyükten küçüğe sıralayarak,  parametre olarak girilen 
    n. büyük değeri console'a yazdıracak fonksiyonu yazmak.

    Örneğin : 
    console.log(func_name([ 43, 56, 23, 89, 88, 90, 99, 652], 4));  ----> 89
    verilen array'deki 4. büyük elemanı console'a yazdıracak

*/


let siralamaFuncBuyuktenKck = function (arr, deger) {
    
    let arrNew = arr.sort(function(a, b) {return b - a});

    let buyukElemen = arrNew.slice(deger - 1, deger);
       
    if ( deger > arrNew.length) {
    
    console.log(arr);
    console.log(`Array deki eleman sayısı =`);
    console.log(arr.length);

    return `Dizide ${deger} tane eleman yoktur.` 
    }
    
    console.log(arrNew);

    return `En büyük ${deger}. eleman : ${buyukElemen}`;
}

console.log(siralamaFuncBuyuktenKck([100,30,40,3,50], 4));