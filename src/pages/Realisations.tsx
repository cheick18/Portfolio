
import Projet from '../components/Realisation/Projet'
import Space from '../components/Space'

import Footer from '../components/Footer/Footer'
import Skeleton from '../components/Realisation/Skeleton'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import projetProps from '../components/Realisation/Projet.interface'
import { projetNames } from '../components/Realisation/ProjetsData'

interface Techno {
  name: string;
  url: string;
}


interface Projet {
  name: string;
  picture: string;
  techno: Techno[];
}


export default function Realisations() {
  const [projets, setProjets] = useState<projetProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setProjets(projetNames);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar />
      <Space />
      <div className="container-fluid ">
        <h1 className=" text-4xl text-center sm:text-start font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl font-poppins">Réalisations</h1>
        {
          loading?( <div className="pt-[48px] sketonton grid grid-cols-1 sm:grid-cols-3">
            <div> <Skeleton /></div>
            <div> <Skeleton /></div>
            <div> <Skeleton /></div>
          </div>):(
       
       <div className="listproject flex flex-col sm:flex-row   pt-[48px] gap-4 flex-1 md:flex-wrap">

         {
           projets.map((projetdetails, index) => (
             <Projet name={projetdetails.name} picture={projetdetails.picture} techno={projetdetails.techno} key={index} description={projetdetails.description} buttons={projetdetails.buttons} />

           ))
         }
           

       </div>)
        }
      </div>
      <Space />

      <Footer />
    </div>
  )
}
