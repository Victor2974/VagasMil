// MOSTRAR A TELA ESCOHIDA
function mostrarTela(pagina){

    document.querySelectorAll(".pagina").forEach(function(tela){

        tela.style.display = "none";
    });

    document.getElementById(pagina).style.display = "block";
}

// MOSTRAR/SUMIR BOTAO ADICIONAR
let boolAdicionar = false;

function botaoAdicionar(){
    boolAdicionar = !boolAdicionar;

    if(boolAdicionar){
        document.getElementById("vagasForm").style.display = "block";
    }else{
        document.getElementById("vagasForm").style.display = "none";
    }
}

// CRIAR OS CARDS A PARTIR DO FORMULARIO

function adicionarVaga(event){

    // IMPEDE O FORMULARIO DE REINICIAR A PAGINA(COMPORTAMENTO PADRAO)
    event.preventDefault(); 

    // RECEBE OS DADOS DO FORMS
    const cargo = document.getElementById("fcargo").value;
    const empresa = document.getElementById("fempresa").value;
    const link = document.getElementById("flink").value;
    const salario = document.getElementById("fsalario").value;
    const dataCandidatura = document.getElementById("fdataCandidatura").value;
    const status = document.getElementById("fstatus").value;

    // CRIA UM CARD COM UMA DIV
    const card = document.createElement("div");
    // ESSA DIV RECEBE UMA CLASS CARD
    card.classList.add("card");

    // CRIA O CARD DENTRO DO HTML
    card.innerHTML = `
    <div class="botaoEditar">
        <a href="#" onClick"editarVaga()">
            editar
        </a>
        <span> |</span>
        <a href="#"onClick"apagarVaga()">
            apagar
        </a>
    </div>



    <h3>${cargo}</h3>
    <p>Empresa: ${empresa}</p>
    <p>Salário: R$ ${salario}</p>
    <p>Data: ${dataCandidatura}</p>
    <p>Status: ${status}</p>
    <a href="${link}" target="_blank">Ver vaga</a>
`;

    // RECEBE A LISTA INTEIRA
    const lista = document.getElementById("listaVagas");
    // COLOCA O CARD NOVO COMO MAIS UM NA LISTA
    lista.appendChild(card);

    // LIMPA O FORMULARIO
    document.getElementById("vagasForm").reset();

    // FECHA O FORMULARIO QUANDO ENVIADO
    botaoAdicionar();

}