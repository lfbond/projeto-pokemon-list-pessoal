export function capitalizeFirstLetter(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatPokemonId(id) {
    return `#${String(id).padStart(3, '0')}`;
}