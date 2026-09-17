/* =========================================================
   FAZBEAR GAME LORE — BASE LOCAL OFFLINE
   ---------------------------------------------------------
   Esta base NÃO usa API. Ela separa fatos dos jogos de teorias.
   Quando um ponto é debatido pela comunidade, a resposta avisa.
   O objetivo é permitir que os alunos ampliem o chatbot apenas
   adicionando novos objetos, aliases e respostas.
   ========================================================= */

const FAZBEAR_GAME_KNOWLEDGE = {
    games: [
        {
            id: 'fnaf1',
            aliases: ['fnaf 1', 'five nights at freddys 1', 'primeiro jogo', 'jogo de 2014'],
            title: "Five Nights at Freddy's",
            release: '2014',
            response: '🎮 FNAF 1 (2014) — Você trabalha no turno da noite da Freddy Fazbear’s Pizza e precisa sobreviver até 6h usando câmeras, portas e uma quantidade limitada de energia. Os principais animatronics são Freddy, Bonnie, Chica e Foxy, com aparições misteriosas de Golden Freddy. O nome Mike Schmidt aparece no pagamento do segurança. O jogo introduz o mistério das crianças desaparecidas e a ideia de que algo sobrenatural está ligado aos mascotes.'
        },
        {
            id: 'fnaf2',
            aliases: ['fnaf 2', 'five nights at freddys 2', 'segundo jogo', 'jogo de 1987'],
            title: "Five Nights at Freddy's 2",
            release: '2014',
            response: '🎮 FNAF 2 (2014) — A história se passa em 1987, em uma Freddy’s “nova e melhorada”. Jeremy Fitzgerald trabalha como segurança noturno. Os Toys usam tecnologia moderna de reconhecimento facial, enquanto os animatronics antigos aparecem danificados como Withereds. Também entram em cena Puppet/Marionette, Balloon Boy e Mangle. O jogador usa uma máscara de Freddy e mantém a caixa de música da Puppet funcionando. O jogo faz referência à famosa Mordida de 87, mas não confirma de forma definitiva qual animatronic a causou.'
        },
        {
            id: 'fnaf3',
            aliases: ['fnaf 3', 'five nights at freddys 3', 'terceiro jogo', 'fazbears fright'],
            title: "Five Nights at Freddy's 3",
            release: '2015',
            response: '🎮 FNAF 3 (2015) — Décadas depois do fechamento das antigas pizzarias, uma atração de terror chamada Fazbear’s Fright tenta transformar as lendas da Freddy’s em entretenimento. O único animatronic físico hostil principal é Springtrap; os Phantoms funcionam como aparições que atrapalham sistemas e percepção. Minigames secretos aprofundam a história dos espíritos e do homem associado ao traje de Spring Bonnie. A atração termina em incêndio.'
        },
        {
            id: 'fnaf4',
            aliases: ['fnaf 4', 'five nights at freddys 4', 'quarto jogo', 'mordida de 83'],
            title: "Five Nights at Freddy's 4",
            release: '2015',
            response: '🎮 FNAF 4 (2015) — As noites acontecem em um quarto, onde uma criança enfrenta versões Nightmare de Freddy, Bonnie, Chica, Foxy e Fredbear. Os minigames mostram uma criança assustada ligada ao Fredbear’s Family Diner e culminam na Mordida de 83. O fandom costuma chamá-la de Crying Child. Um nome definitivo para essa criança não foi apresentado de forma simples e inequívoca nos jogos principais, então o chatbot evita tratar nomes de teorias como fato.'
        },
        {
            id: 'sister-location',
            aliases: ['sister location', 'fnaf sister location', 'circus babys pizza world', 'circus babys entertainment and rental'],
            title: "Five Nights at Freddy's: Sister Location",
            release: '2016',
            response: '🎮 Sister Location (2016) — O jogador atua como técnico em uma instalação subterrânea ligada à Circus Baby’s Entertainment and Rental. Circus Baby, Ballora, Funtime Freddy, Bon-Bon e Funtime Foxy são os principais animatronics. A história conecta a família Afton à criação dos Funtimes e à filha de William, Elizabeth. Os animatronics acabam se combinando em Ennard. Conteúdo posterior identifica o protagonista como Michael, que procura respostas sobre a própria família.'
        },
        {
            id: 'pizzeria-simulator',
            aliases: ['pizzeria simulator', 'freddy fazbears pizzeria simulator', 'fnaf 6', 'ffps'],
            title: "Freddy Fazbear's Pizzeria Simulator",
            release: '2017',
            response: '🎮 Freddy Fazbear’s Pizzeria Simulator / FNAF 6 (2017) — O jogo começa como simulador de pizzaria, mas vira uma armadilha planejada para reunir os principais restos da velha história. O jogador administra o restaurante e pode resgatar animatronics como Scrap Baby, Molten Freddy, Scraptrap e Lefty. No encerramento principal, Henry Emily revela o plano de atrair todos para um único lugar e tentar encerrar o ciclo ligado à Freddy’s.'
        },
        {
            id: 'ucn',
            aliases: ['ultimate custom night', 'ucn', 'custom night'],
            title: 'Ultimate Custom Night',
            release: '2018',
            response: '🎮 Ultimate Custom Night (2018) — É um grande desafio que reúne 50 personagens de vários jogos em um único escritório personalizável. A jogabilidade permite escolher quem aparece e a dificuldade. A lore escondida levou muitos fãs a interpretar UCN como uma punição ou prisão destinada a William Afton, mas a forma exata como ela se encaixa na cronologia continua sendo um dos pontos mais interpretados da franquia; por isso o chatbot apresenta essa leitura como teoria forte, não como frase oficial inequívoca.'
        },
        {
            id: 'help-wanted',
            aliases: ['help wanted', 'fnaf vr', 'help wanted 1'],
            title: "Five Nights at Freddy's: Help Wanted",
            release: '2019',
            response: '🎮 Help Wanted (2019) — A Fazbear Entertainment apresenta uma experiência de realidade virtual que recria incidentes e minigames da franquia. Além dos desafios clássicos, surge uma entidade digital em forma de coelho geralmente chamada de Glitchtrap. O jogo marca a fase moderna da série e prepara elementos ligados a Vanessa/Vanny e ao retorno dos problemas da Fazbear em formato digital.'
        },
        {
            id: 'security-breach',
            aliases: ['security breach', 'fnaf security breach', 'pizzaplex'],
            title: "Five Nights at Freddy's: Security Breach",
            release: '2021',
            response: '🎮 Security Breach (2021) — Gregory fica preso durante a noite no Freddy Fazbear’s Mega Pizzaplex. Glamrock Freddy decide ajudá-lo, enquanto Glamrock Chica, Roxanne Wolf, Montgomery Gator e a segurança Vanessa o procuram. O jogo troca o escritório fixo por exploração livre do Pizzaplex e possui vários finais. Também aparecem Vanny, Sun/Moon, DJ Music Man e diversos S.T.A.F.F. Bots.'
        },
        {
            id: 'ruin',
            aliases: ['ruin', 'security breach ruin', 'dlc ruin'],
            title: "Five Nights at Freddy's: Security Breach — Ruin",
            release: '2023',
            response: '🎮 Ruin (2023) — Cassie entra nas ruínas do Mega Pizzaplex após receber o que parece ser um pedido de socorro de Gregory. Ela usa uma Faz-Wrench, um Roxy-Talky e uma máscara ligada ao sistema V.A.N.N.I. Ao explorar o local, encontra versões destruídas dos Glamrocks, Roxy e o sistema M.X.E.S. A grande revelação é que o Mimic consegue imitar a voz de Gregory e manipular Cassie para tentar escapar.'
        },
        {
            id: 'help-wanted-2',
            aliases: ['help wanted 2', 'fnaf help wanted 2', 'hw2'],
            title: "Five Nights at Freddy's: Help Wanted 2",
            release: '2023',
            response: '🎮 Help Wanted 2 (2023) — O jogador assume tarefas de um novo funcionário da Fazbear em experiências ligadas ao Pizzaplex, manutenção, Fazcade, alimentos e minigames inspirados em Sister Location. O jogo conecta a fase de realidade virtual aos acontecimentos de Security Breach/Ruin e aprofunda elementos do sistema V.A.N.N.I. e da máscara. Alguns detalhes de identidade do protagonista dependem de pistas e finais, então o chatbot evita transformar interpretações em certeza quando o jogo não fala diretamente.'
        },
        {
            id: 'into-the-pit',
            aliases: ['into the pit', 'fnaf into the pit', 'oswald'],
            title: "Five Nights at Freddy's: Into the Pit",
            release: '2024',
            response: '🎮 Into the Pit (2024) — Oswald encontra uma piscina de bolinhas em uma pizzaria decadente e passa a viajar entre períodos de tempo. O jogo adapta a história “Into the Pit” do universo Fazbear Frights e usa exploração 2D, quebra-cabeças e perseguições. Ele é uma entrada oficial da franquia, mas sua relação exata com a linha principal dos jogos é discutida; por isso é melhor tratá-lo como uma história oficial do universo FNAF sem forçar todas as suas cenas dentro da mesma cronologia dos jogos numerados.'
        },
        {
            id: 'secret-mimic',
            aliases: ['secret of the mimic', 'segredo do mimic', 'fnaf secret of the mimic', 'murrays costume manor'],
            title: "Five Nights at Freddy's: Secret of the Mimic",
            release: '2025',
            response: '🎮 Secret of the Mimic (2025) — O jogo leva o jogador à oficina abandonada da Murray’s Costume Manor e apresenta Edwin Murray como um inventor recluso. O Mimic é descrito como um protótipo de endoesqueleto capaz de se adaptar a fantasias e imitar personagens. A missão envolve recuperar tecnologia de protótipo para a Fazbear enquanto se investigam os restos do trabalho de Edwin. É uma peça importante para entender a origem do Mimic na fase moderna da franquia.'
        }
    ],

    entities: {
        'william-game': {
            aliases: ['william afton', 'purple guy', 'homem roxo', 'afton'],
            response: '🎮 Nos jogos, William Afton é uma figura central da tragédia da Fazbear e o personagem associado ao “Purple Guy”. Ele está ligado aos desaparecimentos e à criação de tecnologias/animatronics da Afton Robotics. Em FNAF 3, aparece preso ao traje de Spring Bonnie como Springtrap. Jogos posteriores mostram novas formas associadas ao personagem. Para um contexto escolar, a história pode ser explicada como “o responsável pelos crimes que deram origem à assombração da Freddy’s”, sem entrar em detalhes gráficos.'
        },
        'michael-afton-game': {
            aliases: ['michael afton', 'mike afton'],
            response: '🎮 Michael Afton é filho de William Afton e uma das figuras mais importantes da fase clássica da lore. Sister Location o liga diretamente à busca pela irmã e aos experimentos da família. Pistas fortes o conectam ao protagonista de outros eventos posteriores, especialmente Pizzeria Simulator. Algumas identificações específicas — como igualar automaticamente todos os “Mike” da série — dependem de interpretação de pistas, então o chatbot evita tratar cada conexão como se tivesse sido dita explicitamente em uma única cena.'
        },
        'elizabeth-afton': {
            aliases: ['elizabeth afton', 'elizabeth'],
            response: '🎮 Elizabeth Afton é filha de William Afton e irmã de Michael. Sua história está diretamente ligada a Circus Baby em Sister Location. Depois, elementos de Baby continuam aparecendo na cronologia, incluindo Scrap Baby em Pizzeria Simulator.'
        },
        'crying-child': {
            aliases: ['crying child', 'crianca chorona', 'bite victim', 'vitima da mordida', 'garoto do fnaf 4'],
            response: '🎮 “Crying Child” é o nome usado pela comunidade para a criança dos minigames de FNAF 4, vítima da Mordida de 83. O jogo mostra sua relação com Fredbear’s Family Diner e com um irmão mais velho que o assusta. Vários nomes foram propostos por fãs ao longo dos anos, mas o chatbot não apresenta um deles como fato definitivo quando a identificação não é inequívoca nos jogos principais.'
        },
        'henry-game': {
            aliases: ['henry emily', 'henry'],
            response: '🎮 Henry Emily é um antigo parceiro ligado à origem dos restaurantes e animatronics da Fazbear. Em Pizzeria Simulator, ele organiza um plano para reunir os principais animatronics restantes em uma única pizzaria e encerrar o ciclo de tragédias. Charlotte, sua filha, é associada à Puppet/Marionette.'
        },
        'charlotte-game': {
            aliases: ['charlotte emily', 'charlie emily', 'charlie', 'filha do henry'],
            response: '🎮 Charlotte “Charlie” Emily é filha de Henry Emily. Na continuidade dos jogos, ela está ligada à Puppet/Marionette, personagem com papel importante na história dos espíritos associados aos animatronics.'
        },
        'phone-guy': {
            aliases: ['phone guy', 'cara do telefone', 'homem do telefone'],
            response: '🎮 Phone Guy é o funcionário que deixa gravações e orientações para o segurança nos primeiros jogos. Ele explica procedimentos da pizzaria, oferece contexto sobre os animatronics e se torna uma das primeiras vozes recorrentes da série.'
        },
        'jeremy': {
            aliases: ['jeremy fitzgerald', 'jeremy'],
            response: '🎮 Jeremy Fitzgerald é o segurança principal controlado em grande parte de FNAF 2. Ele trabalha no local em 1987 e recebe instruções durante as noites. A relação dele com a Mordida de 87 é frequentemente discutida, mas o jogo não apresenta uma confirmação direta dizendo “Jeremy foi a vítima” em uma cena explícita.'
        },
        'fritz-smith': {
            aliases: ['fritz smith', 'fritz'],
            response: '🎮 Fritz Smith é o nome do segurança jogável na noite extra de FNAF 2. Ele é demitido rapidamente por “adulterar os animatronics” e por odor, referências que alimentaram diversas teorias sobre sua identidade, mas o jogo não confirma essas teorias diretamente.'
        },
        'gregory': {
            aliases: ['gregory'],
            response: '🎮 Gregory é o protagonista de Security Breach. Ele fica preso no Mega Pizzaplex e recebe ajuda de Glamrock Freddy. Em Ruin, Cassie entra no complexo após ouvir uma mensagem que parece ser dele, mas parte desse contato é imitada pelo Mimic.'
        },
        'cassie': {
            aliases: ['cassie'],
            response: '🎮 Cassie é a protagonista de Ruin e amiga de Gregory. Ela entra no Pizzaplex destruído para tentar ajudá-lo, usando ferramentas de manutenção e a máscara V.A.N.N.I. Sua confiança na voz que a guia é essencial para a revelação envolvendo o Mimic.'
        },
        'vanessa-vanny': {
            aliases: ['vanessa', 'vanny'],
            response: '🎮 Na fase moderna dos jogos, Vanessa é uma funcionária/segurança ligada ao Pizzaplex, enquanto Vanny é a figura com fantasia de coelho associada à influência digital apresentada após Help Wanted. Security Breach e materiais relacionados conectam as duas identidades. Essa Vanessa pertence à continuidade dos jogos e não deve ser automaticamente misturada com a Vanessa dos filmes.'
        },
        'edwin-murray': {
            aliases: ['edwin murray', 'edwin'],
            response: '🎮 Edwin Murray é o inventor central de Secret of the Mimic. O jogo explora sua oficina na Murray’s Costume Manor e os restos de seu trabalho. Ele está ligado à criação do protótipo de endoesqueleto conhecido como Mimic.'
        },
        'freddy-game': {
            aliases: ['freddy fazbear', 'freddy'],
            response: '🎮 Freddy Fazbear é o urso mascote da marca e vocalista da banda clássica. Em FNAF 1 ele se torna mais ativo conforme a noite avança e costuma atacar pelo lado direito. Ao longo da franquia surgem várias versões: Withered Freddy, Toy Freddy, Phantom Freddy, Nightmare Freddy, Funtime Freddy, Rockstar Freddy e Glamrock Freddy.'
        },
        'bonnie-game': {
            aliases: ['bonnie'],
            response: '🎮 Bonnie é o coelho guitarrista da formação clássica. Em FNAF 1 costuma percorrer o lado esquerdo da pizzaria. A franquia possui muitas variantes, como Withered Bonnie, Toy Bonnie, Nightmare Bonnie, Rockstar Bonnie e o antigo Spring Bonnie, que é um personagem/traje diferente do Bonnie clássico.'
        },
        'chica-game': {
            aliases: ['chica'],
            response: '🎮 Chica é a galinha da banda clássica e normalmente aparece com um cupcake. Em FNAF 1 tende a atacar pelo lado direito. Entre suas versões estão Withered Chica, Toy Chica, Phantom Chica, Nightmare Chica, Rockstar Chica e Glamrock Chica.'
        },
        'foxy-game': {
            aliases: ['foxy'],
            response: '🎮 Foxy é a raposa pirata associada à Pirate Cove. Em FNAF 1 ele fica atrás de uma cortina e pode correr até o escritório quando não é observado adequadamente. Suas variações incluem Withered Foxy, Phantom Foxy, Nightmare Foxy, Funtime Foxy e versões temáticas em outros jogos.'
        },
        'golden-freddy-game': {
            aliases: ['golden freddy', 'freddy dourado'],
            response: '🎮 Golden Freddy é uma das figuras mais misteriosas da fase clássica. Ele aparece de forma anormal, quase fantasmagórica, e é associado aos mistérios das crianças desaparecidas. A identidade exata do espírito ou espíritos relacionados a Golden Freddy é um tema complexo e debatido; respostas absolutas como “é definitivamente X e somente X” simplificam algo que os jogos deixam propositalmente enigmático.'
        },
        'toy-group': {
            aliases: ['toy animatronics', 'toys', 'grupo toy'],
            response: '🎮 Os Toy animatronics aparecem em FNAF 2 como versões novas e modernizadas: Toy Freddy, Toy Bonnie e Toy Chica. Mangle é uma atração da mesma geração e Balloon Boy também faz parte do elenco do local. O jogo diz que os novos modelos possuem reconhecimento facial e ligação com bancos de dados criminais.'
        },
        'toy-freddy-game': {
            aliases: ['toy freddy'],
            response: '🎮 Toy Freddy é a versão moderna de Freddy em FNAF 2. Ele integra a nova banda equipada com tecnologia de reconhecimento facial e pode ser enganado com a máscara de Freddy quando entra no escritório.'
        },
        'toy-bonnie-game': {
            aliases: ['toy bonnie'],
            response: '🎮 Toy Bonnie é a versão moderna de Bonnie em FNAF 2. Tem aparência mais brilhante e estilizada e entra no escritório pelas passagens laterais, sendo normalmente repelido com a máscara de Freddy.'
        },
        'toy-chica-game': {
            aliases: ['toy chica'],
            response: '🎮 Toy Chica é a versão moderna de Chica em FNAF 2. Durante as noites, ela muda de aparência ao remover o bico e os olhos ficam mais destacados. Faz parte do grupo Toy da pizzaria de 1987.'
        },
        'mangle-game': {
            aliases: ['mangle'],
            response: '🎮 Mangle aparece em FNAF 2 como uma atração desmontada e remontada repetidamente pelas crianças, passando a ser chamada de “Mangle”. Move-se pelo teto e pelos dutos. É uma das personagens frequentemente citadas nas teorias sobre a Mordida de 87, mas o jogo não confirma oficialmente o autor da mordida.'
        },
        'balloon-boy-game': {
            aliases: ['balloon boy', 'bb'],
            response: '🎮 Balloon Boy, ou BB, aparece em FNAF 2. Ele não ataca diretamente como os animatronics principais, mas pode desativar o uso da lanterna, deixando o jogador vulnerável a outras ameaças, especialmente Withered Foxy.'
        },
        'puppet-game': {
            aliases: ['puppet', 'marionette', 'the puppet'],
            response: '🎮 Puppet/Marionette é apresentada em FNAF 2 e precisa ser mantida sob controle com a caixa de música. Minigames posteriores ligam a personagem a Charlotte Emily e dão a ela um papel importante na história dos espíritos associados aos animatronics.'
        },
        'withered-group': {
            aliases: ['withered animatronics', 'withereds', 'animatronics quebrados do fnaf 2'],
            response: '🎮 Os Withereds são versões antigas e danificadas de Freddy, Bonnie, Chica, Foxy e Golden Freddy vistas em FNAF 2. Eles representam uma geração anterior de mascotes reaproveitada como peças para os modelos Toy.'
        },
        'spring-bonnie': {
            aliases: ['spring bonnie'],
            response: '🎮 Spring Bonnie é um antigo personagem/traje amarelo ligado ao Fredbear’s Family Diner e ao sistema springlock. É diferente do Bonnie clássico. William Afton fica preso em um traje associado a Spring Bonnie, dando origem a Springtrap.'
        },
        'fredbear': {
            aliases: ['fredbear'],
            response: '🎮 Fredbear é o urso amarelo associado ao antigo Fredbear’s Family Diner e aos trajes springlock. FNAF 4 liga Fredbear à Mordida de 83. Apesar das semelhanças visuais, Fredbear e Golden Freddy não devem ser tratados automaticamente como a mesma coisa sem contexto.'
        },
        'springtrap': {
            aliases: ['springtrap'],
            response: '🎮 Springtrap é a principal ameaça física de FNAF 3. Ele é um traje springlock deteriorado associado a Spring Bonnie com William Afton preso dentro. Diferentemente dos Phantoms, Springtrap é o animatronic que realmente percorre a atração e pode alcançar o escritório.'
        },
        'phantoms': {
            aliases: ['phantom animatronics', 'phantoms', 'phantom freddy', 'phantom chica', 'phantom foxy', 'phantom mangle', 'phantom bb', 'phantom puppet'],
            response: '🎮 Os Phantom animatronics aparecem em FNAF 3 como manifestações/alucinações que atrapalham o jogador, provocando falhas nos sistemas. Eles não funcionam como o único inimigo físico principal; esse papel pertence a Springtrap.'
        },
        'nightmares': {
            aliases: ['nightmare animatronics', 'nightmares', 'nightmare freddy', 'nightmare bonnie', 'nightmare chica', 'nightmare foxy'],
            response: '🎮 Os Nightmare animatronics são versões monstruosas presentes nas noites de FNAF 4. O grupo inclui Nightmare Freddy e seus Freddles, Nightmare Bonnie, Nightmare Chica, Nightmare Foxy e outras ameaças como Nightmare Fredbear e Nightmare.'
        },
        'nightmare-fredbear': {
            aliases: ['nightmare fredbear'],
            response: '🎮 Nightmare Fredbear é uma das principais ameaças finais de FNAF 4 e uma versão aterrorizante de Fredbear. Sua presença se conecta visualmente aos traumas e eventos mostrados nos minigames do jogo.'
        },
        'circus-baby': {
            aliases: ['circus baby', 'baby'],
            response: '🎮 Circus Baby é a mascote principal de Sister Location e uma criação ligada à Afton Robotics. Ela possui papel central na história de Elizabeth Afton. Em Pizzeria Simulator, uma forma reconstruída aparece como Scrap Baby.'
        },
        'ballora': {
            aliases: ['ballora'],
            response: '🎮 Ballora é uma animatronic bailarina de Sister Location. Ela utiliza música e movimentos pelo Ballora Gallery e faz parte do conjunto de animatronics Funtime da instalação subterrânea.'
        },
        'funtime-freddy': {
            aliases: ['funtime freddy'],
            response: '🎮 Funtime Freddy é uma versão tecnológica de Freddy em Sister Location. Ele é acompanhado pelo fantoche Bon-Bon. Partes dos Funtimes contribuem para Ennard e, posteriormente, a entidade Molten Freddy.'
        },
        'bon-bon': {
            aliases: ['bon bon', 'bon-bon'],
            response: '🎮 Bon-Bon é o pequeno fantoche de coelho acoplado ao braço de Funtime Freddy em Sister Location. Apesar do tamanho, também pode agir como ameaça em sequências específicas.'
        },
        'funtime-foxy': {
            aliases: ['funtime foxy'],
            response: '🎮 Funtime Foxy é um animatronic de Sister Location associado ao Funtime Auditorium. Seu design é diferente do Foxy clássico e ele faz parte do conjunto que acaba envolvido na formação de Ennard.'
        },
        'ennard': {
            aliases: ['ennard'],
            response: '🎮 Ennard é uma combinação de partes internas dos animatronics de Sister Location. Ele representa a tentativa dos Funtimes de escapar da instalação. Depois de mudanças internas no grupo, elementos dessa entidade continuam como Molten Freddy.'
        },
        'scrap-baby': {
            aliases: ['scrap baby'],
            response: '🎮 Scrap Baby é a forma reconstruída de Circus Baby vista em Pizzeria Simulator. Ela é uma das entidades atraídas para a pizzaria do plano final de Henry.'
        },
        'molten-freddy': {
            aliases: ['molten freddy'],
            response: '🎮 Molten Freddy aparece em Pizzeria Simulator e é ligado aos restos de Ennard após a separação de Baby do grupo. É uma massa de fios e partes animatrônicas com características de Funtime Freddy.'
        },
        'scraptrap': {
            aliases: ['scraptrap', 'afton fnaf 6'],
            response: '🎮 Scraptrap é o nome usado pela comunidade para a aparência de William Afton em Pizzeria Simulator, após os eventos de Springtrap. No próprio jogo, a listagem costuma tratar o personagem simplesmente como “Afton”.'
        },
        'lefty': {
            aliases: ['lefty', 'l e f t e'],
            response: '🎮 Lefty é um animatronic de Pizzeria Simulator criado como parte do plano de Henry. A sigla L.E.F.T.E. está ligada à função de localizar, capturar e conter a Puppet/Marionette.'
        },
        'glitchtrap': {
            aliases: ['glitchtrap', 'coelho digital'],
            response: '🎮 Glitchtrap é o nome popular da entidade digital em forma de coelho apresentada em Help Wanted. Ela tenta influenciar o jogador e se conecta à fase de Vanessa/Vanny. Jogos posteriores acrescentam novas peças sobre entidades de imitação e código, então a natureza exata de Glitchtrap é um assunto em evolução; o chatbot evita resumir tudo simplesmente como “William voltou digitalmente” sem ressalvas.'
        },
        'glamrock-freddy': {
            aliases: ['glamrock freddy'],
            response: '🎮 Glamrock Freddy é a versão de Freddy em Security Breach e, ao contrário de muitos mascotes anteriores, ajuda Gregory. O jogador pode entrar em seu compartimento e usar Freddy para atravessar partes do Pizzaplex e ganhar novas habilidades com upgrades.'
        },
        'glamrock-chica': {
            aliases: ['glamrock chica'],
            response: '🎮 Glamrock Chica é uma das principais perseguidoras de Gregory em Security Breach. Ela faz parte da banda Glamrock do Pizzaplex e possui um upgrade de voz que pode ser usado por Freddy dependendo do progresso do jogador.'
        },
        'roxanne-wolf': {
            aliases: ['roxanne wolf', 'roxy'],
            response: '🎮 Roxanne “Roxy” Wolf é a loba animatronic do Pizzaplex. Em Security Breach ela persegue Gregory, mas Ruin mostra um lado mais emocional da personagem e sua relação anterior com Cassie.'
        },
        'montgomery-gator': {
            aliases: ['montgomery gator', 'monty'],
            response: '🎮 Montgomery “Monty” Gator é o jacaré da banda Glamrock e uma das ameaças de Security Breach. Ele é associado ao Monty Golf e possui garras fortes que podem virar um upgrade para Glamrock Freddy.'
        },
        'sun-moon': {
            aliases: ['sun', 'moon', 'sun and moon', 'daycare attendant', 'atendente da creche', 'eclipse'],
            response: '🎮 O Daycare Attendant possui as personas Sun e Moon em Security Breach: Sun aparece com as luzes acesas e Moon surge no escuro. Em Ruin, Cassie pode interagir com o personagem danificado e ajudá-lo a alcançar uma forma equilibrada chamada Eclipse.'
        },
        'dj-music-man': {
            aliases: ['dj music man', 'music man'],
            response: '🎮 DJ Music Man é uma versão gigante de Music Man no Mega Pizzaplex. Ele aparece em uma das sequências de perseguição mais marcantes de Security Breach, ligada ao Fazcade.'
        },
        'staff-bots': {
            aliases: ['staff bot', 'staff bots', 's t a f f bots', 'map bot'],
            response: '🎮 Os S.T.A.F.F. Bots são robôs de serviço espalhados pelo Pizzaplex e cumprem várias funções, de limpeza a segurança. O famoso Map Bot aparece para entregar mapas de forma insistente. Há várias variantes visuais e funcionais.'
        },
        'funtimes-group': {
            aliases: ['funtime animatronics', 'funtimes', 'grupo funtime'],
            response: '🎮 Os Funtime animatronics são a geração tecnológica de Sister Location. O núcleo inclui Circus Baby, Ballora, Funtime Freddy com Bon-Bon e Funtime Foxy, além de personagens menores como Bidybab e Minireena. Eles estão ligados às instalações da Afton Robotics/Circus Baby e, durante a história, vários componentes se unem em Ennard.'
        },
        'scraps-group': {
            aliases: ['scrap animatronics', 'scraps', 'animatronics do fnaf 6'],
            response: '🎮 Os principais animatronics resgatáveis de Pizzeria Simulator são Scrap Baby, Molten Freddy, Afton/Scraptrap e Lefty. Eles representam restos ou novas formas de personagens da fase anterior e são atraídos para a pizzaria como parte do plano final de Henry.'
        },
        'glamrocks-group': {
            aliases: ['glamrocks', 'glamrock animatronics', 'grupo glamrock', 'animatronics do security breach'],
            response: '🎮 A banda principal do Mega Pizzaplex em Security Breach é formada por Glamrock Freddy, Glamrock Chica, Roxanne Wolf e Montgomery Gator. O complexo também possui outros personagens robóticos, como Sun/Moon, DJ Music Man e vários S.T.A.F.F. Bots. Glamrock Freddy se destaca por ajudar Gregory em vez de persegui-lo.'
        },
        'ruined-group': {
            aliases: ['ruined animatronics', 'animatronics de ruin', 'ruined glamrocks'],
            response: '🎮 Em Ruin, o Pizzaplex está destruído e vários personagens aparecem em estados muito danificados, incluindo Chica, Roxy e Monty. O Daycare Attendant também está quebrado e pode chegar à forma Eclipse. O jogo usa essas versões para mostrar as consequências do colapso do complexo após Security Breach.'
        },
        'mimic': {
            aliases: ['mimic', 'mimico', 'o mimico'],
            response: '🎮 O Mimic é um endoesqueleto/protótipo capaz de imitar comportamentos, vozes e personagens. Em Ruin, ele imita Gregory para enganar Cassie. Secret of the Mimic volta à história de sua tecnologia e apresenta Edwin Murray e a Murray’s Costume Manor, reforçando o Mimic como figura central da fase moderna de FNAF.'
        }
    },

    topics: [
        {
            id: 'release-order',
            aliases: ['ordem dos jogos', 'ordem de lancamento', 'qual jogo jogar primeiro', 'lista de jogos'],
            response: '📚 Ordem principal de lançamento para estudar a franquia: FNAF 1 (2014) → FNAF 2 (2014) → FNAF 3 (2015) → FNAF 4 (2015) → Sister Location (2016) → Pizzeria Simulator/FNAF 6 (2017) → Ultimate Custom Night (2018) → Help Wanted (2019) → Security Breach (2021) → Ruin (2023) → Help Wanted 2 (2023) → Into the Pit (2024, adaptação/spin-off oficial) → Secret of the Mimic (2025). FNAF World e outros títulos paralelos existem, mas não são necessários para acompanhar a linha principal.'
        },
        {
            id: 'timeline',
            aliases: ['linha do tempo', 'cronologia dos jogos', 'ordem cronologica', 'historia completa dos jogos', 'historia dos jogos', 'historia dos jogos de fnaf', 'me conte a historia dos jogos de fnaf'],
            response: '🧩 A cronologia de FNAF não é apresentada como uma linha simples e várias posições são debatidas. De forma segura: a história começa com locais antigos como Fredbear’s Family Diner e os primeiros projetos da Fazbear; FNAF 4 mostra eventos de 1983; FNAF 2 ocorre em 1987; FNAF 1 vem depois; FNAF 3 se passa décadas após o fechamento da Freddy’s; Sister Location e Pizzeria Simulator aprofundam a família Afton e o plano de Henry; Help Wanted inaugura a fase digital; Security Breach/Ruin levam a história ao Mega Pizzaplex; Secret of the Mimic explora origens importantes da tecnologia do Mimic. A posição exata de Sister Location e de alguns flashbacks/minigames é discutida, então não existe uma cronologia 100% indiscutível.'
        },
        {
            id: 'bite83',
            aliases: ['mordida de 83', 'bite of 83', 'bite 83'],
            response: '🎮 A Mordida de 83 é mostrada nos minigames de FNAF 4. A criança conhecida como Crying Child é colocada perto da boca de Fredbear durante uma brincadeira cruel, e o mecanismo fecha. O evento é diferente da Mordida de 87.'
        },
        {
            id: 'bite87',
            aliases: ['mordida de 87', 'bite of 87', 'bite 87', 'quem causou a mordida de 87'],
            response: '🎮 A Mordida de 87 é mencionada desde FNAF 1 e FNAF 2 ocorre em 1987, mas os jogos não confirmam de forma definitiva qual animatronic causou a mordida. Mangle é uma teoria muito popular, porém continua sendo teoria. O chatbot não apresenta “Mangle fez a mordida” como fato confirmado.'
        },
        {
            id: 'missing-children-games',
            aliases: ['missing children incident', 'criancas desaparecidas nos jogos', 'incidente das criancas desaparecidas', 'por que os animatronics sao possuidos nos jogos'],
            response: '🎮 A lore dos jogos envolve crianças desaparecidas ligadas aos crimes de William Afton e aos animatronics da Freddy’s. Minigames e pistas conectam esses espíritos aos mascotes clássicos e à Puppet. Para o projeto escolar, a explicação pode permanecer no nível “os crimes de Afton deram origem à assombração e ao ciclo sobrenatural da pizzaria”, evitando detalhes gráficos.'
        },
        {
            id: 'springlocks-games',
            aliases: ['springlock nos jogos', 'trajes springlock', 'como funciona springlock', 'springlocks'],
            response: '🎮 Os springlock suits são trajes híbridos que podem funcionar como animatronic ou como fantasia vestível. O mecanismo interno precisa ser mantido recolhido com travas; falhas podem fazer as peças retornarem à posição mecânica. Fredbear e Spring Bonnie estão ligados a essa tecnologia. William Afton acaba preso em um traje associado a Spring Bonnie, originando Springtrap.'
        },
        {
            id: 'afton-family',
            aliases: ['familia afton', 'afton family', 'filhos do william', 'quem faz parte da familia afton'],
            response: '🎮 Na continuidade dos jogos, William Afton é o pai; Michael Afton é um filho central na história; Elizabeth Afton é a filha ligada a Circus Baby; e FNAF 4 mostra outra criança da família conhecida pela comunidade como Crying Child/Bite Victim. A identidade/nome definitivo dessa criança é um ponto em que teorias de fãs costumam ir além do que os jogos dizem explicitamente.'
        },
        {
            id: 'emily-family',
            aliases: ['familia emily', 'emily family', 'henry e charlotte'],
            response: '🎮 Henry Emily é ligado à origem da Fazbear e Charlotte “Charlie” Emily é sua filha, associada à Puppet/Marionette. Pizzeria Simulator dá a Henry um papel decisivo no encerramento da fase clássica da história.'
        },
        {
            id: 'locations',
            aliases: ['locais de fnaf', 'pizzarias dos jogos', 'fredbears family diner', 'fazbears fright', 'mega pizzaplex'],
            response: '🏢 Locais importantes dos jogos incluem Fredbear’s Family Diner; diferentes unidades da Freddy Fazbear’s Pizza; Circus Baby’s Entertainment and Rental; Fazbear’s Fright: The Horror Attraction; a pizzaria montada em Pizzeria Simulator; o ambiente virtual de Help Wanted; o Freddy Fazbear’s Mega Pizzaplex de Security Breach/Ruin; e a Murray’s Costume Manor explorada em Secret of the Mimic.'
        },
        {
            id: 'game-film-difference',
            aliases: ['diferenca jogo filme', 'jogos e filmes sao iguais', 'canon dos jogos e filmes', 'universos diferentes'],
            response: '🎬🎮 Jogos e filmes usam nomes, mascotes e ideias semelhantes, mas são continuidades diferentes. Um personagem pode ter relações familiares ou acontecimentos diferentes em cada versão. Por isso, o bot responde “nos jogos” e “nos filmes” separadamente e evita usar uma informação de um universo como prova automática do outro.'
        },
        {
            id: 'theory-rule',
            aliases: ['teorias de fnaf', 'teoria ou canon', 'o que e canon', 'informacao confirmada'],
            response: '🔎 Regra da base: quando um detalhe é mostrado ou dito claramente em jogo/material oficial, trato como fato. Quando depende de pistas indiretas ou há várias interpretações, eu digo que é teoria ou ponto debatido. Exemplos: “FNAF 2 ocorre em 1987” é confirmado; “Mangle causou a Mordida de 87” é teoria popular; nomes alternativos para o Crying Child não devem ser apresentados como confirmação absoluta.'
        },
        {
            id: 'animatronic-generations',
            aliases: ['tipos de animatronics', 'geracoes de animatronics', 'todos os grupos de animatronics', 'familias de animatronics'],
            response: '🤖 Principais grupos dos jogos: clássicos (Freddy, Bonnie, Chica, Foxy, Golden Freddy); Withereds; Toys e Mangle; Puppet e Balloon Boy; Springlock/Fredbear e Spring Bonnie; Phantoms; Nightmares; Funtimes; Ennard; Scraps de FNAF 6; Rockstars e outros mascotes da pizzaria; personagens de Help Wanted; Glamrocks e S.T.A.F.F. Bots do Pizzaplex; versões Ruined; e o Mimic/protótipos da fase moderna. Pergunte por um grupo ou personagem específico para receber detalhes.'
        },
        {
            id: 'possessions',
            aliases: ['quem possui os animatronics', 'quem esta dentro dos animatronics', 'espiritos dos animatronics', 'almas dos animatronics'],
            response: '👻 A série liga vários animatronics a espíritos, mas nem todos funcionam da mesma forma. Os mascotes clássicos são associados às crianças desaparecidas; Puppet é ligada a Charlotte Emily; Circus Baby é ligada a Elizabeth Afton. Já animatronics modernos podem agir por programação, sistemas corrompidos, inteligência artificial ou influência de entidades digitais. Para Golden Freddy e algumas combinações específicas, existem debates e teorias — então o bot evita uma tabela “100% fechada” onde o canon é ambíguo.'
        },
        {
            id: 'mimic-lore',
            aliases: ['historia do mimic', 'origem do mimic', 'quem criou o mimic'],
            response: '🦾 O Mimic é uma tecnologia/endoesqueleto de imitação que ganha grande importância na fase moderna. Ruin mostra sua capacidade de copiar a voz de Gregory para enganar Cassie. Secret of the Mimic (2025) leva a investigação à Murray’s Costume Manor, apresenta Edwin Murray e descreve o Mimic como um protótipo capaz de se adaptar a fantasias e se tornar diferentes personagens.'
        }
    ]
};

window.FAZBEAR_GAME_KNOWLEDGE = FAZBEAR_GAME_KNOWLEDGE;
