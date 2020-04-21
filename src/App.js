import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

function Header (props) {
  return <h1>Shopping Cart
  </h1>
}

function Footer(props) {
  return <h2>{props.total}</h2>
}

function Items(props) {
  return <table>
    <thead>
    <tr><th>Name</th>
    <th>Count</th>
    <th>Price</th>
    <th>Total</th></tr>
    </thead>
    <tbody>
    {
      props.productItems.map(item=>
        <tr key={item.name}>
          <td>{item.name}</td>
          <td>{item.count}</td>
          <td>${item.price}</td>
          <td>${item.price*item.count}</td>
        </tr>
      ) 
    }
    </tbody>
   </table> 
}


class App extends Component {
  render () {
    
      const productItems = [
        {name: 'iPhone', count:3, price: 1200},
        {name: 'iPad',   count:2, price: 800},
        {name: 'iPod', count:4, price: 200}
      ];

      return (
      <div  className="App">
        <Header />
        <Items productItems={productItems}/>
        <Footer total={productItems.reduce(  (a,c) => (a+c.price*c.count), 0)  } />
     </div> 
    );
  }
}

export default App;
