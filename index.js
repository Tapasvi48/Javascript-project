var a=document.getElementsByClassName("w drum")[0];
var b=document.getElementsByClassName("a drum")[0];
var c=document.getElementsByClassName("s drum")[0];
var d=document.getElementsByClassName("d drum")[0];
var e=document.getElementsByClassName("j drum")[0];
var f=document.getElementsByClassName("k drum")[0];
var g=document.getElementsByClassName("l drum")[0];

const sounds=[

    'carsh.mp3',
    'kick-basss.mp3',
    'snare.mp3',
    'tom-1.mp3',
    'tom-2.mp3',
    'tom-3.mp3',
    'tom-4.mp3'
    
    
    
    ];

var x;

function play(x){
    


const beat=new Audio(x);
beat.play();

}
function go(){ const beat=new Audio("crash.mp3");
beat.play();
};

function go2(){


    const beat=new Audio("kick-bass.mp3");
    beat.play();
}


function go3(){


    const beat=new Audio("tom-1.mp3");
    beat.play();
}

function go4(){


    
    const beat=new Audio("snare.mp3");
    beat.play();
}

function go5(){


    const beat=new Audio("tom-2.mp3");
    beat.play();
}
function go6(){


    const beat=new Audio("tom-3.mp3");
    beat.play();
}


function go7(){


    const beat=new Audio("tom-4.mp3");
    beat.play();
}

a.addEventListener("click",function play(){
    


    const beat=new Audio("crash.mp3");
    beat.play();
    
    });

    b.addEventListener("click",function play(){
    


    const beat=new Audio("kick-bass.mp3");
    beat.play();
    
    });
c.addEventListener("click",function play(){
    


    const beat=new Audio("tom-1.mp3");
    beat.play();
    
    });
d.addEventListener("click",function play(){
    


    const beat=new Audio("snare.mp3");
    beat.play();
    
    });
e.addEventListener("click",function play(){
    


    const beat=new Audio("tom-2.mp3");
    beat.play();
    
    });
f.addEventListener("click",function play(){
    


    const beat=new Audio("tom-3.mp3");
    beat.play();
    
    });
g.addEventListener("click",function play(){
    


    const beat=new Audio("tom-4.mp3");
    beat.play();
console.log(this.innerText);    
    });

document.addEventListener("keydown",function(e){
console.log(e);
if(e.key=='w'){go();
console.log("w");}
if(e.key=="a"){go2();}
if(e.key=="s"){go3();}
if(e.key=="d"){go4();}
if(e.key=="j"){go5();}
if(e.key=="k"){go6();}
if(e.key=="l"){go7();}
})