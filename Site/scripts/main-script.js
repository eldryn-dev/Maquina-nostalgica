var galery = []
var video = window.document.getElementById('video')
var toca = window.document.getElementById('yt-tela')

let z=0  //z é uma variavel de controle para parar as funções 'salvar()' e 'mostrar ()'//
c=0
function salvar(){

    if (galery.length < 5 && z==0) {
        link = video.value    
        //Função toEmbed//
        
        pontofin = parseInt(link.search(/&/))

        //alert(pontofin)//
        
        //cortando a String no &//
        nlink = link.slice(0 , pontofin)
        //alert(nlink)//
        
        //Substituindo 'watch?v=' por 'embed/'
        
        linkfin = nlink.replace( "watch?v=" , "embed/")
        //alert(linkfin)//

        //remove as caracteriscas do iframe//
        linkfin += "?controls=0&fs=0"
        
        //fim da função toEmbed//
        if(galery.length == 0){
            galery[0] = linkfin
        }else{
            galery.push(linkfin)    
        }
        
        //tentando armazenar itens entre paginas//
        localStorage.setItem("galeria",galery)
        
        alert(`Recebemos seu link ${galery[c]}`)
        
        c++

    }else {
        alert(`Sua galeria já está cheia`)
    }
    
}

// mostrar a galeria //
function mostrar(){ 
    // var spc vai ser o espaço onde vou mostrar os links//
    let spc = document.getElementById('gal')
    // var item vai ser cada link individual//
    
    let item = document.createElement("li")    
    if (galery.length < 5 && z == 0){
        for (let c = 0; c < galery.length; c++){
            item.innerHTML= galery[c] 
        }
        spc.appendChild(item) 
    }else if (galery.length = 5 && z == 0) {
        for (let c = 0; c < galery.length; c++){
            item.innerHTML= galery[c]
        }
        spc.appendChild(item)
        z=1
    }
    
    
    }

//Função para reproduzir o input do usuario dentro do iframe//
function rep(){
    let galery = JSON.parse(localStorage.getItem("galeria"))
    alert(galery[0])
    toca.setAttribute('src' , galery[0])
}
   
//Função para levar a array para a outra página

function take(){
    localStorage.setItem("galeria",JSON.stringify(galery))
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