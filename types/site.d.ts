export default interface Site {
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