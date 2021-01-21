export const checkBudget = ( budget, budgetleft ) => {

    let myClass;

    if( (budget / 4) > budgetleft ){
        // Around 25%
        myClass = 'alert alert-danger';
    }else if( (budget / 2) > budgetleft  ){
        myClass = 'alert alert-warning';
    }else{
        myClass = 'alert alert-success';
    }

    return myClass;

}