import { useRoutes } from "react-router-dom";
import { routesConfigs } from "../configs/routers.config";

export const RoutesWrapper = () => {
    const elements = useRoutes(routesConfigs);

    return (
        <>{elements}</>
    );
};
