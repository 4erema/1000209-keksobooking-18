'use strict'
//Моки
var MASSIVE_LENGTH = 8;
var MASSIVE = [];
var PRICE = [10000, 50000, 20000, 30000, 40000];
var TYPE = ['palace', 'flat', 'house', 'bungalo'];
var CHECKIN = ['12:00', '13:00', '14:00'];
var CHEKOUT = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'diswasher', 'parking', 'washer', 'elevator', 'contidioner',];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
// создаем функцию по нахождению случайного числа в пределах от min до max
var getRandomNumber = function(min, max) {
  var randomNumber = Math.floor(Math.random()(max-min +1) + min);
  return RandomNumber;
};

// создаем функцию по нахождению случайного элемента массива
var getRadomElement = function(element){
  var randomElement = element[getRandomNumber(0, element.length - 1)];
  return randomElement;
};
// создаем функцию для создания случайного массива из уже существуещего
var getRandomArr = function(arr){
  var lastElement = getRandomNumber(0, arr.length-1);
  return arr.slice(0, lastElement);
};

//Напишите функцию для создания массива из 8 сгенерированных JS объектов. Каждый объект массива ‐ function
var getMassive = function(){

 for(i=0; i<MASSIVE_LENGTH; i++) {
 var Object = {
//описание похожего объявления неподалёку. Структура объектов должна быть следующей:
//  "author": {
   'author': {
//    "avatar": строка, адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} это число
//от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д. Адреса изображений не повторяются
     'avatar': 'img/avatars/user0'+(i+1)+'.png'
   },
   //  "offer": {
   'offer': {
     //    "title": строка, заголовок предложения
     'title': 'предложение',
     //    "address": строка, адрес предложения. Для простоты пусть пока представляет собой запись вида
     //"{{location.x}}, {{location.y}}", например, "600, 350"
     'adress': '600, 300',
//    "price": число, стоимость
     'price': getRandomElement(PRICE),
//    "type": строка с одним из четырёх фиксированных значений: palace, flat, house или bungalo
     'type': getRandomElement(TYPE),
//    "rooms": число, количество комнат
     'rooms': getRandomNumber(0, 10),
//    "guests": число, количество гостей, которое можно разместить
     'guest': getRandomNumber(0, 10),
//    "checkin": строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00,
     'checkin': getRandomElement(CHECKIN),
//    "checkout": строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00
     'chekout': getRandomElement(CHEKOUT),
//    "features": массив строк случайной длины из ниже предложенных: "wifi", "dishwasher",
//"parking", "washer", "elevator", "conditioner",
     'features': getRandomArr(FEATURES),
//    "description": строка с описанием,
     'description': 'Описание',
//    "photos": массив строк случайной длины, содержащий адреса фотографий
//"http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
//"http://o0.github.io/assets/images/tokyo/hotel3.jpg"
     'photos': getRandomArr(PHOTOS),
   }
//  "location": {
//    "x": случайное число, координата x метки на карте. Значение ограничено размерами блока,
//в котором перетаскивается метка.
//    "y": случайное число, координата y метки на карте от 130 до 630.
//  }
 }
 }
};
