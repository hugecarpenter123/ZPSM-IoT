import React from "react";
import useSplashScreen from "./hooks/useSplashScreen";
import AppContextProvider from "./context/ApplicationContext";
import MainScreenTabs from "./MainScreenTabs";

const AppBooter = (): React.JSX.Element => {
    const { SplashScreen, appInitialized } = useSplashScreen();
    return (
        <AppContextProvider>
            {
                appInitialized
                    ?
                    <MainScreenTabs />
                    :
                    <SplashScreen />
            }
        </AppContextProvider>
    )
}

export default AppBooter;