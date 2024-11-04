import "./App.css"
import Home from "./Pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TaskForm from "./Pages/TaskForm";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Handle from "./Pages/Handle";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children:[
        {path: '/add', element: <TaskForm/>},
        {path: '/task/:type/:id', element: <Handle/>}
      ]
    }
  ])
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </div>
  );
}

export default App;
