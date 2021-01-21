import React, { useState, useEffect } from 'react';
import ControlBudget from './components/ControlBudget';
import Form from './components/Form';
import List from './components/List';
import Question from "./components/Question";

const App = () => {

  // Define states
  const [ budget, saveBudget ] = useState(0);
  const [ budgetleft, saveBudgetleft ] = useState(0);
  const [ showquestion, saveShowQuestion ] = useState(true);
  const [ costs, saveCosts ] = useState([]);
  const [ cost, saveCost ] = useState({});
  const [ createcost, saveCreatecost ] = useState(false);

  // UseEffect to update the budget left
  useEffect( () => {
    if( createcost ){

      // Add the new cost
      saveCosts([
        ...costs,
        cost
      ]);

      // Minus the current budget
      const presupuestoRestante = budgetleft - cost.amount;
      saveBudgetleft(presupuestoRestante);

      // Reset
      saveCreatecost(false);
    }
  }, [cost, costs, createcost, budgetleft]);

  return (
    <div className="container">
      <div className="abs-center">
        <header>
          <h1>My Budget</h1>
          <div  className="main-content content">
            {
              showquestion 
              ? 
                <Question
                  saveBudget={ saveBudget }
                  saveBudgetleft={ saveBudgetleft }
                  saveShowQuestion={ saveShowQuestion }
                />
              :
                <div className="row">
                  <div className="one-half column">
                    <Form 
                      saveCost={ saveCost }
                      saveCreatecost={ saveCreatecost }
                    />
                  </div>
                  <div className="one-half column">
                    <List
                      costs={ costs }
                    />
                    <ControlBudget 
                      budget={ budget }
                      budgetleft={ budgetleft }
                    />
                  </div>
                </div>
            }
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;