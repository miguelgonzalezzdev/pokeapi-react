export const fetchPokemonInfo = ({ id }) => {
    if (id <= 0) return Promise.resolve(null); // Devolvemos una promesa resuelta con null

    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => {
            return {
                id: data.id,
                name: data.name,
                type1: data.types[0]?.type.name || null,
                type2: data.types[1]?.type.name || null,
                height: data.height,
                weight: data.weight,
            };
        })
        .catch(error => {
            console.error("Error al obtener los datos del Pokémon:", error);
            return null;
        });
};