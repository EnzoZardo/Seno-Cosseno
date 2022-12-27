Posi = [0]
var Atualiza = document.getElementById("mostraGraus")
var seno = document.getElementById("seno")
var cosseno = document.getElementById("cosseno")

function Line(idI, idII) {
    var isCheck = document.getElementById(idI)
    var Linha = document.getElementById(idII)

    if (isCheck.checked) {
        Linha.style.opacity = "1"
    } else {
        Linha.style.opacity = "0"
    }
}

function Muda(sino, cosi, atual) {
    var Grau = document.getElementById("anda").value

    var Ang = document.getElementById("angulo")
    Ang.style.transform = `rotate(-${Grau}deg)`
    Ang.style.width = Grau <= 180 ? '50.5%' : '49.5%'

    var C = (Math.cos(Grau * Math.PI / 180)).toFixed(15) == 0 ? Math.abs((Math.cos(Grau * Math.PI / 180)).toFixed(15)) : (Math.cos(Grau * Math.PI / 180)).toFixed(15)
    var S = (Math.sin(Grau * Math.PI / 180)).toFixed(15) == 0 ? Math.abs((Math.sin(Grau * Math.PI / 180)).toFixed(15)) : (Math.sin(Grau * Math.PI / 180)).toFixed(15)

    atual.innerText = `Ângulo: ${Grau}º`
    cosi.innerText = `Cosseno: ${C}`
    sino.innerText = `Seno: ${S}`

    var LinhaSeno = document.getElementById("sin")
    var LinhaCosseno = document.getElementById("coss")
    var x = document.getElementById("x")
    var y = document.getElementById("y")


    LinhaSeno.style.height = Grau >= 180 || Grau <= 360 ? `${Math.abs(S) * 150}px` : `${S * 150}px`
    LinhaSeno.style.top = Grau >= 180 && Grau <= 360 ? `150px` : `${150 - S * 150}px`
    LinhaSeno.style.left = Grau >= 180 || Grau <= 360 ? `${149.5 + C * 150}px` : `${150 + C * 150}px`;
    LinhaSeno.innerHTML = `&nbsp;${(Number(S).toFixed(4))}`


    LinhaCosseno.style.width = Grau <= 90 || Grau >= 270 ? `${C * 150}px` : `${Math.abs(C) * 150}px`
    LinhaCosseno.style.left = Grau <= 90 || Grau >= 270 ? `${150}px` : `${150 - Math.abs(C) * 150}px`
    LinhaCosseno.style.top = Grau >= 0 || Grau <= 180 ? `${149 - S * 150}px` : `${148 + Math.abs(S) * 150}px`
    LinhaCosseno.innerHTML = `&nbsp;${(Number(C).toFixed(4))}`

    x.style.top = Grau > 180 && Grau < 360 ? `${150 - Math.abs(S) * 150}px` : `${150 - S * 150}px`
    y.style.top = Grau > 180 && Grau < 360 ? `${-7 - Math.abs(S) * 150}px` : `${-7 - S * 150}px`
}