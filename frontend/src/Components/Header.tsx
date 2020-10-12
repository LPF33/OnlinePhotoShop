import * as React from "react";
import { useLocation, useHistory } from "react-router-dom";

import styled from "styled-components";

const CompanyName = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 8vh;
    background-color: rgba(0, 0, 0, 0.74);
    border-right: 10px solid black;
    border-left: 10px solid black;
    z-index: 1;
`;

const Location = styled.ul`
    color: white;
    display: flex;

    & > li {
        display: inline-block;
        margin-left: 10px;
        text-shadow: 1px 1px white;
        color: rgb(165, 110, 110);
    }
`;

const Title = styled.h1`
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 10px;
    text-shadow: 2px 2px white;
    color: rgb(165, 110, 110);
`;

const TitleRight = styled.h1`
    position: absolute;
    top: 8vh;
    right: 1vh;
    transform: translateY(-50%);
    font-size: 1rem;
    display: flex;
    align-items: center;
    height: 30%;
    margin-left: 10px;
    text-shadow: 1px 1px white;
    color: rgb(165, 110, 110);

    @media screen and (min-width: 768px) {
        top: 4vh;
        transform: translateY(-50%);
        font-size: 2rem;
    }
`;

const Icon = styled.i`
    margin-right: 5px;
`;

const Header: React.FC = () => {
    const location = useLocation();
    const history = useHistory();

    const [path, setPath] = React.useState<string[]>([]);

    React.useEffect(() => {
        const pathArr = location.pathname
            .toLocaleUpperCase()
            .split("/")
            .slice(1);
        setPath(pathArr);
    }, [location]);

    return (
        <CompanyName>
            {location.pathname === "/" ? (
                <Title>ShopiHolic</Title>
            ) : (
                <>
                    <Location>
                        <div onClick={history.goBack}>
                            <i className="fas fa-chevron-circle-left"></i>
                        </div>
                        {path.length > 0 &&
                            path.map((item) => (
                                <li key={item}>
                                    <Icon className="fas fa-grip-lines-vertical"></Icon>
                                    {item}
                                </li>
                            ))}
                    </Location>
                    <TitleRight>ShopiHolic</TitleRight>
                </>
            )}
        </CompanyName>
    );
};

export default Header;
