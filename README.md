# Guia de Git, Commits, Branch e Pull Request

Guia rápido para trabalhar com Git e GitHub no projeto.

---

# Git básico

### Iniciar o Git

* `git init` → inicia o Git
* `git status` → verifica alterações
* `git add .` → prepara os arquivos
* `git commit` → registra as alterações
* `git pull` → baixa e junta as atualizações do repositório remoto
* `git fetch` → baixa informações do repositório remoto sem alterar os arquivos atuais

---

# Conventional Commits

Use commits padronizados para manter o histórico do projeto organizado.

## Estrutura

`tipo(escopo): descrição`

## Exemplos

`feat(profile): adiciona histórico de pedidos`

`fix(login): corrige erro no botão entrar`

`docs(readme): atualiza instruções`

`refactor(api): reorganiza funções`

`style(header): ajusta alinhamento do menu`

`test(login): adiciona teste de autenticação`

## Principais tipos

| Tipo | Quando usar |
|------|-------------|
| `feat` | Nova funcionalidade |
| `fix` | Correção de erro |
| `docs` | Documentação |
| `style` | Formatação ou aparência |
| `refactor` | Melhoria interna do código |
| `test` | Testes |
| `chore` | Manutenção |
| `perf` | Desempenho |
| `build` | Build ou compilação |
| `ci` | Integração contínua |

## Escopo

O escopo indica a parte do projeto afetada.

`fix(login): corrige erro no botão entrar`

* `fix` → tipo da alteração
* `login` → área afetada
* `corrige erro no botão entrar` → descrição

## Breaking Change

Use `!` quando uma alteração quebra a compatibilidade com versões anteriores.

`feat(api)!: renomeia userName para fullName`

O `!` indica uma alteração que pode exigir mudanças em outras partes do sistema.

## Boas práticas para commits

* Seja específico.
* Use verbos no presente.
* Faça commits pequenos.
* Um commit deve representar uma alteração.
* Evite mensagens genéricas como `arrumei tudo`.
* Pense em quem precisará entender o histórico futuramente.

Prefira:

`fix(pagamento): corrige cálculo do frete`

---

# Versionamento Semântico

| Alteração | Impacto |
|-----------|---------|
| `fix` | PATCH |
| `feat` | MINOR |
| Breaking Change | MAJOR |

Exemplo:

`1.2.0 + fix → 1.2.1`

`1.2.0 + feat → 1.3.0`

`1.2.0 + breaking change → 2.0.0`

---

# Branches do Projeto

O projeto possui branches separadas para cada área da equipe.

```text
main
├── front-end
├── back-end
├── inteligência-artificial
└── versionamento
```

## `main`

A `main` é a branch principal do projeto.

As alterações importantes e aprovadas devem ficar nela.

**Não faça alterações diretamente na `main`.**

---

## `front-end`

Branch destinada ao desenvolvimento do Front-end.

Use para trabalhar com:

* HTML
* CSS
* JavaScript
* Interface
* Responsividade

---

## `back-end`

Branch destinada ao desenvolvimento do Back-end.

Use para trabalhar com:

* Servidor
* APIs
* Banco de dados
* Lógica do sistema

---

## `inteligência-artificial`

Branch destinada às funcionalidades relacionadas à Inteligência Artificial.

---

## `versionamento`

Branch utilizada pela pessoa responsável pelo versionamento e revisão do código.

---

# Como entrar na sua Branch

## 1. Verificar as branches

Abra o terminal no VS Code e execute:

`git branch`

O resultado pode ser parecido com:

```text
  back-end
  front-end
  main
* versionamento
```

O símbolo `*` indica a branch em que você está trabalhando.

---

## 2. Entrar na sua branch

### Front-end

`git checkout front-end`

### Back-end

`git checkout back-end`

### Inteligência Artificial

`git checkout inteligência-artificial`

### Versionamento

`git checkout versionamento`

### Main

`git checkout main`

---

# Antes de começar a trabalhar

Antes de alterar qualquer arquivo, entre na sua branch e atualize o projeto.

Exemplo para o Front-end:

`git checkout front-end`

`git pull origin front-end`

Exemplo para o Back-end:

`git checkout back-end`

`git pull origin back-end`

Isso ajuda a garantir que você está trabalhando na versão mais recente da sua branch.

---

# Como salvar suas alterações

Depois de realizar suas alterações:

## 1. Verificar o que foi alterado

