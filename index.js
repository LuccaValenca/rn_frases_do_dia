import React, { Component } from 'react';
import { Text, View, AppRegistry, Image, TouchableOpacity, Alert} from 'react-native';

class App extends Component {
	constructor(props) {
	  super(props);
		this.gerarFrase.bind(this);
	}

	gerarFrase(){
		let numeroAleatorio = Math.random();
		numeroAleatorio = Math.floor( numeroAleatorio * 5 );

		let frases = Array();
		frases[0] = 'O sucesso normalmente vem para quem está ocupado demais para procurar por ele.';
		frases[1] = 'Para de perseguir o dinheiro e comece a perseguir o sucesso.';
		frases[2] = 'Oportunidades não surgem. É você que as cria.';
		frases[3] = 'A felicidade é uma borboleta que, sempre que perseguida, parecerá inatingível; no entanto, se você for paciente, ela pode pousar no seu ombro.';
		frases[4] = 'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.';

		let escolhida = frases[numeroAleatorio];

		Alert.alert('', escolhida);
	}

	render(){

		const { principal, botao, textoBotao } = estilos;
		return (
			<View style={ principal }>
				<Image source={ require('./imgs/logo.png') } />
				<TouchableOpacity onPress={ this.gerarFrase } style={ botao }>
					<Text style={ textoBotao } >Nova frase</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const estilos = {

	principal: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imagem: {
		justifyContent: 'flex-end',
		padding: 5,
	},
	botao: {
		backgroundColor: '#fff',
		paddingHorizontal: 40,
		paddingVertical: 10,
		borderWidth: 1.5,
		borderColor: '#538530',
		borderRadius: 40,
		margin: 20,
	},
	textoBotao: {
		color: '#538530',
		fontSize: 18,
		fontWeight: 'bold',
		alignSelf: 'center'
	}
};

AppRegistry.registerComponent('frases_do_dia', () => App);