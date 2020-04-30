import React, { memo } from "react"
import { createGlobalStyle } from "styled-components"

export const GlobalCSS = memo(() => <Global />)

const Global = createGlobalStyle`
    body {
        background-color: #F5F5F5;
        color: #09090f;
        font-family: 'Lato', 'Noto Sans JP', 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
        overflow-x: hidden;
    }
`
