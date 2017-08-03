var fos = 1;

document.getElementById("p2").disabled = true;
document.getElementById("win").style.display = 'none';


function Quitar(player) {
	if (player.id == "p1") {
		var movi1 = document.getElementById("movimiento1").value;

		while(movi1 > 0){
				document.getElementById(fos).style.opacity = '.1';
				fos++;
				movi1--;
			}
		desControles("p1"); //Desactiva los controles para el jugador 1

		//Decide quien es el ganador
		if (fos == 10) {
			showWin("1");
		}else if (fos == 11) {
			showWin("2");
		}
	}else if (player.id == "p2") {
		var movi2 = document.getElementById("movimiento2").value;

		while(movi2 > 0){
				document.getElementById(fos).style.opacity = '.1';
				fos++;
				movi2--;
			}
		desControles("p2"); //Desactiva los controles para el jugador 2

		//Decide quien es el ganador
		if (fos == 10) {
			showWin("2");
		}else if (fos == 11) {
			showWin("1");
		}
	}
}

function showWin(p){

	for(var i = 10; i > 0; i--){
				document.getElementById(i).style.display = 'none';
			}

	var win = document.getElementById('win');

	win.style.display = 'flex';
	win.innerHTML = "Player "+ p +" win!";
}


function desControles(turno){
	if (turno == "p1") {
		document.getElementById("p1").disabled = true;
		document.getElementById("p2").disabled = false;
	}else if (turno == "p2") {
		document.getElementById("p2").disabled = true;
		document.getElementById("p1").disabled = false;
	}
}
