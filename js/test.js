// Horloge numerique by RACHID 

var heuresDiv = document.querySelector('.heures');
var dateDiv = document.querySelector('.date')

// Fonction qui affiche l"heure

var Horloge = function () {
	// declaration des variables
	var today, annee, listeMois, mois, listeJours, jour, njour, heures, minutes, secondes, maxchiffres;

	// initialiation de la date
	today = new Date();

	// recuperation de l"annee en cour

	annee = today.getFullYear();

	// Liste de tous les mois

	listeMois= ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"];
	
	// recuperation du Mois en cours
	mois = listeMois[today.getMonth()];

	// liste des jours de la semaine
	listeJours = ["Dimanche", "Lundi", "Mardi", "Mecredi", "Jeudi", "Vendredi", "Samedi"]
	
	// recuperation du Jour en cours
	jour = listeJours[today.getDay()];

	// recuperation du numero du jour
	njour = today.getDate();

	// Traiter le nombre de chiffres de l"heure

	maxchiffres = function (element) {
		if (element < 10) {
			return element = "0" + element;
			}
		else {
			return element;
		}
		
	}

	heures= maxchiffres(today.getHours());

	// recuperer les minutes

	minutes = maxchiffres(today.getMinutes());

	// Recuperer les secondes

	secondes = maxchiffres(today.getSeconds());

	// Affciher les resultats dans html
	heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
	dateDiv.textContent = jour + ", " + njour + " " + mois + " " + annee;

	// executer la fonction toutes les secondes
	setTimeout(Horloge, 1000);
}

	// lancer la fonction

	Horloge();
