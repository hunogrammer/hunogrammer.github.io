<script>
	import { base } from '$app/paths'
	import { page } from '$app/stores'
	import '../app.css';

	import Header from './Header.svelte';
	import Analytics from '$lib/Analytics.svelte';



	let showHeader = true;

	$: {
		showHeader = $page.url.pathname !== `${base}/`
	}

</script>

<div class="app">
	<Analytics measureId="G-N07BT82PFZ"/>.
	{#if showHeader}
		<Header />
	{/if}
	<main>
		<slot />
	</main>

	<footer>
		<p>Made by <a href="https://github.com/hunogrammer">hunogrammer</a></p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
