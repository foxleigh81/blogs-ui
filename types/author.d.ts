export default interface Author {
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