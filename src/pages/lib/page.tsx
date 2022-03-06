import {Head} from "../../lib/head";

export const Page = ({children, title}) => {
    return <>
        <Head>
            <title>{title}</title>
            <link rel="stylesheet" type="text/css" href={'css/styles.css'}/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
        </Head>
        {children}
    </>
};
