<script>
	import { fade } from 'svelte/transition';

	import Balls from './Balls.svelte';
	import Button from './Button.svelte';
	import Numbers from './Numbers.svelte';

	let visibleNumbers = false;
	let doneBalls = true;
	let doneNumbers = false;

	const onClickButton = () => {
		visibleNumbers = !visibleNumbers;
	};

	const swapFlags = () => {
		doneBalls = !doneBalls;
		doneNumbers = !doneNumbers;
	}
</script>

<svelte:head>
	<title>로또</title>
	<meta name="description" content="로또 번호 생성기" />
</svelte:head>

<div class="flex justify-center items-center flex-col">
	<Button on:clickButton={onClickButton} />
	{#if !visibleNumbers && doneBalls}
		<span transition:fade on:outroend={swapFlags} class="w-full">
				<Balls />
		</span>
	{/if}
	{#if visibleNumbers && doneNumbers}
		<span transition:fade on:outroend={swapFlags} class="w-full">
				<Numbers />
		</span>
	{/if}
</div>

<style>

</style>
