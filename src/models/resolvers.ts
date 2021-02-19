export {};

const Trip = require('./TripSchema')
const coordinatesToPlacename = require("../geocoding")

type createTripInputType = {
    input :{
        fromPlaceLongitude: number
        fromPlaceLatitude: number
        toPlaceLongitude: number
        toPlaceLatitude: number
    }
}


const resolvers = {

    Mutation: {
        createTrip: async (_:any, {input}:createTripInputType) =>{
            let from = await coordinatesToPlacename(input.fromPlaceLongitude,input.fromPlaceLatitude)
            let to = await coordinatesToPlacename(input.toPlaceLongitude,input.toPlaceLatitude)
            const trip = new Trip({from,to})
            await trip.save()
            return trip
        }
    }
}

module.exports = resolvers;