import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';

const SecondExercise = () => {

    const [salarioB, setSalarioB] = React.useState("");
    const [salarioN, setSalarioN] = React.useState(0);
    const [isss, setIsss] = React.useState(0);
    const [afp, setAfp] = React.useState(0);
    const [renta, setRenta] = React.useState(0);
    const [desc, setDesc] = React.useState(0);

    const handleCalcular = () => {
        const rgx = /^[1-9]\d*(\.\d+)?$/;
        if (rgx.test(salarioB)) {
            const salario = parseFloat(salarioB).toFixed(2);
            let descuentos = 0;
            setSalarioB(salario);
            setIsss((salario * 0.03).toFixed(2));
            setAfp((salario * 0.04).toFixed(2));
            setRenta((salario * 0.05).toFixed(2));
            descuentos = salario*(0.03 + 0.04 + 0.05);
            setDesc(descuentos.toFixed(2));
            setSalarioN((salario - descuentos).toFixed(2));
        }else{
            createButtonAlert("Introduzca una cantidad correcta.");
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
                    setSalarioB(0);
                    setSalarioN(0);
                    setIsss(0);
                    setAfp(0);
                    setRenta(0);
                    setDesc(0);
                }
            }
        ]
    );

    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Text variant='titleLarge' style={styles.textTitle}>Cálculo de salario neto</Text>
                <Text variant='bodyMedium' style={{paddingBottom: 10,}}>
                    Introduzca su salario base para calcular las deducciones de ISS, AFP, renta y su salario base.
                </Text>
                <TextInput label="Salario base" keyboardType='number-pad' value={salarioB} onChangeText={setSalarioB} style={styles.input}/>
                <Text variant='bodyLarge'>El resultado el es siguiente</Text>
                <Text variant='bodyLarge' style={{marginTop: 10}}>
                    <Text style={{fontWeight: "700"}}>Salario base = </Text> ${salarioB}
                </Text>
                <Text variant='bodyLarge' style={{marginTop: 10}}>
                    <Text style={{fontWeight: "700"}}>Descuento ISS = </Text> ${isss}
                </Text>
                <Text variant='bodyLarge' style={{marginTop: 10}}>
                    <Text style={{fontWeight: "700"}}>Descuento AFP = </Text> ${afp}
                </Text>
                <Text variant='bodyLarge' style={{marginTop: 10}}>
                    <Text style={{fontWeight: "700"}}>Descuento de renta = </Text> ${renta}
                </Text>
                <Text variant='bodyLarge' style={{marginTop: 10}}>
                    <Text style={{fontWeight: "700"}}>Descuentos totales = </Text> ${desc}
                </Text>
                <Text variant='bodyLarge' style={{marginTop: 10}}>
                    <Text style={{fontWeight: "700"}}>Salario neto = </Text> ${salarioN}
                </Text>
                <Button mode='contained' onPress={handleCalcular} style={{marginTop: 40}}>Calcular</Button>
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
        marginBottom: 20,
    }
});

export default SecondExercise;
