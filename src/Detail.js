import React, { Component } from 'react'
import { Text, View, Container, Content, Button } from 'native-base'
import { Actions } from 'react-native-router-flux'


class Detail extends Component {

    render() {
        return (
            <Container>
                <Content contentContainerStyle={{marginTop:75}}>
                    <Text>This is Detail Page</Text>
                    <Button block primary onPress={()=>Actions.pop()}>
                        <Text>Go Back</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default Detail