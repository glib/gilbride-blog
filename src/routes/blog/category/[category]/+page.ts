export const load = async ({ fetch, params }): Promise<object> => {
	const { category } = params;
	const response = await fetch('/api/posts');
	const allPosts = await response.json();
	const posts = allPosts.filter((post) => post.meta.categories.includes(category));
	console.log(posts.length);
	return { category, posts };
};
