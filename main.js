var button = document.getElementById('mobile-menu');
var blockMenu = document.getElementById('menu');



button.onclick = function openMenu(){
	if (blockMenu.classList.contains('active')){
		blockMenu.className = 'menu';
	} else {
		blockMenu.className = 'menu active';
	}
}


