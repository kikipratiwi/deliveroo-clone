import { ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

import { GET_CATEGORY } from '../queries';
import CategoryCard from './CategoryCard';
import sanityClient from '../sanity';

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        sanityClient
            .fetch(GET_CATEGORY)
            .then((data) => {
                setCategories(data);
            })
            .catch((err) => {
                console.error('error ', err);
            });
    }, []);

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        >
            {/* CategoryCard */}
            {categories.length > 0 &&
                categories.map(({ _id, name, image: imgUrl }) => {
                    return <CategoryCard key={_id} imgUrl={imgUrl} title={name} />;
                })}
        </ScrollView>
    );
}
