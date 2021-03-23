import React from "react";
import { connect } from "frontity"
import HeroHome from "./HeroHome"
import { useArchiveInfiniteScroll } from "@frontity/hooks";
import Loading from "./Loading";
import ArchivePage from "./ArchivePage";
import LastPosts from "./LastPosts";


function Home({ state, actions }) {
    const {
        pages,
        isFetching,
        isLimit,
        isError,
        fetchNext,
    } = useArchiveInfiniteScroll({ limit: 3 });

    return (
        <>
            <HeroHome />
            {/* <h3 style={{textAlign: "center", fontSize: "34px"}}>Lo mas interesante</h3> */}
            <LastPosts />
            <>
                {pages.map(({ Wrapper, key, link, isLast }) => (

                    <Wrapper key={key}>
                        <ArchivePage link={link} />
                        {!isLast}
                    </Wrapper>
                ))}
                {isFetching && <Loading />}
                {(isLimit || isError) && (
                    <button onClick={fetchNext}>
                        {isError ? "Something failed - Retry" : "Load More"}
                    </button>
                )}

            </>
        </>
    )

}

export default connect(Home)