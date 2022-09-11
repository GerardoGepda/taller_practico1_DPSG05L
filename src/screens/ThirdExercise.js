import React from 'react';
import {View, StyleSheet, Alert, ScrollView} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';

const ThirdExercise = () => {
    
    const [num1, setNum1] = React.useState(0);
    const [num2, setNum2] = React.useState(0);
    const [num3, setNum3] = React.useState(0);
    const [max, setMax] = React.useState(0);
    const [min, setMin] = React.useState(0);

    const handleMinMax = () => {
        const rgx = /^[0-9]*$/;
        let n1, n2, n3, max, min;

        if(!rgx.test(num1) || !rgx.test(num2) || !rgx.test(num3)){
            createButtonAlert("Debe introducir solo números enteros.");
        }else{
            n1 = parseInt(num1);
            n2 = parseInt(num2);
            n3 = parseInt(num3);

            if (n1 > n2) {
                if(n1 > n3){
                    max = n1;
                    if (n2 > n3) {
                        min = n3;
                    }else{
                        min = n2;
                    }
                }else{
                    max = n3;
                    min = n2;
                }
            }else{
                if(n2 > n3) {
                    max = n2;
                    if(n1 > n3){
                        min = n3;
                    }else{
                        min = n1;
                    }
                }else{
                    max = n3;
                    min = n1;
                }
            }

            //colocando las codiciones de sumar y restar dadas.
            max += min > 10 ? 10 : 0;
            min -= max < 50 ? 5 : 0;

            setMax(max);
            setMin(min);
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
                    setNum1(0);
                    setNum2(0);
                    setNum3(0);
                    setMax(0);
                    setMin(0);
                }
            }
        ]
    );

    return (
        <ScrollView style={styles.container}>
            <View style={{flex: 1, marginBottom: 20}}>
                <Text variant='titleLarge' style={styles.textTitle}>Número mayor y menor</Text>
                <Text variant='bodyMedium' style={{paddingBottom: 10,}}>
                    Introduza 3 números, para calcular cual será el mayor o el menor.
                    Al número mayor se le sumará 10, si el número menor es mayor a 10.
                    Al número menor se le restará 5, si el número mayor es menor a 50
                </Text>
                <TextInput label="Primer número" keyboardType='number-pad' value={num1} onChangeText={setNum1} style={styles.input}/>
                <TextInput label="Segundo número" keyboardType='number-pad' value={num2} onChangeText={setNum2} style={styles.input}/>
                <TextInput label="Tercer número" keyboardType='number-pad' value={num3} onChangeText={setNum3} style={styles.input}/>
                <Text variant='bodyLarge'>Resultados: </Text>
                <Text variant='bodyLarge' style={{marginTop: 10}}>
                    <Text style={{fontWeight: "700"}}>números ingresados: </Text> {num1}, {num2} y {num3}
                </Text>
                <Text variant='bodyLarge' style={{marginTop: 10}}>
                    <Text style={{fontWeight: "700"}}>número mayor = </Text> {max}
                </Text>
                <Text variant='bodyLarge' style={{marginTop: 10}}>
                    <Text style={{fontWeight: "700"}}>número menor = </Text> {min}
                </Text>
                <Button mode='contained' onPress={handleMinMax} style={{marginTop: 40}}>Calcular</Button>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    textTitle: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    input: {
        marginBottom: 20,
    }
});

export default ThirdExercise;
