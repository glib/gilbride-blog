import type { PostMetaData } from './[slug]/+page.js';

export type Post = {
	path: string;
} & PostMetaData;

export const load = async ({ fetch }): Promise<{ posts: Post[] }> => {
	const response = await fetch(`api/posts`);
	const posts: Post[] = await response.json();

	return {
		posts
	};
};
