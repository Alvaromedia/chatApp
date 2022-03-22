import React, { Component } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Start extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      bgColor: this.backgroundColors.black,
    };
  }

  backgroundColors = {
    black: '#090C08',
    lightGray: '#474056',
    lightBlue: '#8A95A5',
    lightGreen: '#B9C6AE',
  };

  changeColor = selectedColor => {
    this.setState({ bgColor: selectedColor });
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/BackgroundImage.png')}
        style={styles.bgImg}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Chat App</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={text => this.setState({ name: text })}
              value={this.state.name}
              placeholder="Your name"
            />

            <View style={styles.colorSelection}>
              <Text style={styles.chooseBgColor}>
                Choose a Background Color
              </Text>

              <View style={styles.colorAvatars}>
                <TouchableOpacity
                  style={styles.black}
                  onPress={() => this.changeColor(this.backgroundColors.black)}
                ></TouchableOpacity>
                <TouchableOpacity
                  style={styles.lightGray}
                  onPress={() =>
                    this.changeColor(this.backgroundColors.lightGray)
                  }
                ></TouchableOpacity>
                <TouchableOpacity
                  style={styles.lightBlue}
                  onPress={() =>
                    this.changeColor(this.backgroundColors.lightBlue)
                  }
                ></TouchableOpacity>
                <TouchableOpacity
                  style={styles.lightGreen}
                  onPress={() =>
                    this.changeColor(this.backgroundColors.lightGreen)
                  }
                ></TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.button}
              title="Go to Chat"
              onPress={() =>
                this.props.navigation.navigate('Chat', {
                  name: this.state.name,
                  bgColor: this.state.bgColor,
                })
              }
            >
              <Text style={styles.buttonText}>Start chatting</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bgImg: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  title: {
    flex: 1,
    marginTop: 120,
    fontSize: 45,
    fontWeight: '600',
    color: '#fff',
  },

  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '44%',
    width: '88%',
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    margin: 15,
    height: 60,
    width: '88%',
    fontSize: 16,
    fontWeight: '300',
    color: 'rgba(117, 112, 131, 0.5)',
  },

  colorSelection: {
    width: '90%',
    margin: 15,
    padding: 10,
  },

  chooseBgColor: {
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
  },

  colorAvatars: {
    flexDirection: 'row',
    justifyContent: 'space-between', // FIXME: It is fixed now.
  },

  button: {
    height: '20%',
    width: '88%',
    borderWidth: 1,
    backgroundColor: '#757083',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },

  // Colors

  black: {
    backgroundColor: '#090C08',
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  lightGray: {
    backgroundColor: '#474056',
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  lightBlue: {
    backgroundColor: '#8A95A5',
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  lightGreen: {
    backgroundColor: '#B9C6AE',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
