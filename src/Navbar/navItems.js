import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Button, Icon } from 'native-base'
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux'
import styles from './styles/navItemsStyles'

const openDrawer = () => {
  Actions.drawerOpen()
}

export default {
  backButton() {
    return (
      <Button transparent={true} onPress={() => Actions.pop()} style={styles.leftButton}>
        <FontAwsomeIcon name="chevron-left" style={styles.icons}/>
      </Button>
    )
  },

  hamburgerButton() {
    return (
      <Button transparent={true} onPress={openDrawer} style={styles.leftButton}>
        <FontAwsomeIcon name="bars" style={styles.icons}/>
      </Button>
    )
  },

  searchButton(callback) {
    return (
      <TouchableOpacity onPress={callback}>
        <Icon name='search'
          size={20}
          color='white'
          style={styles.searchButton}
        />
      </TouchableOpacity>
    )
  }

}
