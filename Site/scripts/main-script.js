var galery = []
var video = window.document.getElementById('video')
var toca = window.document.getElementById('yt-tela')

var v1 = document.getElementById('v1')
var v2 = document.getElementById('v2')
var v3 = document.getElementById('v3')
var v4 = document.getElementById('v4')
var v5 = document.getElementById('v5')



c=0
function salvar(){
    if (galery.length < 5) {
        link = video.value    
        //Função toEmbed//
        
        pontofin = parseInt(link.search(/&/))

        alert(pontofin)
        
        //cortando a String no &//
        nlink = link.slice(0 , pontofin)
        alert(nlink)
        
        //Substituindo 'watch?v=' por 'embed/'
        
        linkfin = nlink.replace( "watch?v=" , "embed/")
        alert(linkfin)

        //fim da função toEmbed//



        galery.push(linkfin)
        
        alert(`Recebemos seu link ${galery[c]}`)
        
        c++

    }else {
        alert(`Sua galeria já está cheia`)
    }
    
}

    // Função para mostrar a galeria //


//Função para reproduzir o input do usuario dentro do iframe//
function rep(){
    localStorage.getItem("galeria")
    toca.setAttribute('src' , galery[0])
}
   
//Função para levar a array para a outra página

function take(){
    localStorage.setItem("galeria",galery)
}

//Função para alterar a string com o link do video para uma string com o link embed//

/*
function toembed() {
    link = video.value    
    //Função toEmbed//
    
    pontofin = parseInt(link.search(/&/))

    alert(pontofin)
    
    //cortando a String no &//
    nlink = link.slice(0 , pontofin)
    alert(nlink)
    
    //Substituindo 'watch?v=' por 'embed/'
    
    linkfin = nlink.replace( "watch?v=" , "embed/")
    alert(linkfin)

    //fim da função toEmbed//
}
*/