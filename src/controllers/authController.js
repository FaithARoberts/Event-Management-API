import {createNewUser, logInUser } from "../services/authServices.js";

export async function signUpHandler(req, res){
    const newUser = await createNewUser(req.body);

    res
    .status(201)
    .json({ message: `New user created and id of ${newUser.id}` });
}

export async function logInHandler(req, res){
    const accessToken = await logInUser(req.body);
    res.status(200).json({accessToken});

}