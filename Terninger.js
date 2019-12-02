class Terninger {

	// eventuelt variabel til at se hvor mange gange der er slået 12 i træk
	
	constructor() {
	
	}
	
	// Simulerer kast med to seksidede terninger og returnerer antallet af øjne
	// functionen er static og kan kaldes med ved at skrive "Terninger.Kast();"
	static kast () {
		console.log("Terninger er kastet");
		var terningEt = Math.ceil(Math.random() * 6);
		var terningTo = Math.ceil(Math.random() * 6);
		console.log(terningEt, terningTo);
		console.log(terningEt + terningTo);
		return terningEt + terningTo;
	}
}
