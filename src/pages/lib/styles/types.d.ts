import {SerializedStyles, Theme} from "@emotion/react";

export type ThemeFunction = (theme: Theme) => SerializedStyles
export type MediaFunction = (theme: Theme, defs: SerializedStyles) => SerializedStyles
