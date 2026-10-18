const A = {
    P: 'Português', E: 'Espanhol', I: 'Inglês', F: 'Francês',
    A: 'Árabe', R: 'Russo', Z: 'Mandarim', D: 'Alemão',
    T: 'Italiano', N: 'Neerlandês', H: 'Hindi', S: 'Suaíli', G: 'Grego'
};

const RAW = `ad|Catalão (românica)|Catalão,E,F
ae|Árabe|A,I,H
af|Persa (dari) e pachto|Dari,Pachto,Uzbeque
ag|Arauaque (extinta)|I
al|Albanês (provável herdeiro do ilírio)|Albanês
am|Armênio|Armênio
ao|Quimbundo e outras línguas bantas|P,Umbundo,Quimbundo,Quicongo
ar|Quíchua, mapuche e guarani|E,Guarani,Quíchua,Mapudungun
at|Alemão (dialetos bávaros)|D
au|Línguas aborígenes (dezenas de milhares de anos)|I
az|Azerbaijano (túrquica)|Azerbaijano,R
ba|Eslavo (servo-croata)|Bósnio,Croata,Sérvio
bb|Arauaque (extinta)|I
bd|Bengali|Bengali,I
be|Neerlandês e alemão|N,F,D
bf|Mooré|F,Mooré,Diúla
bg|Búlgaro|Búlgaro
bh|Árabe|A,I
bi|Quirúndi|Quirúndi,F,S
bj|Fon e iorubá|F,Fon,Iorubá
bn|Malaio|Malaio,I
bo|Quíchua e aimará|E,Quíchua,Aimará,Guarani
br|Línguas tupi-guarani|P,Libras
bs|Lucaio (extinta)|I
bt|Dzongkha|Dzongkha
bw|Línguas san (cliques)|Tswana,I
by|Bielorrusso|Bielorrusso,R
bz|Maia (iucateque e quekchi)|I,E,Crioulo
ca|Línguas indígenas (cree, inuktitut)|I,F
cd|Línguas bantas (quicongo, lingala)|F,Lingala,S,Quicongo
cf|Línguas ubanguianas (sango)|F,Sango
cg|Línguas bantas (quicongo)|F,Lingala,Quicongo
ch|Alemão (alemânico) e romanche|D,F,T,Romanche
ci|Línguas cuá e mandê|F,Diúla
cl|Mapudungun e quíchua|E,Mapudungun
cm|Línguas bantas e chádicas|F,I,Fulfulde
cn|Chinês (cerca de 3.300 anos de registro)|Z,Cantonês,Uigur,Tibetano
co|Línguas chibchas e arauaques|E
cr|Línguas chibchas|E
cu|Taíno (extinta)|E
cv|—|P,Crioulo cabo-verdiano
cy|Grego|G,Turco
cz|Tcheco|Tcheco
de|Alemão|D
dj|Afar e somali (cuxíticas)|F,A,Somali,Afar
dk|Dinamarquês|Dinamarquês
dm|Caribe (kalinago)|I,Crioulo francês
do|Taíno (extinta)|E
dz|Berbere (tamazigue)|A,Tamazigue,F
ec|Quíchua|E,Quíchua
ee|Estoniano|Estoniano
eg|Egípcio antigo (sobrevive como copta litúrgico)|A
er|Tigrínia e tigré|Tigrínia,A,Tigré
es|Basco (anterior ao indo-europeu)|E,Catalão,Basco,Galego
et|Amárico e geez (semíticas)|Amárico,Oromo,Tigrínia
fi|Finlandês e sami|Finlandês,Sueco
fj|Fijiano|I,Fijiano
fm|Línguas micronésias|I,Chuukês
fr|Basco, bretão e occitano|F
ga|Fang e outras línguas bantas|F,Fang
gb|Galês (céltica britônica)|I,Galês,Gaélico escocês
gd|Arauaque (extinta)|I
ge|Georgiano|Georgiano
gh|Línguas acãs|I,Twi,Ewe
gl|Groenlandês (inuit)|Groenlandês,Dinamarquês
gm|Mandinga|I,Mandinga,Wolof
gn|Línguas mandê|F,Fula,Maninka
gq|Línguas bantas|E,F,P,Fang
gr|Grego (cerca de 3.400 anos de registro)|G
gt|Línguas maias (quiché, cakchiquel)|E,Quiché,Cakchiquel
gw|Balanta e outras línguas atlânticas|P,Crioulo,Balanta
gy|Línguas arauaques e caribes|I,Crioulo
hn|Línguas maias e lenca|E
hr|Croata|Croata
ht|Taíno (extinta)|Crioulo haitiano,F
hu|Húngaro|Húngaro
id|Línguas austronésias e papuas|Indonésio,Javanês,Sundanês
ie|Irlandês (gaélica)|I,Irlandês
il|Hebraico (cerca de 3.000 anos)|Hebraico,A
in|Tâmil (entre as línguas dravídicas mais antigas)|H,I,Bengali,Tâmil,Telugo
iq|Aramaico e curdo|A,Curdo
ir|Persa|Persa,Azerbaijano,Curdo
is|Islandês (nórdico antigo)|Islandês
it|Sardo e línguas latinas|T,Sardo
jm|Taíno (extinta)|I,Patoá
jo|Árabe|A
jp|Ainu e japonês|Japonês,Ainu
ke|Línguas cuchíticas e nilóticas|S,I
kg|Quirguiz|Quirguiz,R
kh|Khmer|Khmer
ki|Gilbertês|Gilbertês,I
km|Comoriano|Comoriano,F,A
kn|Caribe (extinta)|I
kp|Coreano|Coreano
kr|Coreano|Coreano
kw|Árabe|A
kz|Cazaque|Cazaque,R
la|Laosiano|Laosiano
lb|Aramaico e árabe|A,F
lc|Caribe (extinta)|I,Crioulo
li|Alemão (alemânico)|D
lk|Cingalês e tâmil|Cingalês,Tâmil
lr|Línguas kru e mandê|I
ls|Sesotho|Sesotho,I
lt|Lituano (báltica, muito conservadora)|Lituano
lu|Luxemburguês|Luxemburguês,F,D
lv|Letão|Letão
ly|Berbere (tamazigue)|A
ma|Berbere (tamazigue)|A,Tamazigue,F
mc|Occitano (monegasco)|F
md|Romeno|Romeno
me|Montenegrino|Montenegrino
mg|Malgaxe|Malgaxe,F
mh|Marshalês|Marshalês,I
mk|Macedônio|Macedônio,Albanês
ml|Línguas mandê (bambara)|F,Bambara
mm|Birmanês|Birmanês
mn|Mongol|Mongol
mr|Berbere e hassania|A
mt|Maltês|Maltês,I
mu|—|Crioulo mauriciano,I,F
mv|Divehi|Divehi
mw|Chichewa|Chichewa,I
mx|Náuatle e línguas maias|E,Náuatle,Maia
my|Línguas orang asli|Malaio,I,Z
mz|Línguas bantas|P,Macua
na|Línguas san (cliques)|I,Afrikaans,Oshiwambo
ne|Hauçá e tuaregue|F,Hauçá,Zarma
ng|Línguas nigero-congolesas|I,Hauçá,Iorubá,Igbo
ni|Línguas chibchas e miskito|E
nl|Frísio|N,Frísio
no|Sami|Norueguês,Sami
np|Nepali e newar|Nepali,Maithili
nr|Nauruano|Nauruano,I
nz|Maori|I,Maori
om|Línguas sul-arábicas (mehri)|A,Mehri
pa|Línguas chibchas|E
pe|Quíchua e aimará|E,Quíchua,Aimará
pg|Línguas papuas|Tok Pisin,I,Hiri motu
ph|Línguas austronésias|Filipino,I
pk|Línguas indo-arianas|Urdu,I,Punjabi
pl|Polonês|Polonês
ps|Árabe e aramaico|A
pr|Taíno (extinta)|E,I
pt|Basco, lusitano e latim|P
pw|Palauano|Palauano,I
py|Guarani|Guarani,E
qa|Árabe|A
ro|Romeno (do latim, com base dácia)|Romeno
rs|Sérvio|Sérvio
ru|Línguas urálicas e túrquicas|R,Tártaro
rw|Quiniaruanda|Quiniaruanda,F,I
sa|Árabe|A
sb|Línguas austronésias|I,Pijin
sc|—|Crioulo seichelense,F,I
sd|Árabe e línguas núbias|A,I
se|Sami e sueco|Sueco
sg|Malaio|I,Z,Malaio,Tâmil
si|Esloveno|Esloveno
sk|Eslovaco|Eslovaco
sl|Mende|I,Krio
sm|Italiano|T
sn|Wolof e sereer|F,Wolof
so|Somali (cuxítica)|Somali,A
sr|Línguas arauaques e caribes|N,Sranan
ss|Dinka e nuer|I
st|Forro (crioulo)|P
sv|Náuatle pipil|E
sy|Aramaico|A
sz|Suázi|I,Suázi
td|Línguas chádicas|F,A
tg|Ewe|F,Ewe
th|Tailandês|Tailandês
tj|Tadjique (persa)|Tadjique,R
tl|Tétum|Tétum,P
tm|Turcomeno|Turcomeno,R
tn|Berbere|A
to|Tonganês|Tonganês,I
tr|Curdo, armênio e aramaico|Turco,Curdo
tt|Caribe (extinta)|I
tv|Tuvaluano|Tuvaluano,I
tw|Línguas formosanas|Z,Taiwanês,Hakka
tz|Hadza e sandawe (cliques)|S,I
ua|Ucraniano|Ucraniano,R
ug|Línguas bantas e nilóticas|I,S,Luganda
us|Línguas indígenas (navajo, cherokee, lakota)|I,E
uy|Charrua (extinta)|E
uz|Uzbeque|Uzbeque,R
va|Latim|T,Latim
vc|Caribe (extinta)|I
ve|Línguas caribes e arauaques|E
vn|Vietnamita|Vietnamita
vu|Línguas austronésias|Bislama,I,F
ws|Samoano|Samoano,I
xk|Albanês|Albanês,Sérvio
ye|Línguas sul-arábicas (mehri, socotri)|A
za|Línguas san (cliques)|I,Zulu,Xhosa,Afrikaans
zm|Línguas bantas|I,Bemba,Nianja
zw|Línguas bantas (shona)|Shona,Ndebele,I
eh|Berbere e hassania|A
hk|Cantonês|Cantonês,I`;

