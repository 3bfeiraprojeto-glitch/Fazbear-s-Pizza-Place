# FAZBEAR'S PIZZA PLACE

## Guia de Organização do Projeto e Comandos Git

Este documento tem como objetivo orientar os integrantes da equipe sobre a organização do projeto, os locais corretos para adicionar arquivos e a utilização dos principais comandos do Git.

---

# 1. Estrutura do projeto

A estrutura atual do projeto é:

```text
FAZBEAR-S-PIZZA-PLACE/
│
├── assets/
│   │
│   ├── audio/
│   │   ├── abrircamera.mp3
│   │   ├── buzina.mp3
│   │   ├── ganhamo.mp3
│   │   └── musica.mp3
│   │
│   └── imagem/
│       ├── cam1.gif (1).gif
│       ├── fnaf.telainicial.gif
│       └── freddy.gif
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── index.html
│
└── README.md
```

Cada pasta possui uma função específica. Evite colocar arquivos fora de suas respectivas pastas.

---

# 2. Pasta `assets/`

A pasta `assets` é destinada aos arquivos utilizados pelo site que não são diretamente código.

Dentro dela existem categorias para cada tipo de arquivo.

```text
assets/
├── audio/
└── imagem/
```

## `assets/audio/`

Essa pasta deve conter os arquivos de áudio utilizados pelo site.

Exemplos:

```text
assets/audio/abrircamera.mp3
assets/audio/buzina.mp3
assets/audio/ganhamo.mp3
assets/audio/musica.mp3
```

Novos arquivos de áudio devem ser colocados dentro dessa pasta.

Exemplo:

```text
assets/audio/novo-som.mp3
```

Não coloque arquivos `.mp3` diretamente na raiz do projeto.

Errado:

```text
FAZBEAR-S-PIZZA-PLACE/
├── musica.mp3
```

Correto:

```text
FAZBEAR-S-PIZZA-PLACE/
└── assets/
    └── audio/
        └── musica.mp3
```

---

## `assets/imagem/`

Essa pasta deve conter as imagens utilizadas pelo site.

Exemplos:

```text
assets/imagem/fnaf.telainicial.gif
assets/imagem/freddy.gif
```

Novas imagens devem ser adicionadas nessa pasta.

Exemplo:

```text
assets/imagem/bonnie.gif
assets/imagem/chica.png
assets/imagem/background.jpg
```

Evite colocar imagens diretamente na raiz do projeto.

---

# 3. Pasta `css/`

A pasta `css` contém os arquivos responsáveis pela aparência do site.

Atualmente:

```text
css/
└── style.css
```

O arquivo `style.css` deve conter as regras de estilo da página, como:

* Cores
* Fontes
* Tamanhos
* Espaçamentos
* Posicionamento
* Animações
* Responsividade
* Efeitos visuais

Exemplo:

```text
css/style.css
```

Caso futuramente seja necessário separar os estilos, novos arquivos CSS devem continuar dentro da pasta `css`.

Exemplo:

```text
css/
├── style.css
├── menu.css
└── animacoes.css
```

---

# 4. Pasta `js/`

A pasta `js` contém os arquivos JavaScript responsáveis pela lógica e interações do site.

Atualmente:

```text
js/
└── script.js
```

O arquivo `script.js` pode conter funcionalidades como:

* Botões
* Eventos de clique
* Sons
* Animações controladas por JavaScript
* Alteração de elementos HTML
* Interações com o usuário
* Outras funcionalidades do site

Novos arquivos JavaScript devem ser colocados dentro da pasta `js`.

Exemplo:

```text
js/
├── script.js
├── camera.js
└── menu.js
```

---

# 5. Arquivo `index.html`

O `index.html` é a página principal do projeto.

Ele é responsável pela estrutura HTML da página.

Exemplo de organização:

```text
index.html
```

O HTML deve ser utilizado para estruturar o conteúdo.

A aparência deve ficar no CSS:

```text
css/style.css
```

E as funcionalidades devem ficar no JavaScript:

