import Property from "../../models/Property.js";

//PRIVATE

let _propertyAPI = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/houses'
})

let _state = {
  properties: []
}

let _subscribers = {
  properties: []
}






//PUBLIC