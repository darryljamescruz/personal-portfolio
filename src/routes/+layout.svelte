<script lang="ts">
	import "../app.css"; // Import global Tailwind styles
</script>

<!-- Navigation Bar -->
<nav class="bg-white border-b shadow-sm sticky top-0 z-50">
	<div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
		<a href="/" class="text-xl font-bold text-gray-900">Darryl James Cruz</a>
		<div class="space-x-4">
			<a href="/projects" class="text-gray-600 hover:text-blue-500 font-medium">Projects</a>
			<a href="/classes" class="text-gray-600 hover:text-blue-500 font-medium">Class List</a>
			<a href="/about" class="text-gray-600 hover:text-blue-500 font-medium">About</a>
			<a href="/contact" class="text-gray-600 hover:text-blue-500 font-medium">Contact</a>
		</div>
	</div>
</nav>

<!-- Page content -->
<main class="min-h-screen">
	<slot />
</main>