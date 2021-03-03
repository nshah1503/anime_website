import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import Layout from "./Components/Layout"
import Cancel from "./Components/SignUp"

const Routes = () => {
    return(
        <div>
            <Route exact path = '/' component={Layout} />
            <Route path = '/Cancel' component={Layout}/>
        </div>
    )
}

export default Routes