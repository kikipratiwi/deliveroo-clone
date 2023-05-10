export const GET_FEATURED_RESTAURANT = `
    *[_type == "featured" && _id == $id] {
        restaurants[]->{
            ...,
            dishes[]->,
            type->{
                name
            }
        },
    }[0]
`;
