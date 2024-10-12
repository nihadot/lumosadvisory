import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layouts/Layout/Layout'
import LayoutCopy from './Layouts/Layout/LayoutCopy'

function App() {


  const router = createBrowserRouter ([
    {
      path: "/",
      // element: <Layout/>,
      element:<LayoutCopy/>
    }  ,
    ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
