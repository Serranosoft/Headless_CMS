import { styled } from "frontity"
import Link from "@frontity/components/link"

function Footer() {
    return (
        <FooterParent>
            <Link link="/politica-de-privacidad">
                <p>Política de Privacidad</p>
            </Link>
            <Link link="/">
                <Img src="https://wp.infoerrores.com/wp-content/uploads/2021/03/infoerrores-web.png" alt="Image Alt" />
            </Link>
            <Link link="/cookies">
                <p>Política de Cookies</p>           
            </Link>
        </FooterParent>
    )
}

export default Footer

const FooterParent = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 8px 0;
    background-color: #54366d;
    color: black !important;
    & > a {
        color: black !important;
    }
    & > a & p > {
        font-weight: bold;
        text-decoration: none;
    }
    & > a:hover {
        color: blue;
        text-decoration: underline;
    }
`

const Img = styled.img`
    width: 80px;
    height: 80px;
`