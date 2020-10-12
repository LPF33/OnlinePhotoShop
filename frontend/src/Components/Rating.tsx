import * as React from "react";
import styled from "styled-components";

const Star = styled.span`
    color: yellow;
`;

interface TRating {
    rating: number;
}

const Rating: React.FC<TRating> = ({ rating }) => {
    return (
        <div>
            <Star>
                <i
                    className={
                        rating >= 1
                            ? "fas fa-star"
                            : rating >= 0.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </Star>
            <Star>
                <i
                    className={
                        rating >= 2
                            ? "fas fa-star"
                            : rating >= 1.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </Star>
            <Star>
                <i
                    className={
                        rating >= 3
                            ? "fas fa-star"
                            : rating >= 2.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </Star>
            <Star>
                <i
                    className={
                        rating >= 4
                            ? "fas fa-star"
                            : rating >= 3.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </Star>
            <Star>
                <i
                    className={
                        rating >= 5
                            ? "fas fa-star"
                            : rating >= 4.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                ></i>
            </Star>
        </div>
    );
};

export default Rating;
