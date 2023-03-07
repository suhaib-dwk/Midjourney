import mongoose from 'mongoose';

const connectDB = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url)
        .then(() => console.log('connected to mongo'))
        .catch((err) => {
            console.error('failed to connect with mongo');
            console.error(err);
        });
};

export default connectDB;

// const connectDB = async (uri) => {
//     try {
//         await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log('MongoDB connected');
//     } catch (error) {
//         console.log(error);
//     }
// };

