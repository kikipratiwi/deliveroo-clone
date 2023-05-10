export const GET_FEATURED = `
    *[_type == "featured"] {
        _id, 
        name, 
        short_description
    }
`;
