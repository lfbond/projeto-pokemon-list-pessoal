# 🎮 Pokédex Pessoal

<div align="center">

![Status](https://img.shields.io/badge/status-em_desenvolvimento-orange)
![Licença](https://img.shields.io/badge/license-MIT-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![PokeAPI](https://img.shields.io/badge/API-PokeAPI-ff6b6b)

Aplicação web para consulta de Pokémon com interface responsiva e consumo de API.

</div>

---

## 📌 Visão Geral

Este projeto é uma Pokédex pessoal desenvolvida em JavaScript puro, com foco em simplicidade, organização e experiência visual. A aplicação consome a PokeAPI e exibe uma lista inicial de Pokémon com busca por nome ou número.

A estrutura atual foi pensada como base funcional para evoluir em etapas, com organização modular e manutenção mais simples.

---

## ✅ Status Real do Projeto

### Implementado

- [x] Integração com a PokeAPI
- [x] Carregamento inicial da lista de Pokémon
- [x] Busca por nome ou número
- [x] Renderização de cards com imagem, nome e ID
- [x] Exibição de tipos por card
- [x] Tema claro/escuro
- [x] Cores por tipo de Pokémon
- [x] Estados de loading, erro e vazio
- [x] Layout responsivo
- [x] Estrutura modular em arquivos JavaScript

### Ainda não implementado

- [ ] Scroll infinito
- [ ] Separação por temporadas e/ou gerações
- [ ] Card com descrição do Pokémon
- [ ] Melhor ataque e pior ataque
- [ ] Fraquezas e resistências por tipo
- [ ] Busca por tipo, categoria, temporada e filtros combinados
- [ ] Modal ou painel detalhado do Pokémon
- [ ] Ordenação por nome, número ou tipo
- [ ] Sistema de favoritos
- [ ] PWA/offline

> A lista acima representa o que está realmente presente no código atual e o que continua como roadmap futuro.

---

## 🔎 O que foi validado no código

A análise foi feita sobre os arquivos principais do projeto:

- [index.html](index.html)
- [src/js/api.js](src/js/api.js)
- [src/js/app.js](src/js/app.js)
- [src/js/render.js](src/js/render.js)
- [src/js/ui.js](src/js/ui.js)
- [src/js/theme.js](src/js/theme.js)
- [src/css/style.css](src/css/style.css)
- [src/css/global.css](src/css/global.css)

### Conclusão da análise

- O projeto busca dados da PokeAPI com `fetch()` e renderiza os itens em cards.
- A busca funciona por nome ou número, conforme a lógica em [src/js/app.js](src/js/app.js).
- O tema escuro é ativado em [src/js/theme.js](src/js/theme.js).
- A renderização atual mostra imagem, nome e tipos, mas não inclui descrição, ataques, fraquezas, filtros por temporada ou scroll infinito.
- Não existe implementação de modal, filtros por categoria, ordens avançadas ou agrupamento por temporada.

---

## 🧱 Estrutura Atual do Projeto

```text
projeto-pokemon-list-pessoal/
├── IMG GIT/
│   ├── 01-pokemon-antes.png
│   └── 02-pokemon-depois.png
│
├── index.html
├── README.md
├── src/
│   ├── css/
│   │   ├── colorTipos.css
│   │   ├── global.css
│   │   ├── scrollbar.css
│   │   └── style.css
│   │
│   ├── img/
│   │   ├── favicon.ico
│   │   ├── moon.png
│   │   ├── pokeball.png
│   │   └── sun.png
│   │
│   └── js/
│       ├── api.js          # Requisições à API da PokeAPI
│       ├── app.js          # Lógica principal da aplicação
│       ├── render.js       # Renderização dos cards e estados
│       ├── theme.js        # Alternância de tema claro/escuro
│       ├── ui.js           # Gerenciamento de estados da interface
│       └── utils.js        # Funções utilitárias (capitalização e formatação)
│
└──
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|-----------|-----------|
| HTML5 | Estrutura da interface |
| CSS3 | Estilização, responsividade e tema visual |
| JavaScript | Lógica da aplicação, consumo de API e renderização |
| PokeAPI | Fonte de dados dos Pokémon |
| Fetch API | Requisições assíncronas |

---

## 📋 Requisitos e Execução

O projeto é estático e não exige instalação de dependências.

### Formas de execução

#### 1. Abrir diretamente no navegador

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

#### 2. Usar um servidor HTTP local

```bash
cd projeto-pokemon-list-pessoal
python -m http.server 8000
```

Em seguida, acesse:

```text
http://localhost:8000
```



---

## 🚀 Funcionalidades Atuais

### Listagem inicial

A aplicação carrega uma lista inicial de Pokémon ao abrir a página e renderiza os cartões com imagem e número.

### Busca

A busca atual permite pesquisar por:

- nome do Pokémon
- número do Pokémon

### Interface visual

- cards organizados em grid responsivo
- botão para alternar tema claro/escuro
- estilos por tipo de Pokémon
- feedback visual para carregamento, erro e ausência de resultado

---

## � Demonstração visual do projeto

Abaixo estão imagens demonstrativas da evolução visual da interface, armazenadas na pasta de referências do projeto.

### Antes

![Antes do projeto](IMG%20GIT/01-pokemon-antes.png)

### Depois

![Depois do projeto](IMG%20GIT/02-pokemon-depois.png)

> Essas imagens servem como registro visual do progresso do projeto e do refinamento da interface.

---

## �📈 Roadmap de Melhorias

As próximas etapas planejadas são as melhorias mencionadas anteriormente e que ainda não estão presentes no código atual:

- [ ] Scroll infinito
- [ ] Separação por temporadas e/ou gerações
- [ ] Cards com mais detalhes de cada Pokémon
- [ ] Tipo, descrição, melhor ataque e pior ataque
- [ ] Fraquezas e resistências por tipo
- [ ] Sistema de busca por tipo, categoria, temporada e filtros combinados
- [ ] Modal ou painel detalhado
- [ ] Ordenação por número, nome e tipo
- [ ] Filtros avançados e melhor UX
- [ ] Melhorias de performance e organização da interface

---

## 🧭 Status do Projeto

O projeto está em uma fase funcional de base inicial, com estrutura bem organizada para expansão. Ele já entrega a visualização e busca básica de Pokémon, mas ainda não inclui os recursos avançados esperados para uma Pokédex mais completa.

---

## 🤝 Contribuição

Contribuições são bem-vindas. O ideal é manter a arquitetura simples, a legibilidade do código e a evolução gradual das funcionalidades.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

