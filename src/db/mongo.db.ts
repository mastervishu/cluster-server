import { connect } from "mongoose"
import { MONGO_URI } from "../conf"

export const connectToMongo = async function(){
    try {
        const con =  await connect(MONGO_URI);
    } catch (error: unknown) {
        console.log(`Database connection failed : ${error}`)
        process.exit(1)
    }
}