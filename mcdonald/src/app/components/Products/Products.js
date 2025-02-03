import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://mcdonald-s-products-api.p.rapidapi.com/us/products/200426',
  headers: {
    'x-rapidapi-key': '0117877c07msh6ca08cb6c65905bp12e44ajsn672de57d0d3b',
    'x-rapidapi-host': 'mcdonald-s-products-api.p.rapidapi.com'
  }
};

const fetchProducts = async () => {
    try {
	const response = await axios.request(options);
	console.log(response.data);
    return response.data;
    } catch (error) {
        console.error(error);
    }
}


const data = fetchProducts();

const links = [
    "https://corporate.mcdonalds.com/content/dam/gwscorp/assets/our-stories/media-assets-library/menu-items/big-mac.jpg", 
    "https://corporate.mcdonalds.com/content/dam/gwscorp/assets/our-stories/media-assets-library/menu-items/quarter-pounder-with-cheese.jpg", 
    "https://corporate.mcdonalds.com/content/dam/gwscorp/assets/our-stories/media-assets-library/menu-items/filet-o-fish.jpg", 
    "https://corporate.mcdonalds.com/content/dam/gwscorp/assets/our-stories/media-assets-library/menu-items/mcchicken.jpg", 
    "https://corporate.mcdonalds.com/content/dam/gwscorp/assets/our-stories/media-assets-library/menu-items/chicken-mcnuggets.jpg", 
    "https://corporate.mcdonalds.com/content/dam/gwscorp/assets/our-stories/media-assets-library/menu-items/world-famous-fries.jpg", 
    "https://corporate.mcdonalds.com/content/dam/gwscorp/assets/our-stories/media-assets-library/menu-items/egg-mcmuffin.jpg", 
    "https://corporate.mcdonalds.com/content/dam/gwscorp/assets/our-stories/media-assets-library/menu-items/sausage-mcmuffin-with-egg.jpg", 
    "https://corporate.mcdonalds.com/content/dam/gwscorp/assets/our-stories/media-assets-library/menu-items/hotcakes.jpg", 
    "https://corporate.mcdonalds.com/content/dam/gwscorp/assets/our-stories/media-assets-library/menu-items/apple-pie.jpg"
];

const fetchProductsImages = () => {
    const 
}


export default function Products() {
    return (
        <div></div>
    )
}