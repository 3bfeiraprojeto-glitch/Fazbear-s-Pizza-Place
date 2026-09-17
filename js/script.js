const nose = document.getElementById('freddy-nose');
const honk = document.getElementById('honk-sound');
const music = document.getElementById('ambient-music');
const camBlip = document.getElementById('cam-blip');
const clickSound = document.getElementById('click-sound');
const viewport = document.getElementById('viewport');
const formPedido = document.getElementById('form-pedido');
const formVagas = document.getElementById('form-vagas');

music.volume = .15;
clickSound.volume = 0;

window.addEventListener('click', () => {
    music.play().catch(() => {});
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
});

formPedido.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('modal-contrato').classList.remove('active');
    formPedido.reset();
    alert('Sua solicitação de reserva foi enviada! Entraremos em contato via WhatsApp.');
});

formVagas.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('modal-vagas').classList.remove('active');
    formVagas.reset();
    alert('Currículo cadastrado em nosso banco de talentos. Obrigado pelo interesse!');
});

nose.addEventListener('click', e => {
    e.stopPropagation();
    honk.currentTime = 0;
    honk.play().catch(() => {});
    viewport.classList.add('impact-shake');
    setTimeout(() => viewport.classList.remove('impact-shake'), 150);
});

const btnPedido = document.getElementById('btn-pedido');
const modalContrato = document.getElementById('modal-contrato');
const fecharContrato = document.getElementById('fechar-contrato');
const btnVagas = document.getElementById('btn-vagas');
const modalVagas = document.getElementById('modal-vagas');
const fecharVagas = document.getElementById('fechar-vagas');

btnPedido.addEventListener('click', () => modalContrato.classList.add('active'));
fecharContrato.addEventListener('click', () => modalContrato.classList.remove('active'));
btnVagas.addEventListener('click', () => modalVagas.classList.add('active'));
fecharVagas.addEventListener('click', () => modalVagas.classList.remove('active'));

const btnCardapio = document.getElementById('btn-cardapio');
const tabletTrigger = document.getElementById('tablet-trigger');
const tablet = document.getElementById('tablet');
const mainMenu = document.getElementById('main-menu');

function toggleTablet() {
    tablet.classList.toggle('open');
    mainMenu.classList.toggle('blur-menu');
    camBlip.currentTime = 0;
    camBlip.play().catch(() => {});
    tabletTrigger.querySelector('.flip-icon').innerText =
        tablet.classList.contains('open') ? '▲ FECHAR CARDÁPIO ▲' : '▼ VER CARDÁPIO & AMBIENTES ▼';
}

tabletTrigger.addEventListener('click', toggleTablet);
btnCardapio.addEventListener('click', toggleTablet);

const camButtons = document.querySelectorAll('.cam-btn');
const camTag = document.getElementById('cam-tag');
const camFeed = document.getElementById('cam-feed');

const cardapioDados = {
    1: {
        title: "FAZBEAR PRESTIGE (PEPPERONI & DIJON)",
        desc: "Massa de fermentação natural de 48h, blend especial de queijos artesanais, pepperoni premium defumado na lenha de macieira e gotas de mostarda Dijon em grãos. A assinatura da casa.",
        price: "R$ 68,90"
    },
    2: {
        title: "CHICA'S TROPICALIS (FRANGO DEFUMADO & ALHO-PORÓ)",
        desc: "Peito de frango cozido lentamente e desfiado, Catupiry original maçaricado, alho-poró crisp e raspas de limão siciliano sobre molho de tomates italianos San Marzano.",
        price: "R$ 64,00"
    },
    3: {
        title: "THE PIRATE COVE (CALABRESA ARTESANAL & GELEIA)",
        desc: "Calabresa artesanal defumada fatiada fina, cebola caramelizada e um toque sutil de geleia de pimenta defumada. Uma combinação robusta e agridoce para os destemidos.",
        price: "R$ 72,50"
    },
    4: {
        title: "BONNIE'S MELODY (QUATRO QUEIJOS NOBRES)",
        desc: "Mussarela premium, Provolone defumado, Gorgonzola Dolce e lascas de Parmesão da Mantiqueira, finalizada com mel trufado.",
        price: "R$ 69,90"
    },
    5: {
        title: "RESERVA DO CHEFE (TRUFAS NEGRAS)",
        desc: "Base de cogumelos frescos salteados no azeite de trufas negras, queijo fior di latte, rúcula selvagem e fios de redução balsâmica.",
        price: "R$ 84,00"
    }
};

camButtons.forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    camButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    camBlip.currentTime = 0;
    camBlip.play().catch(() => {});

    const n = btn.dataset.cam;
    camTag.innerText = btn.dataset.tag;
    camFeed.style.opacity = '.3';

    setTimeout(() => {
        camFeed.style.opacity = '1';
        camFeed.innerHTML = `<div class="pizza-card"><h3>${cardapioDados[n].title}</h3><p>${cardapioDados[n].desc}</p><span class="pizza-price">${cardapioDados[n].price}</span></div>`;
    }, 80);
}));

/* =========================================================
   FAZBEAR SUPPORT — CHATBOT OFFLINE
   ---------------------------------------------------------
   - Não usa API, servidor ou chave.
   - Funciona com intenções, palavras-chave, frases e contexto.
   - Diferencia a pizzaria do projeto do universo dos filmes.
   - Evita inventar fatos: quando não há informação cadastrada,
     o bot diz que não sabe.
   ========================================================= */

const supportFab = document.getElementById('support-fab');
const helpySprite = document.getElementById('helpy-sprite');
const helpyHeaderSprite = document.getElementById('helpy-header-sprite');
const supportChat = document.getElementById('support-chat');
const supportClose = document.getElementById('support-close');
const supportForm = document.getElementById('support-form');
const supportInput = document.getElementById('support-input');
const supportMessages = document.getElementById('support-messages');

const chatState = {
    lastTopic: null,
    lastEntity: null,
    lastUniverse: null,
    lastQuestion: null
};

const gameKnowledge = window.FAZBEAR_GAME_KNOWLEDGE || {
    games: [],
    entities: {},
    topics: []
};

/* ---------- Visual interativo do Helpy ----------
   O personagem é apenas a interface/mascote. As respostas continuam
   vindo da base offline completa configurada abaixo. */

