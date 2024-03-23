import { Post } from "../typings";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";
import PostItem from "./PostItem";

type Props = {
	posts: Post[];
};

function BlogList({ posts }: Props) {
	return (
		<div>
			<hr className="border-[#f7ab0a] mb-10" />

			<div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gay-y-16 pb-24">
				{posts.map((post) => (
					// TODO: Refactor this to a functioning PostItem component
					<ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
						{/* <PostItem post={post} /> */}
						<div className="flex flex-col group cursor-pointer">
							<div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
								<Image
									className="object-cover object-left lg:object-center rounded-sm"
									src={urlFor(post.mainImage).url()}
									alt={post.author.name}
									fill
								/>
								<div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
									<div>
										<p className="font-bold">{post.title}</p>
										<p>
											{new Date(post._createdAt).toLocaleDateString("en-US", {
												day: "numeric",
												month: "long",
												year: "numeric",
											})}
										</p>
									</div>

									<div>
										{post.categories.map((category) => (
											<div
												key={category._id}
												className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
											>
												<p>{category.title}</p>
											</div>
										))}
									</div>
								</div>
							</div>

							<div className="mt-5 flex-1">
								<p className="underline text-lg font-bold">{post.title}</p>
								<p className="text-gray-500 line-clamp-2">{post.description}</p>
							</div>

							<p className="mt-5 font-bold flex items-center group-hover:underline">
								Read Post
								<ArrowUpRightIcon className="ml-2 h-4 w-4" />
							</p>
						</div>
					</ClientSideRoute>
				))}
			</div>
		</div>
	);
}

export default BlogList;
