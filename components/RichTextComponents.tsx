import React from "react";
import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";

export const RichTextComponents = {
	types: {
		image: ({ value }: any) => {
			return (
				<div>
					<Image
						className="object-contain"
						src={urlFor(value).url()}
						alt="Blog Post Image"
						fill
					/>
				</div>
			);
		},
	},
	list: {
		bullet: ({ children }: any) => {
			return <ul className="ml-10 py-5 space-y-5">{children}</ul>;
		},
		ordered: ({ children }: any) => {
			return <ol className="ml-10 py-5 space-y-5">{children}</ol>;
		},
		number: ({ children }: any) => {
			return <ol className="mt-lg list-decimal">{children}</ol>;
		},
	},
	block: {
		h1: ({ children }: any) => {
			return <h1 className="text-5xl py-10 font-bold">{children}</h1>;
		},
		h2: ({ children }: any) => {
			return <h2 className="text-4xl py-10 font-bold">{children}</h2>;
		},
		h3: ({ children }: any) => {
			return <h3 className="text-3xl py-10 font-bold">{children}</h3>;
		},
		h4: ({ children }: any) => {
			return <h4 className="text-2xl py-10 font-bold">{children}</h4>;
		},
		h5: ({ children }: any) => {
			return <h5 className="text-xl py-10 font-bold">{children}</h5>;
		},
		h6: ({ children }: any) => {
			return <h6 className="text-lg py-10 font-bold">{children}</h6>;
		},
		blockquote: ({ children }: any) => {
			return (
				<blockquote className="border-l-4 border-gray-600 pl-5 py-5 my-5">
					{children}
				</blockquote>
			);
		},
	},
	marks: {
		strong: ({ children }: any) => {
			return <strong className="font-bold">{children}</strong>;
		},
		em: ({ children }: any) => {
			return <em className="italic">{children}</em>;
		},
		underline: ({ children }: any) => {
			return <u>{children}</u>;
		},
		code: ({ children }: any) => {
			return <code className="bg-gray-200 p-1">{children}</code>;
		},
		link: ({ children, mark }: any) => {
			const rel = !mark.href.startsWith("/")
				? "noopener noreferrer"
				: undefined;
			return (
				<Link href={mark.href}>
					<a className="text-blue-500 hover:underline hover:decoration-black">
						{children}
					</a>
				</Link>
			);
		},
	},
};
