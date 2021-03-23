import { styled } from "frontity"
import Link from "@frontity/components/link"

function Header() {
    return (
        <HeadImage>
            <HeadBg>
            <Link link="/">
                <Img src="https://wp.infoerrores.com/wp-content/uploads/2021/03/infoerrores-web.png" alt="Image Alt" />
            </Link>
                <SvgParent viewBox="0 0 1440 120">
                    <path
                        d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z" ></path>
                </SvgParent>
            </HeadBg>
        </HeadImage>
    )
}

export default Header

const HeadImage = styled.div`
    display: block;
    width: 100%;
    background-color: rgb(38,38,38);
    background-color: #54366d;
    height: 200px;
    margin: 0;
    position: relative;
    overflow: hidden;
    left: 0;
    text-align: center;

    @media (max-width: 550px) {
        height: 120px;
    }
    `

const HeadBg = styled.div`
    width: 100%;
    height: 100%;
    `

const SvgParent = styled.svg`
    width: 105vw;
    position: absolute;
    bottom: -50px;
    left: 0;
    z-index: 3;
    fill: #f1f1f1
`

const Img = styled.img`
    width: 80px;
    z-index: 9;
    margin-top: 24px;
`