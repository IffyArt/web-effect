const timeRandomizer = document.querySelector('.time-randomizer');
const timeRandomizerTriger = timeRandomizer.querySelector('button');

var getRandomInt = function (maxNumber) {
  return Math.round(Math.random() * maxNumber) + 1;
};

timeRandomizerTriger.addEventListener('click', function () {
  var targetNumber = 24;
  var reduceNumber = targetNumber;
  var totalNumber;
  var totalArray = [];
  var randomItems = timeRandomizer.querySelectorAll(
    '.time-randomizer__items li',
  );

  randomItems.forEach(function () {
    var itemValue = getRandomInt(targetNumber);
    totalArray.push(itemValue);
  });

  totalNumber = totalArray.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });

  randomItems.forEach(function (element, index) {
    var setItemValue = Math.floor(
      (totalArray[index] / totalNumber) * targetNumber,
    );

    index === totalArray.length - 1
      ? (setItemValue = reduceNumber)
      : (reduceNumber -= setItemValue);

    element.querySelector('h2>span').innerText = setItemValue + '小時';
    element.querySelector('.time-randomizer__item-progress>span').style.width =
      Math.floor((setItemValue / targetNumber) * 100) + '%';
  });
});

timeRandomizerTriger.click();