const D = {};

RAW.split('\n').forEach(linha => {
    const [codigo, origem, atuais] = linha.split('|');

    D[codigo] = {
        o: origem,
        a: atuais.split(',').map(x => A[x] || x)
    };
});

function iniciar(svg) {
    const pop = document.getElementById('pop');
    const tip = document.getElementById('tip');

    let regioes;

    try {
        regioes = new Intl.DisplayNames(['pt-BR'], { type: 'region' });
    } catch (e) {}

    const nome = codigo => {
        try {
            return regioes.of(codigo.toUpperCase());
        } catch (e) {
            return codigo.toUpperCase();
        }
    };

    const elementos = {};

    svg.querySelectorAll('.landxx, .circlexx').forEach(elemento => {
        const codigo = [...elemento.classList].find(
            classe => classe.length === 2 && classe !== 'eu' && classe !== 'xx'
        );

        if (codigo) {
            elemento.dataset.c = codigo;
            (elementos[codigo] = elementos[codigo] || []).push(elemento);
        }
    });

    const marcar = (codigo, classe, ativo) => {
        if (elementos[codigo]) {
            elementos[codigo].forEach(elemento => {
                elemento.classList.toggle(classe, Boolean(ativo));
            });
        }
    };

    const codigoDoElemento = elemento => {
        const alvo = elemento.closest?.('[data-c]');
        return alvo?.dataset.c;
    };

    let hover = null;
    let selecionado = null;
    let viewBox = [0, 0, 2754, 1398];
    let arrastando = false;
    let proporcao = 2;
    let distanciaPinch = 0;
    let frame = 0;
    let temporizador = 0;
    let ultimoToque = 0;
    let ultimoX = 0;
    let ultimoY = 0;
    let retangulo = svg.getBoundingClientRect();

    const ponteiros = new Map();

    function desenhar() {
        frame = 0;
        svg.setAttribute('viewBox', viewBox.join(' '));
    }

    function finalizarMovimento() {
        svg.classList.remove('mv');
        retangulo = svg.getBoundingClientRect();
        svg.style.setProperty('--sw', (viewBox[2] / retangulo.width).toFixed(2));
    }

    function atualizar() {
        svg.classList.add('mv');

        if (!frame) {
            frame = requestAnimationFrame(desenhar);
        }

        clearTimeout(temporizador);
        temporizador = setTimeout(finalizarMovimento, 160);
    }

    function limitar() {
        viewBox[2] = Math.min(2754, Math.max(160, viewBox[2]));
        viewBox[3] = viewBox[2] / proporcao;

        viewBox[0] = Math.min(
            2754 - viewBox[2] / 2,
            Math.max(-viewBox[2] / 2, viewBox[0])
        );

        viewBox[1] = Math.min(
            1398 - viewBox[3] / 2,
            Math.max(-viewBox[3] / 2, viewBox[1])
        );

        atualizar();
    }

    function zoom(fator, x = 0.5, y = 0.5) {
        const largura = viewBox[2];
        const altura = viewBox[3];

        viewBox[2] = largura * fator;
        viewBox[3] = altura * fator;
        viewBox[0] += (largura - viewBox[2]) * x;
        viewBox[1] += (altura - viewBox[3]) * y;

        limitar();
    }

    function ajustarMapa() {
        retangulo = svg.getBoundingClientRect();
        proporcao = retangulo.width / retangulo.height;

        let largura;
        let altura;

        if (proporcao < 1.2) {
            largura = 1500;
            altura = largura / proporcao;
        } else {
            altura = 1260;
            largura = altura * proporcao;

            if (largura > 2754) {
                largura = 2754;
                altura = largura / proporcao;
            }
        }

        viewBox = [
            (2754 - largura) / 2,
            Math.min((1260 - altura) / 2, 60),
            largura,
            altura
        ];

        limitar();
    }

    svg.addEventListener('wheel', evento => {
        evento.preventDefault();

        zoom(
            Math.exp(evento.deltaY * 0.0015),
            (evento.clientX - retangulo.left) / retangulo.width,
            (evento.clientY - retangulo.top) / retangulo.height
        );
    }, { passive: false });

    svg.addEventListener('dblclick', evento => {
        zoom(
            0.55,
            (evento.clientX - retangulo.left) / retangulo.width,
            (evento.clientY - retangulo.top) / retangulo.height
        );
    });

    svg.addEventListener('pointerdown', evento => {
        retangulo = svg.getBoundingClientRect();

        ponteiros.set(evento.pointerId, {
            x: evento.clientX,
            y: evento.clientY,
            inicioX: evento.clientX,
            inicioY: evento.clientY
        });

        arrastando = false;
        distanciaPinch = 0;
    });

    function finalizarPonteiro(evento) {
        const ponteiro = ponteiros.get(evento.pointerId);
        ponteiros.delete(evento.pointerId);
        distanciaPinch = 0;

        if (
            ponteiro &&
            evento.type === 'pointerup' &&
            evento.pointerType === 'touch' &&
            !arrastando &&
            !ponteiros.size
        ) {
            const agora = Date.now();
            const distancia = Math.hypot(
                evento.clientX - ultimoX,
                evento.clientY - ultimoY
            );

            if (agora - ultimoToque < 320 && distancia < 30) {
                zoom(
                    0.5,
                    (evento.clientX - retangulo.left) / retangulo.width,
                    (evento.clientY - retangulo.top) / retangulo.height
                );

                ultimoToque = 0;
            } else {
                ultimoToque = agora;
                ultimoX = evento.clientX;
                ultimoY = evento.clientY;
            }
        }
    }

    addEventListener('pointerup', finalizarPonteiro);
    addEventListener('pointercancel', finalizarPonteiro);

    addEventListener('resize', () => {
        retangulo = svg.getBoundingClientRect();
        proporcao = retangulo.width / retangulo.height;
        limitar();
    });

    svg.addEventListener('pointermove', evento => {
        const ponteiro = ponteiros.get(evento.pointerId);

        if (ponteiro) {
            const dx = evento.clientX - ponteiro.x;
            const dy = evento.clientY - ponteiro.y;

            ponteiro.x = evento.clientX;
            ponteiro.y = evento.clientY;

            if (ponteiros.size === 2) {
                const [a, b] = [...ponteiros.values()];
                const distancia = Math.hypot(a.x - b.x, a.y - b.y);

                if (distanciaPinch) {
                    zoom(
                        distanciaPinch / distancia,
                        ((a.x + b.x) / 2 - retangulo.left) / retangulo.width,
                        ((a.y + b.y) / 2 - retangulo.top) / retangulo.height
                    );
                }

                distanciaPinch = distancia;
                arrastando = true;
            } else {
                if (
                    !arrastando &&
                    Math.hypot(
                        evento.clientX - ponteiro.inicioX,
                        evento.clientY - ponteiro.inicioY
                    ) > 8
                ) {
                    arrastando = true;
                }

                if (arrastando) {
                    const escala = viewBox[2] / retangulo.width;

                    viewBox[0] -= dx * escala;
                    viewBox[1] -= dy * escala;

                    limitar();
                }
            }
        }

        if (evento.pointerType !== 'mouse') return;

        const codigo = codigoDoElemento(evento.target);

        if (codigo !== hover) {
            marcar(hover, 'hov', false);
            hover = codigo;
            marcar(codigo, 'hov', true);

            tip.hidden = !codigo;

            if (codigo) {
                tip.textContent = nome(codigo);
            }
        }

        if (codigo) {
            tip.style.left = `${evento.clientX + 12}px`;
            tip.style.top = `${evento.clientY + 12}px`;
        }
    });

    svg.addEventListener('pointerleave', () => {
        marcar(hover, 'hov', false);
        hover = null;
        tip.hidden = true;
    });

    svg.addEventListener('click', evento => {
        if (arrastando) {
            arrastando = false;
            return;
        }

        const codigo = codigoDoElemento(evento.target);

        if (codigo) {
            mostrar(codigo);
        } else {
            esconder();
        }
    });

    function bandeira(codigo) {
        return String.fromCodePoint(
            ...[...codigo.toUpperCase()].map(letra => 127397 + letra.charCodeAt(0))
        );
    }

    function mostrar(codigo) {
        marcar(selecionado, 'sel', false);
        selecionado = codigo;
        marcar(codigo, 'sel', true);

        const dados = D[codigo];

        pop.innerHTML = `
            <button id="x" aria-label="Fechar">×</button>
            <h2>${nome(codigo)} ${bandeira(codigo)}</h2>
            ${
                dados
                    ? `
                        <h3>Língua mais antiga</h3>
                        <p>${
                            dados.o === '—'
                                ? 'Sem população nativa anterior registrada.'
                                : dados.o
                        }</p>
                        <h3>Línguas atuais</h3>
                        <ul>
                            ${dados.a.map(l => `<li>${l}</li>`).join('')}
                        </ul>
                    `
                    : '<p>Ainda sem dados para este território.</p>'
            }
            <small>
                Critério aproximado: língua nativa mais antiga ainda falada ou,
                se extinta, a última conhecida.
            </small>
        `;

        pop.hidden = false;
        document.getElementById('x').onclick = esconder;
    }

    function esconder() {
        marcar(selecionado, 'sel', false);
        selecionado = null;
        pop.hidden = true;
    }

    addEventListener('keydown', evento => {
        if (evento.key === 'Escape') {
            esconder();
        }
    });

    document.getElementById('zi').onclick = () => zoom(0.6);
    document.getElementById('zo').onclick = () => zoom(1.6);
    document.getElementById('zr').onclick = ajustarMapa;

    ajustarMapa();
}

fetch('imagem.1/BlankMap-World.svg')
    .then(resposta => {
        if (!resposta.ok) {
            throw new Error('Não foi possível carregar o mapa.');
        }

        return resposta.text();
    })
    .then(texto => {
        const documento = new DOMParser().parseFromString(texto, 'image/svg+xml');
        const svg = document.importNode(documento.documentElement, true);

        svg.querySelectorAll('title').forEach(elemento => elemento.remove());

        svg.removeAttribute('width');
        svg.removeAttribute('height');
        svg.setAttribute('id', 'map');
        svg.setAttribute('viewBox', '0 0 2754 1398');

        document.getElementById('stage').prepend(svg);
        iniciar(svg);
    })
    .catch(() => {
        document.getElementById('stage').textContent =
            'Não consegui carregar o BlankMap-World.svg. Deixe o arquivo na mesma pasta do index.html e abra por um servidor (ex.: GitHub Pages).';
    });