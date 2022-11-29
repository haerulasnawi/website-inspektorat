import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const id = url.searchParams.get('id');
	// console.log(id)
	const res = await fetch('http:/127.0.0.1:1337/api/cordinates/' + id, {
		method: 'GET'
	});
	const data = await res.json();
	return new Response(JSON.stringify(data));
}
