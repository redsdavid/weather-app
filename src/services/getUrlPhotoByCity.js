import { image_unsplash_place_base, image_unsplash_key } from '../constants/api_url'


const getUrlPhotoByCity = (city) =>{
    return `${image_unsplash_place_base}?query=${city}&client_id=${image_unsplash_key}`;
}

export default getUrlPhotoByCity;