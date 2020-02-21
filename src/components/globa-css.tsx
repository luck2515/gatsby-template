import React from "react"
import { createGlobalStyle } from "styled-components"

export const GlobalCSS = () => <Global />

const Global = createGlobalStyle`
    html {
        font-size: 62.5%;
        @font-face {
            font-family: 'Original Yu Gothic';
            font-weight: 100;
            src: local('Yu Gothic Medium');
        }
        @font-face {
            font-family: 'Original Yu Gothic';
            font-weight: 200;
            src: local('Yu Gothic Medium');
        }
        @font-face {
            font-family: 'Original Yu Gothic';
            font-weight: 300;
            src: local('Yu Gothic Medium');
        }
        @font-face {
            font-family: 'Original Yu Gothic';
            font-weight: 400;
            src: local('Yu Gothic Medium');
        }
        @font-face {
            font-family: 'Original Yu Gothic';
            font-weight: bold;
            src: local('Yu Gothic Bold');
        }
        body {
            /*overscroll-behavior-y: none;*/
            color: #09090f;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Hiragino Sans', 'Noto Sans CJK JP', 'Original Yu Gothic',
            'Yu Gothic', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol', 'Noto Sans Emoji';
            font-size: 1.6em;
            overflow-x: hidden;
            @media screen and (max-width: 768px) {
                font-size: 1.4em;
            }
            @media screen and (max-width: 480px) {
            }
        }
    }
`
