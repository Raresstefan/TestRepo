// sursa de date pe care o primim impreuna cu imaginile din directorul img
const images = [
    { "src": "img1.jpg", "alt": "1 Nature" },
    { "src": "img2.jpg", "alt": "2 Fjords" }, 
    { "src": "img3.jpg", "alt": "3 Mountains" },
    { "src": "img4.jpg", "alt": "4 Lights" }
];
var buton_inainte = document.getElementById("inainte");
var meniu = document.getElementById("meniu");
var img = document.getElementById("slide");
var index = 0;


img.src = "img/" + images[0].src;



buton_inainte.addEventListener("click", (ev) => {
    img.src = "img/" + images[++index].src;
    }
)

buton_inapoi = document.getElementById("inapoi");
buton_inapoi.addEventListener("click", (ev) => {
    img.src = "img/" + images[--index].src;
})

function meniuBilute(index){

    for( let i=0;i<images.length;i++ ){

        var biluta = document.createElement("span");
        biluta.classList.add("biluta");
        meniu.appendChild(biluta);

        biluta.id=i;
        var nr=0;    
        biluta.addEventListener("click", (ev)=> {
            if(nr == 0)
            {current = i;
                nr++;}
            continut2=document.getElementById(current);
             continut2.classList.remove("activ");
             current = i;
             nr++;
             img.src = "img/" + images[i].src;
             continut = document.getElementById(i);
             
             continut.classList.add("activ");
             
        })
        current = i;
    }
}


meniuBilute(index);