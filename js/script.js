let outer = document.querySelector("#outer");
let content = outer.querySelector('#content');

repeatContent(content, outer.offsetWidth);

let el = outer.querySelector('#loop');
el.innerHTML = el.innerHTML + el.innerHTML;

function repeatContent(el, till) {
    let html = el.innerHTML;
    let counter = 0; // prevents infinite loop

    while (el.offsetWidth < till && counter < 100) {
        el.innerHTML += html;
        counter += 1;
    }
}



//t2
document.getElementById( "t2" ).onclick= function(){
document.getElementById('t2sound').play();
};
document.getElementById( "t2" ).ontouchstart = function(){
document.getElementById('t2sound').play();
};

//fluid attenuation
document.getElementById( "fluid attenuation" ).onclick= function(){
document.getElementById('fluid attenuationsound').play();
};
document.getElementById( "t2" ).ontouchstart = function(){
document.getElementById('t2sound').play();
};

//diffusion tensor
document.getElementById( "diffusion tensor" ).onclick= function(){
document.getElementById('diffusion tensorsound').play();
};
document.getElementById( "diffusion tensor" ).ontouchstart = function(){
document.getElementById('diffusion tensorsound').play();
};

//gradient
document.getElementById( "gradient" ).onclick= function(){
document.getElementById('gradientsound').play();
};
document.getElementById( "gradient" ).ontouchstart = function(){
document.getElementById('gradientsound').play();
};

//kiss
document.getElementById( "kiss" ).onclick= function(){
document.getElementById('kisssound').play();
};
document.getElementById( "kiss" ).ontouchstart = function(){
document.getElementById('kisssound').play();
};

//rage
document.getElementById( "rage" ).onclick= function(){
document.getElementById('ragesound').play();
};
document.getElementById( "rage" ).ontouchstart = function(){
document.getElementById('ragesound').play();
};

//BIDE
document.getElementById( "bide" ).onclick= function(){
document.getElementById('bidesound').play();
};
document.getElementById( "bide" ).ontouchstart = function(){
document.getElementById('bidesound').play();
};

//T1
document.getElementById( "t1" ).onclick= function(){
document.getElementById('t1sound').play();
};
document.getElementById( "t1" ).ontouchstart = function(){
document.getElementById('t1sound').play();
};

//t2
document.getElementById( "t1" ).onclick= function(){
document.getElementById('t1sound').play();
};
document.getElementById( "t1" ).ontouchstart = function(){
document.getElementById('t1sound').play();
};
