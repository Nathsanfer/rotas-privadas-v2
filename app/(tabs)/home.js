import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

export default function HomeScreen() {
    const { user } = useAuth();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>🫰</Text>
                <Text style={styles.title}>Bem-vindo(a)!</Text>
                <Text style={styles.userName}>{user?.name}</Text>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>✅ Voc~e está autenticado!</Text>
                    <Text style={styles.cardText}>
                        Esta é uma rota privada protegida pelo Expo Router.
                        Você só consegue acessar está tela porque fez login com sucesso.
                    </Text>
                </View>

                <View style={styles.infoCard}>
                    <Text style={styles.infoTitle}>🎯 Recursos Implementados: </Text>
                    <Text style={styles.infoItem}>Expo Router (navegação moderna)</Text>
                    <Text style={styles.infoItem}>AsyncStorage (persistência de dados)</Text>
                    <Text style={styles.infoItem}>Rotas privadas automáticas</Text>
                    <Text style={styles.infoItem}>Cadastro de Usuários</Text>
                    <Text style={styles.infoItem}>Login persistente</Text>
                    <Text style={styles.infoItem}>Validação de dados</Text>
                </View>

                <View style={styles.tipCard}>
                    <Text style={styles.tipTitle}>💡 Dica: </Text>
                    <Text style={styles.tipText}>
                        Sues dados ficam salvos mesmo se você fechar o app!
                        Use o botão "Sair" no perfil para fazer o logout.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    content: {
        padding: 20,
        paddingTop: 60,
        flex: 1,
    },
    emoji: {
        fontSize: 80,
        textAlign: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
        marginBottom: 10,
    },
    userName: {
        fontSize: 24,
        textAlign: 'center',
        color: '#007aff',
        marginBottom: 30,
        fontWeight: '600',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,        
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        textAlign: 'center',
    },
    cardText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        lineHeight: 20,
    },
    infoCard: {
        backgroundColor: '#e6f7ff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#b3e0ff'
    }
})