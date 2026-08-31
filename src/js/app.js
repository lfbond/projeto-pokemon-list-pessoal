import './api.js';
import './render.js';
import './ui.js';
import './utils.js';
import { fetchPokemonList, fetchPokemonDetails } from './api.js';
import { PokedexUI } from './ui.js';

// --- Elementos DOM ---
const container = document.getElementById('pokedexContainer');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// --- Instância da UI ---
const pokedexUI = new PokedexUI(container);

// --- Variáveis de estado da aplicação ---
let currentPokemonList = [];

// --- Funções Assíncronas Principais ---

/**
 * Função principal para carregar a lista inicial de Pokémon.
 * Gerencia a lógica de requisição, tratamento de erros e renderização.
 */
async function loadInitialPokemon() {
    // 1. Estado de Loading
    pokedexUI.setLoading();

    try {
        // 2. Requisição (fetch)
        const data = await fetchPokemonList(250, 0); // Busca os 151 da primeira geração
        currentPokemonList = data.results;

        // 3. Estado de Sucesso (Renderização)
        pokedexUI.setSuccess(currentPokemonList);
    } catch (error) {
        // 4. Estado de Erro (com callback para tentar novamente)
        console.error('Erro ao carregar Pokémon:', error);
        pokedexUI.setError(error.message, loadInitialPokemon);
    }
}

/**
 * Função para buscar um Pokémon específico e renderizá-lo.
 * @param {string} query - Nome ou número do Pokémon.
 */
async function searchPokemon(query) {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
        // Se a busca estiver vazia, recarrega a lista inicial
        loadInitialPokemon();
        return;
    }

    // 1. Estado de Loading
    pokedexUI.setLoading();

    try {
        // 2. Requisição (fetch) por detalhes
        const pokemon = await fetchPokemonDetails(trimmedQuery);

        // 3. Estado de Sucesso (Renderiza o Pokémon único)
        pokedexUI.setSuccess(pokemon);
    } catch (error) {
        // 4. Tratamento de Erros (404 ou outros)
        console.error('Erro na busca:', error);
        if (error.message === 'Pokémon não encontrado!') {
            // Estado "Vazio" para uma busca sem resultados
            pokedexUI.setEmpty();
        } else {
            // Estado de Erro para outros problemas (rede, etc.)
            pokedexUI.setError(error.message, () => searchPokemon(trimmedQuery));
        }
    }
}

// --- Configuração de Event Listeners ---

// Evento de clique no botão "Buscar"
searchButton.addEventListener('click', () => {
    searchPokemon(searchInput.value);
});

// Evento de tecla "Enter" no campo de busca
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchPokemon(searchInput.value);
    }
});

// --- Inicialização da Aplicação ---
// Carrega os Pokémon ao abrir a página
loadInitialPokemon();