import { Slot } from "expo-router";
import { AuthProvider } from '../contexts/AuthContext.js';

export default function RootLayout() {
    return (
        <AuthProvider>
            <Slot />
        </AuthProvider>
    );
}