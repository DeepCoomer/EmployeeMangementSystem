import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Home = () => {

    const [response, setResponse] = useState([]);

    const getEmployeeData = async () => {
        let res = await axios.get("http://localhost:8080/api/employees");
        setResponse(res.data);
    }
    
    useEffect(() => {
        getEmployeeData()
        // eslint-disable-next-line
    },[])

    return (
        <Container>
            <SideBar>
                <p>Dashboard</p>
            </SideBar>
            <StyledDiv>
                <p>Employee Information</p>
                <CustomTable>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Joining</th>
                    </tr>
                    {
                        response && response.map((employee) => {
                            return(
                                <tr key={employee.id}>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.contact}</td>
                                    <td>{employee.address}</td>
                                    <td>{employee.joining}</td>
                                </tr>
                            )
                        })
                    }
                </CustomTable>
            </StyledDiv>
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
    height: '90%',
    backgroundColor: '#F7F7F7',
    padding: "0px 15px",
    marginTop: 80,
    zIndex: 1,
    borderRadius: 5,
    p: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: 600,
        padding: '20px 30px',
        ":hover": {
            backgroundColor: 'blue',
            color: 'white',
            cursor: 'pointer',
            border: '1px solid transparent',
            borderRadius: 5
        }
    }
})

const StyledDiv = styled.div({
    backgroundColor: 'rgb(251,250,254)',
    borderRadius: 5,
    marginTop: 80,
    marginLeft: 270,
    width: '70%',
    height: '90%',
    padding: '40px 36px',
    p: {
        display: 'block',
        margin: '0px auto',
        fontSize: 25
    }
})

const CustomTable = styled.table`
  &&& {
    table,
    th,
    td {
      border-collapse: collapse;
    }
    th,
    td,
    tr {
      padding: 35px;
    }
    th {
      text-align: left;
    }
    table {
      width: 100%;
    }
}`


export default Home