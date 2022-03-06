require('dotenv').config()
import {Db, MongoClient} from "mongodb";
// Connection URL
const client = new MongoClient(process.env.MONGO_HOST);

export const withMongo = async (fn: ({db}: { db: Db }) => Promise<any>, dbName: string) => {
    await client.connect()
    try {
        await fn({db: client.db(dbName)})
    } finally {
        await client.close();
    }

};

export class MongoDB {

    async use(fn: ({db}: { db: Db }) => Promise<any>) {
        await client.connect()
        try {
            await fn({db: client.db(this.db)})
        } finally {
            await client.close();
        }
    }

    constructor(private db: string) {

    }
}
