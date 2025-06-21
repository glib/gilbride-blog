import type { RequestHandler } from '@sveltejs/kit';
import { fetchAllMarkdownPosts } from '$lib/utils';
import { json, error } from '@sveltejs/kit';

export const GET: RequestHandler = async (): Promise<Response> => {
	try {
		const allPosts = await fetchAllMarkdownPosts();

		const sortedPosts = allPosts.sort((a, b) => {
			return new Date(b.meta.date).getDate() - new Date(a.meta.date).getDate();
		});
		return json(sortedPosts);
	} catch (err) {
		console.log(`failed to load markdown posts`, err);
		throw error(404, `markdown posts not found`);
	}
};
