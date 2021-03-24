import { connect, Global, css, Head } from "frontity";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Switch from "@frontity/components/switch"
import Home from "./components/Home";
import Post from "./components/Post"
import Page from "./components/Page";
import Loading from "./components/Loading"

const Root = ({ state }) => {
    const data = state.source.get(state.router.link)
    return (
        <>
            <Head>
                <title>Encuentra una solución a tus errores SIN RELLENO | Infoerrores</title>
                <meta
                    name="description"
                    content="Encuentra la solución a los errores mas comunes de Disney+, Netflix, streaming, videos, aplicaciones y juegos"
                />
                <meta name="google-site-verification" content="tbJ5sk6P8z9W6kea1e21xvu5ycQ8rpA2FSzkB_mdEys" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content="Encuentra la solución a los errores mas comunes de Disney+, Netflix, streaming, videos, aplicaciones y juegos" />
                <meta name="twitter:image" content="https://wp.infoerrores.com/wp-content/uploads/2021/03/infoerrores-web.png" />

                <meta name="og:title" content="Infoerrores | Encuentra la solución a tus errores" />
                <meta name="og:description" content="Encuentra la solución a los errores mas comunes de Disney+, Netflix, streaming, videos, aplicaciones y juegos" />
                <meta property="og:image" content="https://wp.infoerrores.com/wp-content/uploads/2021/03/infoerrores-web.png" />
                <meta name="og:image" content="https://wp.infoerrores.com/wp-content/uploads/2021/03/infoerrores-web.png" />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="550" />
                <meta property="og:url" content="https://infoerrores.com" />
                <meta property="og:type" content="website" />
                <script data-ad-client="ca-pub-1811963161030250" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            </Head>
            <Global
                styles={css`
                *,*::after,*::before {
                    box-sizing: border-box;
                    margin: 0;
                    padding:0;
                }
                
                html {
                    font-family: Tahoma, sans-serif;
                }
                body {
                    background: #f1f1f1;
                    color: #1c1c1c
                }
                a {
                    color: #54366d;
                    text-decoration: none;
                }
                h1, h2, h3, a {
                    font-weight: bold;
                }`


                }
            />
            <Header />
            <Switch>
                {/* <Loading when={data.isFetching} /> */}
                <Home when={data.isHome} />
                <Post when={data.isPost} />
                <Page when={data.isPage} />
            </Switch>
            <Footer />
        </>
    );
};


export default connect(Root)