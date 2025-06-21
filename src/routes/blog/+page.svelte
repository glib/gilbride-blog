<script lang="ts">
	import type Post from './post.svelte';
	export let data: {
		posts: Post[];
	};
</script>

<ul>
	{#each data.posts as post (post)}
		<li>
			<h2>
				<a href={post.path}>{post.meta.title}</a>
			</h2>
			Published {post.meta.date}
		</li>
	{/each}
</ul>
