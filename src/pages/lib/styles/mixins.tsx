import {MediaFunction, ThemeFunction} from "./types";
import {css} from "@emotion/react";
import {darken} from "polished";

export const withTablet: MediaFunction = (theme, defs) => css`
    @media (min-width: ${theme.media.tablet}) {
        ${defs}
    }

`
