import { Router } from "express";
import pool from "../db/conexion.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("select * from contactos");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los contactos");
  }
});

router.post("/", async (req, res) => {
  try {
    const { nombre, telefono } = req.body;

    const result = await pool.query(
      "INSERT INTO contactos (nombre,telefono) VALUES ($1,$2 ) RETURNING *",
      [
        nombre, telefono]
    );
    res.json({ mensaje: "Contacto creado", contacto: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al guardar contactos");
  }
});

export default router;
