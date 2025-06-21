import { error } from '@sveltejs/kit';

export type PostMetaData = {
	title: string;
	date: Date;
};
export async function load({ params }): Promise<{ content: any; title: string; date: Date }> {
	try {
		const post = await import(`../${params.slug}.md`);
		const { title, date } = post.metadata as PostMetaData;
		const content = post.default;

		return {
			content,
			title,
			date
		};
	} catch (err) {
		console.log(`failed to load: ${params.slug}`, err);

		throw error(404, `post not found: ${params.slug}`);
	}
}
