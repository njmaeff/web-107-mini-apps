import express from "express"
import {renderStaticEmotion} from "./lib/render-static-emotion";

import bodyParser from "body-parser";
import libraryMongo from "./library-mongo";
import libraryMySQL from "./library-mysql";
import IndexPage from "./pages/index.page";

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

app.use('/library-mongo', libraryMongo)
app.use('/library-mysql', libraryMySQL)
app.get('/', (req, res) => {

    const content = renderStaticEmotion(
        () => <IndexPage/>
    )
    res.send(
        content
    );
});

app.listen(8080, () => console.log('app started on port http://localhost:8080') )
