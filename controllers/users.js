import { v4 as uuidv4 } from 'uuid';

let users =[];

export const createUser = (req,res) => {

    const user = req.body;

    users.push( {...user, id : uuidv4() });

    res.send(`User with the username ${user.firstname} added to database`);
}

export  const getUsers = (req,res) => {
    res.send(users);
    console.log(users);
    // res.send('Hello');
}

export const getUser = (req,res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id==id);

    res.send(foundUser);
}

export const deleteUser = (req,res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User with id ${id} deleted from db`);
}

export const updateUser = (req,res) => {
    const { id } = req.params;
    const { firstname , lastname ,age } = req.body;

    const user = users.find((user) => user.id ==id );

    if(firstname){
        user.firstname = firstname;
    }
    if(lastname){
        user.lastname = lastname;
    }
    if(age){
        user.age = age;
    }

    res.send(`User with id ${id} has been updated`);
}