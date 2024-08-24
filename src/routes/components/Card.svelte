<script>
	export let className = "";
</script>

<div class="rounded-lg border bg-card text-card-foreground shadow-sm {className}">
	<slot />
</div>

<style>
	/* Any additional styles can be added here if needed */
</style>