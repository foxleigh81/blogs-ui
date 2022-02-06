import ImageFormat from "./image-format";

export default interface Hero {
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
