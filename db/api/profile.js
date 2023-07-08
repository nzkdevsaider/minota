/**
 * La función `getProfile` recupera todos los perfiles de una base de datos.
 * @returns La función `getProfile` devuelve el resultado de la llamada a la función
 * `database.profile.toArray()`.
 */
export const getProfile = async () => {
    return await database.profile.toArray();
}