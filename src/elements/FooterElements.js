import styled from "styled-components"

export const FooterWrapper = styled.footer`
    grid-column: 2 / span 12;
    min-height: 11.25rem;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
`

export const FooterSocialWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    & p {
        text-align: center;
        flex: 0 0 100%;
    }
`

export const FooterSocialIcons = styled.div`
    flex: 0 0 100;
    margin-buttom: 2rem;

    & img {
        height: 20px;
        padding: 0 1rem;
        transition: filter 0.3s ease;
    }

    & img:hover, img:focus {
        filter: brightness(50%);
    }
`