# Guia de Git, Commits, Branch e Pull Request

Guia rápido para trabalhar com Git 

## Git básico

### Iniciar o Git


* `git init` → inicia o Git
* `git status` → verifica alterações
* `git add .` → prepara os arquivos
* `git commit` → registra as alterações
* `git pull` →  Baixa e junta as atualizações do repositório remoto para a sua máquina
* `git fetch` → baixa os commits, arquivos e referências mais recentes de um repositório remoto para o seu repositório local, sem alterar ou mesclar nada no seu código de trabalho atual

---

# Conventional Commits

Use commits padronizados para manter o histórico do projeto organizado.

### Estrutura

```text
tipo(escopo): descrição
```

### Exemplos

```text
feat(profile): adiciona histórico de pedidos
fix(login): corrige erro no botão entrar
docs(readme): atualiza instruções
refactor(api): reorganiza funções
style(header): ajusta alinhamento do menu
test(login): adiciona teste de autenticação
```

## Principais tipos

| Tipo       | Quando usar                |
| ---------- | -------------------------- |
| `feat`     | Nova funcionalidade        |
| `fix`      | Correção de erro           |
| `docs`     | Documentação               |
| `style`    | Formatação ou aparência    |
| `refactor` | Melhoria interna do código |
| `test`     | Testes                     |
| `chore`    | Manutenção                 |
| `perf`     | Desempenho                 |
| `build`    | Build ou compilação        |
| `ci`       | Integração contínua        |

## Escopo

O escopo indica a parte do projeto afetada.

```text
fix(login): corrige erro no botão entrar
    ↓       ↓
   tipo   escopo
```

* `fix` → tipo da alteração
* `login` → área afetada
* `corrige erro no botão entrar` → descrição

## Breaking Change

Use `!` quando uma alteração quebra a compatibilidade com versões anteriores.

```text
feat(api)!: renomeia userName para fullName
```

O `!` indica uma alteração que pode exigir mudanças em outras partes do sistema.

## Boas práticas

* Seja específico.
* Use verbos no presente.
* Faça commits pequenos.
* Um commit deve representar uma alteração.
* Evite mensagens genéricas como `arrumei tudo`.
* Pense em quem precisará entender o histórico futuramente.



**Prefira:**

```text
fix(pagamento): corrige cálculo do frete
```

## Versionamento Semântico

| Alteração       | Impacto |
| --------------- | ------- |
| `fix`           | PATCH   |
| `feat`          | MINOR   |
| Breaking Change | MAJOR   |

Exemplo:

```text
1.2.0 + fix → 1.2.1
1.2.0 + feat → 1.3.0
1.2.0 + breaking change → 2.0.0
```

---

# Branch

Use branches para trabalhar em funcionalidades ou alterações sem modificar diretamente a `main`.

### Criar uma branch

```bash
git checkout -b minha-branch
git branch
```

* `git checkout -b` → cria e entra em uma nova branch
* `git branch` → mostra as branches existentes
* `*` → indica a branch atual

### Salvar alterações na branch

Depois de fazer as alterações:

```bash
git add .
git commit -m "feat: adiciona nova funcionalidade"
```

---

# GitHub

### Conectar ao repositório

```bash
git remote add origin LINK
git branch -M main
git push -u origin main
```

### Enviar uma branch

```bash
git checkout minha-branch
git push -u origin minha-branch
```

---

# Pull Request

Depois de enviar a branch para o GitHub:

1. Acesse **Pull requests**.
2. Clique em **New pull request**.
3. Selecione:

   * **Base:** `main`
   * **Compare:** `minha-branch`
4. Clique em **Create pull request**.
5. Após a revisão, faça o **Merge**.

O Pull Request permite revisar as alterações antes de juntá-las ao projeto principal.

---

# Atualizar o projeto

Antes de continuar trabalhando, atualize sua `main`:

```bash
git checkout main
git pull origin main
```

* `git checkout main` → entra na branch principal
* `git pull origin main` → baixa as alterações mais recentes do GitHub

  

# Guia de Organização do Projeto

Este guia mostra onde colocar cada arquivo e para que serve cada parte do projeto.

---

# Estrutura

```text
FAZBEAR-S-PIZZA-PLACE/
│
├── assets/
│   ├── audio/
│   └── imagem/
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── index.html
└── README.md
```

---

# `index.html`

Página principal do projeto.

Responsável pela estrutura e conteúdo da página.

---

# `css/`

Pasta destinada aos arquivos de estilo do projeto.

Use para:

* Cores
* Fontes
* Tamanhos
* Espaçamentos
* Posicionamento
* Animações
* Responsividade

Arquivo principal:

```text
css/style.css
```

---

# `js/`

Pasta destinada aos arquivos JavaScript.

Use para:

* Botões
* Eventos
* Interações
* Funções
* Animações
* Sons
* Comportamentos da página

Arquivo principal:

```text
js/script.js
```

---

# `assets/`

Pasta destinada aos arquivos utilizados pelo projeto.

```text
assets/
├── audio/
└── imagem/
```

---

# `assets/audio/`

Coloque aqui todos os arquivos de áudio do projeto.

Exemplos de arquivos:

```text
musica.mp3
buzina.mp3
efeito.wav
```

Formatos recomendados:

```text
.mp3
.wav
.ogg
```

---

# `assets/imagem/`

Coloque aqui todas as imagens e GIFs utilizados no projeto.

Exemplos:

```text
freddy.gif
cam1.gif
fnaf.telainicial.gif
```

Formatos comuns:

```text
.png
.jpg
.jpeg
.gif
.webp
```

---

# `README.md`

Arquivo de documentação do projeto.

Pode conter:

* Informações do projeto
* Guias
* Organização dos arquivos
* Regras da equipe
* Instruções
* Informações importantes

---

# Caminhos

Os caminhos dependem da pasta onde o arquivo está localizado.

```text
index.html
│
├── css/style.css
├── js/script.js
├── assets/imagem/
└── assets/audio/
```

### `./`

Representa a pasta atual.

### `../`

Volta uma pasta.

Isso é importante principalmente nos arquivos que estão dentro de `css/` ou `js/`.

---

# Onde colocar cada coisa?

| O que você está fazendo | Onde colocar     |
| ----------------------- | ---------------- |
| Estrutura da página     | `index.html`     |
| Cores e aparência       | `css/`           |
| Funções e interações    | `js/`            |
| Imagens                 | `assets/imagem/` |
| GIFs                    | `assets/imagem/` |
| Música                  | `assets/audio/`  |
| Efeitos sonoros         | `assets/audio/`  |
| Documentação            | `README.md`      |

---

# Regra rápida

```text
HTML          → index.html
CSS           → css/
JavaScript    → js/
Imagens/GIFs  → assets/imagem/
Áudios        → assets/audio/
Documentação  → README.md
```

**Não misture arquivos.**

Cada arquivo deve ficar na pasta correspondente.

TESTE git

