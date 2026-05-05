import React, { createContext, ReactNode, useContext, useState } from 'react';

type AuthState = {
  user: null | { name: string };
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthState>({
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<null | { name: string }>(null);

  const login = () => setUser({ name: 'Guest' });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
