import {WithTheme} from "./lib/styles/theme";
import {Page} from "./lib/page";
import {Head} from "../lib/head";
import {Button, Card, Container, Form, FormGroup} from "react-bootstrap";
import {css} from "@emotion/react";

export const LibraryPage = ({books}) => WithTheme(() => {

    return <Page title={'Library | Main'}>
        <Head>
            <script type={'module'} src={'/js/library.js'}/>
        </Head>
        <header>
            <h1 className={'text-center'}>Library App</h1>
        </header>
        <main>
            <Container>
                <h2>Insert a book</h2>
                <Form>
                    <FormGroup>
                        <Form.Label>Book Name</Form.Label>
                        <Form.Control id={'bookName'} name="name" type="text"/>
                    </FormGroup>
                    <Button id={'insert-book'} className={'mt-3'} type="submit">Add
                        Book</Button>
                </Form>
            </Container>
        </main>
        <section>
            <Container>
                <h2>Available Books</h2>
                {books.map(book => <Card data-id={book.id} className={'mb-3'}
                                         key={book.id}>
                    <Card.Header>
                        <p>{book.bookName}</p>
                    </Card.Header>
                    <Card.Footer css={css`
                        button {
                            margin: 0 0.5rem;
                        }
                    `}>
                        <Button id={`update-${book.id}`}>Update</Button>
                        <Button id={`delete-${book.id}`}>Delete</Button>
                    </Card.Footer>
                </Card>)}
            </Container>
        </section>
    </Page>
});

export default LibraryPage;
