export const obriks = await fetch('http://127.0.0.1:1337/api/cordinates', { method: 'GET' }).then(response=>response.json());
