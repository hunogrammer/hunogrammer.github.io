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
	<title>로또번호 생성기</title>
	<meta name="description" content="로또번호 무작위로 생성하는 사이트" />
	<meta name="canonical" content="https://hunogrammer.github.io/lotto" />
	<meta name="robots" content="index,nofollow" />
	<meta name="og:type" content="website" />
	<meta name="og:title" content="로또번호 생성기" />
	<meta name="og:url" content="https://hunogrammer.github.io/lotto" />
	<meta name="og:description" content="로또번호 무작위로 생성하는 사이트" />
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
