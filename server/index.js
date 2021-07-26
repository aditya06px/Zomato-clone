import express from "express";
import cors from "cors"; //cross origin request
import helmet from "helmet";

const zomato = express();

//application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet()); //security library
zomato.use(cors());

zomato.get("/", (req, res) => res.json({ message: "set up success" }));

zomato.listen(4000, () => console.log("server is running"));
