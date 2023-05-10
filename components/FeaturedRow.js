import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import { GET_FEATURED_RESTAURANT } from '../queries';
import sanityClient from '../sanity';

export default function FeaturedRow({ id, title, description }) {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        sanityClient
            .fetch(GET_FEATURED_RESTAURANT, { id })
            .then((data) => {
                setRestaurants(data?.restaurants);
            })
            .catch((err) => {
                console.error('error', err);
            });
    }, []);

    console.log(restaurants);

    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>

            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                className="pt-4"
            >
                {/* Restaurant Card */}
                {restaurants.length > 0 &&
                    restaurants.map(
                        ({
                            _id,
                            image: imgUrl,
                            title,
                            rating,
                            type: { name: genre },
                            address,
                            short_description,
                            dishes,
                            long,
                            lat,
                        }) => {
                            return (
                                <RestaurantCard
                                    key={_id}
                                    id={_id}
                                    imgUrl={imgUrl}
                                    title={title}
                                    rating={rating}
                                    genre={genre}
                                    address={address}
                                    shortDescription={short_description}
                                    dishes={dishes}
                                    long={long}
                                    lat={lat}
                                />
                            );
                        },
                    )}
            </ScrollView>
        </View>
    );
}
