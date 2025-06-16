import { createContext, useState, useMemo, useCallback } from "react";
import usersData from '../data/usuarios.json';

export const AuthContext = createContext(null);

export function AuthProvider ({ children }){
    
    const [user, setUser] = useState(null);

    const login = useCallback(( credentials ) => {
        try {
            const usuarioEncontrado = usersData.find( u => u.username === credentials.username && u.password === credentials.password);
            console.log("USER ENCONTRADO: ", usuarioEncontrado);
            
            if (usuarioEncontrado) {
                const { password, ...userSinPassword } = usuarioEncontrado;
                setUser(userSinPassword);
                return { success: true };
            }else{
                setUser(null);
                
                return { success: false, message: 'Credenciales invalidas' }
            }
        } catch (error) {
            console.log('El login ha fallado: ', error.message);
            setUser(null);

            return { success: false, message: 'Ocurrió un error al intentar logearse.' }
        }
    }, []);

    const logout = useCallback(() => {
        setUser(null);
    }, []);

    const authContextValue = useMemo(() => ({
        user,
        isAuthenticated: !!user,
        login,
        logout
    }), [user, login, logout]);


    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )

}