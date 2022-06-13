import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUsers = (props) => {
  const [entereUsername, setenteredUsername] = useState("");
  const [enteredAge, setenteredAge] = useState("");
  const [error,setError]=useState();


  const addUserHandler = (event) => {
    event.preventDefault();

    if (entereUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return setError({
          title:"Invalid Input",
          message: "Please enter a valid name and age (non-empty vales"

      });
    }
    if (+enteredAge < 1) {
         setError({
             title:"Invalid age",
             message:"Please enter a valid age (> 0)"
         })
        return;
    }

    props.onAddUser(entereUsername, enteredAge);
    setenteredUsername("");
    setenteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setenteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setenteredAge(event.target.value);
  };
  const errorHandler=()=>{
      setError(null);
  }
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={entereUsername}
            onChange={usernameChangeHandler}
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUsers;
