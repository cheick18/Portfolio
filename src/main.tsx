import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Realisations from './pages/Realisations.tsx'
import Notfound from './pages/Notfound.tsx'
import Dynamique from './pages/Dynamique.tsx'
import ExpenseDetail from './pages/ExpenseDetail.tsx'
import FoodArea from './pages/FoodArea.tsx'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="a-propos" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="realisations" element={<Realisations />} />
          <Route path="expense-tracker" element={<ExpenseDetail />} />
          <Route path="gestion-interne" element={<Dynamique />} />
          <Route path="food-area" element={<FoodArea />} />
        
          {
            /*
            projetImages.map((p)=>(
              <Route path={p.lien} element={<Dynamique lien={p.lien}  images={p.images} />} />

            ))
            */
          }
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
  <StrictMode>
    <App />
  </StrictMode>,
  </BrowserRouter>
)
