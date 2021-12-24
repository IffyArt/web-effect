const cardListData = [
  {
    header: 'Lorem, ipsum dolor',
    image: 'assets/images/demo.jpg',
    container:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, sint. Cum amet iste tenetur beatae natus voluptatum quam aliquam,harum ad saepe eveniet reiciendis a sunt deserunt cupiditateeligendi sint?',
  },
  {
    header: 'Lorem, ipsum dolor',
    image: 'assets/images/demo.jpg',
    container:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, sint. Cum amet iste tenetur beatae natus voluptatum quam aliquam,harum ad saepe eveniet reiciendis a sunt deserunt cupiditateeligendi sint?',
  },
  {
    header: 'Lorem, ipsum dolor',
    image: 'assets/images/demo.jpg',
    container:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, sint. Cum amet iste tenetur beatae natus voluptatum quam aliquam,harum ad saepe eveniet reiciendis a sunt deserunt cupiditateeligendi sint?',
  },
];

const cardListContainer = document.querySelector('.card-list');

var addCardList = function () {
  var appendContent = '';
  cardListData.forEach(function (element) {
    var content = `
		<li>
		<header class="card-list__header">${element.header}</header>
		<article class="card-list__image">
			<img src="${element.image}" alt="卡片展示圖片" />
		</article>
		<article class="card-list__container">
			${element.container}
		</article>
		<footer class="card-list__footer"><a>View All</a></footer>
	</li>
	`;
    appendContent += content;
  });

  cardListContainer.innerHTML = appendContent;
};
addCardList();
