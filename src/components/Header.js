import styled from "styled-components";
import Profile from "../assets/cat2.jpeg";
import Background from "../assets/cat.jpeg";
import MobileBackground from "../assets/cat3.jpeg";
import CWIcon from "../assets/codewars.svg"
import GHIcon from "../assets/github-original.svg";
import LCIcon from "../assets/lichess_logo.svg";

const Header = () => {
    return (
        <StyledHeader>
            <div className="inner-header">
                <span className="photo-container">
                    <img src={Profile} alt="my-profile" className="profile-photo"/>
                    <h1>Diogene_</h1>
                </span>
                <div className="about-me">
                    <h2 className="about-me-title">
                        About me
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consectetur doloribus nam ipsum illo amet nemo, exercitationem nobis, debitis alias aut error dignissimos voluptates velit et iusto excepturi sit temporibus, fugit quasi quibusdam vero iste id magnam! Illo porro molestias quia eos modi obcaecati laborum. Modi repudiandae rerum expedita cupiditate!</p>
                    <span>
                        <a href="">
                            <img src={CWIcon} alt="codewars-link" />
                        </a>
                        <a href="">
                            <img src={GHIcon} alt="github-link" />
                        </a>
                        <a href="">
                            <img src={LCIcon} alt="lichess-link" />
                        </a>
                    </span>
                </div>
            </div>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-image: 
        linear-gradient(173.6deg, 
            rgb(50, 95, 278, .8) 65%, 
            rgb(150, 150, 150) 65%,
            white 66.5%),
            url(${Background});

    background-size: contain;
    padding: 50px 50px;
    padding-bottom: 0;
    display: flex;
    justify-content: center;

    h2 {
        font-weight: normal;
        font-size: 2rem;
    }

    p {
        color: rgba(0, 0, 0, .7);
    }

    .inner-header {
        max-width: 1024px;
        display: flex;
        align-items: center;
    }

    .about-me {
        background-color: white;
        padding: 25px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        box-shadow: 2px 2px 5px rgb(100, 100, 100, .5);
    }

    .profile-photo {
        width: 390px;
        height: 390px;
        object-fit: cover;
        box-shadow: 0 0 15px rgb(0, 0, 0, .5);
        z-index: 2;
    }

    span {
        display: flex;
        position: relative;
        gap: 13px;
        justify-content: end;
        
        img {
            width: 30px;
        }

        h1 {
            position: absolute; 
            font-weight: normal;
            font-size: 3.5rem;
            z-index: 3;
            bottom: 15px;
            left: 50%;
            transform: translateX(-50%);
            color: rgb(250, 250, 200);
            text-shadow: 3px 0 black;
            cursor: default;
        }
    }

    @media (min-width: 1900px) {
        background-image: 
            linear-gradient(to bottom, 
                rgb(50, 95, 278, .8),
                rgb(50, 95, 278, .8)),
                url(${Background});
        
        box-shadow: 0 2px 10px rgb(100, 100, 100);
    }


    @media (max-width: 950px) {
        background-size: contain;

        span h1 {
            font-size: 3.7rem;
        }
       
        .inner-header {
            flex-direction: column;
        }

        .photo-container {
        }

        .profile-photo {
            width: 100%;
            height: 450px;
        }

        .about-me {

            margin-top: 30px;
            padding-left: 0;
            padding-right: 0;
            font-size: 17px;
            text-align: center;
            
            h2 {
                font-size: 2.7rem;
            }

            p {
                padding: 0 8px;
            }

            span {
                justify-content: center;
                margin-top: 10px;
            }
        }

    }

    @media (max-width: 600px) {
        padding: 30px;
    }
`

export default Header;
