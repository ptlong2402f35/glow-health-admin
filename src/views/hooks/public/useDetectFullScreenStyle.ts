import { useState, useEffect } from "react";
import { matchPath, useLocation } from "react-router";

export default function useDetectFullScreenStyle() {

    const location = useLocation();
    const [ isFullScreen, setIsFullScreen ] = useState(checkMatchFullScreenPaths(location?.pathname || ""));

    useEffect(() => {
        setIsFullScreen(checkMatchFullScreenPaths(location?.pathname || ""));
    }, [location]);

    return {
        isFullScreen,
    };
}

export function checkMatchFullScreenPaths(pathName: string): boolean {
    return matchPath(pathName, [
        "/messenger",
        "/social",
    ]) ? true : false;
}