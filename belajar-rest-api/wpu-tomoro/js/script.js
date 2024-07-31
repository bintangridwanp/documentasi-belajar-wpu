$.getJSON('data/coffee.json', function (data) {
    let menu = data.menu;
    $.each(menu, function (i, data){
        $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3" style="width: 250px;"><img src="img/menu/tomoro.jpeg" class="card-img-top" alt="${item.name}"><div class="card-body"><h5 class="card-title">'+ data.name +'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p><h5 class="card-title">Rp10.000</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>')
    })
});