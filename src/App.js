import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import {Switch} from 'react-router'
import { QueryClientProvider, QueryClient } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import HomePage from "./components/Home.page";
import RQSuperheroesPage from "./components/RQSuperheroes.page";
import SuperheroesPage from "./components/Superheroes.page";

import React from "react";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes </Link>
              </li>
              <li>
                <Link to="/rq-super-heores">RQ Super Heroes </Link>
              </li>
            </ul>
          </nav>
          <Routes>
          <Route path="/super-heroes" element={<SuperheroesPage />} />
              
       
            {/* <Route path="/rq-super-heores/:heroId" element={ <RQSuperheroesPage />} /> */}
             
           
            <Route path="/rq-super-heores" element={ <RQSuperheroesPage />} />
             
         
          </Routes>
           
         
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
