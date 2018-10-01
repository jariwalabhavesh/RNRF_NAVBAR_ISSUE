import { StyleSheet } from 'react-native'
import Colors from '../../colors'

const navButton = {
  backgroundColor: Colors.transparent,
  justifyContent: 'center'
}

export default StyleSheet.create({
  backButton: {
    ...navButton,
    marginTop: 10,
    marginLeft: 10
  },
  searchButton: {
    ...navButton,
    marginTop: 25,
    marginRight: 10,
    alignItems: 'center'
  },
  leftButton: {
    justifyContent: 'center',
    paddingTop:8
  },
  icons:{
    fontSize:20,
    color:Colors.text
  }
})
