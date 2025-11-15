//importaciones 
//framework de node.js para crear el servidor
import express from "express";
//es para que no bloquee las peticiones
import cors from "cors";
//Es la libreria que conecta node.js con postgres


//sirve para las variables de entorno como el user la contraseña el puerto etc
import dotenv from "dotenv";

//importacion del pool

import pool from "./db/conexion.js";

//configuracion
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());





app.get("/", (req, res) =>{
    res.send("Servidor funcionando")
})

const PORT = process.env.PORT;
app.listen(PORT, ()=>{ console.log(`El servidor esta escuchando el puerto ${PORT}`)})
console.log(process.env.DB_USER);


app.get("/contactos" , async (req,res)=>{
    try {
        const result = await pool.query("select * from contactos")
        res.json(result.rows)
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener los contactos")
    }
})