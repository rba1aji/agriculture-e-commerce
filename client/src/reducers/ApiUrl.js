import prod1 from '../images/prod1.webp';
import prod2 from '../images/prod2.jpeg';
import prod3 from '../images/prod3.jpg';
import prod4 from '../images/prod4.jpg';
import prod5 from '../images/prod5.jpg';
import prod6 from '../images/prod6.jpeg';
import prod7 from '../images/prod7.jpg';
import prod8 from '../images/prod8.webp';

export const ApiUrl = process.env.NODE_ENV === 'production' ? 'https://agriecom.herokuapp.com' : 'http://localhost:5000';

export const prodImgUrl = () => {
    const randInt = parseInt(Math.floor(Math.random() * 7) % 7);
    return [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8][randInt];
}

export const ctgry = [
    {
        name: 'Fruits',
        img: 'https://images.unsplash.com/photo-1593642532972-7b8a1b3e3f9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1dHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        description: 'Fruits are the sweet and fleshy product of a tree or other plant that contains seed and can be eaten as food. Fruits are the means by which angiosperms disseminate seeds. Edible fruits, in particular, have propagated with the movements of humans and animals in a symbiotic relationship as a means for seed dispersal and nutrition; in fact, humans and many animals have become dependent on fruits as a source of food. Fruits account for a substantial fraction of the world\'s agricultural output, and some (such as the apple and the pomegranate) have acquired extensive cultural and symbolic meanings.'
    },
    {
        name: 'Vegetables',
        img: 'https://images.unsplash.com/photo-1593642532972-7b8a1b3e3f9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1dHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        description: 'Vegetables are parts of plants that are consumed by humans as food as part of a meal. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds. The alternate definition of vegetable, meaning "of or relating to plants," is also in common use and is applied to botany. The term vegetable is somewhat arbitrary, and largely defined through culinary and cultural tradition.'
    },
    {
        name: 'Grains',
        img: 'https://images.unsplash.com/photo-1593642532972-7b8a1b3e3f9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1dHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        description: 'A grain is a small, hard, dry seed, with or without an attached hull or fruit layer, harvested for human or animal consumption. Grains are a staple food in many cultures, and are the second most widely produced crop (after sugarcane). Grains are classified into two main groups: Cereals (grains that are used for food) and forage (grains that are used for fodder). Wheat, rice, oats, barley, rye, and corn (maize) are some of the most widely consumed grains. The term grain also refers to the seeds of certain other plant species, such as buckwheat, quinoa, amaranth, flax, and chia.'
    },
    {
        name: 'Food crops',
        img: 'https://images.unsplash.com/photo-1593642532972-7b8a1b3e3f9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1dHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        description: 'Food crops are plants that are grown for food. Food crops are usually grown in large quantities, and are used to feed a large number of people. Food crops are usually grown in large quantities, and are used to feed a large number of people. Food crops are usually grown in large quantities, and are used to feed a large number of people. Food crops are usually grown in large quantities, and are used to feed a large number of people. Food crops are usually grown in large quantities, and are used to feed a large number of people.'
    },
    {
        name: 'Feed crops',
        img: 'https://images.unsplash.com/photo-1593642532972-7b8a1b3e3f9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1dHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        description: 'Feed crops are plants that are grown for animal feed. Feed crops are usually grown in large quantities, and are used to feed a large number of animals. Feed crops are usually grown in large quantities, and are used to feed a large number of animals. Feed crops are usually grown in large quantities, and are used to feed a large number of animals. Feed crops are usually grown in large quantities, and are used to feed a large number of animals. Feed crops are usually grown in large quantities, and are used to feed a large number of animals.'
    },
    {
        name: 'Fertilizers',
        img: 'https://images.unsplash.com/photo-1593642532972-7b8a1b3e3f9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1dHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        description: 'Fertilizers are substances that are added to soil or to plant tissues to supply one or more plant nutrients essential to the growth of plants. Fertilizers are usually inorganic, either synthetic or naturally occurring. Fertilizers are usually inorganic, either synthetic or naturally occurring. Fertilizers are usually inorganic, either synthetic or naturally occurring. Fertilizers are usually inorganic, either synthetic or naturally occurring. Fertilizers are usually inorganic, either synthetic or naturally occurring.'
    },
    {
        name: 'Pesticides',
        img: 'https://images.unsplash.com/photo-1593642532972-7b8a1b3e3f9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1dHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        description: 'Pesticides are substances used to kill pests, including insects, plant pathogens, weeds, mollusks, birds, mammals, fish, nematodes, and microbes. Pesticides are usually chemical compounds. Pesticides are usually chemical compounds. Pesticides are usually chemical compounds. Pesticides are usually chemical compounds. Pesticides are usually chemical compounds.'
    }
];