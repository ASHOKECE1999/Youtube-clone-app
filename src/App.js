import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import appStore from './store/appStore';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter=createBrowserRouter([{

  path:"/",
  element:<Body/>,
  children:[
    { path:"/",
    element:<MainContainer/>},
    {
      path:"/watch",
      element:<WatchPage/>
    }
   
  ]
}])

function App() {
  return (
    <div className='h-[100vh] w-full'>
      <Provider store={appStore}>
    <Header/>
   <RouterProvider router={appRouter}/>
    </Provider>
    </div>
  );
}

export default App;
