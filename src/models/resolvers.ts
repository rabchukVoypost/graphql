import {log} from "util";

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

type TripType = {
    id:string
    from:string
    to:string
}
type TripArgsType ={
    offset:number
    limit:number
}

const resolvers = {
    Query:{
        trips: async (_:any, args:TripArgsType):Promise<TripType[]> => {
            let trips = await Trip.find()
            args.offset ? trips = await Trip.find({_id:{$gt:trips[args.offset-1].id}}).limit(args.limit)
                : trips = await Trip.find().limit(args.limit)
            return trips
        }
    },
    Mutation: {
        createTrip: async (_:any, {input}:createTripInputType):Promise<TripType> =>{
            let from = await coordinatesToPlacename(input.fromPlaceLongitude,input.fromPlaceLatitude)
            let to = await coordinatesToPlacename(input.toPlaceLongitude,input.toPlaceLatitude)
            const trip = new Trip({from,to})
            await trip.save()
            return trip
        }
    }
}

module.exports = resolvers;