import React, { ReactNode, createContext, useMemo } from "react";
interface AppContextProps {
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
type Props = {
    children: ReactNode;
};

export const AppContextProvider: React.FC<Props> = ({ children }) => {
    console.log("AppContextProvider render")
    const contextContent: AppContextProps = {};

    return (
        <AppContext.Provider value={contextContent}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;