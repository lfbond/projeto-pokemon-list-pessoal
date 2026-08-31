import { capitalizeFirstLetter, formatPokemonId } from './utils.js';

/**
 * Renderiza uma lista de Pokémon no container.
 * @param {Array} pokemonList - Lista de objetos Pokémon (cada um com 'name' e 'url').
 * @param {HTMLElement} container - O elemento DOM onde a lista será renderizada.
 */
export function renderPokemonList(pokemonList, container) {
    if (!pokemonList || pokemonList.length === 0) {
        renderEmptyState(container);
        return;
    }

    // Mapeia a lista para uma string HTML
    const html = pokemonList.map(pokemon => {
        // Extrai o ID da URL
        const urlParts = pokemon.url.split('/');
        const id = urlParts[urlParts.length - 2];
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

        return `
            <div class="pokemon-card" data-name="${pokemon.name}" data-id="${id}">
                <img src="${imageUrl}" alt="${pokemon.name}" loading="lazy">
                <div class="name">${capitalizeFirstLetter(pokemon.name)}</div>
                <div class="number">${formatPokemonId(id)}</div>
                <!-- Os tipos serão adicionados em uma segunda etapa, se necessário -->
            </div>
        `;
    }).join('');

    container.innerHTML = html;
}

/**
 * Renderiza um único Pokémon (para a busca detalhada).
 * @param {Object} pokemon - O objeto detalhado do Pokémon.
 * @param {HTMLElement} container - O elemento DOM.
 */
export function renderSinglePokemon(pokemon, container) {
    if (!pokemon) {
        renderEmptyState(container);
        return;
    }

    const types = pokemon.types.map(typeInfo => 
        `<span class="type">${capitalizeFirstLetter(typeInfo.type.name)}</span>`
    ).join('');

    const html = `
        <div class="pokemon-card" style="grid-column: 1 / -1; max-width: 400px; margin: 0 auto;">
            <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}" loading="lazy">
            <div class="name">${capitalizeFirstLetter(pokemon.name)}</div>
            <div class="number">${formatPokemonId(pokemon.id)}</div>
            <div class="types">${types}</div>
        </div>
    `;

    container.innerHTML = html;
}

/**
 * Renderiza o estado de carregamento.
 * @param {HTMLElement} container
 */
export function renderLoadingState(container) {
    container.innerHTML = `<div class="loading-message">⏳ Carregando Pokémons...</div>`;
}

/**
 * Renderiza o estado de erro.
 * @param {HTMLElement} container
 * @param {string} message - Mensagem de erro a ser exibida.
 * @param {Function} retryCallback - Função a ser chamada quando o botão "Tentar Novamente" for clicado.
 */
export function renderErrorState(container, message, retryCallback) {
    container.innerHTML = `
        <div class="error-message">
            <p>❌ Ops! ${message}</p>
            <button id="retryButton">🔄 Tentar Novamente</button>
        </div>
    `;
    // Adiciona o evento ao botão após ele ser renderizado
    const retryBtn = container.querySelector('#retryButton');
    if (retryBtn && retryCallback) {
        retryBtn.addEventListener('click', retryCallback);
    }
}

/**
 * Renderiza o estado vazio (quando a busca não retorna resultados).
 * @param {HTMLElement} container
 */
export function renderEmptyState(container) {
    container.innerHTML = `<div class="empty-message">🔍 Nenhum Pokémon encontrado para esta busca.</div>`;
}