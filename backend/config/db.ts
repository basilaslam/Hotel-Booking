import mongoose from 'mongoose';
import { ConnectionOptions } from 'tls';
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'BookMe' // specify the desired database name here

        } as ConnectionOptions);
        console.log("Database is connected");
    } catch (error: any) {
        console.log(error.message);
    }
}

export default connectDB;