import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, LayoutAnimation } from 'react-native'
import { Header, Left, Right, Body, Content, Title } from 'native-base'
import NavItems from './navItems'
import styles from './styles/navBarStyles'
import colors from '../colors';

export default class NavBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showSearchBar: false
    }
  }

  showSearchBar = () => {
    this.setState({ showSearchBar: true })
  }

  cancelSearch = () => {
    this.setState({ showSearchBar: false })
    this.props.cancelSearch()
  }

  onSearch = (searchTerm) => {
    this.props.performSearch(searchTerm)
  }

  renderRightButtons() {
    if (this.state.showSearchBar) {
      return <View style={{ width: 30 }} />
    }
    return (
      <View style={styles.rightButtons}>
        {NavItems.searchButton(this.showSearchBar)}
      </View>
    )

  }

  renderLeftButtons() {
    if (this.props.index === 0 && (!this.props.parentIndex || this.props.parentIndex === 0)) {
      return (
        <Left>
          {NavItems.hamburgerButton()}
        </Left>
      )
    }
    return (
      <Left>
        {NavItems.backButton()}
      </Left>
    )

  }

  render() {
    const { title } = this.props
    // const state = this.props.navigationState
    // let selected = state.children[state.index]
    // while (selected.hasOwnProperty('children')) {
    //   state = selected
    //   selected = selected.children[selected.index]
    // }

    const containerStyle = [
      styles.container,
      // this.props.navigationBarStyle || null,
      // state.navigationBarStyle || null,
      // selected.navigationBarStyle || null
    ]

    return (

      <View style={containerStyle}>
        <Content scrollEnabled={false}>
          <Header style={{backgroundColor:colors.primary}}>
            {this.renderLeftButtons()}
            <Body style={styles.navbarBody}>
              {title && <Title>{title}</Title>}
            </Body>
            <Right />
          </Header>
        </Content>
      </View>
    )
  }
}

NavBar.propTypes = {
  navigationState: PropTypes.object,
  navigationBarStyle: PropTypes.object
}

