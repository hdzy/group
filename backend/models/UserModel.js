import mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        passwordHash: {
            type: String,
            required: true,
        },
        university: {
            type: String,
        },
        group: {
            type: String,
        },
        avatar: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('User', UserSchema);