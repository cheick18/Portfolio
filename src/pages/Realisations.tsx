
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
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [loading, setLoading] = useState<boolean>(true);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setProjets(projetNames);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const value = e.target.value;
  setSelectedCategory(value);
  filtedProject(value);
};

const filtedProject = (category: string) => {
  if (category === 'All') {
    setProjets(projetNames);
    return;
  }

  if (category === 'web') {
    const newProjets = projetNames.filter((projet) =>
      projet.category.includes('web')
    );
    setProjets(newProjets);
    return;
  }

  if (category === 'desktop') {
    const newProjets = projetNames.filter(
      (projet) => projet.category === 'desktop'
    );
    setProjets(newProjets);
    return;
  }

  if (category === 'mobile') {
    const newProjets = projetNames.filter(
      (projet) => projet.category === 'mobile'
    );
    setProjets(newProjets);
  }
};






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
            <>
       <div className='flex justify-end pt-[48px]'>
         <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
<select
  id="countries"
  className="bg-white px-2 border border-primary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[208px]"
  onChange={handleChange}
  value={selectedCategory}
>
  <option value="All">All</option>
  <option value="web">Web</option>
  <option value="desktop">Desktop</option>
  <option value="mobile">Mobile</option>
</select>

       </div>
       <div className="listproject flex flex-col sm:flex-row   pt-[32px] gap-4 flex-1 md:flex-wrap">


         {
           projets.map((projetdetails, index) => (
             <Projet name={projetdetails.name} picture={projetdetails.picture} techno={projetdetails.techno} key={index} description={projetdetails.description} buttons={projetdetails.buttons} category={projetdetails.category} />

           ))
         }
           

       </div> </>)
        }
      </div>
      <Space />

      <Footer />
    </div>
  )
}
