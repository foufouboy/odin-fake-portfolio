import ProjectCard from "./ProjectCard";
import projectsData from "../projects-data";
import styled from "styled-components";

const Main = () => {
    return (
        <MainStyled>
            <h2 className="my-work-title">My work</h2>
            <div className="projects">
                {projectsData.map((data, index) => (
                    <ProjectCard data={data} key={index}/>
                ))}
            </div>
        </MainStyled>
    );
};

const MainStyled = styled.main`
    display: flex;
    flex-flow: column;
    max-width: 1024px;
    margin: auto;
    padding: 80px 50px;
    box-sizing: content-box;
    gap: 25px;
    margin-bottom: 10px;

    .projects {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 35px;
    }

    h2 {
        font-weight: normal;
        font-size: 2rem;
    }

    @media (max-width: 650px) {
        padding-left: 20px;
        padding-right: 20px;

        h2 {
            text-align: center;
            font-size: 2.3rem;
        }
    }
`;

export default Main;
