import Colors from '../../colors'
export default {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // height: Metrics.navBarHeight,
    // paddingTop: Metrics.smallMargin,
    // paddingHorizontal: 5,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: Colors.snow,
    marginTop: 20,
    // backgroundColor: Colors.transparent,
    fontWeight: 'bold',
    fontSize: 18
  },
  logo: {
    alignSelf: 'center',
    marginTop: 10,
    height: 45,
    width: 45
  },
  rightButtons: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  leftButtons: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  navbarBody: {
    flex:4,
    height: '100%',
    justifyContent: 'center'
  }
}
