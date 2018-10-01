import React, { Component } from 'react'
import {
  Scene,
  Router,
  Actions,
  ActionConst,
  Stack,
  Drawer
} from 'react-native-router-flux'
import Login from './src/Login'
import Home from './src/Home'
import Detail from './src/Detail'
import DrawerBar from './src/DrawerBar'
import Navbar from './src/Navbar'

class RootView extends Component {

  componentDidMount() {
    Actions.login()
  }
  render() {
    return <Router>
      <Stack key='root' hideNavBar navBar={Navbar}>
        <Scene key='login' component={Login} title='Login1' hideNavBar={false} type={ActionConst.RESET} />
        <Drawer key='drawerStack' contentComponent={DrawerBar} drawerWidth={300} type={ActionConst.RESET}>
          <Stack key='jobOverview' navBar={Navbar}>
            <Scene key='home' component={Home} title='Home' hideNavBar />
            <Scene back key='detail' component={Detail} title='Detail' />
          </Stack>
        </Drawer>
      </Stack>
    </Router>
  }
}

export default RootView