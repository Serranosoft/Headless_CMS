import React, { useEffect } from "react";
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import Loading from "./Loading";

function HeroHome({ state, actions }) {

    useEffect(() => {
        actions.source.fetch("/tag/top/?per_page=3");
    }, []); // [] Sirve cuando el componente se ha montado del todo, entonces hace el fetch

    const data = state.source.get("/tag/top/?per_page=3");

    if (data.isReady) {
        if (data.isTag) {
            const posts = data.items.map(({ type, id }) => state.source[type][id]);

            const media = state.source.attachment;
            return (
                <MainWrapper>
                    <HeroWrapper>
                        <Link link={posts[0].link} style={{ textDecoration: "none", gridArea: "hero2" }}>
                            <HeroItem bgImg={media[posts[0].featured_media].source_url}>
                                <h2 style={{ margin: "10px", fontSize: "16px", textAlign: "right" }}>{posts[0].title.rendered}</h2>
                            </HeroItem>
                        </Link>
                        <Link link={posts[1].link} style={{ textDecoration: "none", gridArea: "hero3" }}>
                            <HeroItem bgImg={media[posts[1].featured_media].source_url}>
                                <h2 style={{ margin: "10px", fontSize: "16px", textAlign: "right" }}>{posts[1].title.rendered}</h2>
                            </HeroItem>
                        </Link>

                        <Link link={posts[2].link} style={{ textDecoration: "none", gridArea: "hero1" }}>
                            <HeroItem bgImg={media[posts[2].featured_media].source_url}>
                                <h2 style={{ margin: "10px", fontSize: "28px", textAlign: "right" }}>{posts[2].title.rendered}</h2>
                            </HeroItem>
                        </Link>

                    </HeroWrapper>
                </MainWrapper>
            )
        }
    } else {
        return <Loading />
    }
}


const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 16px auto;
    padding: 0px 80px;

    @media (max-width: 768px) {
        padding: 0px 40px;
    }

    @media (max-width: 480px) {
        padding: 0px 16px;
    }
`

const HeroWrapper = styled.div`
    width: 100%;
    height: 400px;
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    "hero1 hero1 hero2"
    "hero1 hero1 hero3";
    justify-content: center;
    gap: 10px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 200px 200px 200px;
        grid-template-areas:
        "hero1"
        "hero2"
        "hero3";
        height: 650px;
        & a > div > h2 {
            font-size: 18px !important;
        }
    }

    @media (max-width: 480px) {
        a > div > h2 {
            font-size: 13px !important;
        }
    }
`

const HeroItem = styled.div({
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    border: "2px solid gray",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    fontSize: "16px",
    color: "white",
    boxShadow: "0 0 5px black",

}, props => ({ backgroundImage: `linear-gradient(rgba(0,0,0,0.30),rgba(0,0,0,0.40)), url(${props.bgImg})` }))


export default connect(HeroHome);