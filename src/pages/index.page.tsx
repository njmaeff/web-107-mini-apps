import {WithTheme} from "./lib/styles/theme";
import {Page} from "./lib/page";
import {Anchor, Container} from "react-bootstrap";

export const IndexPage = () => WithTheme(() => {

    return <Page title={'Library | Index'}>
        <header>
            <h1 className={'text-center'}>Library Mini Apps</h1>
        </header>
        <main>
            <Container className={'mt-5'}>
                <ul className={'text-center'}>
                    <li><Anchor href={'library-mysql'}>View Using MySQL</Anchor></li>
                    <li><Anchor href={'library-mongo'}>View Using MongoDB</Anchor></li>
                </ul>

            </Container>
        </main>
    </Page>
});

export default IndexPage;
