// Programmer: Bella
// Team Member: Hailioso
// Bolt ID: B2F8
// Date: 5.2.2024
// Program: Obstacle Course
// Program URL: https://edu.sphero.com/program/16752511/editasync function startProgram() {
	

 
async function startProgram() {

	// Programmer: Bella Williams - Start Text & Audio Checkpoint Commit - Date: 4.30.24
	await speak("START", true)
	await scrollMatrixText('START', { r:66, g: 56, b: 255 }, 20 , true) ,

	
	
	// Programmer: Hailey Terrini - Blue LED Checkpoint Commit - Date: 5.1.24
	await roll((getHeading() -181), 68, 2.5);
	setMainLed({ r: 0, g: 0, b: 255});
	await delay(2);


	// Programmer: Bella Williams - Sound One Checkpoint Commit - Date: 5.2.24
	await roll((getHeading() -270), 46, 2.5);
	await Sound.Animal.Sheep.play(true);
	await delay(2);

	// Programmer:        - Red LED Checkpoint Commit - Date:



	// Programmer          - Sound Two Checkpoint Commit - Date:



	// Programmer:        - Green LED Checkpoint Commit - Date:




	// Programmer:        - Purple LED & Sound Three Checkpoint Commit - Date:


	// Programmer:        - Finish Text & Audio Checkpoint Commit - Date:

} 