```text
js/script.js
```

Evite colocar grandes quantidades de CSS ou JavaScript diretamente dentro do HTML se o código puder ser separado nos arquivos correspondentes.

---

# 6. Como fazer os caminhos dos arquivos

Uma das partes mais importantes da organização é utilizar o caminho correto para acessar imagens, áudios, CSS e JavaScript.

O caminho depende da localização do arquivo que está tentando acessar.

---

## 6.1 Caminho do HTML para o CSS

O `index.html` está na raiz do projeto:

```text
FAZBEAR-S-PIZZA-PLACE/
├── css/
│   └── style.css
└── index.html
```

Para acessar o CSS:

```html
<link rel="stylesheet" href="./css/style.css">
```

O `./` significa que estamos começando na pasta atual.

---

# 7. Caminho do HTML para o JavaScript

O mesmo princípio é utilizado para o JavaScript.

```text
FAZBEAR-S-PIZZA-PLACE/
├── js/
│   └── script.js
└── index.html
```

Use:

```html
<script src="./js/script.js"></script>
```

---

# 8. Caminho do HTML para uma imagem

Supondo que exista:

```text
assets/
└── imagem/
    └── freddy.gif
```

O caminho a partir do `index.html` será:

```html
<img src="./assets/imagem/freddy.gif">
```

Outro exemplo:

```html
<img src="./assets/imagem/fnaf.telainicial.gif">
```

---

# 9. Caminho do HTML para um áudio

Para acessar:

```text
assets/
└── audio/
    └── musica.mp3
```

Use:

```html
<audio src="./assets/audio/musica.mp3"></audio>
```

Ou, utilizando JavaScript:

```javascript
const musica = new Audio("./assets/audio/musica.mp3");
```

---

# 10. O que significa `./`?

O:

```text
./
```

significa "a partir da pasta atual".

Como o `index.html` está na raiz:

```text
FAZBEAR-S-PIZZA-PLACE/
└── index.html
```

Podemos acessar:

```text
./css/style.css
./js/script.js
./assets/imagem/freddy.gif
./assets/audio/musica.mp3
```

---

# 11. O que significa `../`?

O:

```text
../
```

significa voltar uma pasta.

Por exemplo, imagine que exista:

```text
FAZBEAR-S-PIZZA-PLACE/
├── css/
│   └── style.css
└── assets/
    └── imagem/
        └── freddy.gif
```

Se o `style.css` precisar acessar a imagem `freddy.gif`, ele está dentro de:

```text
css/
```

Para voltar para a raiz:

```text
../
```

Depois podemos entrar em:

```text
assets/imagem/
```

Então o caminho será:

```css
background-image: url("../assets/imagem/freddy.gif");
```

Resumo:

```text
./   = pasta atual
../  = volta uma pasta
```

---

# 12. Cuidado com os caminhos

Os caminhos precisam corresponder exatamente à estrutura das pastas.

Por exemplo, se o arquivo estiver em:

```text
assets/imagem/freddy.gif
```

Não utilize:

```html
<img src="./imagem/freddy.gif">
```

O caminho correto é:

```html
<img src="./assets/imagem/freddy.gif">
```

Também é importante prestar atenção ao nome do arquivo.

Por exemplo:

```text
freddy.gif
```

é diferente de:

```text
Freddy.gif
```

Dependendo do ambiente onde o projeto estiver sendo executado, diferenças de maiúsculas e minúsculas podem causar problemas.

---

# 13. Regras para nomes de arquivos

Sempre que possível, utilize nomes simples e organizados.

Prefira:

```text
freddy.gif
camera.js
menu.css
musica.mp3
```

Evite:

```text
Imagem Nova Final 2.gif
arquivo novo (1).js
teste FINAL REAL.css
```

Recomenda-se utilizar:

* Letras minúsculas
* Números quando necessário
* Hífen `-` ou underscore `_`
* Sem espaços
* Sem caracteres especiais

Exemplo recomendado:

