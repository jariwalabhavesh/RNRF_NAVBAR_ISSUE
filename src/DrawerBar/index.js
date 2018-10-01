import React from 'react'
import { Image } from 'react-native'
import { Content, ListItem, View, Text, Thumbnail, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome'

export default class DrawerBar extends React.Component {

  render() {
    const { codePushStore, deviceStore, authStore } = this.props
    return (
      <View style={styles.drawer}>
        <View style={styles.logoContainer}>
          <View style={styles.nameContainer}>
            <View>
              <Text style={styles.userName}>Jon Deo</Text>
            </View>
            <View>
              <Text style={styles.companyName}>Orange Pie</Text>
            </View>
          </View>
        </View>
        <Content style={styles.content} scrollEnabled={false}>
          <ListItem onPress={() => Actions.drawerStack()} iconLeft>
            <FontAwsomeIcon name='list-ul' style={styles.listItemIcon} />
            <Text style={styles.itemText}>Home</Text>
          </ListItem>
        </Content>
      </View>
    )
  }
}
