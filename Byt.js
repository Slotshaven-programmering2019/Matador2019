// paramaters:
// sender: object Spiller
// modtager: object Spiller
// penge: integer, positive for tilbudt, negative for ansøgt
// grund: array af integers, length: 40
// FaengselKort: integer, 1 betyder tilbudt, -1 betyder ansøgt, 0 betyder hverken
function Byt(sender, modtager, penge, grund, FaengselKort) {
    // for hver grund og for hvert slip ud af fængsel kort, 1 betyder tilbudt, -1 betyder ansøgt, 0 betyder hverken

	this.getSender = function() {
		return sender;
	};

	this.getModtager = function() {
		return modtager;
	};

	this.getGrund = function(index) {
		return grund[index];
	};

	this.getPenge = function() {
		return penge;
	};

	this.getFaengselKort = function() {
		return FaengselKort;
	};
}

