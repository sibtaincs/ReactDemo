import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from './store/CartProvider';

function App() {

 const [cartIsShown,setCartIsShown]= useState(false);

const showCartHandler =() => {
  setCartIsShown(true);
}
const hideCartHandler =() => {

  setCartIsShown(false);
}

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
//Folder till food setup
// import React, {Fragment,useContext } from "react";

// import Login from "./components/Login/Login";
// import Home from "./components/Home/Home";
// import MainHeader from "./components/MainHeader/MainHeader";
// import AuthContext from './store/'
// function App() {
//    const ctx = useContext(AuthContext);
//   return (
//     <Fragment>
//       <MainHeader />
//       <main>
//         {!ctx.isLoggedIn && <Login />}
//         {ctx.isLoggedIn && <Home  />}
//       </main>
//     </Fragment>
//   );
// }

// export default App;

//initial app component
// import react, { useState } from "react";
// import Expenses from "./components/Expenses/Expenses";
// import NewExpenses from "./components/NewExpense/NewExpense";
// import AddUsers from "./components/Users/AddUsers";
// import UsersList from "./components/Users/UsersList";

// const InitialExpenses = [
//   {
//     id: "e1",
//     title: "Toilet Paper",
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: "e3",
//     title: "Car Insurance",
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: "e4",
//     title: "New Desk (Wooden)",
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

// function App() {
//   const [usersList, setUsersList] = useState([]);
//   // const [expenses, setExpenses] = useState(InitialExpenses);
//   // const addExpenseHandler = (expense) => {
//   //   setExpenses((prevexpenses) => {
//   //     return [expense, ...prevexpenses];
//   //   });
//   // };

//   const addUserHandler = (uName, uAge) => {
//     setUsersList((prevUsersList)=>{
//        return [...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()}]
//     });
//   };
//   return (
//     <div>
//       <AddUsers onAddUser={addUserHandler} />
//       <UsersList users={usersList} />
//       {/* <NewExpenses onAddExpense={addExpenseHandler} />
//       <Expenses items={expenses} /> */}
//     </div>
//   );
// }

// export default App;
