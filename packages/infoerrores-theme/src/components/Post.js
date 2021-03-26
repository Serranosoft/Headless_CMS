import React from "react"
import { connect, styled, Head } from "frontity"
import AdSense from 'react-adsense';

function Post({ state, libraries }) {

    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const media = state.source.attachment;
    const Html2React = libraries.html2react.Component

    return (
        <>
            <Head>
                <title>{post.title.rendered}</title>
                <meta name="description" content={post.excerpt.rendered} />
            </Head>

            <PostWrapper>
                {/* <AdSense.Google
                    client='ca-pub-1811963161030250'
                    slot='7706157488'
                /> */}

                <PostInfo>
                    <h1>{post.title.rendered}</h1>
                    {post.featured_media > 0 &&
                        <img
                            src={media[post.featured_media].source_url}
                            style={{ maxHeight: "350px" }} />}
                    {/* <AdSense.Google
                        client='ca-pub-1811963161030250'
                        slot='7706157488'
                    /> */}
                    <Html2React html={post.content.rendered} />
                </PostInfo>
            </PostWrapper>
        </>
    )
}

export default connect(Post);

const PostWrapper = styled.div`
    max-width: 670px;
    width: 670px;
    margin: 24px auto;

    @media (max-width: 480px) {
        max-width: 350px;
        width: 350px;
        padding: 8px;
    }
`
const PostInfo = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * {
    color: #1c1c1c;
  }
  & > h1 {
      font-size: 46px;
      margin-top 8px;
      margin-bottom: 24px;
      text-shadow: 2px 2px 1px rgba(0,0,0,0.25);
  }

  & > h2 {
      font-size: 26px;
      margin: 8px 0;
  }
  & > p {
    margin: 16px 0;
    line-height: 2;
    font-size: 19px;
  }
  & > .has-background {
      padding: 8px 24px;
      box-shadow: 5px 3px 10px black;
      background-color: #a18594;
      border-radius: 8px;
  }
  & > ul > li {
      font-size: 19px;
      color: #1c1c1c;
      font-weight: bold;
      line-height: 1.5;
  }
  & > ul > li::marker {
      font-size: 28px;
      color: #54366d;
  }
  & > img, figure, .wp-block-image {
      max-width: 750px;
      text-align: center;
  }
  & > .wp-block-image figure img {
      max-width: 750px;
      text-align: center;
  }
  & > figure img {
      max-width: 750px;
      text-align: center;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 32px;
    }
    img, figure, .wp-block-image {
      max-width: 320px;
      max-height: 320px;
      text-align: center;
    }
    .wp-block-image figure img {
      max-width: 320px;
      max-height: 320px;
      text-align: center;
    }
    figure img {
      max-width: 320px;
      max-height: 320px;
      text-align: center;
    }
  }
`