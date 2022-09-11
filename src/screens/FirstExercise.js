import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';

const FirstExercise = () => {
    const [a, setA] = React.useState("");
    const [b, setB] = React.useState("");
    const [c, setC] = React.useState("");
    const [ecuacion, setEcuacion] = React.useState("Sin definir");
    const [x1, setX1] = React.useState("");
    const [x2, setX2] = React.useState("");

    const handleCalc = () => {
        let ecText = "";
        let coefA, coefB, coefC;
        coefA = parseInt(a, 10);
        coefB = parseInt(b, 10);
        coefC = parseInt(c, 10);

        if (isNaN(coefA) || isNaN(coefB) || isNaN(coefC)) {
            createButtonAlert("Valor introducido no valido, solo intruduzca enteros.");
        }else if(coefA === 0) {
            createButtonAlert("El coeficiente A no puede ser igual a cero.");
        }else{
            ecText = coefA < 0 ? "- " + coefA.toString() + "X^2" : coefA.toString() + "X^2";
            ecText += coefB < 0 ? "- " + coefB.toString() + "X" : " + " +  coefB.toString() + "X";
            ecText += coefC < 0 ? "- " + coefC.toString() : " + " +  coefC.toString();
            setEcuacion(ecText);
            calculate(coefA, coefB, coefC);
        }
    }

    const calculate = (a, b, c) => {
        let raiz;

        raiz = Math.pow(b, 2) - 4 * a * c;

        if (raiz < 0) {
            createButtonAlert("Se encontraron raices negativas, no hay solución real.");
        }else{
            setX1((-1*b + Math.sqrt(raiz))/(2*a));
            setX2((-1*b - Math.sqrt(raiz))/(2*a));
        }
    }

    const createButtonAlert = (msj) =>
    Alert.alert(
        "Error",
        msj,
        [
            {
                text: "Aceptar",
                onPress: () => {
                    setA("");
                    setB("");
                    setC("");
                    setEcuacion("Sin definir");
                    setX1("");
                    setX2("");
                }
            }
        ]
    );

    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Text variant='titleLarge' style={styles.textTitle}>Ecuación cuadrática</Text>
                <Text variant='bodyMedium' style={{paddingBottom: 10,}}>
                    Aplicación para calcular las raices con la ec. cuadrática.
                    Introduzca los coeficientes "A", "B" y "C".
                </Text>
                <TextInput label="Coef. A" keyboardType='number-pad' value={a} onChangeText={setA} style={styles.input}/>
                <TextInput label="Coef. B" keyboardType='number-pad' value={b} onChangeText={setB} style={styles.input}/>
                <TextInput label="Coef. C" keyboardType='number-pad' value={c} onChangeText={setC} style={styles.input}/>
                <Text variant='bodyLarge' style={{marginTop: 10, marginBottom: 20}}>
                    <Text style={{fontWeight: "700"}}>Tu ecuación</Text> {ecuacion}
                </Text>
                <Text variant='bodyLarge'>El resultado el es siguiente</Text>
                <Text variant='bodyLarge' style={{marginTop: 10}}>
                    <Text style={{fontWeight: "700"}}>X1 = </Text> {x1}
                </Text>
                <Text variant='bodyLarge' style={{marginTop: 5}}>
                    <Text style={{fontWeight: "700"}}>X2 = </Text> {x2}
                </Text>
                <Button mode='contained' onPress={handleCalc} style={{marginTop: 20}}>Calcular</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%',
    },
    textTitle: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    input: {
        marginBottom: 10,
    }
});

export default FirstExercise;
