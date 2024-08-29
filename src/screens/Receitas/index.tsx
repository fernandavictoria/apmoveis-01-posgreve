import { Text, TouchableOpacity, View, Image } from "react-native";
import { stylesglobal } from "../../styles/globalstyle"
import { styles } from "./styles"
import { MenuTabTypes } from "../../navigation/MenuBottomTab.navigation";


export function Receitas({ navigation }: MenuTabTypes) {
    return (
        <>
        <View style={stylesglobal.cabecalho}>
            <Text style={stylesglobal.textoTitulo}>Receitas</Text>
        </View>
        <View style={stylesglobal.caixaDeTexto}>
        <Text style={stylesglobal.textoConteudo}>Bateu aquela vontade de comer um docinho, né?</Text>
            <Text style={stylesglobal.textoConteudo}>Confira algumas receitas incríveis!</Text>
            <View style={styles.caixaImg}>
                <Image source={require('../../img/chef.png')} style={styles.img}/>
            </View>
        </View>

        <View style={styles.secao}>

            <View style={styles.caixaDeInformacao}>
                <View>
                    <Image source={require('../../img/arrozsalmao.png')} style={styles.img}/>
                </View>
                <View>
                    <Text>Niguiri</Text>
                </View>
            </View>

            <View style={styles.caixaDeInformacao}>
                <View>
                    <Image source={require('../../img/sushinamesa.png')} style={styles.img}/>
                </View>
                <View>
                    <Text>Niguiri com Salmão</Text>
                </View>
            </View>

            <View style={styles.caixaDeInformacao}>
                <View>
                    <Image source={require('../../img/sushimanteiga.png')} style={styles.img}/>
                </View>
                <View>
                    <Text>Sushi com Queijo</Text>
                </View>
            </View>
            
        </View>
        </>
    );
}