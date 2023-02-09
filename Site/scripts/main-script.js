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
        
        galery.push(video.value)
        
        alert(`Recebemos seu link ${galery[c]}`)
        
        c++

    }else {
        alert(`Sua galeria já está cheia`)
    }
    
}

    /* Função para mostrar a galeria --

        v1.innerHTML = galery[0]
        v2.innerHTML = galery[1]
        v3.innerHTML = galery[2]
        v4.innerHTML = galery[3]
        v5.innerHTML = galery[4]
    */
   
function rep(){
    toca.setAttribute('src' , 'https://www.youtube.com/watch?v=o_1aF54DO60&list=RDo_1aF54DO60&index=2&ab_channel=LanaDelReyVEVO')
}
    
