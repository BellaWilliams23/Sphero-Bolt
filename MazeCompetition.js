// Programmer: Bella
// Team Member: Hailioso
// Bolt ID: B2F8
// Date: 5.1.2024
// Program: Obstacle Course
// Program URL: https://edu.sphero.com/program/16752511/editasync function startProgram() {
	



async function startProgram() {

	// Programmer: Bella Williams - Start Text & Audio Checkpoint Commit - Date: 4.30.24
	await speak("START", true)
	await scrollMatrixText('START', { r:66, g: 56, b: 255 }, 20 , true) 

	
	
	// Programmer: Hailey Terrini - Blue LED Checkpoint Commit - Date: 5.1.24
	setMainLed({ r: 0, g: 0, b: 255});
	await roll((getHeading() -180), 70, 2.5);



	// Programmer          - Sound One Checkpoint Commit - Date:



	// Programmer:        - Red LED Checkpoint Commit - Date:



	// Programmer          - Sound Two Checkpoint Commit - Date:



	// Programmer:        - Green LED Checkpoint Commit - Date:




	// Programmer:        - Purple LED & Sound Three Checkpoint Commit - Date:


	// Programmer:        - Finish Text & Audio Checkpoint Commit - Date:

}