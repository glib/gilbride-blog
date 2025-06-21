import type { PostMetaData } from '../../routes/blog/[slug]/+page';

export const fetchAllMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			} satisfies {
				meta: PostMetaData;
				path: string;
			};
		})
	);
	return allPosts;
};
