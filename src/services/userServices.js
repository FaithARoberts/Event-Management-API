import * as userRepository from '../repositories/userRepo.js';

export async function getAllUsers() {
    return await userRepository.getAll();
}

export async function getCurrentUser(){

}

export async function getUserTickets(){

}

export async function getUserEvents(){
    
}

export async function updateCurrentUser(userInfo){

}

export async function deleteUser(){
    return await userRepository.remove(id);
}