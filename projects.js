import blogImg from './public/fryblog.png';
import marketplaceImg from './public/house.marketplace.png';

export const projects = [
  {
    id: 1,
    header: 'My personal blog',
    description:
      'Creation of my personal blog, using Astro framework and Tailwindcss.',
    repo: 'https://github.com/Canfry/blog',
    website: 'https://fryblog.netlify.app',
    image: blogImg,
  },
  {
    id: 2,
    header: 'House Marketplace',
    description:
      'Creating a marketplace where you can manage sales or rent for your houses or apartements. You can create listings and users can contact you via email..',
    repo: 'https://github.com/Canfry/house_marketplace',
    website: 'https://house-marketplace-c6rw4cgq3-canfry.vercel.app/',
    image: marketplaceImg,
  },
];
