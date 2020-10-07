import express, { Express } from "express";
import router from "./routes";
import bodyParser from "body-parser";

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

const PORT: string | number = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server running on port " + PORT));
