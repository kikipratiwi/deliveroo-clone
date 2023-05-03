import React from 'react';
import { ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

export default function Categories() {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        >
            {/* CategoryCard */}
            <CategoryCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing 1"
            />
            <CategoryCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing 2"
            />
            <CategoryCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing 3"
            />
            <CategoryCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing 3"
            />
            <CategoryCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing 3"
            />
            <CategoryCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing 3"
            />
            <CategoryCard
                imgUrl="https://links.papareact.com/gn7"
                title="Testing 3"
            />
        </ScrollView>
    );
}
