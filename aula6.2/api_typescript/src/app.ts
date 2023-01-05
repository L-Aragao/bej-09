import express from "express";
import userRoutes from "./route/user.routes";

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(userRoutes);

app.listen(3333, ()=> console.log("Serviço online: \nlocalhost:3333/"));
