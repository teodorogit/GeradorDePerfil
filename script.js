function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idade')
    var res = document.getElementById('resultado')
    if (fano.value.lengh == 0 || fano.value > ano) {
        window.alert('|ERRO| Verifique os dados e tente novamente')
    }else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        var pele = document.getElementsByName('cor')
        img.setAttribute('id', 'foto')
        if (pele[0].checked){
            pele = 'Branca'
        }else {
            pele= 'Pardo'
        }
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <=5 && pele=='Branca') {
                img.setAttribute('src', 'imagems/bebe-masc.png')
            }else if (idade >=0 && idade <=5 && pele =='Pardo'){
                img.setAttribute('src', 'imagems/bebe-pardo.png')
            }else if (idade >5 && idade <=21) {
                img.setAttribute('src', 'imagems/foto-adolecente-masc.png')
            }else if (idade >21 && idade <50 && pele =='Pardo'){
                img.setAttribute('src', 'imagems/homem-adulto-parto.png')
            }else if (idade >21 && idade <50){
                img.setAttribute('src', 'imagems/foto-adulto-mas.png')
            }else if (idade >=50 && pele =='Pardo'){
                img.setAttribute('src', 'imagems/idoso-pardo.png')
            }else if (idade >=51 && pele =='Branca'){
                img.setAttribute('src', 'imagems/idoso-branco.png')
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <=10 && pele=='Branca') {
                img.setAttribute('src', 'imagems/bebe-feminina.png')
            } else if(idade <10 && pele =='Pardo') {
                img.setAttribute('src', 'imagems/bebe-parda.png')
            } else if (idade >10 && idade <=21) {
                img.setAttribute('src', 'imagems/foto-adolecente-fem.png')
            } else if (idade >21 && idade <50 && pele =='Pardo'){
                img.setAttribute('src', 'imagems/mulher-adulta.png')
            } else if (idade >21 && idade <50){
                img.setAttribute('src', 'imagems/mulher-adulta-branca.png')
            } else if(idade >=50 && pele =='Pardo') {
                img.setAttribute('src','imagems/idosa-parda.png')
            } else {
                img.setAttribute('src', 'imagems/idosa-branca.png')
            }
        }
        if (idade >5){
        res.innerHTML = `<p>Detectamos  um(a) ${genero} de  pele ${pele} com ${idade} anos</p>`
        res.appendChild(img)
        }else {
            res.innerHTML = `<p>Detectamos  um bebê de  pele na cor ${pele} com ${idade} anos</p>`
        res.appendChild(img)
        }

    }
}