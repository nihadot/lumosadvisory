import './App.css'
import About from './Layouts/About/About'
import Home from './Layouts/Home/Home'
import WhyChoose from './Layouts/Choosing/WhyChoose'
import Business_Transformation from './Layouts/Services/Business_Transformation'
import Business_plan from './Layouts/Services/Business_plan'
import Business_valuations from './Layouts/Services/Business_valuations'
import Accounting from './Layouts/Services/Accounting'
import CFO_Services from './Layouts/Services/CFO_Services'
import Tax from './Layouts/Services/Tax'
import { BrowserRouter, Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Demo from './Layouts/Home/Demo'
import Layout from './Layouts/Layout/Layout'
import FontCheckComponent from './FontCheckComponent'

function App() {


  const router = createBrowserRouter ([
    {
      path: "/",
      element: <Layout/>,
    }  ,
    ])

  return (
    <>
{/* <FontCheckComponent/> */}
      <RouterProvider router={router} />





    {/* <Layout/> */}


    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} />
        <Route path='/home' element={<Home/>} />

        <Route path='/about' element={<About/>} />
        <Route path='/why-choose-us' element={<WhyChoose/>} />
        <Route path='/services' element={<CFO_Services/>} />
      </Routes>
    </BrowserRouter> */}


        {/* <Route path='/' element={<Business_Transformation/>} />
        <Route path='/' element={<Business_plan/>} />
        <Route path='/' element={<Business_valuations/>} />
        <Route path='/' element={<Accounting/>} />
        <Route path='/' element={<Tax/>} /> */}
{/*     
     <Home/>
     <About/>
     <WhyChoose/>
     <CFO_Services/>
     <Business_Transformation/>
     <Business_plan/>
     <Business_valuations/>
     <Accounting/>
     <Tax/> */}
    </>
  )
}

export default App
