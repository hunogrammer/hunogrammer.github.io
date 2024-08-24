<script>
	// Function to generate a set of 6 unique random numbers between 1 and 45
	const generateLotterySet = () => {
		const set = new Set();
		while (set.size < 6) {
			set.add(Math.floor(Math.random() * 45) + 1);
		}
		return Array.from(set).sort((a, b) => a - b);
	};

	let lotterySets = Array.from({ length: 5 }, () => generateLotterySet());

	const getBorderColor = (number) => {
		if (number <= 10) return "border-yellow-400";
		if (number <= 20) return "border-blue-500";
		if (number <= 30) return "border-red-500";
		if (number <= 40) return "border-gray-500";
		return "border-green-500";
	};
</script>

<div style="min-height: 50vh;">
	<table class="table-auto w-full flex justify-center items-center">
		<tbody>
		{#each lotterySets as set}
			<tr class="border-y-2">
				{#each set as number}
					<td class="px-1 sm:px-1 md:px-2 lg:px-3 py-1 sm:py-1 md:py-2 lg:py-3">
						<div class={`flex justify-center items-center rounded-full font-bold w-12 h-12 border-2 ${getBorderColor(number)}`}>
							{number}
						</div>
					</td>
				{/each}
			</tr>
		{/each}
		</tbody>
	</table>
</div>
