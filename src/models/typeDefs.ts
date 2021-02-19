export {};
const {gql} = require("apollo-server-express")

const typeDefs = gql`
    type Query {
        trips(offset:Int, limit: Int):[Trip!]!
    }
    
    type Trip {
     id:ID!
     from:String!
     to:String!
    }
    
  
    input CreateTripInput{
     fromPlaceLongitude:Float!
     fromPlaceLatitude:Float!
     toPlaceLongitude:Float!
     toPlaceLatitude:Float!
    }
    
    type Mutation{
        createTrip(input:CreateTripInput!):Trip
    }
`

module.exports =typeDefs;