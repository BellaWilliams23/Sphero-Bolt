// Programmer: Bella
// Team Member: Hailioso
// Bolt ID: B2F8
// Date: 4.16.2024
// Program: Hello Square - Sandbox
// Program URL: https://edu.sphero.com/program/16700419/edit

/*
async function startProgram() {
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);
}
*/

/*
async function startProgram() {

	setMainLed({ r: 100, g: 55, b: 100 });
	await speak("Skibidi Alpha Sigma", true);
	await delay(1);
	for (var square = 0; square < 4; square++) {
		setMainLed(getRandomColor());
		await Sound.Animal.Whale.play(true);
		await roll((getHeading() + 90), 40, 3);
		await delay(1);

	}

}
*/


async function startProgram() {
	await roll(( getHeading() + 0), 60, 2);
	await delay(1);
	await roll(( getHeading() + 90), 60, 2);
	await delay(1);
	await roll((getHeading() - 180), 60, 2);
	
	
}