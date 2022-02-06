export default interface ImageFormat {
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