const prompt = require('prompt-sync')(); 
console.clear();
console.log("Você está prestes a entrar em uma aventura bizarra e perigosa, na pele de uma garota que não bate muito bem da cabeça.")
    let jogar = prompt("Deseja acompanhar essa jovem na aventura?(s/n): ").toLowerCase();
while(jogar!="s" && jogar!="n"){
    console.log();
    console.log("Responda apenas com 's' ou 'n'.");
    jogar = prompt("Deseja acompanhar essa jovem na aventura?(s/n): ").toLowerCase();
}
if(jogar=="s"){
    console.log("Então vamos lá!");
}else if(jogar=="n"){
    console.log();
    jogar = prompt("Tem certeza? Não sabe o que ta perdendo('s' p/ jogar, 'n' p/ não jogar): ").toLowerCase();
}
while(jogar!="s" && jogar!="n"){
    console.log("Responda apenas com 's' ou 'n'.");
    jogar = prompt("Tem certeza? Não sabe o que ta perdendo(s p/ jogar, n p/ não jogar): ").toLowerCase();
}
if(jogar=="s"){
    console.log("Então vamos lá!");
}else{
    console.log("Tudo bem então, sinto muito por não ter agradado você...");
}

while(jogar=="s"){
    console.clear();
const statusJogador = {
    vit : 5,
    vitfunction: function(){
       return this.vit--
    },
    dex : 0,
    dexfunction: function(){
        return this.dex++
    },
    fadiga: 0,
    fadfunction: function(){
        return this.fadiga++
    },
    sanatas : 0,
    sanfunction: function(){
        return this.sanatas++
    },
    dia : 0,
    diafunction: function(){
        return this.dia++
    },
    pacifico : 0,
    pacfunction: function(){
        return this.pacifico++
    },
};
const functionAleatoria = ()=>{
const random = [];
const randomPC = Math.floor(Math.random()*3);
random.push(randomPC);
return random
};
console.log("As suas decisões podem impactar o destino dos mundos e a vida das pessoas a sua volta, então muito cuidado!!");
console.log();
console.log("Para não ficar confuso decidi separar a historinha a seguir utilizando o comando do enter para que, você que está jogando não fique confuso com tanta coisa aparecendo na tela.");
let separacao = prompt("Faça o teste, aperte ENTER: ");
console.log();
console.log("Seus status iniciais são:");
console.log(`VITALIDADE: ${statusJogador.vit}\nDESTREZA:   ${statusJogador.dex}\nFADIGA:     ${statusJogador.fadiga}`);
separacao = prompt("");
console.log();
console.log("O nome da protagonista da historia é Évyllin, ela é uma garota que estava com a cabeça cheia de problemas e decidiu sair para tomar um porre, acabou ficando doidona e saiu com seu carro, depois de horas, ela acabou dormindo e acordou em um lugar estranho, uma floresta com arvores negras como a noite e folhas vermelhas como o sangue, tão belos quanto o cabelo ruivo da mesma, o céu tinha um tom esverdeado, como se estivesse sempre em uma intensa aurora boreal. O carro dela, um Opala 76 da cor preta, estava sem gasolina, restando para a nossa pequena jovem explorar aquele lugar estranho.");
separacao = prompt("");
console.log();
do {
    //ciclo da manhã
   ciclo1: do {
       statusJogador.vit=5
       statusJogador.fadiga=0
    console.log("Fase 1: O incrível Dragão.");
    separacao = prompt("");
    console.log();
    console.log("MANHÃ");
    console.log();
    console.log("Enquanto a Évy estava andando pela floresta, de repente pôde-se ouvir um ensurdecedor bater de asas, um dragão verde esmeralda acabava de pousar na frente da garota, fazendo tremer todo o terreno devido o seu tamanho colossal, ele estava bastante debilitado, com partes do seu corpo destroçadas e algumas regiões até mesmo necrosadas, como se tivesse acabado de sair de uma briga.");
    console.log("Ele faz menção de atacar a Évy,");
    console.log();
    console.log("Você está portando uma Glock. 40, deseja atacar o dragão ou fugir?");
    let decisao1 = +prompt("0 para lutar, 1 para fugir: ");
    while(decisao1!=0 && decisao1!=1){
        console.log();
        console.log("Responda apenas com 0 ou 1.");
        decisao1 = +prompt("0 para lutar, 1 para fugir: ");
    }
    if(decisao1==0){
        console.log();
        console.log("Infelizmente não adiantou muita coisa, estamos falando de um dragão gigante, é a mesma coisa que jogar bombinha de estralo em um tanque de guerra.");
    }else{
        console.log();
        console.log("não adiantou nada, ela virou o The Flash de repente?");
    }
    separacao = prompt("");
    console.log("o dragão balança a sua cauda, acertando a jovem Évy, fazendo ela se bater em uma arvore, perdendo um pouco da sua vitalidade");
    statusJogador.vitfunction();
    statusJogador.fadfunction();
    
    console.log(`Sua vitalidade agora é: ${statusJogador.vit}`);
    console.log(`Sua fadiga agora é ${statusJogador.fadiga}`);
    separacao = prompt("");
    console.log();
    console.log("A Évy se encontra sem esperanças mas, decide se levantar, quando apoia sua mão no chão, percebe que tem um arco um pouco acabado");
    console.log("Deseja pegar o arco?");
    let decisao2 = +prompt("0 para pegar, 1 para não pegar: ");
    while(decisao2!=0 && decisao2!=1){
        console.log("Responda apenas com 0 ou 1.");
        decisao2 = +prompt("0 para pegar, 1 para não pegar: ");
    }
    if(decisao2==0){
        statusJogador.dexfunction();
        console.log();
        console.log("O arco acaba liberando uma energia dourada ao redor da nossa vândala (onde já se viu beber enquanto porta uma arma?), aquele na verdade era um arco magico, que transforma a energia ao seu redor em aljavas de luz, combinados com a afiada pontaria da nossa recém nascida arqueira, acaba finalizando o dragão em um único tiro.");
        console.log(`Sua destreza agora é ${statusJogador.dex}`)
        separacao = prompt("");
        console.log();
        if(statusJogador.dex==3){
            statusJogador.vit=5
            console.log();
            console.log("A morte do dragão acabou regenerando a sua vida por completo.");
            console.log("Vitalidade recuperada!");
            console.log(`Vitalidade: ${statusJogador.vit}`);
            statusJogador.diafunction();
            break ciclo1;
        }
        const aleatorio1 = functionAleatoria();
        if(aleatorio1==0){
            statusJogador.vit=5
            console.log();
            console.log("A morte do dragão acabou regenerando a sua vida por completo.");
            console.log("Vitalidade recuperada!");
            console.log(`Vitalidade: ${statusJogador.vit}`);
            statusJogador.diafunction();
            break ciclo1
        }else if(aleatorio1==1){
            statusJogador.dexfunction();
            console.log();
            console.log("A morte do dragão acabou aumentando a sua destreza!");
            console.log(`Destreza:   ${statusJogador.dex}`);
            statusJogador.diafunction();
            break ciclo1
        } else if(aleatorio1==2){
            console.log();
            console.log("Você tem muita má sorte, o dragão acabou explodindo, levando A Évy junto na explosão, terá que repetir.");
            statusJogador.vit=0;
            console.log(`Vitalidade: ${statusJogador.vit}`)
            separacao = prompt("");
            
        }
    }else if(decisao2==1){
        console.log();
        console.log("O dragão acaba limpando o dente com a pequena Évy (não da para encher a barriga com uma garota que tem menos de 1,60, terá que reiniciar a fase.");
        statusJogador.vit=0
        console.log(`Vitalidade: ${statusJogador.vit}`);
        separacao = prompt("");
        
    }
    
   } while (statusJogador.vit == 0);

    //ciclo da tarde
     ciclo2: while(statusJogador.dia==1){
        console.log();
        separacao = prompt("");
        console.log("TARDE");
        console.log("Depois de um tempo caminhando, pôde-se perceber que o tempo ficou um pouco mais frio, e o céu que tinha um tom de verde esmeralda, ficou levemente laranja, com o horizonte em um lindo azul violeta.");
        separacao = prompt("");
        console.log();
        console.log("fase2: O anjo e o idoso:");
        separacao = prompt("");
        console.log();
        console.log("Enquanto estava andando, a Évy avistou um belo ser, parecia humano, mas tinha três pares de asas brancas, estava vestido com um longo manto branco, tão claro quanto a pele da Évy, tinha um cabelo longo, completamente liso, que ia até o meio das suas costas. A Évy decide pedir ajuda a criatura, ele diz ser um arcanjo chamado Luci, Évy explica o que aconteceu ao arcanjo, que olha para a garota como se soubesse de todos os seus pecados e segredos mais obscuros, fazendo a Évy sentir um arrepio na espinha, mas mesmo assim ele decide ajudar, entregando um colar de ametista para a mesma");
        let decisao3 = prompt("Deseja aceitar a ametista do arcanjo?(s/n): ").toLowerCase();
        while(decisao3!="s" && decisao3!="n"){
            console.log("Responda apenas com 's' ou 'n'").toLowerCase();
            decisao3 = prompt("Deseja aceitar a ametista do arcanjo?(s/n): ").toLowerCase();
        }
        if(decisao3=="s"){
            statusJogador.sanfunction();
            console.log("Sem consequencias...até o momento...");
        }
        console.log();
        console.log("O anjo de repente abre suas belas asas e se despede da nossa amiga cachaceira. ");
        
        separacao = prompt("");
        console.log("A Évy continua sua jornada e no caminho encontra um velho senhor, que estava escorado em uma árvore, ele aparentava já ter uma idade avançada e parecia estar bastante machucado");
        let decisao4 = prompt("Deseja ajudar o velho?(s/n): ").toLowerCase();
        while(decisao4!="s" && decisao4!="n"){
            console.log("Responda apenas com 's' ou 'n'");
            decisao4 = prompt("Deseja ajudar o velho?(s/n): ").toLowerCase();
        }
     }
     
} while (statusJogador.dia==5);
jogar = ""
jogar = prompt("Deseja jogar novamente?(s/n): ").toLowerCase();
  while(jogar!="s" && jogar!="n"){
    console.log();
    console.log('Responda apenas com "s" ou "n"');
    jogar = prompt("Deseja jogar novamente?(s/n): ").toLowerCase();
  }
    if(jogar=="s"){
      continue;
  }else if(jogar=="n"){
    console.log()  
    console.log("Tudo bem, muito obrigado.");
      break;
  }
} 