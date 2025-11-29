'use strict';

// Array → bir yoki bir nechta qiymatlarni index (0,1,2…) bo‘yicha tartiblab saqlaydigan ro‘yxat.

// let ranglar = ['qizil', 'yashil', 'malla']
// console.log(ranglar[2]);

// length → arraydagi elementlar sonini aniqlash uchun ishlatiladi. Oxirgi indexiga 1ni qo’shib natijani chiqaradi
// let ranglar = ['yahsil', 'qizil', 'Sariq'];
// console.log(ranglar.length);


// Array methodlari → bu arraylar bilan ishlashni osonlashtiradigan JavaScript metodlaridir. Ushbu metodlar arraylarga turli amallarni bajarishga yordam beradi.

// pop() → arrayning oxirgi elementini o‘chiradi va o‘chirilgan elementni qaytaradi, shu bilan birga array uzunligini kamaytiradi.
// let kasblar = ['Dasturchi', 'Dizayner', 'Oqituvchi'];
// kasblar.pop();
// console.log(kasblar);

// Vazifalar:
// 1.
let mevalar = ["Olma", "Qulupnay", "Uzum"];
// console.log(mevalar.pop());
mevalar.pop();
console.log(mevalar);

// 2.
let hayvonlar = ["Mushuk", "It", "Ot"];
hayvonlar.pop();
console.log(hayvonlar.length);
console.log(hayvonlar);

//3.
let narsalar = ["Telefon", "Noutbuk", "Kitob"]
if(narsalar.pop() === "Kitob"){
    console.log("Kitob topildi!");
}
console.log(narsalar);

// 4.
let fruits = ["olma", "behi", "anor"];
console.log(fruits.pop().toUpperCase());


// push() → arrayning oxiriga bir yoki bir nechta element qo'shadi va yangi uzunlikni qaytaradi.
let mashinalar = ['Malibu', 'Gentra', 'Matiz'];
mashinalar.push('Cobalt', 'Nexia');
console.log(mashinalar);

// Vazifa:
// 1.
let ranglar = ["lime", "pink", "black"];
let yangiRang = [];
yangiRang.push(ranglar.pop())
console.log(`Yangi array: ${yangiRang}`);
console.log(`Eski array: ${ranglar}`);


// includes() → bu JavaScriptda massiv yoki string ichida ma'lum bir qiymatning mavjudligini tekshiradigan metoddir. Agar qiymat mavjud bo'lsa, true qiymatini qaytaradi, aks holda false qiymatini qaytaradi.
let viloyatlar = ['Navoiy', 'Samarqand', 'Farg\'ona'];
console.log(viloyatlar.includes('Samarqand')); // true
console.log(viloyatlar.includes('Buxoro')); // false


let email = "joe@gmail.com"

if (email.includes("@")) {
  console.log(email)
} else {
  console.log("Emailga @ belgisini kiriting")
}


// Vazifa:
// 1.
let user = 'Mening ismim Shokhjahon';
if (user.includes('Shokhjahon')) {
    console.log(`Topilgan ism: ${user}`);  
} else {
    console.log('Ism topilmadi');
}


// split() → stringni belgilangan ajratuvchiga ko'ra bo'lib, arrayga qiymatlarni yig’ib beradi.
// let ijtimoiyTarmoqlar = "Telegram, Instagram, Youtube";
// console.log(ijtimoiyTarmoqlar.split(', ')); // ['Telegram', 'Instagram', 'Youtube']


// let mevalar = prompt("Mevalar kirit")
// let meva = mevalar.split(", ")

// for (let i = 1; i <= meva.length; i++) {
//   while (meva[i - 1] == meva[i + 1]) {
//     meva.pop()
//   }
// }
// alert(meva)

// Vazifa:
// 1.
let names = "Ali, Valijon, Akmal, Doniyor";
console.log(names.split(', '));

// 2.
let matn = 'Hello';
console.log(matn.split(''));


// join() → arrayning barcha elementlarini belgilangan ajratuvchi bilan bitta satrga birlashtiradi va hosil bo'lgan satrni qaytaradi. Agar ajratuvchi ko'rsatilmasa, elementlar vergul bilan ajratiladi.
let ijtimoiyTarmoqlar = [ 'Telegram', 'Instagram', 'Youtube' ];
console.log(ijtimoiyTarmoqlar.join(" | "));


// sort() → array elementlarini alifbo tartibida yoki callback orqali foydalanuvchi belgilagan tartibda joylashtiradi.
let colors = ["pink", "lime", "black"]
console.log(colors.sort())

let numbers = [4, 25, 8, 6, 1, 5]
console.log(numbers.sort((a, b) => a - b )) // o'sish tartibida;

// Agar array raqamlardan iborat bo'lsa, sort() metodi odatiy holatda elementlarni string sifatida solishtiradi. 
// Shuning uchun raqamlarni to'g'ri tartiblash uchun callback funksiyasini ishlatish kerak.



// forEach() → arraydagi har bir element ustida ishlaydi, lekin hech narsa qaytarmaydi.
// Parametrlar: qiymat → arrayning joriy elementi. index (ixtiyoriy) → arraydagi joriy elementning indeksi. array (ixtiyoriy) → arrayning o'zi.
let color = ['qizil', 'yashil', 'malla'];
color.forEach((rang, index, array) => {
    console.log(`Rang: ${rang}, Index: ${index}, Array: [${array}]`)
});

//  Sortirofka qilish
let sabzavotlar = ["Sabzi", "Kartoshka", "Piyoz"]
sabzavotlar.sort()
sabzavotlar.forEach((qiymat, index, array) => {
  console.log(`${index + 1}: ${qiymat} = ${array}`)
})
