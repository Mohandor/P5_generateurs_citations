// Tableau pour nos trois segments de phrases
var PhrasesDebut = ["Salutation, ", "Bonjour, ", "Bonsoir, ", "Salut, "];
var PhrasesMilieu = ["comment-allez vous ", "comment vous sentez-vous ", "comment va votre famille ", "comment vont les enfants "];
var PhrasesFin = ["depuis la dernière fois?", "aujourd'hui?", "après les événements passés?", "maintenant que tout est terminé?"];

// Définition de trois valeurs aléatoires comprises entre 1 et la length de nos tableaux
var random1 = Math.floor(Math.random() * PhrasesDebut.length);
var random2 = Math.floor(Math.random() * PhrasesMilieu.length);
var random3 = Math.floor(Math.random() * PhrasesFin.length);

// Affichage d'une citation aléatoire
console.log(PhrasesDebut[random1] + PhrasesMilieu[random2] + PhrasesFin[random3]);

