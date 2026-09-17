# Integração no site principal + GitHub

## 1. Faça uma cópia do repositório principal

Antes de alterar o site dos alunos, abra a pasta do repositório principal e confirme que ele está funcionando.

## 2. Copie os arquivos do chatbot

Copie para o projeto principal:

- `assets/imagem/ia-suporte.png`
- `js/game-lore.js`

Depois, no `index.html` principal, copie o bloco marcado como `ASSISTENTE DE SUPORTE` desta versão.

No final do HTML, `game-lore.js` PRECISA vir antes de `script.js`:

```html
<script src="js/game-lore.js"></script>
<script src="js/script.js"></script>
```

## 3. Integre o JavaScript

Se o projeto principal já tiver um `js/script.js`, não substitua tudo automaticamente.

Copie a parte iniciada por:

```js
FAZBEAR SUPPORT — CHATBOT OFFLINE
```

A base dos jogos fica separada em `js/game-lore.js`, facilitando futuras atualizações.

Atenção: o site principal já pode possuir `cardapioDados`. Não crie duas constantes com o mesmo nome.

## 4. Integre o CSS

Copie as regras relacionadas a `.support-fab`, `.support-chat`, `.support-header`, `.support-messages`, `.chat-message`, `.quick-actions` e `.support-input`.

## 5. Teste localmente

Abra o site e teste no mínimo:

- Quem é William Afton?
- Quem é William Afton nos jogos?
- Quem é Springtrap?
- O que foi a Mordida de 87?
- Quais são os Glamrocks?
- O que é o Mimic?
- Me conte a história dos jogos de FNAF.
- Qual pizza é quatro queijos?

## 6. Crie uma branch

```bash
git checkout -b feat/chatbot-lore-jogos
```

## 7. Veja os arquivos alterados

```bash
git status
```

## 8. Adicione os arquivos

```bash
git add index.html css/style.css js/script.js js/game-lore.js assets/imagem/ia-suporte.png
```

Ajuste os caminhos se os nomes das pastas forem diferentes no repositório principal.

## 9. Faça o commit

```bash
git commit -m "feat: amplia chatbot offline com lore dos jogos FNAF"
```

## 10. Envie ao GitHub

```bash
git push -u origin feat/chatbot-lore-jogos
```

## 11. Pull Request

No GitHub, abra `Compare & pull request`, revise as mudanças e faça o Pull Request para a `main`.

Descrição sugerida:

> Amplia o Fazbear Support com uma base offline de conhecimento sobre filmes, jogos e animatronics de FNAF. A solução não usa API e diferencia fatos confirmados de teorias da comunidade.

Depois de revisar e testar, façam o merge.


## Arquivos extras desta versão com Helpy

Além dos arquivos do chatbot completo, copie também a pasta inteira `assets/helpy/`. O `index.htm` usa `id="helpy-sprite"` e o `js/script.js` controla as animações e o movimento do personagem. Não substitua `script.js` por `helpy-ia.js`: a lógica visual do Helpy já foi incorporada ao `script.js` completo para preservar toda a base de conhecimento.
