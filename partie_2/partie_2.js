// Tableau pour les phrases du type 'Saluer'
var PhrasesDebutSaluer = ["Salutation, ", "Bonjour, ", "Bonsoir, ", "Salut, "];
var PhrasesMilieuSaluer = ["comment-allez vous ", "comment vous sentez-vous ", "comment va votre famille ", "comment vont les enfants "];
var PhrasesFinSaluer = ["depuis la dernière fois?", "aujourd'hui?", "après les événements passés?", "maintenant que tout est terminé?"];

// Tableau pour les phrases du type 'Repas'
var PhrasesDebutRepas = ["Délicieux ", "Dégoutant ", "Apétissant ", "Merveilleux ", "Extraordinaire ", "Sublime "];
var PhrasesMilieuRepas = ["roti de boeuf ", " steak de tofu ", "tajine ", "carpaccio de boeuf "];
var PhrasesFinRepas = ["et ses frites.", "accompagné de sa ratatouille.", "avec en desert une mousse au chocolat.", "et son tiramisu en desert.", "avec comme desert un sorbet à la poire.", "et sa purée."];

// Définition de la fonction générateur de citations
function generateurCitation() {
	// Tant que le nombre tapé n'est pas compris entre le 1 et 5 le prompt reviendra
	nombre = Number(prompt("Choisisez le nombres de citations que vous souhaitez (entre 1 et 5): "));
	while ((nombre < 1) || (nombre > 5) || (isNaN(nombre) === true)) {
		nombre = Number(prompt("Ceci n'est pas un nombre compris entre 1 et 5.\nVeuillez saisir un nombre compris entre 1 et 5: "));
	}

	// tant que le choix du type n'est pas "Saluer" ou "Repas" le prompt reviendra
	type = prompt("Choisiez le type de citation que vous souhaitez entre 'Saluer' et 'Repas': ").toLowerCase();
	while ((type !== "saluer") && (type !== "repas")) {
		type = prompt("Ceci n'est pas un des deux types disponibles.\nVeuillez saisir 'Saluer' ou 'Repas'").toLowerCase();
	}

	// Si le type choisi est "Saluer" on génère le nombre choisi de citations aléatoire du type "Saluer"
	if (type === "saluer") {
		for (i = 1; i <= nombre; i++) {
			var random1 = Math.floor(Math.random() * PhrasesDebutSaluer.length);
			var random2 = Math.floor(Math.random() * PhrasesMilieuSaluer.length);
			var random3 = Math.floor(Math.random() * PhrasesFinSaluer.length);
			console.log("Citation aléatoire " + '"' + type + '"'+ " n°" + i + ": " + PhrasesDebutSaluer[random1] + PhrasesMilieuSaluer[random2] + PhrasesFinSaluer[random3]);
		}

	// Si le type choisi est "Repas" on génère le nombre choisi de citations aléatoire du type "Repas"
	} else if (type === "repas") {
		for (j = 1; j <= nombre; j++) {
			var random4 =Math.floor(Math.random() * PhrasesDebutRepas.length);
			var random5 =Math.floor(Math.random() * PhrasesMilieuRepas.length);
			var random6 =Math.floor(Math.random() * PhrasesFinRepas.length);
			console.log(PhrasesDebutRepas[random4] + PhrasesMilieuRepas[random5] + PhrasesFinRepas[random6]);
		}
	}
}

// Définition de la fonction de répétition du générateur
function repetition() {
	choix = prompt("Taper 'continuer' si vous voulez générer d'autres citations ou 'stop' si vous voulez arrêter le programme").toLowerCase();
	while ((choix !== "continuer") && (choix !== "stop")) {
		choix = prompt("Ceci n'est pas 'continuer' ou 'stop'.\nSaisir 'continuer' si vous voulez générer d'autres citations ou 'stop' si vous voulez arrêter le programme").toLowerCase();
	}

	// Si le choix est "continuer" on relance la fonction générateur de citation et on reset a valeur de choix
	if (choix === "continuer") {
		generateurCitation();
		choix = "";

	// Si le choix est "stop" on met un message de fin et le programme s'arrête
	} else if (choix === "stop") {
		console.log("Merci d'avoir utilisé ce générateur de citation aléatoire.\nN'hésitez pas à valider le projet si il vous a plu!");
	}
}

// Programme exécuté
generateurCitation();

var choix = "";

while (choix === "") {
	repetition();
}
