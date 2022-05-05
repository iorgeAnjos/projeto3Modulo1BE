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
    endgame : 0,
    endfunction: function(){
        return this.endgame++
    },
    orc : 0,
    orcfunction: function(){
        return this.orc++
    },
};
const functionAleatoria = ()=>{
const random = [];
const randomPC = Math.floor(Math.random()*3);
random.push(randomPC);
return random
};
console.log();
console.log("As suas decisões podem impactar o destino dos mundos e a vida das pessoas a sua volta, então muito cuidado!!");
console.log();
console.log("Para não ficar confuso decidi separar a historinha a seguir utilizando o comando do enter, para que, você que está jogando não fique confuso com tanta coisa aparecendo na tela.");
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
       while(statusJogador.dia==0 && statusJogador.endgame==1){
           console.log();
           console.log("MANHÃ")
           separacao = prompt("");
           console.log("Quando ela acordou já era manhã, ela continua andando, até que encontra algo que pareça uma cidade, uma civilização de monstros. Ela entra, um pouco receosa, mas é o que tem para fazer, chegando lá ela encontra um galo de rubi andando no centro da cidade, acaba lembrando da historia e decide conversar com ele sobre sua situação.");
           separacao = prompt("");
           console.log();
           console.log("Ele fica surpreso ao saber que ela derrotou o dragão, mas acredita, afinal foi uma luta e tanto, ele fala que tanto ele quanto o dragão, tem o poder necessário para retirar ela de lá, que talvez se ela fosse um pouco paciente o Smaragd teria parado para ouvir ela, ela fala que basta um simples estralar de dedos que ela retorna.");
           console.log("Deseja retornar ao seu mundo?");
           console.log();
           let decisao7 = +prompt("Aperte 0 p/ voltar e 1 p/ ficar: ");
           while(decisao7!=0 && decisao7!=1){
               console.log();
               console.log("Responda apenas com 0 ou 1.");
               decisao7 = +prompt("0 p/ voltar e 1 p/ ficar.");
           }
           if(decisao7==0 && statusJogador.sanatas==1){
               console.log();
               console.log("O Bǎoshí abre as suas asas, fazendo nossa caçadora carmesim brilhar, aparecendo na porta da sua casa, momentos antes dela ir encher a cara, fazendo-a pensar que tudo aquilo foi um sonho, mas de repente, algo começa a brilhar no seu pescoço, era um colar de ametista, o mesmo que o arcanjo deu a ela.");
               separacao = prompt("");
               console.log();
               console.log("O colar se desprende do seu pescoço, invocando um ser maligno que parecia ser o próprio diabo em pessoa, ele começou a voar e causar caos e destruição para todo o planeta, levando o mundo a ruina.");
               console.log();
               console.log("Infelizmente você não teve um final muito bom.");
               statusJogador.endfunction();
               break ciclo1
           }else if(decisao7==0 && statusJogador.pacifico>=2 && statusJogador.orc==1){
            console.log();
            console.log("O Bǎoshí abre as suas asas, fazendo nossa caçadora carmesim brilhar, aparecendo na porta da sua casa, momentos antes dela ir encher a cara, fazendo-a pensar que tudo aquilo foi um sonho, mas quando ela olha para seu braço, tinha uma cicatriz, a mesma que foi causada pelo dragão quando a lançou, fazendo-a perceber que aquilo realmente aconteceu…");
            separacao = prompt("");
            console.log("Anos se passaram e e pequena Évy se tornou uma engenheira renomada, conhecida no mundo todo,  além de uma grande escritora, contando historias de um mundo estranho que ela chamou de LSD");
            separacao = prompt("");
            console.log();
            console.log("Certo dia, enquanto fazia sua caminhada matinal, ela encontra um rapaz muito parecido com o Orc que a salvou naquele mundo estranho, ele a comprimenta como se já conhecesse a anos e os dois caminham juntos.");
            separacao = prompt("");
            console.log();
            console.log("Você obteve uns dos melhores finais, meus parabens!");
            statusJogador.endfunction();
            break ciclo1
            
        }else if(decisao7==0 && statusJogador.pacifico>=2){
               console.log();
               console.log("O Bǎoshí abre as suas asas, fazendo nossa caçadora carmesim brilhar, aparecendo na porta da sua casa, momentos antes dela ir encher a cara, fazendo-a pensar que tudo aquilo foi um sonho, mas quando ela olha para seu braço, tinha uma cicatriz, a mesma que foi causada pelo dragão quando a lançou, fazendo-a perceber que aquilo realmente aconteceu…");
               separacao = prompt("");
               console.log("Anos se passaram e e pequena Évy se tornou uma engenheira renomada, conhecida no mundo todo,  além de uma grande escritora, contando historias de um mundo estranho que ela chamou de LSD");
               separacao = prompt("");
               console.log();
               console.log("Toda essa experiencia muita louca não mudou nossa garota, pelo contrario, só fortaleceu aquilo que já era forte, apesar dos pesares, é cada detalhe, por menor que seja, que faz ela ser uma garota perfeita. ")
               console.log();
               console.log("Você obteve uns dos melhores finais, meus parabens!");
               statusJogador.endfunction();
               break ciclo1
           }else if(decisao7==0 && statusJogador.orc==1){
               console.log();
               console.log(" Bǎoshí abre as suas asas, fazendo nossa caçadora carmesim brilhar, aparecendo na porta da sua casa, momentos antes dela ir encher a cara, fazendo-a pensar que tudo aquilo foi um sonho, mas quando ela está prestes a entrar no carro, ela vê um simbolo desenhado no seu pulso, era um arco dourado, fazendo-a perceber que aquilo realmente aconteceu.");
               separacao = prompt("");
               console.log();
               console.log("Anos se passaram e nossa guerreira rubra prestou o concurso para a PMBA, anos mais tarde entrou no BOPE, sendo uma das PFEM mais reconhecidas e temidas do mundo, sendo convidada para treinar diversas outras forças em todo o planeta.");
               separacao = prompt("");
               console.log();
               console.log("Certa vez durante sua folga, ela foi em um barzinho perto da sua casa, foi quando se aproximou um rapaz estranho e desengonçado, que se sentou perto dela e começou a tentar puxar assunto com a mesma.");
               separacao = prompt("");
               console.log("A tenente no começou a achar ele bem suspeito, mas depois de um tempo percebeu algo nele, o rosto era identico ao Orc que um dia salvou ela naquele mundo estranho.");
               separacao = prompt("");
               console.log();
               console.log("Ela pergunta o nome do rapaz e ele responde dizendo que pode chamar ele de Angels, os dois dão uma gargalhada forte.");
               separacao = prompt("");
               console.log();
               console.log("Você obteve uns dos melhores finais, meus parabens!");
               statusJogador.endfunction();
               break ciclo1
           }else if(decisao7==0){
            console.log();
            console.log(" Bǎoshí abre as suas asas, fazendo nossa caçadora carmesim brilhar, aparecendo na porta da sua casa, momentos antes dela ir encher a cara, fazendo-a pensar que tudo aquilo foi um sonho, mas quando ela está prestes a entrar no carro, ela vê um simbolo desenhado no seu pulso, era um arco dourado, fazendo-a perceber que aquilo realmente aconteceu.");
            separacao = prompt("");
            console.log();
            console.log("Anos se passaram e nossa guerreira rubra prestou o concurso para a PMBA, anos mais tarde entrou no BOPE, sendo uma das PFEM mais reconhecidas e temidas do mundo, sendo convidada para treinar diversas outras forças em todo o planeta.");
            separacao = prompt("");
            console.log("Certa vez durante sua folga, ela foi em um barzinho perto da sua casa, foi quando se aproximou um rapaz estranho e desengonçado, que se sentou perto dela e começou a tentar puxar assunto com a mesma.");
            separacao = prompt("");
            console.log("A tenente no começo achou ele bem suspeito, mas depois de um tempo conversando, ele mostrou uma tatuagem que ele tinha nas costas, era um dragão verde esmeralda lutando contra um galo de rubi. ")
            separacao = prompt("");
            console.log("Ela pergunta o nome do rapaz e ele responde dizendo que pode chamar ele de Angels, os dois dão uma gargalhada forte.");
            separacao = prompt("");
               console.log();
               console.log("Você obteve uns dos melhores finais, meus parabens!");
               statusJogador.endfunction();
               break ciclo1
           }else if(decisao7==1 && statusJogador.sanatas==1){
               console.log();
               console.log("Nossa aventureira decidiu ficar nesse mundo estranho, não da para entender, ela é uma garota tão estranha, acho que vem de outro mundo.");
               separacao = prompt("");
               console.log();
               console.log("De repente a ametista começa a brilhar intensamente, formando um pequeno buraco negro, absorvendo tudo a sua volta, incluindo o galo Bǎoshí e a Évy, logo depois o buraco negro começou a mudar de forma, tendo a aparência de um demônio, como se fosse o próprio diabo, ele começou a voar e causar caos e destruição para todo o planeta levando o mundo a ruína.");
               separacao = prompt("");
               console.log();
               console.log("Infelizmente você não teve um final muito bom.");
               statusJogador.endfunction();
               break ciclo1
           }
       }
       statusJogador.dia=0
       statusJogador.vit=5
       statusJogador.sanatas=0
       statusJogador.pacifico=0
    console.log("Fase 1: O incrível Dragão.");
    separacao = prompt("");
    console.log();
    console.log("MANHÃ");
    console.log();
    console.log("Enquanto a Évy estava andando pela floresta, de repente pôde-se ouvir um ensurdecedor rugido, um dragão verde esmeralda acabava de pousar na frente da garota, fazendo tremer todo o terreno devido o seu tamanho colossal, ele estava bastante debilitado, com partes do seu corpo destroçadas e algumas regiões até mesmo necrosadas, como se tivesse acabado de sair de uma briga.");
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
        if(statusJogador.dex >= 3){
            statusJogador.vit=5
            console.log();
            console.log("A morte do dragão acabou regenerando a sua vida por completo.");
            console.log("Vitalidade recuperada!");
            console.log(`Vitalidade: ${statusJogador.vit}`);
            statusJogador.diafunction();
            break ciclo1
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
            console.log("Você tem muito azar, o dragão acabou explodindo, levando A Évy junto na explosão, terá que repetir.");
            statusJogador.vit=0;
            console.log(`Vitalidade: ${statusJogador.vit}`)
            separacao = prompt("");
            
        }
    }else if(decisao2==1){
        console.log();
        console.log("O dragão acaba limpando o dente com a pequena Évy (não da para encher a barriga com uma garota que tem menos de 1,60), o ciclo será reiniciado.");
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
        console.log();
        console.log("Depois de um tempo caminhando, pôde-se perceber que o tempo ficou um pouco mais frio, e o céu que tinha um tom de verde esmeralda, ficou levemente laranja, com o horizonte em um lindo azul com tons de violeta.");
        separacao = prompt("");
        console.log();
        console.log("fase 2: O anjo e o idoso:");
        separacao = prompt("");
        console.log();
        console.log("Enquanto estava andando, a Évy avistou um belo ser, parecia humano, mas tinha três pares de asas brancas, estava vestido com um longo manto branco, tão claro quanto a pele da Évy, tinha um cabelo longo, completamente liso, que ia até o meio das suas costas. A Évy decide pedir ajuda a criatura, ele diz ser um arcanjo chamado Luci, Évy explica o que aconteceu ao arcanjo, que olha para a garota como se soubesse de todos os seus pecados e segredos mais obscuros, fazendo a Évy sentir um arrepio na espinha, mas mesmo assim ele decide ajudar, entregando um colar de ametista para a mesma");
        let decisao3 = prompt("Deseja aceitar a ametista do arcanjo?(s/n): ").toLowerCase();
        while(decisao3!="s" && decisao3!="n"){
            console.log("Responda apenas com 's' ou 'n'");
            decisao3 = prompt("Deseja aceitar a ametista do arcanjo?(s/n): ").toLowerCase();
        }
        if(decisao3=="s"){
            statusJogador.sanfunction();
            console.log();
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
        if(decisao4=="s"){
            statusJogador.pacfunction();
            console.log();
            console.log("Ele revela ser um mutante metamorfo, um pouco menor que a nossa aventureira, ele tinha  a pele azul e os olhos cor da noite, ele ataca a Évy sem exitar, ");
            separacao = prompt("");
            if(statusJogador.dex >= 3){
                console.log("Mas a mesma consegue desviar sem muito problema, apesar de problemática sempre gostou de artes marciais, o que deu a ela bastante agilidade e um corpo responsivo."); 
                console.log();
            }
            const aleatorio2 = functionAleatoria();
            if(aleatorio2==0){
                console.log("Mas a mesma consegue desviar sem muito problema, apesar de problemática sempre gostou de artes marciais, o que deu a ela bastante agilidade e um corpo responsivo.");
            }else if(aleatorio2==1){
                statusJogador.vitfunction();
                console.log();
                console.log("Ela consegue desviar porém, acaba tropeçando, sendo acertada de raspão, perdendo um pouco de vida.")
                console.log(`Vitalidade: ${statusJogador.vit}`)
            }else if(aleatorio2==2){
                console.log();
                console.log("Ele consegue te pegar desprevinida, acertando um golpe fatal, vai ter que repetir o ciclo.")
                statusJogador.vit=0
                console.log(`Vitalidade: ${statusJogador.vit}`)
                separacao = prompt("");
                break ciclo2;
            }
        }else{
            console.log();
            console.log("o velho revela ser um mutante metamorfo, um pouco menor que a nossa aventureira, ele tinha a pele azul e os olhos cor da noite, ele fica bastante irritado com a garota, por demonstrar tão pouca compaixão com o próximo, partindo para cima dela.");
            separacao = prompt("");
            if(statusJogador.dex >=3){
                console.log("Ela esquiva sem muito problema graças a seu corpo treinado, pois ela sempre gostou de artes marciais.")    
                console.log();
            }
            const aleatorio3 = functionAleatoria();
            if(aleatorio3==0){
                console.log("Ela esquiva sem muito problema graças a seu corpo treinado, pois ela sempre gostou de artes marciais.")    
                console.log();
            }else if(aleatorio3==1){
                statusJogador.fadfunction();
                console.log();
                console.log("Ela consegue desviar, o metamorfo não está perto o suficiente para fazer algum mal porem, ele joga um dardo, com um veneno que deixa as pessoas mais letargicas.")
                console.log(`Fadiga:      ${statusJogador.fadiga}`)
                console.log();
            }else if(aleatorio3==2){
                console.log();
                console.log("observando que não tinha como pegar ela devido a distancia, decide jogar sua adaga na Évy, foi um ataque fatal, terá que repetir o ciclo.")
                statusJogador.vit=0
                console.log(`Vitalidade: ${statusJogador.vit}`);
                separacao = prompt("");
                break ciclo2;
            }
        }
        console.log();
        console.log("Deseja atacar o mutante, ou quer tentar conversar com ele?");
        let decisao5 = +prompt("Digite 0 para atacar e 1 para conversar com ele: ");
        while(decisao5!=0 && decisao5!=1){
            console.log();
            console.log("Responda apenas com 0 e 1.");
            decisao5 = +prompt("Digite 0 para atacar e 1 para conversar com ele: ");
        }
        if(decisao5==0){
            statusJogador.fadfunction();
            console.log();
            console.log(`Fadiga:     ${statusJogador.fadiga}`);
            console.log("Você conseguiu destruir a criatura sem nenhum problema.");
            separacao = prompt("");
            console.log("Um orbe azul sai de dentro dela, a Évy pega esse orbe, no qual contêm a historia desse mundo, nele podemos ver  um colossal dragão verde esmeralda duelando com um galo vermelho rubi por 10000 anos, não se sabia o por que daquele embate, apenas que no final eles estavam bastante debilitados e acabaram sendo separados por uma rachadura no espaço, o que lançou eles para longe.");
            separacao = prompt("");
            console.log("Évy mexeu no cadáver do mutante e encontrou uma chave, quando apertou a mesma, foi teleportada para uma cabana, com uma cama, que apesar de velha e suja, é o suficiente para nossa copia de Bruce Lee descansar.");
            separacao = prompt("")
            console.log("Deseja descansar ou continuar sua jornada?");
            console.log();
            let decisao5_1 = +prompt("Digite 0 para descansar e 1 para continuar a jornada: ");
            while(decisao5_1!=0 && decisao5_1!=1){
                console.log("Responda apenas com 0 ou 1.");
                decisao5_1 = +prompt("Digite 0 para descansar e 1 para continuar a jornada: ");
            }
            if(decisao5_1==0){
                console.log("A Évy decide descansar um pouco, sproveitando para tentar assimilar o que está acontecendo.");
                for(let i=0;statusJogador.fadiga>i;i++){
                    statusJogador.fadiga--;
                    console.log();
                    console.log("Évy realmente estava muito cansada...")
                }
                statusJogador.dia = 0
                statusJogador.endfunction();
                break ciclo2;
            }else{
                console.log("A Évy não quer perder tempo em um lugar como esse, prosseguindo sua jornada.")
                statusJogador.diafunction();
                break ciclo2
            }
        }else{
            statusJogador.pacfunction();
            console.log();
            console.log("O mutante fica um pouco receoso no começo, mas decide explicar a ela um pouco sobre aquele mundo, ele conta que existem duas criaturas misticas, que são praticamente deuses sobre as outras criaturas, um colossal dragão verde esmeralda chamado Smaragd e um galo vermelho rubi chamado Bǎoshí, eles levaram milênios duelando um contra o outro, mas quando o embate estava perto de finalizar devido o estado de fragilidade dos dois naquele momento, algo aconteceu que os separou instantaneamente.");
            separacao = prompt("")
            console.log("A Évy fala do dragão que ela matou e o mutante começa a rir e fala que é impossível ela ter matado o  Smaragd, mas conta que mesmo que isso acontecesse, por ele ser uma criatura divina, ele renasce como se fosse uma fênix, valendo o mesmo para o Bǎoshí, complementa dizendo que essa já a terceira geração que luta, sempre vingando a morte da vida anterior, ele leva a Évy para sua cabana e deixa ela descansar na sua humilde casa.");
            console.log("Évy pergunta o nome do mutante e ele fala que não é importante, então decide chamar de gnomio (sim, GNOMIO).")
            console.log();
            console.log("Deseja descansar na cabana do gnomio?")
            console.log("Digite 0 se quiser descansar e 1 caso queira prosseguir na sua jornada:")
            let decisao5_2 = +prompt("")
            while(decisao5_2!=0 && decisao5_2!=1){
                console.log();
                console.log("Responda apenas com 0 ou 1.");
                console.log("Digite 0 se quiser descansar e 1 caso queira prosseguir na sua jornada:");
            }
            if(decisao5_2==0){
                console.log();
                console.log("A Évy decide descansar um pouco, sproveitando para tentar assimilar o que está acontecendo.");
                for(let i=0;statusJogador.fadiga>i;i++){
                    statusJogador.fadiga--;
                    console.log();
                    console.log("Évy realmente estava muito cansada...")
                }
                statusJogador.dia = 0
                statusJogador.endfunction();
                break ciclo2
            }else{
                console.log();
                console.log("A Évy não quer perder tempo em um lugar como esse, prosseguindo sua jornada.");
                statusJogador.diafunction();
                break ciclo2
            }
        }
    }
    ciclo2_5: while(statusJogador.dia==2){//Esse é um ciclo "secreto", acessado apenas para quem não quis dormir na cabana.
        console.log();
        console.log("Como nossa guerreira decidiu não ficar na cabana do mutante, acabou tendo que enfrentar um perigoso inimigo, porém, velho conhecido dela...a noite.");
        separacao = prompt("");
        console.log("NOITE");
        console.log();
        separacao = prompt("");
        console.log("O céu estava escuro, não mais laranja, um intenso vermelho sangue pairava sobre as nuvens, estava tudo muito escuro, sendo iluminado apenas por uma leve penumbra escondida atrás de uma grande esfera negra, possivelmente a lua desse mundo estranho.");
        console.log();
        console.log("FASE SECRETA: A PENUMBRA DO ANOITECER!!")
        separacao = prompt("")
        console.log("O dia ainda não tinha acabado e ela já tinha presenciado muita coisa estranha, depois de andar por uns minutos, ela percebe um estranho peixe alado voando em direção a ela, parecia querer atacá-la");
        separacao = prompt("");
        console.log("Deseja atacar o peixe?");
        let decisao6 = +prompt("0 para atacar, 1 para não atacar: ");
        while(decisao6!=0 && decisao6!=1){
            console.log("Responda apenas com 0 ou 1.");
            decisao6 = +prompt("0 para atacar, 1 para não atacar: ");
        }
        if(decisao6==0){
            console.log();
            console.log("A Évy pensa em usar seu arco, mas não quer obliterar o peixe, pegando a sua .40 e atirando nas asas do peixe, já tem tempo desde que ela comeu peixe, mas ainda está em duvida...");
            separacao = prompt("");
            console.log("Você deseja comer o peixe?");
            let decisao6_1 = +prompt("0 para comer e 1 para não comer: ");
            while(decisao6_1!=0 && decisao6_1!=1){
                console.log("Responda apenas com 0 ou 1.");
                decisao6_1 = +prompt("0 para comer e 1 para não comer: ");
            }   
            if(decisao6_1==0){
                console.log();
                const aleatorio4 = functionAleatoria();
                if(aleatorio4==0){
                    statusJogador.fadiga--
                    statusJogador.dexfunction();
                    console.log("Ela come o peixe inteiro, incluindo as asas, recuperando um pouco da sua energia e aumentando sua destreza");
                    console.log(`Fadiga:     ${statusJogador.fadiga}\nDestreza:   ${statusJogador.dex}`)
                }else if(aleatorio4==1){
                    statusJogador.fadiga--
                    console.log("Ela tem um pouco de nojo, come parte do peixe, o suficiente para recuperar suas forças");
                    console.log(`Fadiga:     ${statusJogador.fadiga}`)
                }else if(aleatorio4==2){
                    console.log("Ela se engasga com a espinha do peixe e morre.");
                    statusJogador.vit=0
                    console.log(`Vitalidade: ${statusJogador.vit}`)
                }
            }else{
                statusJogador.pacfunction();
                 console.log("Ela ficou com pena do peixe e jogou ele em um lago...mal sabia ela que peixe alado não respira na agua...");
            }
        }else{
            console.log();
            console.log("A Évy se abaixa e o peixe passa direto.");
        }
        separacao = prompt("")
        console.log();
        console.log("Ela continua andando em direção ao desconhecido, nisso acaba sendo emboscada por seres parecidos com o que ela conhecia como goblins que apareciam nos joguinhos de RPG que costumava jogar.");
        console.log();
        console.log("Deseja atacar ou tentar fugir?");
        let decisao6_2 = +prompt("0 p/ atacar e 1 p/ fugir: ");
        while(decisao6_2!=0 && decisao6_2!=1){
            console.log("Responda apenas com 0 ou 1.");
            decisao6_2 = +prompt("0 p/ atacar e 1 p/ fugir: ");
        }
        if(decisao6_2==0){
            console.log();
            console.log("A Évy decidiu atacar os 'goblins', mas sem muita efetividade pq eles são muitos. ");
            separacao = prompt("");
            console.log("Mas de repente, apareceu um jovem Orc e trucida facilmente todos os 'goblins', fala para nossa aventureira continuar sua jornada e que decidiu ajudar pq gostou do cabelo dela.");
            statusJogador.orcfunction();
        }else{
            console.log("Ela decide fugir, os 'goblins' estavam quase alcançando, mas de repente, apareceu um jovem Orc e trucida facilmente todos os 'goblins', fala para nossa aventureira continuar sua jornada e que decidiu ajudar pq gostou do cabelo dela.");
            statusJogador.orcfunction();
        }
        separacao = prompt("");
        console.log();
        console.log("Ela se encontra muito cansada e decide dormir ali mesmo.");
        for(let i=0;statusJogador.fadiga>i;i++){
            statusJogador.fadiga--;
            console.log();
            console.log("Évy realmente estava muito cansada...")
        }
        statusJogador.dia = 0
        statusJogador.endfunction();
        break ciclo2_5
    }
} while (statusJogador.vit==0 || statusJogador.endgame==1);
jogar = ""
jogar = prompt("Deseja jogar novamente?(s/n): ").toLowerCase();
  while(jogar!="s" && jogar!="n"){
    console.log();
    console.log('Responda apenas com "s" ou "n"');
    jogar = prompt("Deseja jogar novamente?(s/n): ").toLowerCase();
  }
    if(jogar=="s"){
        console.clear();
      continue;
  }else if(jogar=="n"){
    console.log();
    console.log("Tudo bem, espero que tenha se divertido :D");
      break;
  }
}