ymaps.ready(initMap);

function initMap() {
    // Yaratilgan xaritani ko'rsatish uchun markaz va zoom
    var map = new ymaps.Map('map', {
        center: [55.733842, 37.588144], // Specify the map center
        zoom: 10
    });

    // LineString obyektini yaratish
    var lineStringFeature = new ymaps.GeoObject({
        geometry: {
            type: 'LineString',
            coordinates: [
                [25.1229762, 55.189311],
                [25.329762, 55.389311]
            ]
        },
        properties: {
            balloonContent: 'Your LineString'
        },
        options: {
            strokeColor: 'rgb(14, 194, 219)',
            strokeWidth: 12
        }
    });

    // Mini xarita qo'shish
    var controls = new ymaps.control.MiniMap({
        type: 'yandex#map',
        size: [300, 180],
        position: {
            left: 10,
            top: 10
        }
    });

    // Xaritaga markaz qo'shish
    var placemark = new ymaps.Placemark([55.733842, 37.588144], {
        balloonContent: 'Your location'
    });

    // Yaratilgan xaritani ishga tushirish
    const tileDataSource = new ymaps.layer.YandexTileDataSource({
        id: 'tileGeneratorSource',
        tileUrl: 'https://sitename.com/?x={{x}}&y={{y}}&z={{z}}&scale={{scale}}'
    });

    // LineString obyektini xaritaga qo'shish
    map.geoObjects.add(lineStringFeature);

    // Xaritaga boshqa obyektlarni qo'shish
    map.geoObjects.add(placemark);

    // Yandex Tile Data Source ni xaritaga qo'shish
    map.layers.add(tileDataSource);

    // Mini xaritani qo'shish
    map.controls.add(controls);

    // Xarita harakatliligini yoqish
    map.behaviors.enable('drag');
}

// Funktsiyani chaqirish
initMap();
