$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.gallery-slider').slick({
    slidesToShow: 3,
    dots: true,
    variableWidth: true,
    infinite: true,
    centerMode: true,
    nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<g>\n' +
        '\t\t<path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105\n' +
        '\t\t\tL123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795\n' +
        '\t\t\tl236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"/>\n' +
        '\t</g>\n' +
        '</g>\n' +
        '</svg>\n</button>',
    prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<g>\n' +
        '\t\t<path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8\n' +
        '\t\t\tc-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712\n' +
        '\t\t\tL143.492,221.863z"/>\n' +
        '\t</g>\n' +
        '</g>\n' +
        '</svg>\n</button>',
    appendArrows: '.slider-nav',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                centerMode: false,
            }
        }
    ]
});

$('.news-slider').slick({
    slidesToShow: 3,
    nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<g>\n' +
        '\t\t<path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105\n' +
        '\t\t\tL123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795\n' +
        '\t\t\tl236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"/>\n' +
        '\t</g>\n' +
        '</g>\n' +
        '</svg>\n</button>',
    prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve">\n' +
        '<g>\n' +
        '\t<g>\n' +
        '\t\t<path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8\n' +
        '\t\t\tc-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712\n' +
        '\t\t\tL143.492,221.863z"/>\n' +
        '\t</g>\n' +
        '</g>\n' +
        '</svg>\n</button>',
    dots: true,
    appendArrows: ".news-slider-nav",
    appendDots: ".news-slider-nav",
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// активная ссылка меню
$('.menu li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location === link) {
        $(this).addClass('current');
    }
});
// end

$('.down').on("click", function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').on("click", function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

// Инициализация карты
ymaps.ready(init);

function init() {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map', {
        center: [53.121761, 45.012432],
        zoom: 16
    });

    // Создание своей метки
    var myPlacemark = new ymaps.Placemark(
        // Координаты метки
        [53.121761, 45.012432], {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/location.png',  // картинка иконки
            iconImageSize: [72, 86],                                      // размеры картинки
            // iconImageOffset: [-70, -40],// смещение картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);

    //Элементы управления
    myMap.controls
    // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', {right: 5, top: 75})
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}