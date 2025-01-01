import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  HelmetProvider } from 'react-helmet-async';

import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Router';



createRoot(document.getElementById('root')).render(
  <StrictMode>
<HelmetProvider>
<div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
      </div>
</HelmetProvider>
  </StrictMode>,
)
