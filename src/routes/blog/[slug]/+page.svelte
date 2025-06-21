<script lang="ts">
	import type { PostMetaData } from './+page.ts';
	export let data: { content: any } & PostMetaData;
</script>

<article>
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>
	<svelte:component this={data.content} />
</article>
