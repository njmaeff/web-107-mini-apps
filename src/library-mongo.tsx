import express from "express"
import {LibraryPage} from "./pages/library.page";
import {renderStaticEmotion} from "./lib/render-static-emotion";

import {withMongo} from "./lib/db/connect-mongo";
import {ObjectId} from "mongodb";

const router = express.Router({});

router.get('/', async function (req, res) {

    await withMongo(async ({db}) => {
        const rawBooks = await db.collection('books').find({}).toArray()
        const books = rawBooks.map(book => ({...book, id: book._id.toString()}))
        const content = renderStaticEmotion(
            () => <LibraryPage books={books}/>
        )
        res.send(
            content
        );
    }, 'library')
});

router.get(`/api/insert`, async (req, res) => {
    await withMongo(async ({db}) => {
        await db.collection<{ bookName: string }>('books').insertOne({
            bookName: req.query.name as string
        })

        res.send();
    }, 'library')
});

router.get(`/api/delete`, async (req, res) => {
    await withMongo(async ({db}) => {
        await db.collection('books').deleteOne({
            _id: new ObjectId(req.query.id as string)
        })
        res.send();
    }, 'library')
});

router.get(`/api/update`, async (req, res) => {
    await withMongo(async ({db}) => {
        await db.collection('books').updateOne({
            _id: new ObjectId(req.query.id as string)
        }, {
            $set: {
                bookName: req.query.bookName
            }
        })
        res.send();
    }, 'library')
});

export default router
