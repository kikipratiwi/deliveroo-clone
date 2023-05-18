import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const sanityClient = createClient({
    projectId: '1o9elwyi',
    dataset: 'production',
    useCdn: 'true',
    apiVersion: '2023-05-08',
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source) => builder.image(source);

// RUN THIS to add exception for localhost 3000 CORS policy
// sanity CORS add http://localhost:3000

export default sanityClient;
