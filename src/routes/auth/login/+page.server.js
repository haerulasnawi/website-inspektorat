import { invalid, redirect } from '@sveltejs/kit';
import { nanoid } from "nanoid";

export const actions = {
	default: async ({ cookies, request }) => {
		const dataForm = await request.formData();
		const username = dataForm.get('username');
		const password = dataForm.get('password');

		const authApi = await fetch('http://localhost:1337/api/auth/local', {
			method: 'POST',
			body: JSON.stringify({ identifier: username, password: password }),
			headers: {
				'content-type': 'application/json'
			}
		});
		let response = await authApi.json();
		if (response.error) {
            return invalid(400,{credentials:true})
		} else {
            cookies.set('lhpsession',nanoid(),{
                path:'/',
                httpOnly:true,
                sameSite:'strict',
                // secure:process.env.NODE_ENV==='production',
                maxAge:60*60*6,
            })
			throw redirect(302, '/app/dashboard');
		}
	}
};
