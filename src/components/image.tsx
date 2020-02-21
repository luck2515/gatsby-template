import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FileConnection } from "../../types/graphql-types"
import Img from "gatsby-image"

interface Props {
  filename: string
}
// 画像ファイルパスをプロパティに取るようなコンポーネントを定義
export default ({ filename }: Props) => (
  // ページじゃないコンポーネントでもGraphQLが使えるように
  // StaticQueryタグを使う
  <StaticQuery
    query={graphql`
      {
        allFile {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid {
                  src
                  sizes
                  aspectRatio
                }
              }
            }
          }
        }
      }
    `}
    // 全画像情報がdataに代入されている
    render={data => {
      // 指定した画像ファイルパス（コンポーネントのプロパティ）と
      // 一致するgatsby-image用の情報を取得
      const image = data.allFile.edges.find(n => {
        return n.node.relativePath.includes(filename)
      })

      if (!image) return

      // Imgタグでgatsby-imageで最適化された画像を表示する
      const imageSizes = image.node.childImageSharp.fluid
      return <Img sizes={imageSizes} />
    }}
  />
)
