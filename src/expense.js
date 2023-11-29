import React from 'react';
import Dateformater from './dateformater';

// class ExpenseEntryItem extends React.Component() {
//     render() {
//         return (
//             <div>
//                 <div><b>Item:</b> <em>Mango juice</em></div> 
//                 <div><b>Amount:</b> <em>50.0</em></div>
//                 <div><b>Spend:</b> <em>2022-10-10</em></div>
//                 <div><b>Category:</b> <em>Food</em></div>

//             </div>
//         )
//     }
// }

const Item = {
    id: 1,
    name: 'apple',
    amount: 30.5,
    spendDate: new Date('2020-10-12'),
    category: 'food',
  };
  
  function ExpenseEntryItem() {
    return (
      <div>
        <div>
          <b>Item:</b> <em>{Item.name}</em>
        </div>
        <div>
          <b>Amount:</b> <em>{Item.amount}</em>
        </div>
        <div>
          <b>Spend:</b> <em><Dateformater value={Item.spendDate} /></em>
        </div>
        <div>
          <b>Category:</b> <em>{Item.category}</em>
        </div>
      </div>
    );
  }
  
  export default ExpenseEntryItem;