import Colors from '../colors'


export default {
  drawer: {
    backgroundColor: Colors.snow,
    flex: 1
  },
  logoContainer: {
    paddingTop: 20,
    paddingHorizontal: 15,
    height: 160,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor:'red'
  },
  logo: {
    width: 50,
    height: 50
  },
  content: {
    backgroundColor: Colors.primary
  },
  itemText: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: 'bold'
  },
  appVersion: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    color: Colors.text,
    opacity: 0.5,
  },
  appVerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0
  },
  nameContainer: {
    marginTop: 10
  },
  userName: {
    fontSize: 15,
    color: Colors.lightText
  },
  companyName: {
    fontSize: 13,
    color: Colors.lightText
  },
  listItemIcon: {
    color: Colors.text,
    fontSize: 20,
    marginRight: 10
  },
  clockInContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%'
  }
}
