import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import voucher_codes from 'voucher-code-generator';
import UserModel from "../models/user.js";

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {

        const existingUser = await UserModel.findOne({ email });

        if(!existingUser) return res.status(404).json({ message: "User doesn't exist." });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong here :("});
    }
};

export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName, UID } = req.body;

    try {
        const existingUser = await UserModel.findOne({ email });

        if (existingUser) return res.status(400).json({ message: "User already exists." });

        if(password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match." });

        if(email.slice(-8) !== "ucla.edu") return res.status(400).json({ message: "Has to be ucla.edu email." });

        const hashedPassword = await bcrypt.hash(password, 12);

        const refCode = (voucher_codes.generate({ length: 6, count: 1, charset: voucher_codes.charset("alphanumeric") })).toString();

        const result = await UserModel.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`, UID, refCode, survey: [] });
        
        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" });

        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!"});

    }
};