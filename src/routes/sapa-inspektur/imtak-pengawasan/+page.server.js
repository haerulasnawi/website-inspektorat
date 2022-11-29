export const actions = {
	default: async ({ request }) => {
		const dataForm = await request.formData();
		const permasalahan = dataForm.get('permasalahan');
		const penjelasan = dataForm.get('penjelasan');
		const tanggal_waktu = dataForm.get('tanggal_waktu');
		const postImtak = await fetch('http://localhost:1337/api/imtaks', {
            method: 'POST',
            headers:{"Content-type":"Application/json"},
			body: JSON.stringify({
                "data": {
					"permasalahan": permasalahan,
					"penjelasan": penjelasan,
					"tanggal_waktu": tanggal_waktu,
					"nip": "199510182022031006"
				}
			})
		});
		let response = await postImtak.json();
        console.log(response);
		return { success: true };
	}
};
