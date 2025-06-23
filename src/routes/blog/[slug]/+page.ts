import { error } from '@sveltejs/kit';

export type PostMetaData = {
	title: string;
	date: Date;
	categories: string[];
};
export async function load({
	params
}): Promise<{ content: any; title: string; date: Date; categories: string[] }> {
	try {
		const post = await import(`../${params.slug}.md`);
		const { title, date, categories } = post.metadata as PostMetaData;
		const content = post.default;

		return {
			content,
			title,
			date,
			categories
		};
	} catch (err) {
		console.log(`failed to load: ${params.slug}`, err);

		throw error(404, `post not found: ${params.slug}`);
	}
}
