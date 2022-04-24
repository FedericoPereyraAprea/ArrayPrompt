const juegosDeMesa = ["Glow", "Everdell", "Eclipse", "Shamans", "Paris"];
let cantidad = 7
console.log(juegosDeMesa)
do {
	let nuevoJuego = prompt("Ingresar juego de mesa");
	juegosDeMesa.push(nuevoJuego);
	console.log(juegosDeMesa)
} while(juegosDeMesa.length != cantidad)





