function generateMonth({ClassDivConteneur, mois, annee, jourFacile, jourIntermediaire, jourDifficile}) {    


    const conteneur = document.querySelector(ClassDivConteneur) ;
    const monthyear = creationBalise({tag:'div', id:'month-year'})
    conteneur.appendChild(monthyear);
    monthyear.textContent = `${mois} ${annee}` 
    const daysheader = creationBalise({tag:'ul', id:'days-header'})
    conteneur.appendChild(daysheader);

    const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'] ;



    days.forEach((day) => {
        const li = creationBalise({tag:'li', className:'calendrier-li'}) ;
        li.textContent = day ;
        daysheader.appendChild(li)
    });

    const grid = creationBalise({tag:'ul', className:'days-grid'});
    conteneur.appendChild(grid) ;
    // console.log(conteneur)
    


    let nombreDeJours = new Date(annee, moisEnChiffre(mois), 0).getDate()
    let index = new Date(annee, moisEnChiffre(mois)-1).getDay() - 2
    if (index == -2) {
        index = 5
    }

 

    //on crée les cases vides en début de mois
    for (let i = 0; i<=index;i++) {
        let li = document.createElement('li')
        li.textContent = '';
        li.className = 'calendrier-li';
        grid.appendChild(li) ;
    }
    
    //on remplit les jours
    for (let i = 1; i<=nombreDeJours ; i++) {
        index = (index+1)%7;
        let li = document.createElement('li')
        li.textContent = i;
        li.className = 'calendrier-li';
        //on distingue les jours de balade
        switch (i) {
            case jourFacile :
                li.style.backgroundColor = 'rgb(255,255,255,0.2)';
                li.classList.add('jourFacile') ;
                let lienFacile = document.createElement('a') ;
                lienFacile.href ='reservation.html';
                grid.appendChild(lienFacile);
                lienFacile.appendChild(li);
                break;
            case jourIntermediaire :
                li.style.backgroundColor = 'rgb(255,255,255,0.2)';
                li.classList.add('jourIntermediaire') ;
                let lienIntermediaire = document.createElement('a') ;
                lienIntermediaire.href ='reservation.html';
                grid.appendChild(lienIntermediaire);
                lienIntermediaire.appendChild(li);
                break;
            case jourDifficile :
                li.style.backgroundColor = 'rgb(255,255,255,0.2)';
                li.classList.add('jourDifficile') ;
                let lienDifficile = document.createElement('a') ;
                lienDifficile.href ='reservation.html';
                grid.appendChild(lienDifficile);
                lienDifficile.appendChild(li);
                break;
            default :
            grid.appendChild(li) ;
        }
    
    }
        
    //on remplit les cases vides en fin de mois
    for (let i = index+1; i<7; i++) {
        let li = document.createElement('li')
        li.textContent = '';
        li.className = 'calendrier-li'
        grid.appendChild(li) ;
    }
}


    // Voici une fonction pour créer des balises HTML
    function creationBalise({ 
        tag='', 
        id='', 
        className='', 
        href='',
    }) {
        const balise = document.createElement(tag)
    
        if (id) {
            balise.id = id;
        }
        if (className) {
            balise.className = className;
        }
        if (href && tag=='a') {
            balise.href = href
        }
    
        return balise;
    }

    //voici comment l'utiliser
    // const test = creationBalise({tag: 'a', href: 'http://coucou.world'}) ;
    // console.log(test)


    function moisEnChiffre(mois) {
        const moisMap = {
            Janvier: '01',
            Février: '02',
            Mars: '03',
            Avril: '04',
            Mai: '05',
            Juin: '06',
            Juillet: '07',
            Août: '08',
            Septembre: '09',
            Octobre: '10',
            Novembre: '11',
            Décembre: '12',
        };
    

        return moisMap[mois];
    }

    