import * as React from "react";
import { LoadingElement, Text } from "../Style/Loading";

const Loading: React.FC = () => {
    return (
        <LoadingElement>
            <div className="loading-circle1">
                <div className="circle1"></div>
            </div>
            <div className="loading-circle2">
                <div className="circle2"></div>
            </div>
            <div className="loading-circle3">
                <div className="circle3"></div>
            </div>
            <div className="loading-circle4">
                <div className="circle4"></div>
            </div>
            <div className="loading-circle5">
                <div className="circle5"></div>
            </div>
            <Text>Loading...</Text>
        </LoadingElement>
    );
};

export default Loading;
