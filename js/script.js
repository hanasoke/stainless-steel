// event pada saat link di klik
$('.page-scroll').on('click', function(e){

	// ambil isi href 
	var purpose = $(this).attr('href');

	// tangkap elemen yang bersangkutan
	var elemenTujuan = $(purpose);

	// pindahkan scrool
	$('html,body').animate({
		scrollTop:elemenTujuan.offset().top - 2
	}, 1250, 'easeInOutExpo');

	e.preventDefault();

});