const HELPY_BASE = 'assets/helpy/';

const helpyAnimations = {
    idle: ['Helpydance.webp', 'Helpy-dance1.webp', 'Helpy-hop.webp', '2021.webp'],
    hover: 'Helpy-think.webp',
    click: 'Helpy-dance1.webp',
    drag: 'HelpyLadder.webp',
    fall: 'Helpy-hop.webp',
    smash: 'Helpy-neck-break.webp'
};

let helpyIdleTimer = null;
let helpyDragging = false;
let helpyDidDrag = false;
let helpyPointerId = null;
let helpyOffX = 0;
let helpyOffY = 0;
let helpyX = 0;
let helpyY = 0;
let helpyVelocityY = 0;
let helpyPhysicsFrame = null;
let helpyHover = false;
let helpySpriteVersion = 0;
let helpySuppressClick = false;

function setHelpyAnimation(file) {
    if (!helpySprite) return;

    const source = `${HELPY_BASE}${file}?v=${++helpySpriteVersion}`;

    helpySprite.src = source;

    // O retrato do cabeçalho acompanha o personagem, mas sem a query-string.
    if (helpyHeaderSprite) {
        helpyHeaderSprite.src = `${HELPY_BASE}${file}`;
    }
}

function scheduleHelpyIdle() {
    clearTimeout(helpyIdleTimer);
    helpyIdleTimer = setTimeout(randomHelpyIdle, 5000);
}

function randomHelpyIdle() {
    if (helpyDragging || helpyPhysicsFrame || helpyHover) return;

    const current = helpySprite?.src || '';
    const options = helpyAnimations.idle.filter(file => !current.includes(file));
    const file =
        options[Math.floor(Math.random() * options.length)] ||
        helpyAnimations.idle[0];

    setHelpyAnimation(file);
    scheduleHelpyIdle();
}

function helpyFloorY() {
    return Math.max(
        8,
        innerHeight - (supportFab.offsetHeight || 170) - 18
    );
}

function clampHelpy() {
    helpyX = Math.min(
        Math.max(8, helpyX),
        Math.max(8, innerWidth - (supportFab.offsetWidth || 150) - 8)
    );

    helpyY = Math.min(
        Math.max(8, helpyY),
        helpyFloorY()
    );
}

function placeHelpy() {
    supportFab.style.left = `${helpyX}px`;
    supportFab.style.top = `${helpyY}px`;
    supportFab.style.right = 'auto';
    supportFab.style.bottom = 'auto';
}

function resetHelpyCorner() {
    helpyX = Math.max(
        8,
        innerWidth - (supportFab.offsetWidth || 150) - 18
    );

    helpyY = helpyFloorY();

    placeHelpy();
}

function fallHelpyToGround() {
    cancelAnimationFrame(helpyPhysicsFrame);

    helpyPhysicsFrame = null;
    helpyDragging = false;

    supportFab.classList.remove('is-dragging');
    supportFab.classList.add('is-falling');

    setHelpyAnimation(helpyAnimations.fall);

    helpyVelocityY = 0;

    const floor = helpyFloorY();
    let last = performance.now();

    function step(now) {
        const dt = Math.min((now - last) / 1000, 0.033);

        last = now;

        helpyVelocityY += 1550 * dt;
        helpyY += helpyVelocityY * dt;

        if (helpyY >= floor) {
            helpyY = floor;

            placeHelpy();

            helpyPhysicsFrame = null;

            supportFab.classList.remove('is-falling');

            setHelpyAnimation(helpyAnimations.smash);

            supportFab.classList.add('helpy-landed');

            setTimeout(
                () => supportFab.classList.remove('helpy-landed'),
                520
            );

            setTimeout(() => {
                setHelpyAnimation('Helpydance.webp');
                scheduleHelpyIdle();
            }, 950);

            return;
        }

        placeHelpy();

        helpyPhysicsFrame = requestAnimationFrame(step);
    }

    helpyPhysicsFrame = requestAnimationFrame(step);
}

function finishHelpyDrag() {
    if (!helpyDragging) return;

    helpyDragging = false;

    supportFab.classList.remove('is-dragging');

    helpyY += 8;

    clampHelpy();
    placeHelpy();

    fallHelpyToGround();
}

function onHelpyPointerDown(event) {
    if (event.button !== undefined && event.button !== 0) return;

    event.preventDefault();

    helpyPointerId = event.pointerId;

    const rect = supportFab.getBoundingClientRect();

    helpyOffX = event.clientX - rect.left;
    helpyOffY = event.clientY - rect.top;

    helpyX = rect.left;
    helpyY = rect.top;

    helpyDidDrag = false;
    helpyDragging = true;

    cancelAnimationFrame(helpyPhysicsFrame);
    helpyPhysicsFrame = null;

    supportFab.classList.add('is-dragging');

    setHelpyAnimation(helpyAnimations.drag);

    supportFab.setPointerCapture?.(event.pointerId);
}

function onHelpyPointerMove(event) {
    if (!helpyDragging || event.pointerId !== helpyPointerId) return;

    const nextX = event.clientX - helpyOffX;
    const nextY = event.clientY - helpyOffY;

    if (Math.hypot(nextX - helpyX, nextY - helpyY) > 5) {
        helpyDidDrag = true;
    }

    helpyX = nextX;
    helpyY = nextY;

    clampHelpy();
    placeHelpy();
}

function toggleSupportChat() {
    supportChat.classList.toggle('open');

    supportChat.setAttribute(
        'aria-hidden',
        String(!supportChat.classList.contains('open'))
    );

    if (supportChat.classList.contains('open')) {
        supportInput.focus();
    }
}

function onHelpyPointerUp(event) {
    if (event.pointerId !== helpyPointerId) return;

    const wasDragged = helpyDidDrag;

    if (wasDragged) {
        finishHelpyDrag();
    } else {
        helpyDragging = false;

        supportFab.classList.remove('is-dragging');

        setHelpyAnimation(helpyAnimations.click);

        helpySuppressClick = true;

        setTimeout(() => {
            toggleSupportChat();
            helpySuppressClick = false;
        }, 90);
    }

    helpyDidDrag = false;
    helpyPointerId = null;
}

