$(document).ready(function(){
	$('.header__burger').click(function(){
		$('.header__wrapper').slideToggle().toggleClass('active');
		$('.header__burger').toggleClass('active');
		$('body').toggleClass('active');
		});
	$('.drop-down-arrow').click(function(){
		$('.header__form').slideToggle().toggleClass('active');
		$('.drop-down-arrow').toggleClass('active')
	});
	$('.filter-list').click(function(){
		$(this).next('.filter-list-wrapper').slideToggle();
		$(this).children('.filter-arrow').toggleClass('active');
	});
	$('.main__filter').click(function(){
		$('.big-arrow-down').toggleClass('active');
		$('.big-arrow-up').toggleClass('active');
		$(this).next('.filter').slideToggle();
	});
	$('.hotel-down-btn').click(function(){
		$(this).toggleClass('active');
		$(this).prev('.ul-hotel-cost').slideToggle();
	})
	$('.footer-btn').click(function(){
		$(this).children('.footer-hotel-btn').toggleClass('active');
		$(this).next('.footer_hotel_info').slideToggle();
		$(this).toggleClass('active')
	});
});
ymaps.ready(init);
function init(){
	var map = new ymaps.Map('map',{
		center: [59.94, 30.32],
		zoom: 13,
		controls: ['zoomControl']
	});


	var placemark = new ymaps.Placemark( [59.94, 30.32],{
		hintContent: '<div class="map-hint"> Инвест торги</div><div class="map-hint-text">Закрыто на вход</div>'
	},
	{
		iconLayout: 'default#image',
		iconImageHref: '/img/bag.png',
		iconImageSize: [20, 25]
	});
	map.geoObjects.add(placemark);
}