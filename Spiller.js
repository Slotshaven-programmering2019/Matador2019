class Spiller {
	/** Spiller objekt
	 * @param  {number} spillerId
	 * @param  {string} spillerNavn
	 * @param  {number} position
	 * @param  {null} ejendomme
	 * @param  {number} penge
	 * @param  {number} friKort
	 */
	constructor(spillerId, spillerNavn, position, ejendomme, penge, friKort) {
		this.spillerId = spillerId;
		this.spillerNavn = spillerNavn;
		this.position = position;
		this.ejendomme = ejendomme;
		this.penge = penge;
		this.friKort = friKort;
	}
	spillerUde = false;


}