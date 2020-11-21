import React, { useContext } from "react";
import { useImmerReducer } from "use-immer";
import { login, storeComment } from "../Components/utils";
import Container from "react-bootstrap/Container";
// import { ExampleComponent } from './ExampleStyle';

function loginReducer(draft, action) {
  switch (action.type) {
    case "field": {
      draft[action.fieldName] = action.payload;
      return;
    }
    case "login": {
      draft.error = "";
      draft.isLoading = true;
      return;
    }
    case "success": {
      draft.isLoggedIn = true;
      draft.isLoading = false;
      //draft.username = '';
      draft.password = "";
      return;
    }
    case "error": {
      draft.error = "Incorrect username or password!";
      draft.isLoggedIn = false;
      draft.isLoading = false;
      draft.username = "";
      draft.password = "";
      return;
    }
    case "logOut": {
      draft.isLoggedIn = false;
      return;
    }

    case "comment": {
      draft.error = "";
      draft.isLoading = true;
      return;
    }

    default:
      return;
  }
}

const todos = [
  {
    title: "Here Are Comments"
    // completed: true,
  }
];

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
  todos
};
// ==== UseContext ReactHooks
const StateContext = React.createContext();
const DispatchContext = React.createContext();

export default function LoginUseContext() {
  const [state, dispatch] = useImmerReducer(loginReducer, initialState);
  const { username, password, isLoading, error, isLoggedIn, todos } = state;

  const onSubmit = async e => {
    e.preventDefault();

    dispatch({ type: "login" });

    try {
      await login({ username, password }); // <<< HERE WE CONNECT UP TO THE API CALL IN util.js
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };

  return (
    <div>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
        
            <Container className="alignForm">
              <div className="container-login-2">
                {isLoggedIn ? (
                  <>
                    <h1>Welcome {username}!</h1>
                    <button onClick={() => dispatch({ type: "logOut" })}>
                      Log Out
                    </button>


                    <TodoPage todos={todos} />
                  </>
                ) : (
                  <form  onSubmit={onSubmit}>
                    {" "}
                    {/* HERE THE onSubmit is set up !!*/}
                    {error && <p className="error">{error}</p>}
                    <p className="floatRight">Please Login!</p>
                    <input
                    className="floatRight"
                      type="text"
                      placeholder="username"
                      value={username}
                      onChange={e =>
                        dispatch({
                          type: "field",
                          fieldName: "username",
                          payload: e.currentTarget.value
                        })
                      }
                    />
                    <input
                    className="floatRight"
                      type="password"
                      placeholder="password"
                      autoComplete="new-password"
                      value={password}
                      onChange={e =>
                        dispatch({
                          type: "field",
                          fieldName: "password",
                          payload: e.currentTarget.value
                        })
                      }
                    />
                    {/* /* When button is clicked the function is disabled and shows Loging in */}
                    <button 
                     
                      className="submit"
                      className="CentreButton"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging in..." : "Log In"}
                    </button>{""}
                  </form>
                )}
              </div>
            </Container>
          {/* </div> */}
        </StateContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

// ======== Comments Stuff
function TodoPage({ todos }) {
  return (
    <div className="todoContainer">
      <h2 className="aboutTitle">Comments</h2>
      {todos.map(item => (
        <TodoItem key={item.title} {...item} />
      ))}
    </div>
  );
}

// Changed TodoItem as I did not need the items I was only after comments and username
function TodoItem() {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const { username, comment, error } = state;

  const onSubmitComment = async e => {
    e.preventDefault();

    dispatch({ type: "comment" });
    // This code renders once a submit event takes place it is calling the api
    try {
      alert("Calling api to store the comment , your commment is" + comment);
      await storeComment(username, comment); // <<< HERE WE CONNECT UP TO THE API CALL IN util.js
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };

  // Made changes to the comments section to be able to
  return (
    <Container>
      <form className="form" onSubmit={onSubmitComment}>
        {" "}
        {/* HERE THE onSubmiComment is set up !!*/}
        {error && <p className="error">{error}</p>}
        <p>Enter Comment</p>
        <input
          type="text"
          placeholder="comment"
          value={comment}
          onChange={e =>
            dispatch({
              type: "field",
              fieldName: "comment",
              payload: e.currentTarget.value
            })
          }
        />
        <button className="submit" type="comment">
          {comment ? "Saving..." : "Save"}
        </button>
      </form>
    </Container>
  );
}
