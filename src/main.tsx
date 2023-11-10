import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Square from './components/Square.tsx'
import Answer from './components/Answer.tsx'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"squares/:questionId",
    element: <Square/>,
    children:[
      {
        path: "answerId",
        element: <Answer/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
