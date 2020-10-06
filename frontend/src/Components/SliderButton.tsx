import * as React from "react";
import styled from "styled-components";

const Button = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 5%;
    height: 100%;
    color: white;

    &:hover {
        background-color: rgba(0, 0, 0, 0.452);
        color: rgb(128, 120, 120);
    }

    ${({ dir }) => (dir === ButtonDirection.LEFT ? "left:0" : "right:0")};
`;

const Icon = styled.i`
    transform: scale(2);
`;

export enum ButtonDirection {
    LEFT = "left",
    RIGHT = "right",
}

interface TButton {
    direction: ButtonDirection;
    clickHandler: (direction: ButtonDirection) => void;
}

const SliderButton: React.FC<TButton> = ({ direction, clickHandler }) => {
    return (
        <Button dir={direction} onClick={() => clickHandler(direction)}>
            {direction === ButtonDirection.LEFT ? (
                <Icon className="fas fa-chevron-left"></Icon>
            ) : (
                <Icon className="fas fa-chevron-right"></Icon>
            )}
        </Button>
    );
};

export default SliderButton;
