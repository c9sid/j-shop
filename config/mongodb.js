import mongoose from "mongoose";

const connectDB = async () => {

    try {
        if (mongoose.connection.readyState === 1) {
            console.log("DB Already Connected");
            return;
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected");
    } catch (error) {
        console.log("Error while connecting DB", error);
        process.exit(1);
    }
};

export default connectDB;