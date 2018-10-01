import React, { Component } from 'react'
import { Text, View, Container, Content, Button } from 'native-base'
import { Actions } from 'react-native-router-flux'


class Home extends Component {

    render() {
        return (
            <Container>
                <Content contentContainerStyle={{marginTop:30}}>
                    <Text>This is Home Page</Text>
                    <Button block primary onPress={()=>Actions.detail()}>
                        <Text>Got To Detail</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default Home