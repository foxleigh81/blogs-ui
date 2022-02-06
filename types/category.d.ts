export default interface Category {
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