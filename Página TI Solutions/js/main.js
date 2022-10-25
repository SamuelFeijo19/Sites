
// Deixar o navbar com transparencia ao rolar a tela
window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
});

//  Início da função de exibir botão somente após rolar parte da pagina
window.onscroll = function(){
    scrool();
}

function scrool(){
    var btn = document.getElementById("redirect");
    if(document.documentElement.scrollTop > 90){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }

    var buton = document.getElementById("whats");
    if(document.documentElement.scrollTop > 90){
        buton.style.display = "block";
    }else{
        buton.style.display = "none";
} 
}