supportFab.addEventListener('pointerenter', () => {
    if (!helpyDragging && !helpyPhysicsFrame) {
        helpyHover = true;

        clearTimeout(helpyIdleTimer);

        setHelpyAnimation(helpyAnimations.hover);
    }
});

supportFab.addEventListener('pointerleave', () => {
    helpyHover = false;

    if (!helpyDragging && !helpyPhysicsFrame) {
        setHelpyAnimation('Helpydance.webp');
        scheduleHelpyIdle();
    }
});

supportFab.addEventListener('pointerdown', onHelpyPointerDown);
supportFab.addEventListener('pointermove', onHelpyPointerMove);
supportFab.addEventListener('pointerup', onHelpyPointerUp);

supportFab.addEventListener('pointercancel', () => {
    if (helpyDragging) finishHelpyDrag();

    helpyPointerId = null;
});

supportFab.addEventListener('click', event => {
    if (helpySuppressClick || helpyDragging || helpyDidDrag) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
    }

    toggleSupportChat();
});

supportClose.addEventListener('click', () => {
    supportChat.classList.remove('open');
    supportChat.setAttribute('aria-hidden', 'true');
});

addEventListener('resize', () => {
    if (!helpyDragging && !helpyPhysicsFrame) {
        clampHelpy();
        placeHelpy();
    }
});

requestAnimationFrame(() => {
    resetHelpyCorner();

    helpyY = Math.max(8, helpyY - 260);

    placeHelpy();

    fallHelpyToGround();
});

setHelpyAnimation('Helpydance.webp');
scheduleHelpyIdle();

document
    .querySelectorAll('.quick-actions button')
    .forEach(button =>
        button.addEventListener(
            'click',
            () => sendSupportMessage(button.dataset.question)
        )
    );

function addMessage(text, type) {
    const div = document.createElement('div');

    div.className = `chat-message ${type}`;
    div.textContent = text;

    supportMessages.appendChild(div);

    supportMessages.scrollTop = supportMessages.scrollHeight;

    return div;
}

function showTyping() {
    const div = addMessage(
        'Helpy está consultando a base local...',
        'bot'
    );

    div.classList.add('typing-message');

    return div;
}

