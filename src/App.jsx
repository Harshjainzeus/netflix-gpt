import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import './App.css'
import Body from './components/Body';
import Login from './components/Login';
import Header from './components/common/Header';
import { Provider } from 'react-redux';
import appStore from './utils/store/appStore';
import Search from './components/Search';
import BrowserList from './components/BrowserList';
import ProtectedRoute from './components/common/ProtectedRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/browse" replace />
  },
  {
    path: "/login",
    element: <Login/>,
    children:[
      {
        path: "header",
        element: <Header/>
      }
    ]
  },
  {
    path: "/browse",
    element: (
      <ProtectedRoute>
        <Body/>
      </ProtectedRoute>
    ),
    children:[
      {
        path: '',
        element: <BrowserList/>
      },
      {
        path: "search",
        element: <Search/>
      }
    ]
  }
])


function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={router}/>
    </Provider>
)
}

export default App;
