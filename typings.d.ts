import { Reference } from "sanity"

type Base = {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
}

interface Post extends Base {
    author: Author;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    description: string;
}

interface Author extends Base {
    name: string;
    slug: Slug;
    image: Image;
    bio: Block[];
}

interface Image {
    asset: Reference;
    _type: "image";
}

interface Reference {
    _ref: string;
    _type: "reference";
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote"; 
}

interface Span { 
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface Category extends Base {
    title: string;
    description: string;
    slug: Slug;
}

interface MainImage {
    asset: Reference;
    _type: "image";
}

interface Title { 
    _type: "string";
    current: string;
}