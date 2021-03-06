import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Index from './components/home/Index'
import Types from './components/types/Types'
import PokemonView from './components/viewPokemon/PokemonView'

import './style.css'

import { Switch, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

import './style.css';

const App = () => {
  const location = useLocation();
  return (
      <>
        <Header />
        <div className="container main">
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact component={Index} />
              <Route path="/types" component={Types} />
              <Route path="/pokemon/:id" component={PokemonView} />
            </Switch>
          </AnimatePresence>
        </div>
        <Footer />
      </>
  );
}

export default App;
