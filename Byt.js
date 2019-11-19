// Bytte funktionerne:

var nuvaerendeSender;
var nuvaerendeModtager;

	var genstartByt = function(sender, modtager, tillaldModtagerAtBliveAendret) { //nulstilling af en byttehandel når der bliver spurgt om et nyt.
		var nuværendePosition; //den nuværende position som spilleren er på
		var nuværnedeEjetFelter; //hvilke felter personen ejer
		var nuvaernedeEjetFeltCelle; //deres "celle" som i den lille boks man skal i "fremtiden" komme til at hover over for at læse om feltet	
		var nuvaernedeEjetFeltCelleCheckbox; //den checkbox der er til venstre for "celle"
		var navnValgt; //navne man kan vælge
		var nuvaerendeValg; //hvilket navn der valgt lige nu
		var AlleGrundeUbygget; //hvilke grunde som er ubygget, da det er kun dem man kan bytte med
		var nuvaerendeNavn; //navnet der er valgt

		var tableListeVedKlik = function(e) { //starter vores trade menu når man har trykket "byt" i board view
			var checkboxElement = this.firstChild.firstChild;

			if (checkboxElement !== e.srcElement) {
				checkboxElement.checked = !checkboxElement.checked;
			}

			$("#foreslaabytknap").show(); //knapperne der bliver vist FØR der er blevet lavet en forslået byttehandel mellem 2 spillere
			$("#annullerebytknap").show(); //annullere byttehandelen
			$("#acceptereerebytknap").hide(); //knappen bliver først vist når spiller 2 bliver spurgt om de vil acceptere deres byttehandel som spiller 1 har lavet.
			$("#afvisebytknap").hide(); //knappen bliver først vist når spiller 2 bliver spurgt om de vil acceptere deres byttehandel som spiller 1 har lavet.
		};

		var senderGrund = document.getElementById("byt-venstrep-Grund"); //venstre kolonne med listen over grunde / slip ud af fængsel kort for spiller 1
		var modtagerGrund = document.getElementById("byt-hoejrep-Grund"); //højre kolonne med listen over grunde / slip ud af fængsel kort for spiller 2

		nuvaerendeSender = sender; 
		nuvaerendeModtager = modtager;

		// Tømmer vores elements så de ikke bliver ved med at være der efter handel
		while (senderGrund.lastChild) {
			senderGrund.removeChild(senderGrund.lastChild);
		}

		while (modtagerGrund.lastChild) {
			modtagerGrund.removeChild(modtagerGrund.lastChild);
		}

		var senderSideTable = document.createElement("table");
		var modtagerSideTable = document.createElement("table");


		for (var i = 0; i < 40; i++) {
			nuværendePosition = position[i];

			// A Grund cannot be bytd if any properties in its group have been improved.
			if (nuværendePosition.hus > 0 || nuværendePosition.groupNumber === 0) {
				continue;
			}

			AlleGrundeUbygget = true;
			var max = nuværendePosition.group.length;
			for (var j = 0; j < max; j++) {

				if (position[nuværendePosition.group[j]].hus > 0) {
					AlleGrundeUbygget = false;
					break;
				}
			}

			if (!AlleGrundeUbygget) {
				continue;
			}

			// Offerød properties.
			if (nuværendePosition.ejer === sender.index) {
				nuværnedeEjetFelter = senderSideTable.appendChild(document.createElement("tr"));
				nuværnedeEjetFelter.onclick = tableListeVedKlik;

				nuvaernedeEjetFeltCelle = nuværnedeEjetFelter.appendChild(document.createElement("td"));
				nuvaernedeEjetFeltCelle.classNavn = "grundcellecheckbox";
				nuvaernedeEjetFeltCelleCheckbox = nuvaernedeEjetFeltCelle.appendChild(document.createElement("input"));
				nuvaernedeEjetFeltCelleCheckbox.type = "checkbox";
				nuvaernedeEjetFeltCelleCheckbox.id = "bytvenstrecheckbox" + i;
				nuvaernedeEjetFeltCelleCheckbox.title = "Check denne box for at inkludere " + nuværendePosition.navn + " i byttehandel.";

				nuvaernedeEjetFeltCelle = nuværnedeEjetFelter.appendChild(document.createElement("td"));
				nuvaernedeEjetFeltCelle.classNavn = "grundcellefarve";
				nuvaernedeEjetFeltCelle.style.backgroundFarve = nuværendePosition.farve;

				if (nuværendePosition.groupNumber == 1 || nuværendePosition.groupNumber == 2) {
					nuvaernedeEjetFeltCelle.style.borderFarve = "grey";
				} else {
					nuvaernedeEjetFeltCelle.style.borderFarve = nuværendePosition.farve;
				}

				nuvaernedeEjetFeltCelle.grundIndex = i;
				nuvaernedeEjetFeltCelle.onmouseover = function() {showdeed(this.grundIndex);};
				nuvaernedeEjetFeltCelle.onmouseout = hidedeed;

				nuvaernedeEjetFeltCelle = nuværnedeEjetFelter.appendChild(document.createElement("td"));
				nuvaernedeEjetFeltCelle.classNavn = "grundcellenavn";
				if (nuværendePosition.pantsat) {
					nuvaernedeEjetFeltCelle.title = "Pantsat";
					nuvaernedeEjetFeltCelle.style.farve = "grey";
				}
				nuvaernedeEjetFeltCelle.textContent = nuværendePosition.navn;

			// Requested properties.
			} else if (nuværendePosition.ejer === modtager.index) {
				nuværnedeEjetFelter = modtagerSideTable.appendChild(document.createElement("tr"));
				nuværnedeEjetFelter.onclick = tableListeVedKlik;

				nuvaernedeEjetFeltCelle = nuværnedeEjetFelter.appendChild(document.createElement("td"));
				nuvaernedeEjetFeltCelle.classNavn = "grundcellecheckbox";
				nuvaernedeEjetFeltCelleCheckbox = nuvaernedeEjetFeltCelle.appendChild(document.createElement("input"));
				nuvaernedeEjetFeltCelleCheckbox.type = "checkbox";
				nuvaernedeEjetFeltCelleCheckbox.id = "bythoejrecheckbox" + i;
				nuvaernedeEjetFeltCelleCheckbox.title = "Check denne box for at inkludere " + nuværendePosition.navn + " i byttehandel.";

				nuvaernedeEjetFeltCelle = nuværnedeEjetFelter.appendChild(document.createElement("td"));
				nuvaernedeEjetFeltCelle.classNavn = "grundcellefarve";
				nuvaernedeEjetFeltCelle.style.backgroundFarve = nuværendePosition.farve;

				if (nuværendePosition.groupNumber == 1 || nuværendePosition.groupNumber == 2) {
					nuvaernedeEjetFeltCelle.style.borderFarve = "grey";
				} else {
					nuvaernedeEjetFeltCelle.style.borderFarve = nuværendePosition.farve;
				}

				nuvaernedeEjetFeltCelle.grundIndex = i;
				nuvaernedeEjetFeltCelle.onmouseover = function() {showdeed(this.grundIndex);};
				nuvaernedeEjetFeltCelle.onmouseout = hidedeed;

				nuvaernedeEjetFeltCelle = nuværnedeEjetFelter.appendChild(document.createElement("td"));
				nuvaernedeEjetFeltCelle.classNavn = "grundcellenavn";
				if (nuværendePosition.pantsat) {
					nuvaernedeEjetFeltCelle.title = "Pantsat";
					nuvaernedeEjetFeltCelle.style.farve = "grey";
				}
				nuvaernedeEjetFeltCelle.textContent = nuværendePosition.navn;
			}
		}

		if (sender.chanceFaengselKort) {
			nuværnedeEjetFelter = senderSideTable.appendChild(document.createElement("tr"));
			nuværnedeEjetFelter.onclick = tableListeVedKlik;

			nuvaernedeEjetFeltCelle = nuværnedeEjetFelter.appendChild(document.createElement("td"));
			nuvaernedeEjetFeltCelle.classNavn = "grundcellecheckbox";
			nuvaernedeEjetFeltCelleCheckbox = nuvaernedeEjetFeltCelle.appendChild(document.createElement("input"));
			nuvaernedeEjetFeltCelleCheckbox.type = "checkbox";
			nuvaernedeEjetFeltCelleCheckbox.id = "bytvenstrecheckbox41";
			nuvaernedeEjetFeltCelleCheckbox.title = "check denne box for at byt, Slip Ud af Fængsel Kort i byttehandel.";

			nuvaernedeEjetFeltCelle = nuværnedeEjetFelter.appendChild(document.createElement("td"));
			nuvaernedeEjetFeltCelle.classNavn = "grundcellefarve";
			nuvaernedeEjetFeltCelle.style.backgroundFarve = "white";
			nuvaernedeEjetFeltCelle.style.borderFarve = "grey";

			nuvaernedeEjetFeltCelle = nuværnedeEjetFelter.appendChild(document.createElement("td"));
			nuvaernedeEjetFeltCelle.classNavn = "grundcellenavn";

			nuvaernedeEjetFeltCelle.textContent = "Slip Ud af Fængsel Kort";
		} else if (modtager.chanceFaengselKort) {
			nuværnedeEjetFelter = modtagerSideTable.appendChild(document.createElement("tr"));
			nuværnedeEjetFelter.onclick = tableListeVedKlik;

			nuvaernedeEjetFeltCelle = nuværnedeEjetFelter.appendChild(document.createElement("td"));
			nuvaernedeEjetFeltCelle.classNavn = "grundcellecheckbox";
			nuvaernedeEjetFeltCelleCheckbox = nuvaernedeEjetFeltCelle.appendChild(document.createElement("input"));
			nuvaernedeEjetFeltCelleCheckbox.type = "checkbox";
			nuvaernedeEjetFeltCelleCheckbox.id = "bythoejrecheckbox41";
			nuvaernedeEjetFeltCelleCheckbox.title = "check denne box for at byt, Slip Ud af Fængsel Kort i byttehandel.";

			nuvaernedeEjetFeltCelle = nuværnedeEjetFelter.appendChild(document.createElement("td"));
			nuvaernedeEjetFeltCelle.classNavn = "grundcellefarve";
			nuvaernedeEjetFeltCelle.style.backgroundFarve = "white";
			nuvaernedeEjetFeltCelle.style.borderFarve = "grey";

			nuvaernedeEjetFeltCelle = nuværnedeEjetFelter.appendChild(document.createElement("td"));
			nuvaernedeEjetFeltCelle.classNavn = "grundcellenavn";

			nuvaernedeEjetFeltCelle.textContent = "Slip Ud af Fængsel Kort";
		}

		if (senderSideTable.lastChild) {
			senderGrund.appendChild(senderSideTable);
		} else {
			senderGrund.textContent = sender.navn + " har ingen grunde at bytte med.";
		}

		if (modtagerSideTable.lastChild) {
			modtagerGrund.appendChild(modtagerSideTable);
		} else {
			modtagerGrund.textContent = modtager.navn + " har ingen grunde at bytte med.";
		}

		document.getElementById("byt-venstrep-navn").textContent = sender.navn;

		nuvaerendeNavn = document.getElementById("byt-hoejrep-navn");

		if (tillaldModtagerAtBliveAendret && pcount > 2) {
			// Empty element.
			while (nuvaerendeNavn.lastChild) {
				nuvaerendeNavn.removeChild(nuvaerendeNavn.lastChild);
			}

			navnValgt = nuvaerendeNavn.appendChild(document.createElement("vælg"));
			for (var i = 1; i <= pcount; i++) {
				if (i === sender.index) {
					continue;
				}

				nuvaerendeValg = navnValgt.appendChild(document.createElement("mulighed"));
				nuvaerendeValg.value = i + "";
				nuvaerendeValg.style.farve = spiller[i].farve;
				nuvaerendeValg.textContent = spiller[i].navn;

				if (i === modtager.index) {
					nuvaerendeValg.selected = "valgt";
				}
			}

			navnValgt.onchange = function() {
				resetByt(nuvaerendeSender, spiller[parseInt(this.value, 10)], true);
			};

			navnValgt.title = "Vælg en spiller at bytte med.";
		} else {
			nuvaerendeNavn.textContent = modtager.navn;
		}

		document.getElementById("byt-venstrep-penge").value = "0";
		document.getElementById("byt-hoejrep-penge").value = "0";

	};

	var readByt = function() {
		var sender = nuvaerendeSender;
		var modtager = nuvaerendeModtager;
		var grund = new Array(40);
		var penge;
		var chanceFaengselKort;

		for (var i = 0; i < 40; i++) {

			if (document.getElementById("bytvenstrecheckbox" + i) && document.getElementById("bytvenstrecheckbox" + i).checked) {
				grund[i] = 1;
			} else if (document.getElementById("bythoejrecheckbox" + i) && document.getElementById("bythoejrecheckbox" + i).checked) {
				grund[i] = -1;
			} else {
				grund[i] = 0;
			}
		}

		if (document.getElementById("bytvenstrecheckbox41") && document.getElementById("bytvenstrecheckbox41").checked) {
			chanceFaengselKort = 1;
		} else if (document.getElementById("bythoejrecheckbox41") && document.getElementById("bythoejrecheckbox41").checked) {
			chanceFaengselKort = -1;
		} else {
			chanceFaengselKort = 0;
		}

		penge = parseInt(document.getElementById("byt-venstrep-penge").value, 10) || 0;
		penge -= parseInt(document.getElementById("byt-hoejrep-penge").value, 10) || 0;

		var byt = new Byt(sender, modtager, penge, grund, chanceFaengselKort);

		return byt;
	};

	var writeByt = function(bytObj) {
		resetByt(bytObj.getSender(), bytObj.getModtager(), false);

		for (var i = 0; i < 40; i++) {

			if (document.getElementById("bytvenstrecheckbox" + i)) {
				document.getElementById("bytvenstrecheckbox" + i).checked = false;
				if (bytObj.getGrund(i) === 1) {
					document.getElementById("bytvenstrecheckbox" + i).checked = true;
				}
			}

			if (document.getElementById("bythoejrecheckbox" + i)) {
				document.getElementById("bythoejrecheckbox" + i).checked = false;
				if (bytObj.getGrund(i) === -1) {
					document.getElementById("bythoejrecheckbox" + i).checked = true;
				}
			}
		}

		if (document.getElementById("bytvenstrecheckbox41")) {
			if (bytObj.getChanceFaengselKort() === 1) {
				document.getElementById("bytvenstrecheckbox41").checked = true;
			} else {
				document.getElementById("bytvenstrecheckbox41").checked = false;
			}
		}

		if (document.getElementById("bythoejrecheckbox41")) {
			if (bytObj.getChanceFaengselKort() === -1) {
				document.getElementById("bythoejrecheckbox41").checked = true;
			} else {
				document.getElementById("bythoejrecheckbox41").checked = false;
			}
		}

		if (bytObj.getPenge() > 0) {
			document.getElementById("byt-venstrep-penge").value = bytObj.getPenge() + "";
		} else {
			document.getElementById("byt-hoejrep-penge").value = (-bytObj.getPenge()) + "";
		}

	};

	this.byt = function(bytObj) {
		// $("#board").hide(); ikke færdigt
		//$("#control").hide(); ikke færdigt
		$("#byt").show();
		$("#foreslaabytknap").show();
		$("#annullerebytknap").show();
		$("#acceptereerebytknap").hide();
		$("#afvisebytknap").hide();

		if (bytObj instanceof Byt) {
			writeByt(bytObj);
			this.foreslaaByt();
		} else {
			var sender = spiller[turn];
			var modtager = turn === 1 ? spiller[2] : spiller[1];

			nuvaerendeSender = sender;
			nuvaerendeModtager = modtager;

			resetByt(sender, modtager, true);
		}
	};


	this.annullereByt = function() {
		$("#board").show();
		$("#control").show();
		$("#byt").hide();
	};

	this.acceptereereByt = function(bytObj) {
		if (isNaN(document.getElementById("byt-venstrep-penge").value)) {
			document.getElementById("byt-venstrep-penge").value = "This value must be a number.";
			document.getElementById("byt-venstrep-penge").style.farve = "rød";
			return false;
		}

		if (isNaN(document.getElementById("byt-hoejrep-penge").value)) {
			document.getElementById("byt-hoejrep-penge").value = "This value must be a number.";
			document.getElementById("byt-hoejrep-penge").style.farve = "rød";
			return false;
		}

		var visAdvarsel = true;
		var penge;
		var sender;
		var modtager;

		if (bytObj) {
			visAdvarsel = false;
		} else {
			bytObj = readByt();
		}

		penge = bytObj.getPenge();
		sender = bytObj.getSender();
		modtager = bytObj.getModtager();


		if (penge > 0 && penge > sender.penge) {
			document.getElementById("byt-venstrep-penge").value = sender.navn + " does not have $" + penge + ".";
			document.getElementById("byt-venstrep-penge").style.farve = "rød";
			return false;
		} else if (penge < 0 && -penge > modtager.penge) {
			document.getElementById("byt-hoejrep-penge").value = modtager.navn + " does not have $" + (-penge) + ".";
			document.getElementById("byt-hoejrep-penge").style.farve = "rød";
			return false;
		}

		var erEnGrundValgt = 0;

		// Ensure that some properties are selected.
		for (var i = 0; i < 40; i++) {
			erEnGrundValgt |= bytObj.getGrund(i);
		}

		erEnGrundValgt |= bytObj.getChanceFaengselKort();

		if (erEnGrundValgt === 0) {
			popup("<p>En eller flere grunde skal være valgt for at bytte.</p>");

			return false;
		}

		if (visAdvarsel && !confirm(sender.navn + ", er du sikker på at bytte med " + modtager.navn + "?")) {
			return false;
		}

		// Exchange properties
		for (var i = 0; i < 40; i++) {

			if (bytObj.getGrund(i) === 1) {
				position[i].ejer = modtager.index;
				addAlert(modtager.navn + " modtog " + position[i].navn + " fra " + sender.navn + ".");
			} else if (bytObj.getGrund(i) === -1) {
				position[i].ejer = sender.index;
				addAlert(sender.navn + " modtog " + position[i].navn + " fra " + modtager.navn + ".");
			}

		}

		if (bytObj.getChanceFaengselKort() === 1) {
			sender.chanceFaengselKort = false;
			modtager.chanceFaengselKort = true;
			addAlert(modtager.navn + ' modtog et "Slip Ud af Fængsel Kort" kort fra ' + sender.navn + ".");
		} else if (bytObj.getChanceFaengselKort() === -1) {
			sender.chanceFaengselKort = true;
			modtager.chanceFaengselKort = false;
			addAlert(sender.navn + ' modtog a "Slip Ud af Fængsel Kort" kort fra ' + modtager.navn + ".");
		}

		// Exchange penge.
		if (penge > 0) {
			sender.pay(penge, modtager.index);
			modtager.penge += penge;

			addAlert(modtager.navn + " modtog $" + penge + " fra " + sender.navn + ".");
		} else if (penge < 0) {
			penge = -penge;

			modtager.pay(penge, sender.index);
			sender.penge += penge;

			addAlert(sender.navn + " modtog $" + penge + " fra " + modtager.navn + ".");
		}

		updateOwned();
		updatePenge();

		$("#board").show();
		$("#control").show();
		$("#byt").hide();
	};

	this.foreslaaByt = function() {
		if (isNaN(document.getElementById("byt-venstrep-penge").value)) {
			document.getElementById("byt-venstrep-penge").value = "Værdien skal være et tal!";
			document.getElementById("byt-venstrep-penge").style.farve = "rød";
			return false;
		}

		if (isNaN(document.getElementById("byt-hoejrep-penge").value)) {
			document.getElementById("byt-hoejrep-penge").value = "Værdien skal være et tal!";
			document.getElementById("byt-hoejrep-penge").style.farve = "rød";
			return false;
		}

		var bytObj = readByt();
		var penge = bytObj.getPenge();
		var sender = bytObj.getSender();
		var modtager = bytObj.getModtager();
		var tilbagefoertBytGrund = [];

		if (penge > 0 && penge > sender.penge) {
			document.getElementById("byt-venstrep-penge").value = sender.navn + " har ikke nok $" + penge + ".";
			document.getElementById("byt-venstrep-penge").style.farve = "rød";
			return false;
		} else if (penge < 0 && -penge > modtager.penge) {
			document.getElementById("byt-hoejrep-penge").value = modtager.navn + " har ikke nok $" + (-penge) + ".";
			document.getElementById("byt-hoejrep-penge").style.farve = "rød";
			return false;
		}

		var erEnGrundValgt = 0;

		// Ensure that some properties are selected.
		for (var i = 0; i < 40; i++) {
			tilbagefoertBytGrund[i] = -bytObj.getGrund(i);
			erEnGrundValgt |= bytObj.getGrund(i);
		}

		erEnGrundValgt |= bytObj.getChanceFaengselKort();

		if (erEnGrundValgt === 0) {
			popup("<p>En eller flere grunde skal være valgt for at kunne bytte.</p>");

			return false;
		}

		if (sender && !confirm(sender.navn + ", er du sikker på at bytte med " + modtager.navn + "?")) {
			return false;
		}

		var tilbagefoertByt = new Byt(modtager, sender, -penge, tilbagefoertBytGrund, -bytObj.getChanceFaengselKort());

		if (modtager) {

			writeByt(tilbagefoertByt);

			$("#foreslaabytknap").hide();
			$("#annullerebytknap").hide();
			$("#acceptereerebytknap").show();
			$("#afvisebytknap").show();

			addAlert(sender.navn + " startede med at bytte med " + modtager.navn + ".");
			popup("<p>" + sender.navn + " har forslået en byttehandel med, " + modtager.navn + ". Du kan acceptere, afvise eller ændre handelen.</p>");
		}

			if (bytSvar === true) {
				popup("<p>" + modtager.navn + " har accepterede dit tilbud.</p>");
				this.acceptereereByt(tilbagefoertByt);
			} else if (bytSvar === false) {
				popup("<p>" + modtager.navn + " har afvist dit tilbud.</p>");
				return;
			} else if (bytSvar instanceof Byt) {
				popup("<p>" + modtager.navn + " har forslået en ændring i byttehandelen.</p>");
				writeByt(bytSvar);

				$("#forslåetbytknap, #annullerebytknap").hide();
				$("#acceptereerebytknap").show();
				$("#afvisebytknap").show();
			}
		};


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

