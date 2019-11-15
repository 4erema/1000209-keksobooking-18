'use strict';
// Моки
var ARRAY_LENGTH = 8;
var PRICE = [10000, 50000, 20000, 30000, 40000];
var TYPE = ['palace', 'flat', 'house', 'bungalo'];
var CHECK_IN = ['12:00', '13:00', '14:00'];
var CHECK_OUT = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'diswasher', 'parking', 'washer', 'elevator', 'contidioner'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var MIN_X = 0;
var MAX_X = 1200;
var MIN_Y = 130;
var MAX_Y = 630;
var PIN_WIDTH = 50;
var PIN_HEIGHT = 70;

var pinTemplate = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');

// создаем функцию по нахождению случайного числа в пределах от min до max
var getRandomNumber = function (min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
};

// создаем функцию по нахождению случайного элемента массива
var getRandomElement = function (element) {
  var randomElement = element[getRandomNumber(0, element.length - 1)];
  return randomElement;
};

// создаем функцию для создания случайного массива из уже существуещего
var getRandomArr = function (arr) {
  var lastElement = getRandomNumber(0, arr.length - 1);
  return arr.slice(0, lastElement);
};

// Напишите функцию для создания массива из 8 сгенерированных JS объектов. Каждый объект массива ‐ function
var getOffersArray = function () {
  var offersArray = [];
  for (var i = 0; i < ARRAY_LENGTH; i++) {
    var coordinateX = getRandomNumber(MIN_X, MAX_X);
    var coordinateY = getRandomNumber(MIN_Y, MAX_Y);
    var offerObject = {

      'author': {
        'avatar': 'img/avatars/user0' + (i + 1) + '.png'
      },
      'offer': {
        'title': 'предложение',
        'address': coordinateX + ', ' + coordinateY,
        'price': getRandomElement(PRICE),
        'type': getRandomElement(TYPE),
        'rooms': getRandomNumber(0, 10),
        'guest': getRandomNumber(0, 10),
        'checkin': getRandomElement(CHECK_IN),
        'chekout': getRandomElement(CHECK_OUT),
        'features': getRandomArr(FEATURES),
        'description': 'Описание',
        'photos': getRandomArr(PHOTOS)
      },
      'location': {
        'x': coordinateX,
        'y': coordinateY
      }
    };
    offersArray.push(offerObject);
  }
  return offersArray;
};

// Создаем функцию по заполненнию данных метки.
var renderPin = function (card) {
  var pin = pinTemplate.cloneNode(true);
  var pinImg = pin.querySelector('img');

  pin.style.left = card.location.x + 'px';
  pin.style.top = card.location.y + 'px';

  pinImg.src = card.author.avatar;
  pin.alt = card.offer.title;
  return pin;
};
// Создаём функцию по генерации пинов на основе, генерированных массивов (МОКов).
var renderPins = function (offers) {
  var pinsList = document.querySelector('.map__pins');

  var fragment = document.createDocumentFragment();

  for (var i = 0; i < offers.length; i++) {
    fragment.appendChild(renderPin(offers[i]));
  }
  pinsList.appendChild(fragment);
};

var generatedOffers = getOffersArray();
renderPins(generatedOffers);

var map = document.querySelector('.map');
map.classList.remove('map--faded');