function normalize(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[’']/g, '')
        .replace(/[^a-z0-9\s-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function tokenize(text) {
    return normalize(text)
        .split(' ')
        .filter(Boolean);
}

function hasPhrase(q, phrase) {
    return q.includes(normalize(phrase));
}

function hasAny(q, terms) {
    return terms.some(term => hasPhrase(q, term));
}

function levenshtein(a, b) {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;

    const matrix = Array.from(
        { length: b.length + 1 },
        (_, i) => [i]
    );

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            matrix[i][j] =
                b[i - 1] === a[j - 1]
                    ? matrix[i - 1][j - 1]
                    : Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
        }
    }

    return matrix[b.length][a.length];
}

function fuzzyWordMatch(questionWords, keyword) {
    const k = normalize(keyword);

    if (k.includes(' ')) {
        return questionWords.join(' ').includes(k);
    }

    if (k.length < 5) {
        return questionWords.includes(k);
    }

    return questionWords.some(word => {
        if (word === k) return true;

        if (Math.abs(word.length - k.length) > 2) {
            return false;
        }

        return levenshtein(word, k) <= 2;
    });
}

function choose(list) {
    return list[Math.floor(Math.random() * list.length)];
}

// ---------- Informações da PIZZARIA DO PROJETO ----------

const projectInfo = {
    name: "Fazbear's Pizza Place",

    menu: [
        {
            key: 'prestige',
            aliases: [
                'fazbear prestige',
                'prestige',
                'pepperoni',
                'dijon'
            ],
            name: 'Fazbear Prestige',
            price: 'R$ 68,90',
            description: cardapioDados[1].desc
        },
        {
            key: 'tropicalis',
            aliases: [
                'chicas tropicalis',
                'chica tropicalis',
                'tropicalis',
                'frango',
                'alho poro'
            ],
            name: "Chica's Tropicalis",
            price: 'R$ 64,00',
            description: cardapioDados[2].desc
        },
        {
            key: 'pirate',
            aliases: [
                'the pirate cove',
                'pirate cove',
                'calabresa',
                'geleia'
            ],
            name: 'The Pirate Cove',
            price: 'R$ 72,50',
            description: cardapioDados[3].desc
        },
        {
            key: 'bonnie',
            aliases: [
                'bonnies melody',
                'bonnie melody',
                'quatro queijos',
                '4 queijos'
            ],
            name: "Bonnie's Melody",
            price: 'R$ 69,90',
            description: cardapioDados[4].desc
        },
        {
            key: 'chefe',
            aliases: [
                'reserva do chefe',
                'trufas',
                'trufa',
                'cogumelos'
            ],
            name: 'Reserva do Chefe',
            price: 'R$ 84,00',
            description: cardapioDados[5].desc
        }
    ],

    reservation:
        'Para reservar uma mesa, clique em “Reservar Mesa” no menu principal e preencha nome, telefone e setor desejado.',

    jobs:
        'Para demonstrar interesse em uma vaga, clique em “Trabalhe Conosco” e preencha o formulário do projeto.',

    hours:
        'Os horários de funcionamento ainda não foram cadastrados no protótipo. Para não inventar uma informação, prefiro deixar esse dado como pendente.',

    address:
        'O endereço da pizzaria do projeto ainda não foi cadastrado no protótipo.',

    projectWarning:
        'A Fazbear’s Pizza Place deste site é uma experiência temática criada para o projeto dos alunos. Cardápio, preços, reservas e setores pertencem ao protótipo escolar e não são informações oficiais dos filmes.'
};

// ---------- Base factual do UNIVERSO DOS FILMES ----------

const movieEntities = {
    'mike': {
        aliases: [
            'mike',
            'mike schmidt',
            'michael schmidt'
        ],
        response:
            'Mike Schmidt é o protagonista humano do primeiro filme. Ele aceita trabalhar como segurança noturno na antiga Freddy Fazbear’s Pizza enquanto tenta manter a guarda da irmã Abby e compreender o desaparecimento do irmão Garrett. No segundo filme, ele continua tentando proteger Abby dos mistérios ligados à Freddy’s.'
    },

    'abby': {
        aliases: [
            'abby',
            'abby schmidt'
        ],
        response:
            'Abby Schmidt é a irmã mais nova de Mike. Ela cria um vínculo forte com Freddy, Bonnie, Chica e Foxy e consegue se comunicar com eles de uma forma que Mike não consegue. Essa conexão é central nos dois filmes.'
    },

    'vanessa': {
        aliases: [
            'vanessa',
            'vanessa shelly'
        ],
        response:
            'Vanessa Shelly é uma policial que conhece o passado da Freddy’s e ajuda Mike. No primeiro filme é revelado que ela é filha de William Afton. No segundo, ela continua lidando com as consequências da história da família.'
    },

    'william': {
        aliases: [
            'william',
            'william afton',
            'afton',
            'steve raglan',
            'raglan',
            'coelho amarelo',
            'yellow rabbit'
        ],
        response:
            'William Afton é o principal antagonista dos filmes. Ele aparece também com o nome Steve Raglan e está ligado à criação/gestão da Freddy’s e aos crimes que marcaram a história do local. Para manter a explicação adequada ao projeto escolar: ele é o responsável pelos desaparecimentos e pela manipulação dos espíritos ligados aos animatronics. No segundo filme, sua influência continua afetando a família Afton e a origem da Freddy’s.'
    },

    'garrett': {
        aliases: [
            'garrett',
            'garrett schmidt'
        ],
        response:
            'Garrett é o irmão mais novo de Mike que desapareceu quando os dois eram crianças. A busca de Mike por respostas sobre Garrett é uma das principais motivações do primeiro filme.'
    },

    'henry': {
        aliases: [
            'henry',
            'henry emily'
        ],
        response:
            'Henry Emily aparece no segundo filme como antigo parceiro de negócios de William Afton e faz parte da história inicial da Freddy’s. Ele também é ligado a Charlotte Emily.'
    },

    'charlotte': {
        aliases: [
            'charlotte',
            'charlotte emily',
            'charlie',
            'marionette',
            'puppet',
            'the puppet'
        ],
        response:
            'Charlotte Emily é ligada à Marionette (Puppet) no segundo filme. A personagem faz parte dos segredos mais antigos da Freddy’s e da história envolvendo Henry Emily e William Afton.'
    },

    'michael-afton': {
        aliases: [
            'michael afton',
            'irmao da vanessa',
            'filho do william'
        ],
        response:
            'Michael Afton é apresentado no segundo filme como filho de William Afton e irmão de Vanessa. Ele entra na história influenciado pelo legado do pai e amplia o conflito da família Afton.'
    },

    'freddy': {
        aliases: [
            'freddy',
            'freddy fazbear'
        ],
        response:
            'Freddy Fazbear é o urso animatrônico e mascote principal da Freddy’s. No universo do filme, ele é um dos animatronics ligados aos espíritos das crianças desaparecidas e desenvolve uma relação de amizade e proteção com Abby.'
    },

    'bonnie': {
        aliases: [
            'bonnie',
            'bonnie the rabbit',
            'coelho bonnie'
        ],
        response:
            'Bonnie é o coelho animatrônico da banda da Freddy’s. Ele faz parte do grupo clássico com Freddy, Chica e Foxy e, como os outros, está ligado aos acontecimentos sobrenaturais da pizzaria.'
    },

    'chica': {
        aliases: [
            'chica',
            'chica the chicken'
        ],
        response:
            'Chica é a animatrônica em forma de galinha do grupo clássico. No primeiro filme ela aparece acompanhada do Mr. Cupcake e participa dos eventos sobrenaturais da Freddy’s.'
    },

    'foxy': {
        aliases: [
            'foxy',
            'foxy the pirate',
            'pirata foxy'
        ],
        response:
            'Foxy é o animatrônico pirata associado à Pirate Cove. Ele faz parte do grupo clássico da Freddy’s e tem comportamento mais independente e ameaçador em vários momentos do primeiro filme.'
    },

    'cupcake': {
        aliases: [
            'cupcake',
            'mr cupcake',
            'senhor cupcake',
            'carl'
        ],
        response:
            'Mr. Cupcake é o pequeno cupcake animatrônico associado à Chica. No filme ele se move de forma independente e participa de várias cenas de perigo.'
    },

    'golden-freddy': {
        aliases: [
            'golden freddy',
            'freddy dourado',
            'dourado'
        ],
        response:
            'Golden Freddy é uma versão misteriosa de Freddy ligada a um dos espíritos das crianças. No primeiro filme ele aparece em momentos importantes envolvendo Abby e a antiga pizzaria.'
    },

    'toy-freddy': {
        aliases: [
            'toy freddy'
        ],
        response:
            'Toy Freddy é um dos novos animatronics apresentados no segundo filme e faz parte do grupo “Toy”, ligado à expansão dos mistérios da Freddy’s.'
    },

    'toy-bonnie': {
        aliases: [
            'toy bonnie'
        ],
        response:
            'Toy Bonnie é a versão “Toy” de Bonnie apresentada no segundo filme, integrante do novo grupo de animatronics.'
    },

    'toy-chica': {
        aliases: [
            'toy chica'
        ],
        response:
            'Toy Chica é a versão “Toy” de Chica apresentada no segundo filme e participa dos novos acontecimentos sobrenaturais ligados à Freddy’s.'
    },

    'mangle': {
        aliases: [
            'mangle'
        ],
        response:
            'Mangle é um animatronic apresentado no segundo filme e faz parte do conjunto de personagens que amplia a história das antigas unidades da Freddy’s.'
    },

    'balloon-boy': {
        aliases: [
            'balloon boy',
            'bb'
        ],
        response:
            'Balloon Boy é um personagem clássico dos jogos que também aparece no universo cinematográfico por meio de referências e aparições relacionadas aos mistérios da Freddy’s.'
    }
};

// ---------- Base factual do UNIVERSO DOS JOGOS ----------

function findBestAliasMatch(q, entries) {
    let best = null;
    let bestLength = 0;

    entries.forEach(entry => {
        (entry.aliases || []).forEach(alias => {
            const normalizedAlias = normalize(alias);

            if (
                q.includes(normalizedAlias) &&
                normalizedAlias.length > bestLength
            ) {
                best = entry;
                bestLength = normalizedAlias.length;
            }
        });
    });

    return best;
}

function findGame(q) {
    return findBestAliasMatch(q, gameKnowledge.games || []);
}

function findGameEntity(q) {
    return findBestAliasMatch(
        q,
        Object.entries(gameKnowledge.entities || {})
            .map(([key, value]) => ({ key, ...value }))
    );
}

function findGameTopic(q) {
    return findBestAliasMatch(
        q,
        gameKnowledge.topics || []
    );
}

function isExplicitGameContext(q) {
    return hasAny(q, [
        'nos jogos',
        'no jogo',
        'dos jogos',
        'do jogo',
        'game',
        'games',
        'fnaf 1',
        'fnaf 2',
        'fnaf 3',
        'fnaf 4',
        'sister location',
        'pizzeria simulator',
        'ultimate custom night',
        'help wanted',
        'security breach',
        'ruin',
        'into the pit',
        'secret of the mimic',
        'pizzaplex',
        'fazbears fright',
        'fredbears family diner'
    ]);
}

function isExplicitMovieContext(q) {
    return hasAny(q, [
        'no filme',
        'nos filmes',
        'do filme',
        'dos filmes',
        'filme 1',
        'filme 2',
        'cinema',
        '2023',
        '2025'
    ]);
}

function gameEntityFollowUp(q) {
    const followUps = [
        'e ele',
        'e ela',
        'fala mais',
        'conte mais',
        'o que aconteceu com ele',
        'o que aconteceu com ela',
        'e esse animatronic',
        'e esse personagem'
    ];

    if (
        chatState.lastUniverse !== 'games' ||
        !chatState.lastEntity ||
        !hasAny(q, followUps)
    ) {
        return null;
    }

    const entity = gameKnowledge.entities?.[chatState.lastEntity];

    return entity ? entity.response : null;
}

function answerFromGameKnowledge(q) {
    const game = findGame(q);

    if (game) {
        chatState.lastUniverse = 'games';
        chatState.lastTopic = game.id;

        return game.response;
    }

    const topic = findGameTopic(q);

    if (topic) {
        chatState.lastUniverse = 'games';
        chatState.lastTopic = topic.id;

        return topic.response;
    }

    const entity = findGameEntity(q);

    if (entity) {
        chatState.lastUniverse = 'games';
        chatState.lastEntity = entity.key;
        chatState.lastTopic = 'game-character';

        return entity.response;
    }

    return null;
}

const intents = [
    {
        id: 'help',
        topic: 'help',

        keywords: [
            'ajuda',
            'o que voce sabe',
            'o que sabe responder',
            'assuntos',
            'perguntas',
            'pode responder',
            'comandos'
        ],

        phrases: [
            'o que voce sabe responder',
            'sobre o que posso perguntar',
            'me ajuda'
        ],

        priority: 10,

        response: () =>
            'Posso responder sobre: 🎬 filmes 1 e 2; 🎮 história dos jogos de FNAF 1 até Secret of the Mimic; 🧩 cronologia, Mordida de 83/87 e famílias Afton/Emily; 🤖 clássicos, Withereds, Toys, Puppet, Springtrap, Phantoms, Nightmares, Funtimes, Scraps, Glamrocks e Mimic; 👥 personagens como William, Michael, Elizabeth, Henry, Charlotte, Gregory, Cassie e Vanessa/Vanny; 🍕 cardápio, preços, reservas e vagas do nosso projeto. Também separo fato confirmado de teoria. Tente perguntar “Qual a ordem dos jogos?”, “Quem é Springtrap?”, “O que é o Mimic?” ou “Quais são os Glamrocks?”.'
    },

    {
        id: 'project-disclaimer',
        topic: 'project',

        keywords: [
            'essa pizzaria e real',
            'site oficial',
            'pizzaria oficial',
            'projeto escolar',
            'prototipo'
        ],

        phrases: [
            'essa pizzaria e real',
            'isso existe de verdade',
            'site oficial'
        ],

        priority: 10,

        response: () => projectInfo.projectWarning
    },

    {
        id: 'menu',
        topic: 'menu',

        keywords: [
            'pizza',
            'pizzas',
            'cardapio',
            'menu',
            'sabor',
            'sabores',
            'comer'
        ],

        phrases: [
            'quais pizzas',
            'o que tem no cardapio',
            'qual o cardapio'
        ],

        priority: 7,

        response: () =>
            `Nosso cardápio do projeto tem 5 pizzas: ${projectInfo.menu
                .map(item => `${item.name} (${item.price})`)
                .join(', ')}. Se quiser, pergunte por um sabor específico.`
    },

    {
        id: 'price',
        topic: 'menu',

        keywords: [
            'preco',
            'precos',
            'valor',
            'custa',
            'quanto',
            'barata',
            'cara'
        ],

        phrases: [
            'quanto custa',
            'quais os precos',
            'qual o valor'
        ],

        priority: 8,

        response: () =>
            'As pizzas do protótipo variam de R$ 64,00 a R$ 84,00. A mais barata é a Chica’s Tropicalis (R$ 64,00) e a de maior valor é a Reserva do Chefe (R$ 84,00).'
    },

    {
        id: 'reservation',
        topic: 'project',

        keywords: [
            'reserva',
            'reservar',
            'mesa',
            'agendar',
            'agendamento'
        ],

        phrases: [
            'como reservar',
            'reservar mesa'
        ],

        priority: 8,

        response: () => projectInfo.reservation
    },

    {
        id: 'jobs',
        topic: 'project',

        keywords: [
            'vaga',
            'vagas',
            'emprego',
            'trabalho',
            'trabalhe',
            'curriculo',
            'contratando'
        ],

        phrases: [
            'trabalhe conosco',
            'mandar curriculo'
        ],

        priority: 8,

        response: () => projectInfo.jobs
    },

    {
        id: 'hours',
        topic: 'project',

        keywords: [
            'horario',
            'horarios',
            'abre',
            'fecha',
            'funcionamento'
        ],

        phrases: [
            'que horas abre',
            'que horas fecha'
        ],

        priority: 8,

        response: () => projectInfo.hours
    },

    {
        id: 'address',
        topic: 'project',

        keywords: [
            'endereco',
            'localizacao',
            'onde fica',
            'rua',
            'cidade'
        ],

        phrases: [
            'onde fica',
            'qual o endereco'
        ],

        priority: 8,

        response: () => projectInfo.address
    },

    {
        id: 'movie1-summary',
        topic: 'movie1',

        keywords: [
            'filme 1',
            'primeiro filme',
            'filme de 2023',
            'historia filme',
            'resumo filme'
        ],

        phrases: [
            'resuma o primeiro filme',
            'historia do primeiro filme',
            'o que acontece no primeiro filme'
        ],

        priority: 10,

        response: () =>
            '🎬 Filme 1 (2023) — Mike Schmidt aceita um emprego de segurança noturno na antiga Freddy Fazbear’s Pizza enquanto tenta cuidar da irmã Abby e entender o desaparecimento do irmão Garrett. Ele descobre que Freddy, Bonnie, Chica e Foxy estão ligados aos espíritos de crianças desaparecidas. Vanessa conhece o passado da pizzaria e revela sua ligação familiar com William Afton. Abby se torna essencial para ajudar os animatronics a entender quem os manipulava. É uma história de mistério, família e acontecimentos sobrenaturais, com bastante suspense.'
    },

    {
        id: 'movie2-summary',
        topic: 'movie2',

        keywords: [
            'filme 2',
            'segundo filme',
            'filme de 2025',
            'fnaf 2',
            'five nights at freddys 2'
        ],

        phrases: [
            'resuma o segundo filme',
            'historia do segundo filme',
            'o que acontece no segundo filme'
        ],

        priority: 10,

        response: () =>
            '🎞️ Filme 2 (2025) — A história continua depois dos acontecimentos da primeira Freddy’s. Abby ainda sente falta dos animatronics e sua busca por eles revela segredos mais antigos sobre a origem da franquia. O filme amplia a família Afton, apresenta Henry Emily e novos animatronics, incluindo versões Toy, além de explorar a Marionette e acontecimentos de uma unidade anterior da Freddy’s. Mike e Vanessa voltam a tentar proteger Abby enquanto o passado da pizzaria reaparece.'
    },

    {
        id: 'movie-order',
        topic: 'movies',

        keywords: [
            'ordem',
            'qual assistir primeiro',
            'quantos filmes',
            'filmes'
        ],

        phrases: [
            'ordem dos filmes',
            'quantos filmes tem'
        ],

        priority: 7,

        response: () =>
            'Até o momento, o universo cinematográfico principal tem dois filmes lançados: Five Nights at Freddy’s (2023) e Five Nights at Freddy’s 2 (2025). Para acompanhar a história, assista nessa ordem.'
    },

    {
        id: 'movie-vs-game',
        topic: 'franchise',

        keywords: [
            'jogo',
            'jogos',
            'game',
            'games',
            'diferenca',
            'canon',
            'mesma historia'
        ],

        phrases: [
            'filme e igual ao jogo',
            'qual a diferenca entre filme e jogo',
            'mesmo universo'
        ],

        priority: 9,

        response: () =>
            'Os filmes são baseados na série de jogos de Scott Cawthon, mas não repetem exatamente a mesma cronologia. Eles usam personagens, lugares, conceitos e referências dos games enquanto constroem uma continuidade cinematográfica própria. Por isso, este chatbot prioriza o que foi mostrado ou confirmado nos filmes quando a pergunta for sobre o cinema.'
    },

    {
        id: 'creator-franchise',
        topic: 'production',

        keywords: [
            'quem criou fnaf',
            'criador de fnaf',
            'scott cawthon',
            'criador do jogo',
            'criou five nights'
        ],

        phrases: [
            'quem criou five nights at freddys',
            'quem e scott cawthon'
        ],

        priority: 10,

        response: () =>
            'Five Nights at Freddy’s foi criado por Scott Cawthon. O primeiro jogo foi lançado em 2014. Cawthon também participou diretamente dos filmes como roteirista e produtor.'
    },

    {
        id: 'movie-production',
        topic: 'production',

        keywords: [
            'diretora',
            'diretor',
            'emma tammi',
            'blumhouse',
            'jim henson',
            'animatronics reais',
            'producao'
        ],

        phrases: [
            'quem dirigiu o filme',
            'quem fez os animatronics',
            'quem produziu'
        ],

        priority: 9,

        response: () =>
            'Os dois filmes foram dirigidos por Emma Tammi. Scott Cawthon participa da criação/roteiro e produção, e Jason Blum é produtor pela Blumhouse. Os animatronics físicos dos filmes foram desenvolvidos com o trabalho da Jim Henson’s Creature Shop.'
    },

    {
        id: 'founder-freddys-film',
        topic: 'lore',

        keywords: [
            'fundador',
            'fundou',
            'dono',
            'criador da pizzaria',
            'criou a pizzaria',
            'socio',
            'cofundador'
        ],

        phrases: [
            'quem criou a freddys',
            'quem fundou a pizzaria',
            'quem era o dono'
        ],

        priority: 9,

        response: () =>
            'No universo dos filmes, William Afton é apresentado como fundador/cofundador e figura central da Freddy’s. O segundo filme também apresenta Henry Emily como seu antigo parceiro de negócios na origem da empresa. Isso é diferente da pizzaria deste site, que é um protótipo escolar inspirado no universo de FNAF.'
    },

    {
        id: 'missing-children-safe',
        topic: 'lore',

        keywords: [
            'criancas',
            'desaparecidas',
            'desaparecimento',
            'crime',
            'matou',
            'assassinou',
            'corpos'
        ],

        phrases: [
            'o que aconteceu com as criancas',
            'quem matou as criancas',
            'por que os animatronics sao possuidos'
        ],

        priority: 9,

        response: () =>
            'Nos filmes, William Afton é apontado como responsável pelos crimes e desaparecimentos ligados à Freddy’s. As crianças passam a estar ligadas aos animatronics, o que explica a atividade sobrenatural do local. Para o projeto escolar, o chatbot mantém essa parte resumida e sem detalhes gráficos.'
    },

    {
        id: 'animatronics-general',
        topic: 'animatronics',

        keywords: [
            'animatronic',
            'animatronics',
            'robos',
            'robo',
            'mascotes',
            'banda'
        ],

        phrases: [
            'quem sao os animatronics',
            'quais sao os animatronics',
            'animatronics do filme'
        ],

        priority: 8,

        response: () =>
            'No primeiro filme, os principais animatronics são Freddy Fazbear, Bonnie, Chica, Foxy, Mr. Cupcake e Golden Freddy. O segundo filme amplia o grupo com personagens como Toy Freddy, Toy Bonnie, Toy Chica, Mangle e Marionette, além de outros elementos inspirados nos jogos.'
    },

    {
        id: 'why-move',
        topic: 'animatronics',

        keywords: [
            'por que se mexem',
            'porque se mexem',
            'ganham vida',
            'possuido',
            'possuidos',
            'espiritos',
            'almas'
        ],

        phrases: [
            'por que os animatronics se mexem',
            'por que estao vivos'
        ],

        priority: 9,

        response: () =>
            'No universo dos filmes, a atividade dos animatronics é sobrenatural: eles estão ligados aos espíritos das crianças desaparecidas. No primeiro filme, William Afton consegue influenciá-los até que Abby os ajuda a compreender o que realmente aconteceu.'
    },

    {
        id: 'springlock',
        topic: 'lore',

        keywords: [
            'springlock',
            'spring lock',
            'traje de mola',
            'yellow rabbit',
            'coelho amarelo',
            'spring bonnie'
        ],

        phrases: [
            'o que e springlock',
            'o que e o traje amarelo'
        ],

        priority: 9,

        response: () =>
            'Springlock é o mecanismo dos trajes híbridos mostrados na história. No primeiro filme, Vanessa alerta que esses trajes possuem componentes mecânicos internos perigosos. William Afton usa o traje amarelo associado a Spring Bonnie/Yellow Rabbit.'
    },

    {
        id: 'abby-friends',
        topic: 'relationships',

        keywords: [
            'amigos da abby',
            'amizade',
            'abby e animatronics',
            'gostam da abby'
        ],

        phrases: [
            'por que os animatronics gostam da abby',
            'abby e amiga deles'
        ],

        priority: 8,

        response: () =>
            'Abby consegue criar um vínculo com Freddy, Bonnie, Chica e Foxy porque se aproxima deles como amigos e se comunica por desenhos. Essa relação permite que ela compreenda melhor os espíritos ligados aos animatronics e se torna decisiva na história.'
    },

    {
        id: 'mike-job',
        topic: 'mike',

        keywords: [
            'seguranca',
            'guarda noturno',
            'emprego do mike',
            'trabalho do mike'
        ],

        phrases: [
            'por que mike trabalha na pizzaria',
            'como mike foi parar na freddys'
        ],

        priority: 8,

        response: () =>
            'Mike aceita o emprego de segurança noturno porque precisa de trabalho para sustentar a vida com Abby e manter a guarda da irmã. O trabalho é oferecido por Steve Raglan, identidade usada por William Afton.'
    },

    {
        id: 'vanessa-family',
        topic: 'vanessa',

        keywords: [
            'pai da vanessa',
            'familia da vanessa',
            'filha do william',
            'vanessa filha'
        ],

        phrases: [
            'vanessa e filha de quem',
            'qual a relacao de vanessa e william'
        ],

        priority: 9,

        response: () =>
            'Vanessa é filha de William Afton. Essa revelação explica por que ela conhece tantos detalhes sobre a Freddy’s e por que tem uma relação tão difícil com o passado da pizzaria.'
    },

    {
        id: 'spoiler',
        topic: 'help',

        keywords: [
            'spoiler',
            'sem spoiler'
        ],

        phrases: [
            'tem spoiler',
            'sem spoilers'
        ],

        priority: 9,

        response: ({ q }) =>
            hasPhrase(q, 'sem spoiler')
                ? 'Consigo responder sem spoiler. Pergunte sobre personagens, produção, animatronics ou premissa e vou evitar revelar acontecimentos principais.'
                : 'Sim. As respostas sobre a história podem conter spoilers dos filmes de 2023 e 2025. Se quiser, escreva “sem spoiler” na pergunta.'
    }
];

function findMenuItem(q) {
    return projectInfo.menu.find(
        item => item.aliases.some(alias => hasPhrase(q, alias))
    );
}

function findMovieEntity(q) {
    let best = null;
    let bestLength = 0;

    Object.entries(movieEntities).forEach(([key, entity]) => {
        entity.aliases.forEach(alias => {
            const normalizedAlias = normalize(alias);

            if (
                q.includes(normalizedAlias) &&
                normalizedAlias.length > bestLength
            ) {
                best = {
                    key,
                    ...entity
                };

                bestLength = normalizedAlias.length;
            }
        });
    });

    return best;
}

function scoreIntent(intent, q, words) {
    let score = intent.priority || 0;

    (intent.phrases || []).forEach(phrase => {
        if (hasPhrase(q, phrase)) {
            score += 18;
        }
    });

    (intent.keywords || []).forEach(keyword => {
        const k = normalize(keyword);

        if (q.includes(k)) {
            score += k.includes(' ') ? 8 : 4;
        } else if (fuzzyWordMatch(words, k)) {
            score += 2;
        }
    });

    return score;
}

function detectIntent(question) {
    const q = normalize(question);
    const words = tokenize(question);

    const scored = intents
        .map(intent => ({
            intent,
            score: scoreIntent(intent, q, words)
        }))
        .sort((a, b) => b.score - a.score);

    // Exige algum indício real além da prioridade.
    const top = scored[0];

    if (
        !top ||
        top.score <= (top.intent.priority || 0) + 1
    ) {
        return null;
    }

    return top.intent;
}

function entityFollowUp(q) {
    const followUps = [
        'e ele',
        'e ela',
        'fala mais',
        'conte mais',
        'quem e',
        'o que aconteceu com ele',
        'o que aconteceu com ela'
    ];

    if (chatState.lastUniverse === 'games') {
        return gameEntityFollowUp(q);
    }

    if (
        chatState.lastUniverse !== 'movies' ||
        !chatState.lastEntity ||
        !hasAny(q, followUps)
    ) {
        return null;
    }

    const entity = movieEntities[chatState.lastEntity];

    return entity ? entity.response : null;
}

function generateAIReply(question) {
    const q = normalize(question);

    if (!q) {
        return 'Digite uma pergunta para eu consultar minha base local.';
    }

    // Conversa básica: termos curtos como "oi" precisam ser palavra inteira,
    // senão perguntas como "o que foi a Mordida de 87?" virariam saudação.

    const conversationWords = tokenize(q);

    const isGreeting =
        conversationWords.includes('oi') ||
        conversationWords.includes('ola') ||
        conversationWords.includes('hey') ||
        hasAny(q, [
            'bom dia',
            'boa tarde',
            'boa noite',
            'e ai'
        ]);

    if (isGreeting) {
        return choose([
            'Olá! 👋 Pode perguntar sobre a pizzaria do projeto, os filmes ou a história dos jogos de Five Nights at Freddy’s.',
            'Oi! 🍕🎬🎮 Estou pronto. Quer falar do cardápio, dos filmes, dos jogos ou dos animatronics?',
            'Olá! Helpy na área! Quer começar pela pizzaria, pela lore dos filmes ou pela lore dos jogos?'
        ]);
    }

    if (
        hasAny(q, [
            'obrigado',
            'obrigada',
            'valeu',
            'vlw'
        ])
    ) {
        return 'Por nada! 😄 Se quiser, posso continuar com outra curiosidade da Freddy’s.';
    }

    if (
        hasAny(q, [
            'tchau',
            'ate mais',
            'falou'
        ])
    ) {
        return 'Até mais! 👋 E lembre-se: aqui eu consulto uma base local, então não preciso de internet nem API.';
    }

    const followUp = entityFollowUp(q);

    if (followUp) {
        return followUp;
    }

    // Pizza específica tem prioridade sobre assuntos da franquia quando a pergunta é claramente sobre o cardápio.

    const menuItem = findMenuItem(q);

    if (
        menuItem &&
        hasAny(q, [
            'pizza',
            'sabor',
            'preco',
            'valor',
            'ingrediente',
            'cardapio',
            'nosso',
            'pizzaria'
        ])
    ) {
        chatState.lastTopic = 'menu';
        chatState.lastUniverse = 'project';

        return `${menuItem.name} — ${menuItem.price}. ${menuItem.description}`;
    }

    const explicitGame = isExplicitGameContext(q);
    const explicitMovie = isExplicitMovieContext(q);

    const gameEntity = findGameEntity(q);
    const movieEntity = findMovieEntity(q);

    // Se o usuário especifica jogos, a base dos jogos sempre tem prioridade.

    if (explicitGame && !explicitMovie) {
        const gameAnswer = answerFromGameKnowledge(q);

        if (gameAnswer) {
            return gameAnswer;
        }
    }

    // Personagens exclusivos dos jogos funcionam mesmo sem a palavra “jogo”.

    if (gameEntity && !movieEntity) {
        chatState.lastUniverse = 'games';
        chatState.lastEntity = gameEntity.key;
        chatState.lastTopic = 'game-character';

        return gameEntity.response;
    }

    // Quando o mesmo nome existe em jogos e filmes e a pergunta não escolhe universo,
    // mostramos os dois sem misturar canon.

    if (
        gameEntity &&
        movieEntity &&
        !explicitGame &&
        !explicitMovie
    ) {
        chatState.lastUniverse = null;
        chatState.lastEntity = null;

        return `🎮 NOS JOGOS: ${gameEntity.response.replace(/^🎮\s*/, '')}

🎬 NOS FILMES: ${movieEntity.response}`;
    }

    // Pergunta explicitamente cinematográfica ou personagem do filme.

    if (
        movieEntity &&
        (!explicitGame || explicitMovie) &&
        hasAny(q, [
            'quem',
            'o que',
            'fala',
            'fale',
            'sobre',
            'historia',
            'e',
            ...movieEntity.aliases
        ])
    ) {
        chatState.lastEntity = movieEntity.key;
        chatState.lastTopic = 'character';
        chatState.lastUniverse = 'movies';

        return movieEntity.response;
    }

    // Jogos, tópicos e animatronics podem ser reconhecidos por nome mesmo sem “nos jogos”.

    const gameAnswer = answerFromGameKnowledge(q);

    if (gameAnswer) {
        return gameAnswer;
    }

    const intent = detectIntent(question);

    if (intent) {
        chatState.lastTopic = intent.topic;

        if (
            [
                'movie1',
                'movie2',
                'movies',
                'production',
                'lore',
                'animatronics',
                'relationships',
                'mike',
                'vanessa'
            ].includes(intent.topic)
        ) {
            chatState.lastUniverse = 'movies';
        }

        const result =
            typeof intent.response === 'function'
                ? intent.response({
                    q,
                    question
                })
                : intent.response;

        return result;
    }

    if (
        hasAny(q, [
            'livro',
            'livros',
            'fazbear frights',
            'tales from the pizzaplex'
        ])
    ) {
        return 'Essa pergunta parece ser especificamente sobre os livros. Minha base detalhada desta versão cobre a pizzaria do projeto, os filmes e os jogos. Para não misturar continuidades, ainda não vou transformar detalhes dos livros em fatos dos jogos sem uma base separada.';
    }

    return 'Ainda não tenho uma resposta confiável cadastrada para isso. Para não inventar, posso falar sobre: FNAF 1–4, Sister Location, Pizzeria Simulator, UCN, Help Wanted 1 e 2, Security Breach, Ruin, Into the Pit, Secret of the Mimic, famílias Afton/Emily, Mordidas de 83/87, Springtrap, Puppet, Funtimes, Glamrocks, Mimic, filmes 1 e 2 e também a pizzaria do projeto. Tente usar o nome do jogo, personagem ou animatronic.';
}

function sendSupportMessage(text) {
    if (!text) return;

    addMessage(text, 'user');

    chatState.lastQuestion = text;

    supportInput.value = '';

    const typing = showTyping();
    const reply = generateAIReply(text);

    setTimeout(() => {
        typing.remove();
        addMessage(reply, 'bot');
    }, 280);
}

supportForm.addEventListener('submit', e => {
    e.preventDefault();

    sendSupportMessage(
        supportInput.value.trim()
    );
});