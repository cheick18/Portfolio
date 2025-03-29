
import Projet from '../components/Projet'
import Space from '../components/Space'

import Footer from '../components/Footer/Footer'
import Skeleton from '../components/Realisation/Skeleton'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
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
  const [projets, setProjets] = useState<Projet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const projetNames = [
    {
      name: "Wague Portfolio",
      picture: 'src/assets/projets/porfolioHome.jpg',
      techno: [
        { name: "React", url: "https://reactjs.org/docs/getting-started.html" },
        { name: "TypeScript", url: "https://expressjs.com/en/starter/installing.html" },
        { name: "Tailwind CSS", url: "https://mui.com/getting-started/installation/" }
      ]
    },
    {
      name: "Faminda Site Web",
      picture: 'src/assets/projets/famindaHeader2.jpg',
      techno: [
        { name: "React", url: "https://reactjs.org/docs/getting-started.html" },
        { name: "Express", url: "https://expressjs.com/en/starter/installing.html" },
        { name: "Material UI", url: "https://mui.com/getting-started/installation/" }
      ]
    },
    {
      name: "ExpenseTracker App",
      picture: 'src/assets/projets/expense1.jpg',
      techno: [
        { name: "React Native", url: "https://reactnative.dev/docs/getting-started" },
        { name: "Express", url: "https://expressjs.com/en/starter/installing.html" },
        { name: "Firebase", url: "https://firebase.google.com/docs" }
      ]
    },
    {
      name: "gestionInterne App",
      picture: "src/assets/projets/GestionHome.jpg",
      techno: [
        { name: "PHP", url: "https://www.php.net/manual/en/index.php" },
        { name: "Laravel", url: "https://laravel.com/docs" },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" }
      ]
    },
    {
      name: "MedinaBus App",
      picture: 'src/assets/projets/medinaHome.jpg',
      techno: [
        { name: "Java", url: "https://docs.oracle.com/en/java/" },
        { name: "SWING", url: "https://docs.oracle.com/javase/tutorial/uiswing/" },
        { name: "SQL", url: "https://www.w3schools.com/sql/" }
      ]
    },
    {
      name: "Consultor Site Web",
      picture: 'src/assets/projets/consultorHome.jpg',
      techno: [
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
        { name: "JQuery", url: "https://api.jquery.com/" },
        { name: "Bootstrap", url: "https://getbootstrap.com/docs/5.3/getting-started/introduction/" }
      ]
    }
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      setProjets(projetNames);
      setLoading(false); // Après avoir chargé les données, on arrête le chargement
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar />
      <Space />
      <div className="container-fluid ">
        <h1 className=" text-4xl  font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl font-poppins">Réalisations</h1>

 {/*
       
        <div className="listproject flex flex-col sm:flex-row   pt-[48px] gap-4 flex-1 md:flex-wrap">
         

          {
            projetNames.map((projetdetails, index) => (
              <Projet name={projetdetails.name} picture={projetdetails.picture} techno={projetdetails.techno} key={index} />

            ))
          }
            
           

        </div>
         */}
        {
          loading?( <div className="pt-[48px] sketonton grid grid-cols-1 sm:grid-cols-3">
            <div> <Skeleton /></div>
            <div> <Skeleton /></div>
            <div> <Skeleton /></div>
          </div>):(
       
       <div className="listproject flex flex-col sm:flex-row   pt-[48px] gap-4 flex-1 md:flex-wrap">

         {
           projetNames.map((projetdetails, index) => (
             <Projet name={projetdetails.name} picture={projetdetails.picture} techno={projetdetails.techno} key={index} />

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
