import styled from "styled-components";
import GithubIcon from "../assets/github-original.svg";
import NewTabIcon from "../assets/open-in-new.svg";

const ProjectCard = ({data}) => {
    return (
        <StyledProjectCard>
            <img src={data.image} alt="project-image" className="project-image" />
            <div className="project-infos">
                <div className="name-and-links">
                    <h3>{data.name}</h3>
                    <a href={data.github}>
                        <img src={GithubIcon} alt="github-icon" />
                    </a>
                    <a href={data.live}>
                        <img src={NewTabIcon} alt="new-tab-icon" />
                    </a>
                </div>
                <p className="desc">{data.desc}</p>
            </div>
        </StyledProjectCard>
    );
};

const StyledProjectCard = styled.div`
    display: flex;
    flex-flow: column;
    box-shadow: 2px 2px 5px rgb(100, 100, 100, .5);
    border-radius: 7px;
    border-bottom: 5px solid #FFAA5B;

    .project-image {
        object-fit: cover;
        height: 250px;
        border-radius: inherit;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .project-infos {
        min-height: 150px;
        padding: 10px 20px;

        h3 {
            font-weight: normal;
            font-size: 1.3rem;
            margin-right: auto;
            padding-right: 30px;
        }

        p {
            font-size: 16px;
            color: rgb(0, 0, 0, .7);
            margin-bottom: 8px;
        }
    }

    .name-and-links {
        display: flex;
        margin-bottom: 15px;

        img {
            width: 22px;
            height: 22px;
        }

        a {
            padding-top: 7px;
        }

        a:last-child {
            margin-left: 15px;
        }
    }
`;

export default ProjectCard;