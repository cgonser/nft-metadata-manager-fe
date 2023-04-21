import React, { createContext, useState } from "react";

type AuthContextType = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
};

export const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {},
});

export const AuthProvider: React.FC = (props) => {
  const { children } = props;
  const [token, setToken] = useState<string | null>(
    () =>
      typeof window !== "undefined" && window.localStorage.getItem("jwt_token")
  );

  const value: AuthContextType = {
    token,
    setToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
