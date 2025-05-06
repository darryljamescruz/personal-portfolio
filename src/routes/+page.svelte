<script lang="ts">
    const name = "Darryl James Cruz";
    const tagline = "Computer Science Student • Aspiring Full Stack Dev";
</script>

<section class="flex flex-col items-center justify-center min-h-screen text-center bg-[var(--color-bg)] text-[var(--color-text)]">
	<h1 class="text-4xl md:text-6xl font-bold mb-2">{name}</h1>
	<p class="text-lg md:text-2xl mb-8">{tagline}</p>
	<div class="flex gap-4">
		<a href="/projects" class="px-4 py-2 bg-[var(--color-accent)] text-white font-semibold rounded hover:opacity-90 transition">
			Projects
		</a>
		<a href="/contact" class="px-4 py-2 bg-[var(--color-accent)] text-white font-semibold rounded hover:opacity-90 transition">
			Contact
		</a>
		<a href="/resume.pdf" target="_blank" class="px-4 py-2 bg-[var(--color-accent)] text-white font-semibold rounded hover:opacity-90 transition">
			Resume
		</a>
	</div>
</section>
