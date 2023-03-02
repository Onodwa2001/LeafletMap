let result = 'Boston, MA';

var map = L.map('map', {
    layers: MQ.mapLayer()
});

MQ.geocode({ map: map })
    .search(result);

let search = document.getElementById('search');

document.getElementById('btn').addEventListener('click', (e) => {
    result = search.value;
    // MQ.geocode({ map: map })
    //     .search(result);

    MQ.geocode().search(result).on('success', function(e) {
        var best = e.result.best,
            latlng = best.latlng;
        
        map.setView(latlng, 12);
        
        L.marker([ latlng.lat, latlng.lng ])
            .addTo(map)
            .bindPopup('<strong>' + best.adminArea5 + ', ' + best.adminArea3 + '</strong>is located here.')
            .openPopup()
    });
});


