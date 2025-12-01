# 🧠 JavaScript Day 12 — Arrays & forEach

Bu darsda men JavaScript’da Arraylar va forEach methodini o‘rgandim.
Amaliy misollar orqali array elementlari ustida qanday ishlashni va forEach yordamida ularni qayta ishlashni mustahkamlab oldim.

---

## 📚 O‘rganganlarim / What I learned

Arrays (Massivlar)
JavaScript’da array – bu bir nechta qiymatlarni tartiblangan holda saqlash usuli.
```
const fruits = ["Olma", "Banan", "Anor"];
console.log(fruits[0]); // Olma

```
forEach methodi
forEach – array elementlari bo‘ylab takroriy ishlash imkonini beradi.
```
const fruits = ["Olma", "Banan", "Anor"];
fruits.forEach(function(item, index) {
  console.log(`${index + 1}. ${item}`);
});
```

---

## 💻 Kod namunasi / Example code

// Array yaratish
```
const fruits = ["Olma", "Banan", "Anor"];
```

// forEach bilan har bir elementni konsolga chiqarish
```
fruits.forEach(function(item, index) {
  console.log(`${index + 1}. ${item}`);
```
});
// Natija:
// 1. Olma
// 2. Banan
// 3. Anor

// Arrow function bilan
```
fruits.forEach((item, i) => console.log(`${i + 1}. ${item}`));
```

// Array elementlarini o‘zgartirish
```
let numbers = [1, 2, 3];
numbers.forEach((num, i, arr) => arr[i] = num * 2);
console.log(numbers); // [2, 4, 6]
```


---

## 🧩 Qisqacha nazariya / Short Theory

- Array – tartiblangan qiymatlar to‘plami.
- forEach – array elementlari bo‘ylab funksiyani takroriy ishlatish uchun method.
- forEach return qiymat bermaydi, faqat array elementlarini qayta ishlashga xizmat qiladi.

---

## 🎯 Maqsad / Goal

Ushbu darsning maqsadi — JavaScript’da arraylar va forEach yordamida elementlar ustida samarali ishlashni o‘rganish.
Buning yordamida quyidagilarni bajara olish kerak:

- Array yaratish va unga qiymatlar qo‘shish.
- forEach yordamida array elementlarini konsolga chiqarish yoki o‘zgartirish.
- Takroriy amallarni array elementlariga qulay va oson usulda qo‘llash.


---

## 💬 Muallif / Author

✍️ Shokhjahon Qalandarov  
📅 Dars: 12-kun — Arrays & forEach
