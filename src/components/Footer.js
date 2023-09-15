import styled from "styled-components";
import Phone from "./../assets/phone-outline.svg";
import Mail from "./../assets/mailbox-open-outline.svg"
import Github from "./../assets/github-original.svg"
import Codewars from "./../assets/codewars.svg";
import Lichess from "./../assets/lichess_logo.svg";
import FooterPhoto from "./../assets/cat12.jpeg";

const Footer = () => {
    return (
        <StyledFooter>
            <div className="inner-footer">
                <div className="contact-me">
                    <h2 className="contact-me-title">Contact me</h2>
                    <p>Please get in touch if you want your work to be ecs-cat-ic nyaaaaaa ! 🐱</p>
                    <p>
                        44 Avenue of the Cheshire,<br />
                        Loveydowytown, Catlifornia 56400
                    </p>
                    <span className="contact">
                        <img src={Phone} alt="phone-number"/>
                        <p>
                            564-0025-0978
                        </p>
                    </span>
                    <span className="contact">
                        <img src={Mail} alt="mail-contact" />
                        <p>
                            diogene.catoverflow@catmail.com
                        </p>
                    </span>
                    <span className="social-links">
                        <a href="#">
                            <img src={Github} alt="github-icon" />
                        </a>
                        <a href="#">
                            <img src={Codewars} alt="codewars-icon" />
                        </a>
                        <a href="#">
                            <img src={Lichess} alt="lichess-icon" />
                        </a>
                    </span>
                </div>
                <img src={FooterPhoto} className="last-photo" alt="last-photo"/>
            </div>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #5582b9;
    display: flex;
    justify-content: center;
    color: white;
    padding: 50px 60px;
    font-size: 18px;

    h2 {
        font-weight: normal;
        font-size: 2rem;
        margin-bottom: 15px;
    }


    .inner-footer {
        max-width: 1024px;
        display: grid;
        grid-template-columns: 2fr 3fr;
        gap: 50px;

        .last-photo {
            justify-self: end;
            width: 100%;
            height: 400px;
            object-fit: cover;
        }

        p {
            margin-bottom: 20px;
        }
    }

    span.contact {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 5px;

        p {
            margin-bottom: 0;
        }

        img {
            width: 25px;
        }
    }

    span.social-links {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-top: 15px;
        
        a > img {
            width: 35px;
            height: 35px;
        }
    }

    @media (max-width: 650px) {
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 0;
        
        .inner-footer {
            grid-template-columns: 1fr;

            .contact-me {
                padding: 0 15px;
            }

            h2 {
                text-align: center;
            }

            span.social-links {
                justify-content: center;
                gap: 30px;

                img {
                    height: 40px;
                    width: 40px;
                }
            }

            .last-photo {
                height: 450px;
            }
        }
    }
`

export default Footer;

