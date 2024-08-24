<script>
	import { page } from '$app/stores'
	import { Menu, X, ChevronDown } from 'lucide-svelte';

	// Page list with subpages
	const HOME = 'Home';
	const HOME_PATH = '/';

	const pages = [
		{ name: HOME, path: HOME_PATH },
		{
			name: '복권 도구',
			path: '#',
			subPages: [
				{ name: '로또 번호 생성기', path: '/lotto' },
			]
		},
	];

	let [activePage, previousPage, activeSubPage] = initPage()

	let isMobileMenuOpen = false;
	let expandedMenu = null;

	function initPage() {
		const path = $page.url.pathname

		if (path === HOME_PATH) {
			return [HOME, HOME, '']
		}

		for (const page of pages) {
			if (!page.subPages) {
				continue
			}

			for (const subPage of page.subPages) {
				if (subPage.path === path) {
					return [page.name, page.name, subPage.name]
				}
			}
		}
		return [HOME, HOME, '']
	}

	function toggleSubMenu(pageName) {
		if (pageName === HOME) {
			setActivePageAndCloseMobile(pageName, null);
		} else {
			expandedMenu = expandedMenu === pageName ? null : pageName;
			previousPage = activePage
			activePage = pageName;
		}
	}

	function setActivePageAndCloseMobile(pageName, subPageName) {
		activePage = pageName;
		previousPage = activePage
		activeSubPage = subPageName;
		isMobileMenuOpen = false;
	}

	$: {
		if (activePage !== previousPage) {
			activeSubPage = '';
		}
	}
</script>

<header class="fixed top-0 z-50 w-full border-solid border-b-2 border-y-neutral-100 py-4 bg-gray-800 text-lg font-medium transition-all duration-300 ease-in-out
  opacity-100">
	<div class="container mx-auto px-4">
		<div class="flex items-center justify-between">
			<button
				class="font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 bg-transparent text-gray-700 hover:bg-gray-100 px-2 py-1 text-sm lg:hidden"
				on:click={() => isMobileMenuOpen = !isMobileMenuOpen}
			>
				{#if isMobileMenuOpen}
					<X class="h-6 w-6 text-white" />
				{:else}
					<Menu class="h-6 w-6 text-white" />
				{/if}
			</button>

			<nav class="
        {isMobileMenuOpen ? 'flex' : 'hidden'}
        lg:flex flex-col lg:flex-row w-full lg:w-auto items-start lg:items-center justify-center gap-4 lg:gap-6
        absolute lg:relative top-full left-0 bg-gray-800 lg:bg-transparent p-4 lg:p-0"
			>
				{#each pages as page}
					<div class="w-full lg:w-auto relative group">
						<div class="flex items-center justify-between">
							<a
								href={page.path}
								class="transition-colors hover:text-[#433b3b] {activePage === page.name ? 'text-white' : 'text-gray-400'}"
								on:click={() => toggleSubMenu(page.name)}
							>
								{page.name}
							</a>
							{#if page.subPages}
								<button
									class="font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 bg-transparent text-gray-700 hover:bg-gray-100 px-2 py-1 text-sm lg:hidden"
								>
									<ChevronDown class="transition-transform duration-200 text-white {expandedMenu === page.name ? 'rotate-180' : ''}" />
								</button>
							{/if}
						</div>
						{#if page.subPages}
							<div class="
                lg:absolute lg:top-full lg:left-0 lg:mt-2 bg-white shadow-md rounded-md
                sm:overflow-y-scroll transition-all duration-300 ease-in-out
                {expandedMenu === page.name ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 lg:group-hover:max-h-[500px] lg:group-hover:opacity-100'}
              ">
								<div class="py-2 flex flex-col lg:flex-row lg:max-w-screen-lg not-lg:max-h-1">
									{#each page.subPages as subPage}
										<a
											href={subPage.path}
											class="block px-4 py-2 tex text-gray-700 text-sm hover:bg-gray-100 hover:text-black whitespace-nowrap"
											class:font-bold={activeSubPage === subPage.name}
											on:click={() => {
                        setActivePageAndCloseMobile(page.name, subPage.name);
                        expandedMenu = null;
                      }}
										>
											{#if activeSubPage === subPage.name}
												>
											{/if}
												{subPage.name}
										</a>
									{/each}
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</nav>
		</div>
	</div>
</header>