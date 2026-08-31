const API_BASE_URL = 'https://pokeapi.co/api/v2';

/**
 * Busca uma lista de Pokémon da API.
 * @param {number} limit - Número máximo de Pokémon a serem buscados.
 * @param {number} offset - Offset para paginação.
 * @returns {Promise<Object>} Uma promise que resolve com os dados da API.
 * @throws {Error} Lança um erro se a requisição falhar.
 */
export async function fetchPokemonList(limit = 151, offset = 0) {
    const url = `${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Erro na API: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}

/**
 * Busca os detalhes de um Pokémon específico por nome ou ID.
 * @param {string|number} identifier - O nome ou ID do Pokémon.
 * @returns {Promise<Object>} Uma promise que resolve com os dados do Pokémon.
 * @throws {Error} Lança um erro se a requisição falhar (ex: 404).
 */
export async function fetchPokemonDetails(identifier) {
    const url = `${API_BASE_URL}/pokemon/${identifier.toString().toLowerCase()}`;
    const response = await fetch(url);

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error('Pokémon não encontrado!');
        }
        throw new Error(`Erro na API: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}