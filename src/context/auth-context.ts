import { TAuthResponse } from "@/services/auth";
import { createContext } from "react";

export interface AuthContext {
    isAuth: boolean;
    token: string | null;
    user: TAuthResponse["data"] | null;
    signOut: () => void;
}

export const AuthContext = createContext<AuthContext | null>(null);
