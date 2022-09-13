import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const port = 8000;
const app = express();

app.use(bodyParser.json());
app.use(morgan("common"));

app.get('/', (req, res, next) => {
    res.json({
        message: "xin chao"
    })
})

app.listen(port, () => {
    console.log(`running at http://localhost:${port}`);
    
})