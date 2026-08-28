# 🎮 Projeto Pokémon List Pessoal

<div align="center">

![Status: Ativo](https://img.shields.io/badge/status-ativo-brightgreen)
![License: MIT](https://img.shields.io/badge/license-MIT-blue)
![Version: 1.0](https://img.shields.io/badge/version-1.0-blue)
![HTML](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Uma aplicação web interativa e responsiva para explorar e gerenciar uma coleção personalizada de Pokémon.

[🌐 Visite o Site](https://lfbond.github.io/projeto-pokemon-list-pessoal/) • [📝 Reportar Bug](https://github.com/lfbond/projeto-pokemon-list-pessoal/issues) • [💡 Sugerir Melhoria](https://github.com/lfbond/projeto-pokemon-list-pessoal/issues)

</div>

---

## 📖 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Objetivo](#-objetivo)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [API Utilizada](#-api-utilizada)
- [Screenshots](#-screenshots)
- [Melhorias Futuras](#-melhorias-futuras)
- [Solução de Problemas](#-solução-de-problemas)
- [Contribuindo](#-contribuindo)
- [Autores](#-autores)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

Bem-vindo ao **Projeto Pokémon List Pessoal**! 

Este é um site interativo desenvolvido com **vanilla JavaScript** (sem frameworks) que permite aos usuários visualizarem, pesquisarem e explorarem uma lista completa de Pokémon. O projeto combina design responsivo com integração de API em tempo real, oferecendo uma experiência de usuário fluida e agradável.

É um excelente projeto educacional para aprender conceitos modernos de desenvolvimento web como:
- 🌐 Consumo de APIs REST
- 🎨 Manipulação e transformação de DOM
- 📱 Design responsivo e mobile-first
- ⚡ Assincronismo (Promises, Async/Await)
- 🎯 Otimização de performance

---

## 🎯 Objetivo

O objetivo principal deste projeto é:

✅ Fornecer uma interface intuitiva e agradável para explorar dados de Pokémon  
✅ Demonstrar boas práticas de desenvolvimento web front-end  
✅ Servir como ferramenta educacional para aprender integração com APIs  
✅ Oferecer uma experiência responsiva em todos os dispositivos  
✅ Criar um projeto portfólio de qualidade profissional  

---

## 🚀 Funcionalidades

### Principais
- ✨ **Lista Dinâmica de Pokémon**: Carrega uma lista completa com nome, imagem e número ID
- 🔍 **Busca Inteligente**: Pesquisa em tempo real por nome ou número de Pokémon
- 📊 **Informações Detalhadas**: Visualiza tipos, habilidades, altura, peso e estatísticas base
- 📱 **Design Responsivo**: Funciona perfeitamente em desktop, tablet e smartphone
- ⚡ **Carregamento Otimizado**: Interface rápida com animações suaves
- 🎨 **Temas por Tipo**: Cores diferentes para cada tipo de Pokémon (Fogo, Água, Elétrico, etc.)
- 🔄 **Scroll Infinito**: Carregamento automático de mais Pokémon ao rolar a página

### Recursos de Experiência
- 🌈 Design atraente e moderno
- ⌨️ Navegação intuitiva e acessível
- 💾 Cache inteligente de dados
- 🎯 Interface amigável para todos os públicos

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição | Versão |
|-----------|-----------|--------|
| **HTML5** | Estrutura semântica do projeto | - |
| **CSS3** | Estilização, layout flexbox/grid e responsividade | - |
| **JavaScript (ES6+)** | Lógica, manipulação de DOM e requisições assíncronas | - |
| **PokeAPI** | API RESTful com dados de Pokémon | v2 |
| **Fetch API** | Para requisições HTTP | Nativa |

### Recursos CSS Avançados
- 📐 **Flexbox & Grid**: Layouts modernos e responsivos
- 🎨 **CSS Variables**: Temas dinâmicos e fácil manutenção
- ✨ **Animações**: Transições suaves e efeitos visuais
- 🎯 **Media Queries**: Otimização para todos os tamanhos de tela

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter:

- ✅ Um navegador web moderno (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- ✅ Conexão ativa com a internet (para consumir a API)
- ✅ (Opcional) Git instalado para clonar o repositório
- ✅ (Opcional) Um editor de código para modificar o projeto

> **Nota**: Este projeto não requer instalação de dependências, servidores ou ferramentas adicionais!

---

## 📁 Estrutura do Projeto

```
projeto-pokemon-list-pessoal/
│
├── 📄 index.html                    # Arquivo HTML principal
├── 📄 README.md                     # Este arquivo
│
├── 🎨 src/
│   ├── 📂 css/                      # Arquivos de estilo
│   │   ├── style.css                # Estilos principais
│   │   ├── global.css               # Estilos globais e reset
│   │   ├── colorTipos.css           # Cores específicas para cada tipo de Pokémon
│   │   └── scrollbar.css            # Estilo customizado da barra de rolagem
│   │
│   ├── 📂 js/
│   │   └── script.js                # Lógica principal da aplicação
│   │       ├── Fetch de dados da API
│   │       ├── Manipulação de DOM
│   │       ├── Funções de busca e filtro
│   │       └── Event listeners
│   │
│   └── 📂 img/                      # Imagens do projeto
│       ├── 📂 01-Kanto/             # Sprites da região de Kanto
│       └── 📂 02-Johto/             # Sprites da região de Johto
│
└── 📄 LICENSE                       # Licença MIT do projeto
```

### Descrição dos Arquivos Principais

**index.html**
- Estrutura HTML5 semântica
- Container principal para a aplicação
- Links para arquivos CSS e JS
- Meta tags para SEO e responsividade

**style.css**
- Layout principal com Flexbox/Grid
- Estilização de componentes
- Animações e transições
- Estilos responsivos

**global.css**
- Reset CSS
- Variáveis CSS globais
- Tipografia e fontes
- Estilos de base

**colorTipos.css**
- Cores por tipo de Pokémon (Fogo, Água, Grama, etc.)
- Paleta de cores profissional
- Acessibilidade de contraste

**scrollbar.css**
- Customização da barra de rolagem
- Tema coerente com design geral

**script.js**
- Fetch de dados da PokeAPI
- Renderização de Pokémon
- Busca e filtro
- Event handling

---

## 📦 Instalação

### Opção 1: Clonar do GitHub (Recomendado)

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/lfbond/projeto-pokemon-list-pessoal.git
   ```

2. **Acesse o diretório do projeto**:
   ```bash
   cd projeto-pokemon-list-pessoal
   ```

3. **Abra no seu editor favorito** (VS Code, Sublime, etc.):
   ```bash
   code .
   ```

### Opção 2: Download Direto

1. Visite [https://github.com/lfbond/projeto-pokemon-list-pessoal](https://github.com/lfbond/projeto-pokemon-list-pessoal)
2. Clique em **Code** → **Download ZIP**
3. Extraia o arquivo na pasta desejada

### Opção 3: Usar Online

Acesse diretamente no GitHub Pages:  
🌐 [https://lfbond.github.io/projeto-pokemon-list-pessoal/](https://lfbond.github.io/projeto-pokemon-list-pessoal/)

---

## 🚀 Como Usar

### Executando Localmente

**Método 1: Abrir arquivo diretamente**
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

**Método 2: Usar um servidor local** (recomendado)
```bash
# Python 3
python -m http.server 8000

# Node.js (com http-server instalado)
npx http-server

# PHP
php -S localhost:8000
```
Depois acesse em seu navegador: `http://localhost:8000`

### Usando a Aplicação

1. **Explorar Pokémon**:
   - A página carrega automaticamente uma lista de Pokémon
   - Role para baixo para ver mais

2. **Pesquisar Pokémon**:
   - Use a barra de busca no topo
   - Digite o nome ou número do Pokémon
   - Os resultados são filtrados em tempo real

3. **Ver Detalhes**:
   - Clique em um Pokémon para ver informações completas
   - Visualize tipo, altura, peso, habilidades e estatísticas

4. **Explorar por Região**:
   - Navegue entre diferentes regiões (Kanto, Johto, etc.)
   - Veja os Pokémon específicos de cada região

---

## 🔌 API Utilizada

### PokeAPI v2

Este projeto utiliza a **[PokeAPI](https://pokeapi.co/)**, uma API RESTful gratuita com dados completos sobre Pokémon.

**Endpoints principais utilizados:**

| Endpoint | Descrição |
|----------|-----------|
| `GET /api/v2/pokemon/` | Lista de Pokémon (paginada) |
| `GET /api/v2/pokemon/{id}` | Detalhes de um Pokémon específico |
| `GET /api/v2/pokemon-species/{id}` | Informações da espécie |
| `GET /api/v2/type/` | Lista de tipos de Pokémon |

**Exemplo de requisição:**
```javascript
// Buscar lista de Pokémon
fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));

// Buscar Pokémon específico
fetch('https://pokeapi.co/api/v2/pokemon/1/')
  .then(response => response.json())
  .then(data => console.log(data));
```

> **Nota**: A PokeAPI é pública e não requer chaves de API. Recomenda-se fazer cache dos dados para melhor performance.

---

## 📸 Screenshots

### Interface Principal
![01-pokemon](https://github.com/user-attachments/assets/5fd48ada-9f17-4efc-83d9-6fd198c5d08a)

*A tela principal mostra uma grade responsiva de Pokémon com opções de busca*

---

## 🎨 Melhorias Futuras

### Funcionalidades Planejadas
- 🏷️ **Filtro Avançado**: Filtrar por tipo, geração, habilidades
- ⭐ **Sistema de Favoritos**: Salvar Pokémon favoritos em localStorage
- 📄 **Paginação**: Navegação melhorada entre Pokémon
- 🌍 **Filtro por Região**: Explorar Pokémon de regiões específicas
- 🔀 **Ordenação**: Ordenar por nome, ID, tipo, ou estatísticas
- 📊 **Gráficos de Estatísticas**: Visualizar estatísticas em gráficos
- 🌙 **Dark Mode**: Tema escuro opcional
- 🎮 **Comparador de Pokémon**: Comparar estatísticas entre Pokémon
- 📱 **App Progressiva (PWA)**: Funcionar offline
- 🔊 **Sons**: Adicionar efeitos sonoros e cries de Pokémon

### Melhorias Técnicas
- ♿ Melhorar acessibilidade (ARIA labels)
- ⚡ Implementar Service Workers para offline
- 🧪 Adicionar testes automatizados
- 📈 Otimizar performance e SEO
- 🎯 Implementar carregamento lazy de imagens

---

## 🐛 Solução de Problemas

### Problema: Pokémon não carregam
**Solução:**
1. Verifique sua conexão com a internet
2. Abra o console (F12) e procure por erros
3. Verifique se a PokeAPI está online: [status.pokeapi.co](https://status.pokeapi.co)
4. Limpe o cache do navegador (Ctrl+Shift+Delete)

### Problema: Imagens não aparecem
**Solução:**
1. Verifique se as pasta `/img` está na raiz do projeto
2. Verifique permissões de arquivo
3. Tente executar em um servidor local em vez de arquivo direto

### Problema: Busca lenta ou não funciona
**Solução:**
1. Verifique se JavaScript está habilitado
2. Limpe o cache do navegador
3. Tente em um navegador diferente
4. Verifique o console para erros (F12)

### Problema: Layout quebrado no celular
**Solução:**
1. Verifique meta viewport em `index.html`
2. Teste em diferentes orientações
3. Limpe cache e cookies
4. Atualize o navegador

---

## 💡 Contribuindo

Contribuições são bem-vindas e muito valorizadas! 

### Como Contribuir

1. **Faça um Fork** do repositório
2. **Crie uma branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit suas mudanças** (`git commit -m 'Add some AmazingFeature'`)
4. **Push para a branch** (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

### Diretrizes de Contribuição

- Mantenha o código limpo e bem organizado
- Adicione comentários em código complexo
- Teste suas mudanças em múltiplos navegadores
- Siga as convenções de nomeação existentes
- Atualize o README se necessário

### Reportar Bugs

Encontrou um bug? Abra uma [issue](https://github.com/lfbond/projeto-pokemon-list-pessoal/issues) com:
- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs. real
- Screenshots se aplicável
- Navegador e OS utilizado

---

## 👥 Autores

**Luis Fernando Bond**
- GitHub: [@lfbond](https://github.com/lfbond)
- Email: contato@lfbond.com
- Portfolio: [lfbond.com](https://lfbond.com)

---

## 📄 Licença

Este projeto está sob a licença **MIT** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

A licença MIT permite que você:
- ✅ Use, copie e modifique o código
- ✅ Distribua cópias
- ✅ Inclua em projetos comerciais

Com apenas o requisito de incluir a licença e aviso de copyright.

---

## 🙏 Agradecimentos

- **PokeAPI**: Pelos dados incríveis e API pública
- **Comunidade Open Source**: Pela inspiração e suporte
- **Pokémon**: Pela franquia e inspiração

---

## 📞 Suporte

Se você tiver dúvidas ou precisar de ajuda:

1. 📖 Consulte a seção [Solução de Problemas](#-solução-de-problemas)
2. 🔍 Procure em [Issues existentes](https://github.com/lfbond/projeto-pokemon-list-pessoal/issues)
3. 💬 Abra uma nova [Discussion](https://github.com/lfbond/projeto-pokemon-list-pessoal/discussions)
4. 📧 Entre em contato direto

---

<div align="center">

**[⬆ Voltar ao Topo](#-projeto-pokémon-list-pessoal)**

Feito com ❤️ por [Luis Felipe Bond](https://github.com/lfbond)

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=lfbond.projeto-pokemon-list-pessoal)

</div>
