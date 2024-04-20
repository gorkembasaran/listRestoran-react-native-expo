import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization : 'Bearer Egj6vHJaz-4t9JYnitTG979IABmv11Yd0PeFJYe2eyNYi8ahKaVhIWTYg14TM3qfo30q99lfS3nqWLn70q48zTl2AfpNLzRDmmSV_-3oFrzVCs0YYsqRXDA9teMjZnYx',

    },
})