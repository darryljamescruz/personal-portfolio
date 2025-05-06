<script lang="ts">
	let dark = false;

    if (typeof window !== 'undefined') {
	const saved = localStorage.getItem('theme');
	if (saved) {
		dark = saved === 'dark';
	} else {
		dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	}
	updateTheme();
}

	function toggleTheme() {
		dark = !dark;
		updateTheme();
		localStorage.theme = dark ? 'dark' : 'light';
	}

	function updateTheme() {
		const html = document.documentElement;
		if (dark) {
			html.classList.add('dark');
		} else {
			html.classList.remove('dark');
		}
	}
</script>

<!-- Theme toggle switch with smooth animation and emoji crossfade -->
<button
	on:click={toggleTheme}
	aria-label="Toggle dark mode"
	class="w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full px-1 relative transition-colors duration-300"
>
	<!-- Sun and moon icons fade depending on theme -->
	<span
		class="absolute left-1 text-yellow-500 text-sm transition-opacity duration-300"
		class:opacity-0={dark}
		class:opacity-100={!dark}
	>
		🌞
	</span>
	<span
		class="absolute right-1 text-white text-sm transition-opacity duration-300"
		class:opacity-100={dark}
		class:opacity-0={!dark}
	>
		🌙
	</span>

	<!-- Sliding toggle circle -->
	<div
		class="w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300"
		class:translate-x-8={dark}
	></div>
</button>