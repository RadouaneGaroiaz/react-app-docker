import React, { FunctionComponent } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import CocktailsDetail from './pages/cocktail-detail';
import CocktailList from './pages/cocktail-list';
  
const App: FunctionComponent = () => {
    
 return (
    <Router>
    <div>
        {/* la barre de navigation commun à toutes les pages*/}
        <nav>
            <div className='nav-wrapper teal'>
                <Link to="/" className="brand-logo center">Cocktails Liste</Link>
            </div>
        </nav>

        {/* le système de gestion des routes de notre application*/}
        <Switch>
            <Route exact path="/" component={CocktailList}/>
            <Route exact path="/cocktails" component={CocktailList}/>
            <Route path="/cocktails/:id" component={CocktailsDetail}/>
            <Route component={PageNotFound}/>

        </Switch>
    </div>
</Router>
                    

)
}
  

  
export default App;