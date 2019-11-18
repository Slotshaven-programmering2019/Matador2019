class Terninger {
	// eventuelt variabel til at se hvor mange gange der er slået 12 i træk
	constructor() {
	
	}

	static Kast () {
		console.log("Terninger er kastet");
		var terningEt = Math.ceil(Math.random() * 6);
		var terningTo = Math.ceil(Math.random() * 6);
		console.log(terningEt, terningTo);
		console.log(terningEt + terningTo);
		return terningEt + terningTo;
	}
}
