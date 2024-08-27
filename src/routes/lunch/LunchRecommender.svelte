<script>
	import { fade } from 'svelte/transition';
	import { Sandwich } from 'lucide-svelte';

	const lunchOptions = {
		한식: [
			"비빔밥",
			"불고기",
			"김치찌개",
			"된장찌개",
			"삼겹살",
			"갈비탕",
			"제육볶음",
			"냉면",
			"감자탕",
			"순두부찌개",
			"잡채",
			"떡볶이",
			"칼국수",
			"설렁탕",
			"해물파전",
			"콩나물국밥",
			"동태찌개",
			"닭갈비",
			"육개장",
			"김밥"
		],
		중식: [
			"짜장면",
			"짬뽕",
			"탕수육",
			"마파두부",
			"깐풍기",
			"양장피",
			"고추잡채",
			"유산슬",
			"팔보채",
			"북경오리",
			"마라탕",
			"마라샹궈",
			"군만두",
			"춘권",
			"새우볶음밥",
			"꿔바로우",
			"동파육",
			"토마토계란볶음",
			"사천식 어향가지",
			"홍소우육면"
		],
		일식: [
			"스시",
			"라멘",
			"우동",
			"돈카츠",
			"오코노미야키",
			"가츠동",
			"텐동",
			"소바",
			"타코야키",
			"카레라이스",
			"규동",
			"미소시루",
			"샤부샤부",
			"야키니쿠",
			"오야코동",
			"나베모노",
			"에다마메",
			"하야시라이스",
			"니쿠자가",
			"참치 마구로동"
		],
		그외: [
			"피자",
			"파스타",
			"햄버거",
			"스테이크",
			"케사디아",
			"파에야",
			"케밥",
			"부리또",
			"팔라펠",
			"그릭 샐러드",
			"카포나타",
			"뿌띠살라드",
			"카레(인도식)",
			"팟타이",
			"똠얌꿍",
			"감바스 알 아히요",
			"에그 베네딕트",
			"로코모코",
			"슈니첼",
			"칠리 콘 카르네"
		]
	};

	let recommendations = {
		한식: '',
		중식: '',
		일식: '',
		그외: ''
	};

	function generateRecommendations() {
		recommendations = Object.keys(lunchOptions).reduce((acc, category) => {
			const options = lunchOptions[category];
			acc[category] = options[Math.floor(Math.random() * options.length)];
			return acc;
		}, {});
	}
</script>

<div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
	<div class="p-6">
		<h2 class="text-2xl font-bold mb-2 flex items-center gap-2">
			<Sandwich class="h-6 w-6" />
			점심 메뉴 추천기
		</h2>

		<div class="grid gap-4 mb-6">
			{#each Object.entries(recommendations) as [category, meal]}
				<div class="bg-gray-100 p-4 rounded-lg" transition:fade>
					<div class="flex justify-between items-center mb-2">
						<h3 class="text-sm font-medium">{category}</h3>
					</div>
					<p class="text-2xl font-bold">{meal || '추천 버튼을 누르세요'}</p>
				</div>
			{/each}
		</div>

		<button
			on:click={generateRecommendations}
			class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
		>
			추천
		</button>
	</div>
</div>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>