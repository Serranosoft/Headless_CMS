import React from "react";
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"

function ArchivePage({ state, link }) {
    const data = state.source.get(link)
    const media = state.source.attachment;
    return (
        <PostsWrapper>
            {data.items.map((item) => {
                const post = state.source[item.type][item.id]
                return (
                    <Link key={item.id} link={post.link} style={{ textDecoration: "none" }}>
                        <PostItem>
                            {post.featured_media > 0 && <img src={media[post.featured_media].source_url} />}
                            <PostInfo>
                                <h3>{post.title.rendered}</h3>
                                <p>{post.excerpt.rendered}</p>
                            </PostInfo>
                        </PostItem>
                    </Link>
                )
            })}
        </PostsWrapper>
    )
}

export default connect(ArchivePage);

const PostsWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 16px;
    margin: 16px auto;
    padding: 0 120px;
    
    @media (max-width: 768px) {
        padding: 0 60px;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    
    @media (max-width: 768px) {
        padding: 0 20px
    }
`

const PostItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #1c1c1c;
    
    & > img {
        width: 100%;
        height: 250px;
        border-top: 2px solid lightgray;
        border-left: 2px solid lightgray;
        border-right: 2px solid lightgray;
        padding: 1px;
    }`

const PostInfo = styled.div`
    padding: 16px 8px 8px 8px;
    background-color: white;
    border-bottom: 2px solid lightgray;
    border-left: 2px solid lightgray;
    border-right: 2px solid lightgray;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    
    & h3 {
        font-size: 16px;
    }
    & > p {
        color: #1c1c1c;
        font-size: 12px;
        margin-top: 8px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
`