```text
camera-principal.gif
efeito-porta.mp3
menu-principal.css
```

---

# 14. Comandos básicos do Git

## Verificar o estado do projeto

```bash
git status
```

Mostra quais arquivos foram modificados, adicionados ou removidos.

---

## Baixar as alterações do GitHub

Antes de começar a trabalhar, é recomendado atualizar seu projeto:

```bash
git pull
```

Isso baixa as alterações que outras pessoas enviaram para o repositório.

---

## Adicionar alterações

Para adicionar todos os arquivos modificados:

```bash
git add .
```

Para adicionar apenas um arquivo:

```bash
git add index.html
```

---

# 15. Commit

Depois de adicionar os arquivos:

```bash
git commit -m "mensagem"
```

Exemplo:

```bash
git commit -m "feat: adicionar câmera de segurança"
```

A mensagem deve explicar de forma curta o que foi alterado.

---

# 16. Tipos de commit

Utilize os prefixos conforme o tipo de alteração.

### `feat`

Utilizado para uma nova funcionalidade.

```bash
git commit -m "feat: adicionar sistema de câmeras"
```

### `fix`

Utilizado para corrigir um problema.

```bash
git commit -m "fix: corrigir caminho das imagens"
```

### `refactor`

Utilizado para reorganizar ou melhorar o código sem adicionar uma nova funcionalidade.

```bash
git commit -m "refactor: reorganizar código do script"
```

### `style`

Utilizado para alterações visuais ou de formatação que não mudam a lógica.

```bash
git commit -m "style: ajustar layout da página"
```

### `docs`

Utilizado para documentação.

```bash
git commit -m "docs: atualizar README"
```

### `chore`

Utilizado para tarefas de manutenção.

```bash
git commit -m "chore: organizar arquivos do projeto"
```

---

# 17. Enviar alterações para o GitHub

Depois do commit:

```bash
git push
```

Exemplo completo:

```bash
git add .
git commit -m "feat: adicionar nova animação"
git push
```

---

# 18. Trabalhando com branches

Para criar uma nova branch:

```bash
git branch nome-da-branch
```

Para entrar nela:

```bash
git switch nome-da-branch
```

Também é possível criar e entrar na branch diretamente:

```bash
git switch -c nome-da-branch
```

Exemplo:

```bash
git switch -c feature-camera
```

Depois das alterações:

```bash
git add .
git commit -m "feat: adicionar sistema de câmera"
git push -u origin feature-camera
```

---

# 19. Fluxo recomendado para a equipe

Antes de começar:

```bash
git pull
```

Depois faça suas alterações.

Quando terminar:

```bash
git status
git add .
git commit -m "tipo: descrição"
git push
```

Exemplo:

```bash
git pull
```

```text
Fazer alterações no projeto
```

```bash
git status
git add .
git commit -m "feat: adicionar efeito sonoro"
git push
```

---

# 20. Onde colocar cada arquivo?

| Tipo de arquivo | Pasta              |
| --------------- | ------------------ |
| HTML principal  | Raiz               |
| CSS             | `css/`             |
| JavaScript      | `js/`              |
| Imagens         | `assets/imagem/`   |
| Áudios          | `assets/audio/`    |
| Documentação    | Raiz / `README.md` |

Exemplo:

```text
FAZBEAR-S-PIZZA-PLACE/
│
├── assets/
│   ├── audio/
│   │   └── sons.mp3
│   │
│   └── imagem/
│       └── personagem.gif
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── index.html
│
└── README.md
```

---

# 21. Regra principal

Antes de adicionar qualquer arquivo ao projeto, verifique qual é a função dele.

```text
HTML       → raiz
CSS        → css/
JavaScript → js/
Imagens    → assets/imagem/
Áudios     → assets/audio/
Documentação → README.md
```

A organização correta dos arquivos facilita o trabalho de toda a equipe, evita caminhos quebrados e torna o projeto mais fácil de manter.

**Mantenha a estrutura organizada e não mova arquivos de outras pastas sem necessidade.**
