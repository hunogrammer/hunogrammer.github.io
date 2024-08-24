<script>
	export let onClick;
	export let variant = 'default';
	export let size = 'md';
	export let className = '';

	const baseStyle = 'font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500';
	const variants = {
		default: 'bg-yellow-400 text-gray-900 hover:bg-yellow-500',
		ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
	};
	const sizes = {
		sm: 'px-2 py-1 text-sm',
		md: 'px-4 py-2',
		lg: 'px-6 py-3 text-lg',
	};
</script>

<button
	class={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
	on:click={onClick}
>
	<slot />
</button>
