import React, { useEffect } from "react";
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import Loading from "./Loading";


function LastPosts({ state, actions }) {

    useEffect(() => {
        actions.source.fetch("/tag/top/?per_page=3");
    }, []);
    const data = state.source.get("/tag/top/?per_page=3");

    if (data.isReady) {
        if (data.isTag) {
            const posts = data.items.map(({ type, id }) => state.source[type][id]);

            const media = state.source.attachment;
            return (
                <MainWrapper>
                    <LastPostWrapper>
                        <Link link={posts[0].link} style={{ textDecoration: "none" }}>
                            <LastPostItem>
                                {posts[0].featured_media > 0 && <img src={media[posts[0].featured_media].source_url} />}
                                <h2>{posts[0].title.rendered}</h2>
                            </LastPostItem>
                        </Link>
                        <Link link={posts[1].link} style={{ textDecoration: "none" }}>
                            <LastPostItem>
                                {posts[1].featured_media > 0 && <img src={media[posts[1].featured_media].source_url} />}
                                <h2>{posts[1].title.rendered}</h2>
                            </LastPostItem>
                        </Link>
                        <Link link={posts[2].link} style={{ textDecoration: "none" }}>
                            <LastPostItem>
                                {posts[2].featured_media > 0 && <img src={media[posts[2].featured_media].source_url} />}
                                <h2>{posts[2].title.rendered}</h2>
                            </LastPostItem>
                        </Link>
                    </LastPostWrapper>

                </MainWrapper>
            )

        }
        
    } else {
        return <Loading />
    }

    return null

}

export default connect(LastPosts)

const MainWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    padding: 0 120px;

    @media (max-width: 768px) {
        padding: 0 60px;
    }
    @media (max-width: 550px) {
        display: none;
    }
`

const LastPostWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    margin: 24px 0px;
    gap: 16px;
    box-shadow: 0 0 10px black;
    padding: 16px;
    border-radius: 15px;
    background-color: white;

    @media (max-width: 480px) {
        grid-template-columns: 1fr 1fr;
        gap: 8px;
    }
`

const LastPostItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    & > img {
        width: 100%;
        height: 200px;
        margin: 8px 0;
        border-radius: 15px;
        border: 1px solid gray;
    }
    & > img:hover {
        border: 2px solid #54366d;
        box-shadow: 0 0 10px #54366d;
    }
    & > h2 {
        font-size: 14px;
        color: black;
        text-align: center;
    }
    & > h2:hover {
        color: #54366d;
    }

    @media (max-width: 480px) {
        img {
            height: 150px;
        }
        h2 {
            font-size: 12px;
        }
    }

`