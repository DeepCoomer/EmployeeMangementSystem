import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <Container>
            <SideBar>
                <p>Dashboard</p>
            </SideBar>
            <StyledForm>
                <h2>Add Employee</h2>
            </StyledForm>
        </Container>
    )
}

const Container = styled.div({
    display: 'flex',
    height: '95vh',
})

const SideBar = styled.div({
    position: 'fixed',
    width: '30vh',
    height: '100%',
    backgroundColor: '#F7F7F7',
    padding: "10px 15px",
    zIndex: 1,
    p: {
        fontSize: 18,
        color: 'black',
        marginTop: 100,
        ":hover": {
            backgroundColor: 'lightblue',
            color: 'white',
            cursor: 'pointer',
            padding: '20px 30px',
            border: '1px solid transparent',
            borderRadius: 5
        }
    }
})

const StyledForm = styled.div({
    backgroundColor: 'rgb(251,250,254)',
    borderRadius: 5,
    marginTop: 80,
    marginLeft: 300,
    width: '70%',
    height: '100%',
    padding: '10px 36px'
})


export default Home