import React, { Component } from 'react'
import { Text, View, Container, Content, Button } from 'native-base'
import { Actions } from 'react-native-router-flux'


class Login extends Component {

    render() {
        return (
            <Container>
                <Content contentContainerStyle={{marginTop:75}}>
                    <Text>This is Login Page</Text>
                    <Button block primary onPress={()=>Actions.drawerStack()}>
                        <Text>Got To Home</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default Login