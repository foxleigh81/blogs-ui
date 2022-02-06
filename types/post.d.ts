import Author from "./author";
import Category from "./category";
import Hero from "./hero";
import Site from "./site";


export interface PostAttributes {
    title: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    allow_comments: boolean;
    tags?: Array<string>;
    excerpt: string;
    hero: Hero;
    categories: Category;
    sites: Site;
    author: Author;
    canonical_site: Site;
}

export default interface Post {
    id: number;
    attributes: PostAttributes
}