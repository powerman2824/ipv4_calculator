import express, { request, response } from 'express';

let app = express();


app.use(express.static('src'));

app.listen(3232, () => {
    console.log("Server is listening on port 3232");
});