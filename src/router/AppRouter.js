import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { SearchScreen } from '../components/SearchScreen.js'

export const AppRouter = () => {
    return (
         <Router>
            <div>
                <Switch>
                    <Route path='/' component={SearchScreen}/>
                </Switch>
            </div> 
         </Router>   
    )
}
