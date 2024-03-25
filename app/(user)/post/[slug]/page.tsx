import React from "react";
import groq from "groq";
import { client } from "../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../lib/urlFor";
import { Post } from "../../../../typings";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents";

type Props = {
	params: {
		slug: string;
	};
};

export const revalidate = 60; // 1 minute revalidation

// Generate static paths for all posts
export async function generateStaticParams() {
	// Groq query to get all slugs
	const query = groq`*[_type == 'post'] {slug}`;
	// Fetch all slugs
	const slugs: Post[] = await client.fetch(query);
	// Map all slugs to an array of strings
	const slugRoutes = slugs.map((slug) => slug.slug.current);
	// Return an array of objects with the slug key
	return slugRoutes.map((slug) => ({ slug }));
}

async function Post({ params: { slug } }: Props) {
	const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
        ...,
        author->,
        categories[]->
        }
        `;

	const post: Post = await client.fetch(query, { slug });

	return (
		<article className="px-10 pb-28">
			<section className="space-y-2 border-[--my-blue] text-white">
				<div className="relative min-h-56 flex-col md:flex-row justify-between">
					<div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
						<Image
							className="object-fit object-cover mx-auto"
							src={urlFor(post.mainImage).url()}
							alt={post.author.name}
							fill
						/>
					</div>

					<section className="p-5 bg-[] w-full">
						<div>
							<div>
								<h1 className="text-4xl font-extrabold">{post.title}</h1>

								<p>
									{new Date(post._createdAt).toLocaleDateString("en-US", {
										year: "numeric",
										month: "long",
										day: "numeric",
									})}{" "}
									by {post.author.name}
								</p>
							</div>
							<div className="flex items-center space-x-2">
								<Image
									className="rounded-full"
									src={urlFor(post.author.image).url()}
									alt={post.author.name}
									width={50}
									height={50}
								/>

								<div className="w-64">
									<h3 className="text-lg font-bold">{post.author.name}</h3>
									<div>
										{/* TODO: Portable Text Editor needed here... */}
										{/* {post.author.bio} */}
									</div>
								</div>
							</div>
						</div>

						<div>
							<h2 className="italic pt-10">{post.description}</h2>
							<div className="flex items-center justify-end mt-auto space-x-2">
								{post.categories.map((category) => (
									<p
										className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
										key={category._id}
									>
										{category.title}
									</p>
								))}
							</div>
						</div>
					</section>
				</div>
			</section>

			<PortableText value={post.body} components={RichTextComponents} />
		</article>
	);
}

export default Post;
