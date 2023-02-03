import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Nav>
            <Logo>
                <p>Employee Mangement System</p>
            </Logo>
        </Nav>
    )
}

const Nav = styled.nav({
    backgroundColor: 'white',
    height: '70px',
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '0 36px',
    zIndex: 3
})

const Logo = styled.a({
    padding: 0,
    marginTop: '4px',
    maxHeight: '70px',
    fontSize: 0,
    display: 'inline-block',
    marginRight: '752px',
    p: {
        fontSize: 24,
        color: 'black',
        fontWeight: 600
    }
})

export default Header