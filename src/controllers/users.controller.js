const {Pool} = require('pg');

const pool = new Pool({
    host:'containers-us-west-116.railway.app',
    user:'postgres',
    password:'SjsP93ylHw1YakZwDuUd',
    database:'railway',
    port:'5692'
})

const eliminarUsersId = async ( req , res ) => {
    const id=req.params.id;
    const response = await pool.query('DELETE FROM users where id=$1',[id]);
    console.log(response.rows);
    res.json(`user ${id} usuario eliminado`);
 }

const getUsersId = async ( req , res ) => {
    const id=req.params.id;
    const response = await pool.query('select * from users where id=$1',[id]);
    console.log(response.rows);
    res.status(200).json(response.rows);
 }

 const UpdateUsers = async ( req , res ) => {
    const id=req.params.id;
    const {name , email} = req.body;
    const response = await pool.query('UPDATE users SET name=$1, email=$2 where id=$3',[name,email,id]);
    console.log(response);
    res.status(200).json('user actualizado');
 }

const getUsers = async ( req , res ) => {
   const response = await pool.query('select * from users');
   console.log(response.rows);
   res.status(200).json(response.rows);
}

const postUsers = async ( req , res ) => {
    const {nombre,telefono,instituto,correo,ocupacion,niveledu} = req.body;
    const response = await pool.query("INSERT into hola (nombre,telefono,instituto,correo,ocupacion,niveledu) VALUES ($1,$2,$3,$4,$5,$6)",[nombre,telefono,instituto,correo,ocupacion,niveledu]);
    console.log(response);
     res.json(
        {
            message:'User added Succesfully',
            body:{
                user:{nombre,telefono,instituto,correo,ocupacion,niveledu}
            },
            status:'200 exitoso'
        }
     );
}

module.exports = {
    getUsers,
    postUsers,
    getUsersId,
    eliminarUsersId,
    UpdateUsers
}