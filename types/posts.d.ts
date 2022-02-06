
interface ImageFormat {
    url: string;
    width: number;
    height: number;
    ext: string;
    hash: string;
    mime: string;
    name: string;
    path?: string;
    size: number;
    provider_metadata?: {
        public_id: string;
        resource_type: string;
    };
};

interface SiteAttributes {
    data: [
        {
            id: string;
            attributes: {
                name: string;
                description: string;
                url: string;
                site_code: string;
                created_at: string;
                updated_at: string;
                title: string;
            }
        }
    ]
}

interface CategoryAttributes {
    data: [
        {
            id: string;
            attributes: {
                name: string;
                created_at: string;
                updated_at: string;
                slug: string;
            }
        }
    ]
}


interface AuthorAttributes {
    data: [
        {
            id: string;
            attributes: {
                name: string;
                created_at: string;
                updated_at: string;
                full_name: string;
                alt_name: string;
                about: string;
            }
        }
    ]
}

interface HeroAttributes {
    data: {
        id: number;
        name: string;
        alternativeText: string;
        caption: string;
        width: number;
        height: number;
        formats: {
            thumbnail: ImageFormat;
            small?: ImageFormat;
            medium?: ImageFormat;
            large?: ImageFormat;
        };
            
    }
}

interface PostAttributes {
    title: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    allow_comments: boolean;
    tags?: Array<string>;
    excerpt: string;
    hero: HeroAttributes;
    categories: CategoryAttributes;
    sites: SiteAttributes;
    author: AuthorAttributes;
    canonical_site: SiteAttributes;
}

export default interface Post {
    id: number;
    attributes: PostAttributes
}