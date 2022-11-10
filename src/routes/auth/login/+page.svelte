<script>
	import { Card, Button, Checkbox, FloatingLabelInput, Helper,Alert } from 'flowbite-svelte';
	export let form
	let username;
	let password;
</script>
<div class="h-screen grid	 content-center">
	<div class="flex justify-center my-5">
		<div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700 w-full">
			<form method="POST" action="/auth/login" class="flex flex-col space-y-6">
				<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Sign in</h3>
				<FloatingLabelInput
					style="outlined"
					id="username"
					name="username"
					type="text"
					label="Username"
					bind:value={username}
				/>
				<FloatingLabelInput
					style="outlined"
					id="password"
					name="password"
					type="password"
					label="Password"
					bind:value={password}
				/>
				{#if form?.credentials}
				<Alert color="red">
					<span class="font-medium">Oops..</span> Username atau password salah.
				  </Alert>
				{/if}
				<div class="flex items-start">
					<Checkbox>Remember me</Checkbox>
					<a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
						>Lupa password?</a
					>
				</div>
				<Button type="submit" class="w-full">Login</Button>
			</form>
		</div>
	</div>
</div>
