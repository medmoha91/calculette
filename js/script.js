/*
g : groupe;
v : valeur;
astuce : penser à vérifier que l'on recoit bien les paramètres et qu'ils sont corrects via un console.log(g, v); avant d'attaquer la fonction 
*/
var operande1 = '0';
var operator = '+';
var test = false;

function calculer(g, v){
    //console.log(g, v);
    //il faut une référence à la zone de saisie pour affichage, initialisation d'une variable ecran
    var  ecran = document.querySelector('#ecran');
    //gestion des cas en fonction des différents paramètres
    switch (g){
        case 'ch':
            if(test){
                ecran.value = "";
                test = false;
            } 
            
            //on efface la valeur par défaut qui est 0.
            if(ecran.value == '0') ecran.value = '';
            //on affiche chiffre avec ce qu'il y avait auparavent
            ecran.value += v; 
        break;
        case 'dec':
            //attention il ne faut qu'un seul point
            //ici on utilise une des méthodes de l'objet chaîne de caractère indexof qui va rechercher une valeur donnée ici '.' dans la chaîne et retourner sa position si trouvé sinon elle retourne -1 donc si -1 pas trouvé ;)
            if(ecran.value.indexOf('.') == -1)
                ecran.value += '.';
        break;
        case 'op':
            calculer('eg');
            //on stocke la première valeur rentrée pour pouvoir la réutiliser
            operande1 = ecran.value;
            //on doit également se 'souvenir' de l'opérateur avant de faire calculs
            operator = v;
            test = true;

        break;
        case 'eg':
        	egale('eg');
            test = true;
            operande1 = '0';
        break;
        case 'sp':
        	switch(v){
				case 'c':
					ecran.value = "0";
					if(operator=='+' || operator=='-'){
						operande1 = '0';
					}
					if(operator=='x' || operator=='/'){
						operande1 = '1';
					}
				break;

				case 'ce':
					ecran.value = ecran.value.replace(ecran.value.slice(-1),'');
					if(ecran.value == '')
					{
						ecran.value = "0";
						if(operator=='+' || operator=='-'){
						operande1 = '0';
						}
						if(operator=='x' || operator=='/'){
							operande1 = '1';
						}
					}
				break;
			}
            
        break;
        case 'pr':
			ecran.value = ecran.value/100;
		break;
    }

function egale(x){
	switch (operator) {
                case '+':
                    //*1 nous permet de faire une convertion de type
                        ecran.value = ecran.value*1 +parseFloat(operande1);   
                    break;
                case '-':
                        ecran.value = operande1 - ecran.value;
                    break;
                case 'x':
                        ecran.value = operande1 * ecran.value;
                    break;
                case '/':
                        ecran.value = operande1 / ecran.value;
                    break;
            }
}

}