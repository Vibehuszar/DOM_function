let almacal = 260;
let repacal = 300;
let vizcal = 120;


let tomb = [];

function osszKaloria(){
    let sum = 0;
    for(let etel of tomb){
        sum += etel.kaloria;
    }
    return sum;
}

class Etel{

    nev;
    kaloria;
    constructor (nev, kaloria){
        this.nev = nev;
        this.kaloria = kaloria;
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('alma').addEventListener('click', () => {
        
        document.getElementById('osszcal').textContent = ("Összkalória: " + osszKaloria());
        let lista = document.getElementById('lista');
        let li = document.createElement('li')
        li.innerHTML = ("Alma <i>(" +almacal+ ")</i>")
        lista.appendChild(li);
        
        tomb.push(new Etel("alma", almacal));
        console.log(tomb);
    })
    document.getElementById('repa').addEventListener('click', () => {
        
        document.getElementById('osszcal').textContent = ("Összkalória: " + osszKaloria() );
        let lista = document.getElementById('lista');
        let li = document.createElement('li')
        li.innerHTML = ("Répa <i>(" +repacal+ ")</i>")
        lista.appendChild(li);
    
        tomb.push(new Etel("repa", repacal));
    })
    document.getElementById('viz').addEventListener('click', () => {
        
        document.getElementById('osszcal').textContent = ("Összkalória: " + osszKaloria() );
        let lista = document.getElementById('lista');
        let li = document.createElement('li')
        li.innerHTML = ("Víz <i>(" +vizcal+ ")</i>")
        lista.appendChild(li);
    
        tomb.push(new Etel("viz", vizcal));
    })
    document.getElementById('clear').addEventListener('click', () => {
        
        document.getElementById('osszcal').textContent = ("Összkalória: " + osszKaloria() );
        document.getElementById('lista').textContent= "";
        document.getElementById('egeszsegesLista').textContent= "";
        tomb = [];
    })

    document.getElementById('stat').addEventListener('click', () => {
        let egeszsegesEtelek = tomb.filter(etel => etel.kaloria < 200);
        egeszsegesEtelek.sort((egyik, masik) => {
            if(egyik.kaloria < masik.kaloria){return -1;}
            else if(egyik.kaloria > masik.kaloria){return 1;}
            else{return 0}
        })

        //EtelNev - 100kcal
        egeszsegesEtelek = egeszsegesEtelek.map(etel => etel.nev + " - " + etel.kaloria + " kcal");
        for(let etel of egeszsegesEtelek){
            let li = document.createElement('li');
            li.innerHTML = etel;
            document.getElementById('egeszsegesLista').appendChild(li);
        }
        console.log(egeszsegesEtelek);
    })
})
