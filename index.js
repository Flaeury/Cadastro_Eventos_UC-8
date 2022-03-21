// Cadastro de eventos
let dataEvento = new Date(2022, 08, 12, 11, 45, 55);
let nome = " João";
let idadeUsuario = 19;
let TipodeUsuario = "palestrante";

// Data local <-- BR
let data = new Date();

let participantes = [" Ana", " Felipe", " Augusto", " Fernando", " Ricardo"];
let palestrantes = ["Dalila", " Joana", " Márcio", " Marcelo"];
let totalUsuarios = [participantes.length + palestrantes.length];

//DATA EVENTO
if (dataEvento.getTime() > data.getTime()) {
	console.log("EVENTO VÁLIDO, PROSSIGA..."); 

    //IDADE USUÁRIO
    if (idadeUsuario >= 18) {
        console.log("OK! CONTINUE SEU CADASTRO...")
    }else{
        console.log("VOCÊ PRECISA SER DE MAIOR")
    }

    //CHECAR QUANTIDADE DE VAGAS PARA PARTICIPANTES DISPONÍVEIS
    let totalParticipantes = 100 - totalUsuarios; 
    if (totalUsuarios <= 100) {
        console.log("AINDA HÁ " + totalParticipantes + " VAGAS DISPONÍVEIS PARA O EVENTO");
    
            //IDENTIFICAÇÃO DE CADASTRO ENTRE LISTA DE PARTICIPANTES OU PALESTRANTES
            if (TipodeUsuario === "participante"){
                participantes.push(nome);
                console.log("VOCÊ ESTÁ CADASTRADO COMO PARTICIPANTE: " + participantes);
            }
            if (TipodeUsuario === "palestrante"){
                palestrantes.push(nome);
                console.log("VOCÊ ESTÁ CADASTRADO COMO PALESTRANTE: " + palestrantes);
            }             

            //LISTA DE TODOS OS PARTICIPANTES E PALESTRANTES
            console.log("Lista de Palestrantes e Participantes: ");
            console.log(palestrantes + "," + participantes);            

    }else{
        console.log("LIMITE DE VAGAS EXCEDIDO!");
    }

}else{ (dataEvento.getTime() <= date.getTime())
	console.log("DATA INVÁLIDA!"); }