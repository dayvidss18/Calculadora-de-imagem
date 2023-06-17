function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO!] Verifique se os dados inseridos estão corretos!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','criança_masculino.png')
                document.body.style.background = '#A7ECEE'
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem_masculino.png')
                document.body.style.background = '#1F6E8C'
            }else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'adulto_masculino.png')
                document.body.style.background = '#526D82'
            }else {
                //Idoso
                img.setAttribute('src', 'idoso_masculino.png')
                document.body.style.background = '#27374D'
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criança_feminino.png')
                document.body.style.background = '#C4B0FF'
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem_feminino.png')
                document.body.style.background = '#8696FE'
            }else if (idade < 50){
                // Adulto
                img.setAttribute('src','adulto_feminino.png')
                document.body.style.background = '#4942E4'
            }else {
                //Idoso
                img.setAttribute('src', 'idoso_feminino.png')
                document.body.style.background = '#11009E'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
}