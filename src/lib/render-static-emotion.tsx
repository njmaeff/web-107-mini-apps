import {renderHeadStatic} from "./head";
import createEmotionServer from '@emotion/server/create-instance'


import {renderToString} from "react-dom/server";
import {CacheProvider} from "@emotion/react";
import createCache from "@emotion/cache";

const key = 'css'
const cache = createCache({key})
const renderToStaticMarkupEmotion = (Component) => {
    return renderToString(
        <CacheProvider value={cache}>
            <Component/>
        </CacheProvider>
    )
};


export const renderStaticEmotion = (Component) => {
    const {
        extractCriticalToChunks,
        constructStyleTagsFromChunks
    } = createEmotionServer(cache)

    const html = renderToStaticMarkupEmotion(
        Component
    )
    const chunks = extractCriticalToChunks(html)
    // remove emotion styles without any css
    chunks.styles = chunks.styles.filter((style) => !!style.css)
    const styles = constructStyleTagsFromChunks(chunks)

    const {head, bodyAttrs, htmlAttrs} = renderHeadStatic();

    return `
    <!DOCTYPE html>
    <html ${htmlAttrs}>
        <head>
            ${head}
            ${styles}
        </head>
        <body ${bodyAttrs}>
          ${html}
        </body>
    </html>
`;
};
