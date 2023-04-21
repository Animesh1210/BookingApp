const mongoose = require('mongoose');
const config = require('../config/database');
const User = require('./user');

const Schema = mongoose.Schema;

const HotelSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    // owner: { type: Schema.Types.ObjectId, ref: 'User' },
    owner: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // rating: {V 
    //     type: String,
    //     required: true,
    //     default: 0
    // }
});

const Hotel = module.exports = mongoose.model('Hotel', HotelSchema);

module.exports.getHotel = function(hotel, callback){
    const query = {_id: hotel};
    Hotel.findOne(query, callback);
}

module.exports.addHotel = async function(newHotel, callback){

   await newHotel.save(callback);
}
//for delete
module.exports.deleteHotel = function(hotel, callback){
    const query = {
        name: hotel
    };
    Hotel.remove(query, callback);
}

module.exports.updateHotel = function(id, hotel, callback){
    const query = {
        _id: id
    }
    const update = {
        name: hotel.name,
        location: hotel.location,
        description: hotel.description
    };
    const options = { upsert: false, new: false, setDefaultsOnInsert: true };    
    Hotel.updateOne(query, update, options, callback);
}