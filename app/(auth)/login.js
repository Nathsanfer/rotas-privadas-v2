import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator
} from "react-native";
import { useAuth } from "../../contexts/AuthContext.js";
import { Link } from "expo-router";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { signIn } = useAuth();

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Erro", "Preencha todos os campos.");
            return;
        }

        setLoading(true);
        try {
            const result = await signIn(email, password);

            if (!result.success) {
                Alert.alert("Erro", result.message || "Falha ao fazer login.");
            } 
        } catch (error) {
            Alert.alert("Erro", "Falha ao fazer login.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            style={style.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={StyleSheet.content}>
                <Text style={styles.emoji}>🔐</Text>
                <Text style={styles.title}>Bem-vindo!</Text>
                <Text style={styles.subtitle}>Faça login para continuar</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    editable={!loading}
                />

                <TextInput 
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
                editable={!loading}
                />

                <TouchableOpacity 
                    style={[styles.button, loading && styles.buttonDisabled]}
                    onPress={handleLogin}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="#FFF" />
                    ): (
                        <Text style={styles.buttonText}>Entrar</Text>
                    )}    
                </TouchableOpacity>

                <View style={styles.registerContainer}>
                    <Text style={styles.registerText}>Não tem uma conta?</Text>
                    <Link href="/(auth)/register" asChild>
                        <TouchableOpacity disabled={loading}>
                            <Text style={styles.registerLink}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </Link>
                </View>

                <View style={styles.infoText}>
                    💡 Dica: Se não tiver conta, crie um nova!
                </View>

            </View>
        </KeyboardAvoidingView>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        padding: 20
    },
    emoji: {
        fontSize: 60,
        textAlign: "center",
        marginBottom: 20
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 8,
        color: "#333"
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 40,
        color: "#666"
    },
    input: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#ddd"
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
        minHeight: 50,
        justifyContent: "center"
    },
    buttonDisabled: {
        opacity: 0.6
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },
    registerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        alignItems: "center"
    },
    registerText: {
        color: "#666",
        fontSize: 14
    },
    registerLink: {
        color: "#007BFF",
        fontSize: 14,
        fontWeight: "bold",
    },
    infoText: {
        marginTop: 30,
        textAlign: "center",
        color: "#999",
        fontSize: 14,
        paddingHorizontal: 20
    }
})