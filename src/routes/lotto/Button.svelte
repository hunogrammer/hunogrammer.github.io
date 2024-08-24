<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const clickButton = () => {
		dispatch('clickButton');
	};

</script>

<button
	on:click={clickButton}
	class="lotto-btn bg-yellow-400 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
	style="margin-top: 5vh; margin-bottom: 5vh;">

	🎟️ 로또 번호 생성하기
</button>

<style>
	.lotto-btn {
		background-size: cover;
		background-position: center;
	}
</style>