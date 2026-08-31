import { renderLoadingState, renderErrorState, renderPokemonList, renderSinglePokemon, renderEmptyState } from './render.js';

/**
 * Gerencia os estados da UI da Pokédex.
 */
export class PokedexUI {
    constructor(container) {
        this.container = container;
        this.currentState = 'idle'; // 'idle', 'loading', 'success', 'error', 'empty'
    }

    setLoading() {
        this.currentState = 'loading';
        renderLoadingState(this.container);
    }

    setError(message, retryCallback) {
        this.currentState = 'error';
        renderErrorState(this.container, message, retryCallback);
    }

    setEmpty() {
        this.currentState = 'empty';
        renderEmptyState(this.container);
    }

    setSuccess(data) {
        this.currentState = 'success';
        // Se for um array (lista) ou um objeto (detalhe)
        if (Array.isArray(data)) {
            renderPokemonList(data, this.container);
        } else {
            renderSinglePokemon(data, this.container);
        }
    }
}