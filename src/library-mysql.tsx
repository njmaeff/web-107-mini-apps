import express from "express"
import {LibraryPage} from "./pages/library.page";
import {renderStaticEmotion} from "./lib/render-static-emotion";
import {withMysql} from "./lib/db/connect-mysql";

const router = express.Router({})

router.get('/', async function (req, res) {
    await withMysql(async ({db}) => {
        const books = await db.query(`select *
                                      from library.Books`)
        const content = renderStaticEmotion(
            () => <LibraryPage books={books}/>
        )
        res.send(
            content
        );
    })
});

router.get(`/api/insert`, async (req, res) => {
    await withMysql(async ({db}) => {
        await db.query(`insert into library.Books (bookName)
                        values (?)`, [req.query.name])

        res.send();
    })
});

router.get(`/api/delete`, async (req, res) => {
    await withMysql(async ({db}) => {
        await db.query(`delete
                        from library.Books
                        where id = ?`, [req.query.id])
        res.send();
    })
});

router.get(`/api/update`, async (req, res) => {
    await withMysql(async ({db}) => {
        await db.query(`update library.Books
                        set bookName = ?
                        where id = ?`, [req.query.bookName, req.query.id])
        res.send();
    })
});

export default router
