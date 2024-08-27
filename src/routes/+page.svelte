<script>
	import { base } from '$app/paths'
	import Card from './components/Card.svelte';
	import CardHeader from './components/CardHeader.svelte';
	import CardContent from './components/CardContent.svelte';
	import { Shuffle, Sandwich } from 'lucide-svelte';
	import { scale } from 'svelte/transition';

	const tools = [
		{
			icon: Shuffle,
			title: "로또 번호 생성기",
			description: "손쉬운 로또 번호 생성기",
			link: `${base}/lotto`
		},
		{
			icon: Sandwich,
			title: "점심 메뉴 추천기",
			description: "고르기 귀찮은 점심 메뉴 추천기",
			link: `${base}/lunch`
		},

	];
</script>

<div class="container mx-auto px-4 py-8">
	<header class="mb-12 text-center">
		<h1 class="text-4xl font-bold tracking-tight">MultiTool Hub</h1>
		<p class="mt-2 text-xl text-muted-foreground">간편하게 사용할 수 있는 도구 모음</p>
	</header>
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each tools as tool}
			<a href={tool.link} class="transition-transform hover:scale-105" transition:scale>
				<Card>
					<CardHeader>
						<div class="flex flex-row items-center gap-4">
							<svelte:component this={tool.icon} class="h-8 w-8" />
							<h3 class="text-lg font-semibold">{tool.title}</h3>
						</div>
					</CardHeader>
					<CardContent>
						<p class="text-sm text-muted-foreground">{tool.description}</p>
					</CardContent>
				</Card>
			</a>
		{/each}
	</div>
</div>