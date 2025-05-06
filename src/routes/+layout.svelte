<script lang="ts">
	import "../app.css"; // Import global Tailwind styles
import ThemeToggle from './ThemeToggle.svelte';
</script>

<!-- Navigation Bar -->
<nav class="bg-[var(--color-accent)] border-b shadow-sm sticky top-0 z-50 text-white">
	<div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
		<a href="/" class="text-xl font-bold">Darryl James Cruz</a>
		<div class="flex items-center gap-4">
			<a href="/projects" class="hover:text-accent">Projects</a>
			<a href="/classes" class="hover:text-accent">Class List</a>
			<a href="/about" class="hover:text-accent">About</a>
			<a href="/contact" class="hover:text-accent">Contact</a>
			<ThemeToggle />
		</div>
	</div>
</nav>

<!-- Page content -->
<main class="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
	<slot />
</main>