var galery = []
var video = window.document.getElementById('video')

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

      /*
        v1.innerHTML = galery[0]
        v2.innerHTML = galery[1]
        v3.innerHTML = galery[2]
        v4.innerHTML = galery[3]
        v5.innerHTML = galery[4]
    */
   