`git status`

## 2. Adicionar os arquivos

`git add .`

## 3. Criar o commit

`git commit -m "feat: adicionar nova funcionalidade"`

## 4. Enviar para o GitHub

`git push`

---

# Como criar um Pull Request

Depois de enviar suas alterações para o GitHub:

## 1. Acesse o GitHub

Entre no repositório pelo navegador.

## 2. Vá em Pull requests

Clique em:

`Pull requests`

Depois:

`New pull request`

## 3. Escolha as branches

Selecione:

`Base: versionamento`

`Compare: sua-branch`

Exemplo para o Front-end:

```text
front-end
    ↓
Pull Request
    ↓
versionamento
```

Exemplo para o Back-end:

```text
back-end
    ↓
Pull Request
    ↓
versionamento
```

## 4. Crie o Pull Request

Clique em:

`Create pull request`

Explique resumidamente o que foi alterado.

---

# Revisão do Pull Request

A pessoa responsável pelo versionamento irá revisar as alterações.

Existem duas possibilidades.

## Aprovar

Se o código estiver correto:

`Approve`

O Pull Request poderá continuar para o processo de merge.

---

## Solicitar alterações

Se existirem problemas:

`Request changes`

A pessoa responsável pelo desenvolvimento deverá corrigir os problemas.

Depois de corrigir:

`git add .`

`git commit -m "fix: corrigir alterações solicitadas"`

`git push`

O Pull Request será atualizado automaticamente.

Não é necessário criar outro Pull Request.

---

# Como funciona o Merge

O fluxo do projeto funciona assim:

```text
Desenvolvedor
      ↓
Trabalha na sua branch
      ↓
Faz commit
      ↓
git push
      ↓
Cria Pull Request
      ↓
versionamento
      ↓
Revisão
      ↓
┌─────────────────┐
│ Approve         │
│       ou        │
│ Request changes │
└─────────────────┘
      ↓
Se aprovado
      ↓
Merge
      ↓
versionamento
```

Depois que as alterações forem revisadas e organizadas:

```text
versionamento
      ↓
Pull Request
      ↓
main
```

Assim, a `main` recebe apenas alterações que passaram pela revisão.

---

# Fluxo completo

```text
front-end
    │
    ├── Faz alterações
    ├── Commit
    ├── Push
    │
    ▼
Pull Request
    │
    ▼
versionamento
    │
    ▼
Revisão
    │
    ├── Request changes
    │         │
    │         ▼
    │      Corrigir
    │         │
    │         ▼
    │      Novo push
    │
    └── Approve
          │
          ▼
        Merge
          │
          ▼
     versionamento
          │
          ▼
     Pull Request
          │
          ▼
         main
```

---

# Atualizar o projeto

Antes de continuar trabalhando, atualize sua branch.

Exemplo:

`git checkout front-end`

`git pull origin front-end`

Para atualizar a `main`:

`git checkout main`

`git pull origin main`

---

# Boas práticas com Git

* Não faça alterações diretamente na `main`.
* Trabalhe sempre na branch da sua área.
* Antes de começar, use `git pull`.
* Verifique suas alterações com `git status`.
* Faça commits pequenos e organizados.
* Use Conventional Commits.
* Não use mensagens como `teste`, `atualização` ou `arrumei`.
* Explique claramente o que foi alterado.
* Revise suas alterações antes do commit.
* Resolva os problemas solicitados no Pull Request.
* Não faça merge sem seguir o processo de revisão.

---

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

`css/style.css`

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

`js/script.js`

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

Exemplos:

`musica.mp3`

`buzina.mp3`

`efeito.wav`

Formatos recomendados:

`.mp3`

`.wav`

`.ogg`

---

# `assets/imagem/`

Coloque aqui todas as imagens e GIFs utilizados no projeto.

Exemplos:

`freddy.gif`

`cam1.gif`

`fnaf.telainicial.gif`

Formatos comuns:

`.png`

`.jpg`

`.jpeg`

`.gif`

`.webp`

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

| O que você está fazendo | Onde colocar |
|-------------------------|--------------|
| Estrutura da página | `index.html` |
| Cores e aparência | `css/` |
| Funções e interações | `js/` |
| Imagens | `assets/imagem/` |
| GIFs | `assets/imagem/` |
| Música | `assets/audio/` |
| Efeitos sonoros | `assets/audio/` |
| Documentação | `README.md` |

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