const nose = document.getElementById('freddy-nose');
const honk = document.getElementById('honk-sound'); 
const music = document.getElementById('ambient-music');
const camBlip = document.getElementById('cam-blip');
const clickSound = document.getElementById('click-sound');
const viewport = document.getElementById('viewport');
const formPedido = document.getElementById('form-pedido');
const formVagas = document.getElementById('form-vagas');

music.volume = 0.15;
clickSound.volume = 0.0;

window.addEventListener('click', () => {
    music.play().catch(() => {});
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
});

formPedido.addEventListener('submit', (e) => {
    e.preventDefault(); 
    document.getElementById('modal-contrato').classList.remove('active');
    formPedido.reset();
    alert('Sua solicitação de reserva foi enviada! Entraremos em contato via WhatsApp.');
});

formVagas.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('modal-vagas').classList.remove('active');
    formVagas.reset();
    alert('Currículo cadastrado em nosso banco de talentos. Obrigado pelo interesse!');
});

nose.addEventListener('click', (e) => {
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

btnPedido.addEventListener('click', () => { modalContrato.classList.add('active'); });
fecharContrato.addEventListener('click', () => modalContrato.classList.remove('active'));

btnVagas.addEventListener('click', () => { modalVagas.classList.add('active'); });
fecharVagas.addEventListener('click', () => modalVagas.classList.remove('active'));

const tabletTrigger = document.getElementById('tablet-trigger');
const tablet = document.getElementById('tablet');
const mainMenu = document.getElementById('main-menu');

tabletTrigger.addEventListener('click', () => {
    tablet.classList.toggle('open');
    mainMenu.classList.toggle('blur-menu');
    
    camBlip.currentTime = 0;
    camBlip.play().catch(() => {});

    if(tablet.classList.contains('open')) {
        tabletTrigger.querySelector('.flip-icon').innerText = "▲ FECHAR CARDÁPIO ▲";
    } else {
        tabletTrigger.querySelector('.flip-icon').innerText = "▼ VER CARDÁPIO & AMBIENTES ▼";
    }
});

const camButtons = document.querySelectorAll('.cam-btn');
const camTag = document.getElementById('cam-tag');
const camFeed = document.getElementById('cam-feed');

// NOVO CARDÁPIO: Pizzas Artesanais e Sofisticadas com Toques de FNAF
const cardapioDados = {
    1: { 
        title: "FAZBEAR PRESTIGE (PEPPERONI & DIJON)", 
        desc: "Massa de fermentação natural de 48h, blend especial de queijos artesanais, pepperoni premium defumado na lenha de macieira e gotas de mostarda Dijon em grãos. A assinatura da casa.", 
        price: "R$ 68,90" 
    },
    2: { 
        title: "CHICA'S TROPICALIS (FRANGO DE DEFUMADO & ALHO PORÓ)", 
        desc: "Peito de frango cozido lentamente e desfiado, Catupiry original maçaricado, alho-poró crisp e raspas de limão siciliano sobre molho de tomates italianos San Marzano.", 
        price: "R$ 64,00" 
    },
    3: { 
        title: "THE PIRATE COVE (CALABRESA ARTESANAL & GELEIA)", 
        desc: "Calabresa artesanal defumada fatiada fina, cebola caramelizada no whisky e um toque sutil de geleia de pimenta defumada. Uma combinação robusta e agridoce para os destemidos.", 
        price: "R$ 72,50" 
    },
    4: { 
        title: "BONNIE'S MELODY (QUATRO QUEIJOS NOBRES)", 
        desc: "Uma harmoniosa sinfonia de queijos selecionados: Mussarela premium, Provolone defumado, Gorgonzola Dolce e lascas de Parmesão da Mantiqueira, finalizada com mel trufado.", 
        price: "R$ 69,90" 
    },
    5: { 
        title: "RESERVA DO CHEFE (TRUFAS NEGRAS)", 
        desc: "Uma experiência misteriosa e intensa. Base de cogumelos frescos salteados no azeite de trufas negras, queijo fior di latte e finalizada com rúcula selvagem e fios de redução balsâmica.", 
        price: "R$ 84,00" 
    }
};

camButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        camButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        camBlip.currentTime = 0;
        camBlip.play().catch(() => {});

        const camNum = btn.getAttribute('data-cam');
        camTag.innerText = btn.getAttribute('data-tag');
        
        camFeed.style.opacity = '0.3';
        setTimeout(() => {
            camFeed.style.opacity = '1';
            camFeed.innerHTML = `
                <div class="pizza-card">
                    <h3>${cardapioDados[camNum].title}</h3>
                    <p>${cardapioDados[camNum].desc}</p>
                    <span class="pizza-price">${cardapioDados[camNum].price}</span>
                </div>
            `;
        }, 80);
    });
});
