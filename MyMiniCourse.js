// Programmer: Bella
// Team Member: Hailioso
// Bolt ID: B2F8
// Date: 4.23.2024
// Program: My Mini Course
// Program URL: https://edu.sphero.com/program/16743344/edit

async function startProgram() {
	setMainLed({ r: 255, g: 0, b: 0});
	await speak("Booting maze scan, scan completed, starting course.", true)
	await roll((getHeading() -180), 41, 2);
	await delay(5);
}
