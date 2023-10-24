const nomes=[]
function adicionarNome(){
    //obtendo os elementos da UI
    const nome=document.getElementById('nome')
    const nomeLista=document.getElementById('nomeLista')
    //removendo espaços do nome
    const novoNome=nome.value.trim()
    //Se o nome não for vazio...
    if (novoNome !==''){
        nomes.push(novoNome)
        nome.value='' //Limpando o campo
        atualizarListaNome()//criamos uma função para atualizar os nome
        atualizarBotaoSorteio()
    }
}

function atualizarListaNome(){
    const nomeLista=document.getElementById('nomeLista')
    nomeLista.innerHTML='' //Limpamos a lista
    for (const nome of nomes){
        nomeLista.innerHTML += `<li class='list-group-item'><span class='badge bg-primary'>${nome}</span></li>`
    }
}

function atualizarBotaoSorteio(){
    const sortearButton=document.getElementById('sortearButton')
    sortearButton.disabled=(nomes.length===0)
}
function sortearGanhador(){
    if (nomes.length>0){
        const aleatorio=Math.floor(Math.random()*nomes.length)
        const nomeSorteado=nomes[aleatorio]
        nomes.splice(aleatorio,1)//removemos o sorteado da lista
        //definimos o texto no modal
        document.getElementById('ganhador').innerText=`🎈Ganhador: ${nomeSorteado}`
        //abrimos o modal
        const resultadoModal=new bootstrap.Modal(document.getElementById('resultado'))
        resultadoModal.show()
        atualizarListaNome()
        atualizarBotaoSorteio()
    }
}
//Comando para apertar enter e ir
function verificaTecla(evento){
    if (evento.key==='Enter'){
        adicionarNome()
    }
}