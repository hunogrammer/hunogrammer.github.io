import { onMount } from 'svelte';

export const initGA = () => {
	onMount(() => {
		window.dataLayer = window.dataLayer || [];

		function gtag(){window.dataLayer.push(arguments);}

		gtag('js', new Date());
		gtag('config', 'G-N07BT82PFZ');
	});
};