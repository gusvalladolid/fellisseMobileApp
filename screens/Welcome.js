import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {

    return (
        <LinearGradient
            style={styles.container}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={styles.contentContainer}>

                {/* content  */}

                <Text style={styles.heading}>Fellisse</Text>
                <Text style={styles.subHeading}>Fight their deepest fears.</Text>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>Inmerse yourself on the shoes of a</Text>
                    <Text style={styles.description}>Medium and get your job done.</Text>
                </View>

                <Button
                    title="Join Now"
                    onPress={() => navigation.navigate("Signup")}
                    style={styles.button}
                />

                <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>Already have an account ?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={styles.loginLink}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        paddingHorizontal: 22,
        width: "100%",
        alignItems: 'center',
    },
    heading: {
        fontSize: 50,
        fontWeight: '800',
        color: COLORS.white,
    },
    subHeading: {
        fontSize: 25,
        fontWeight: '800',
        color: "#A9A9A9",
    },
    descriptionContainer: {
        marginVertical: 22,
        alignItems: 'center',
    },
    description: {
        fontSize: 16,
        color: COLORS.white,
        marginVertical: 4,
    },
    button: {
        marginTop: 22,
        width: "100%",
    },
    loginContainer: {
        flexDirection: "row",
        marginTop: 12,
        justifyContent: "center",
        alignItems: 'center',
    },
    loginText: {
        fontSize: 16,
        color: COLORS.white,
    },
    loginLink: {
        fontSize: 16,
        color: COLORS.white,
        fontWeight: "bold",
        marginLeft: 4,
    },
});

export default Welcome;
