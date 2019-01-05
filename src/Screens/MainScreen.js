import React from 'react';
import { View, Image, TouchableWithoutFeedback, Text } from 'react-native';

class MainScreen extends React.Component {
    static navigationOptions = () => {
        return {
            title: "Home"
        }
    };
    render() {
        const { containerStyle, imageStyle, imageContainerStyle, nameContainerStyle, contentStyle, textStyle } = styles;
        return (
            <View style={containerStyle}>
                <View style={imageContainerStyle}>
                    <Image source={require('../img/background.jpg')} style={imageStyle} />
                </View>
                <View style={contentStyle}>
                    <View style={nameContainerStyle}>
                        <Text style={textStyle}>Anh Ngốc</Text>
                        <Text style={textStyle}>Bé Bi</Text>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text
                            style={{ color: 'red', fontSize: 24, fontStyle: 'italic', fontWeight: 'bold' }}
                        >200</Text>
                        <Image 
                            source={require('../img/airplane.jpg')}
                            style={{ height: 140, width: 140, resizeMode: 'contain' }}
                            />
                    </View>
                </View>
                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 20, alignItems: 'center' }}>
                    <TouchableWithoutFeedback><Text style={{ fontSize: 24 }}>Add New</Text></TouchableWithoutFeedback>
                </View>
               
            </View>
        );
        
    }
}
const styles = {
    containerStyle: {
        flex: 1,
    },
    imageStyle: {
        flex: 1,
        width: '90%',
        height: '90%',
        resizeMode: 'contain'
    },
    imageContainerStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameContainerStyle: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        marginStart: 20,
        marginEnd: 20,
    },
    contentStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold'
    }
}

export default MainScreen;