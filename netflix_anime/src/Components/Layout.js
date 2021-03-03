import React, {Component} from 'react'
import { Button, Container } from 'rsuite';
import { Row, Col } from 'rsuite';

import {withRouter, BrowserRouter as Router, Route, link, NavLink, Switch, history, HashRouter} from 'react-router-dom'
import LogIn from './LogIn'
import SignUp from './SignUp'
import CheckForm from './SignUp'

import Hamburger from './Nav/Hamburger'
import SearchBar from './Nav/SearchBar'
import logo from '../Assets/logo.svg'


function Layout() {
    return (
        <React.Fragment>
            <Router>
            <div className='App' style={styles.divStyle}>

                <Container>

                    <Row style={styles.row}>
                        <Col lg={1} md={2} sm={2} style={{...styles.col, }}>
                            <Hamburger />    
                        </Col>
                        <Col lg={4} md={4} sm={4} style={{ ...styles.col, }}>
                            <img src={logo} alt="name+logo" style={styles.image} /> 
                        </Col>
                        <Col lg={3} md={2} sm={3} style={styles.col}></Col>
                        <Col lg={8} md={8} sm={8} style={{...styles.col,}}>
                            <SearchBar />
                        </Col>
                        <Col lg={4} md={2} sm={0} style={styles.col}></Col>
                        <Col lg={2} md={3} sm={3} style={styles.col}>
                            {/* <Button onClick ={() =>{props.history.push('/LogIn')}}  style={styles.buttonStyle}> LOG IN </Button> */}
                            
                                <div>
                                <Switch>
                                 <HashRouter path='/LogIn' component={LogIn}/>
                                </Switch>
                                <NavLink activeClassName='active' to='/LogIn'>
                                <Button style={styles.buttonStyle}>
                                   LOG IN
                                 </Button>
                                </NavLink>
                                </div>
                          
                        </Col>
                        <Col lg={2} md={3} sm={3} style={styles.col}>
                            
                            <NavLink activeClassName='active' to='/SignUp' >
                                <Button style={styles.buttonStyle}> SIGN UP </Button>
                            </NavLink>
                            <Switch>
                                <HashRouter path='/SignUp' component={CheckForm}/>
                            </Switch>

                            {/* <Button style={styles.buttonStyle}> SIGN UP </Button> */}
                        </Col>
                    </Row>

                </Container>

            </div>
            </Router>
        </React.Fragment>
    )
}

const styles = {
    divStyle: {
        height: '100vh', width: '100vw', position: 'absolute', backgroundColor: '#303030', margin: 0, paddingTop: 0
    },
    row: {
        backgroundColor: 'rgba(48, 48, 48, 1)',  margin: 0,  padding: 0, display: 'flex', alignItems: 'center', marginTop: '0.3%'
    },
    col: {
        color: 'white',  height: '100%',  fontSize: '1rem', 
    },
    buttonStyle: {
        backgroundColor: 'rgb(70,70,70)', color: 'white', fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '1.2rem'
    }, 
    image: {
        height: 'auto', maxWidth: '200px', minWidth: '150px', width: '100%'
    }
}


export default Layout





// C1 -> C2

// props: {
//     name: "naisheel",
//     number: "700",
// }

// function C2(props) {
//     props.history.push
//     props.name
//     props.number
// }

// function C2(...props) {
//     history.push
//     name
//     number
// }






// {...props}
// ...props

// name: "naisheel",
// number: "700",

// name number