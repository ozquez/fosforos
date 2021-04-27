var fos = 1;

restart();

function Quitar(player, movimiento) {
	switch (player) {
		case 'p1':
			var movi1 = movimiento;
			while (movi1 > 0) {
				document.getElementById(fos).style.opacity = '0';
				fos++;
				movi1--;
			}
			disableControls("p1"); //Desactiva los controles para el jugador 1

			//Decide quien es el ganador
			if (fos == 10) {
				showWin("1");
			} else if (fos == 11) {
				showWin("2");
			}
			break;

		case 'p2':
			var movi2 = movimiento;
			while (movi2 > 0) {
				document.getElementById(fos).style.opacity = '0';
				fos++;
				movi2--;
			}
			disableControls("p2"); //Desactiva los controles para el jugador 2

			//Decide quien es el ganador
			if (fos == 10) {
				showWin("2");
			} else if (fos == 11) {
				showWin("1");
			}
			break;

		default:
			break;
	}
}

function showWin(p) {
	for (var i = 10; i > 0; i--) { document.getElementById(i).style.display = 'none'; }
	var win = document.getElementById('win');
	win.style.display = 'flex';
	win.innerHTML = "Player " + p + " win!" + ``;
	var btnReset = document.getElementById('btnReset');
	btnReset.style.display = 'block';
}

function restart() {
	fos = 1;
	for (var i = 10; i > 0; i--) {
		document.getElementById(i).style.display = 'flex';
		document.getElementById(i).style.opacity = '1';
	}
	document.getElementById("win").style.display = 'none';
	document.getElementById("btnReset").style.display = 'none';
	disableControls('p2');
}

function disableControls(turno) {
	if (turno == 'p1') {
		document.getElementById("p1_1").disabled = true;
		document.getElementById("p1_2").disabled = true;
		document.getElementById("p2_1").disabled = false;
		document.getElementById("p2_2").disabled = false;
	} else if (turno == 'p2') {
		document.getElementById("p2_1").disabled = true;
		document.getElementById("p2_2").disabled = true;
		document.getElementById("p1_1").disabled = false;
		document.getElementById("p1_2").disabled = false;
	}
}
