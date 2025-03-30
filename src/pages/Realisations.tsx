
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
      picture: '/assets/projets/porfolioHome.jpg',
      techno: [
        { name: "React", url: "https://reactjs.org/docs/getting-started.html" },
        { name: "TypeScript", url: "https://expressjs.com/en/starter/installing.html" },
        { name: "Tailwind CSS", url: "https://mui.com/getting-started/installation/" }
      ]
    },
    {
      name: "Faminda Site Web",
      picture: '/assets/projets/famindaHeader2.jpg',
      techno: [
        { name: "React", url: "https://reactjs.org/docs/getting-started.html" },
        { name: "Node.js", url: "https://nodejs.org/docs/latest/api/" },
        { name: "Express", url: "https://expressjs.com/en/starter/installing.html" },
    
        { name: "Material UI", url: "https://mui.com/getting-started/installation/" }
      ]
    },
    {
      name: "ExpenseTracker",
      picture: '/assets/projets/expense1.jpg',
      techno: [
        { name: "React Native", url: "https://reactnative.dev/docs/getting-started" },
        { name: "Node.js", url: "https://nodejs.org/docs/latest/api/" },
        { name: "Express", url: "https://expressjs.com/en/starter/installing.html" },
        { name: "Firebase", url: "https://firebase.google.com/docs" }
      ]
    },
    {
      name: "FoodArea",
      picture: '/assets/projets/food.jpg',
      techno: [
        { name: "React", url: "https://reactjs.org/docs/getting-started.html" },
        { name: "Material UI", url: "https://mui.com/getting-started/installation/" }
      ]
    },
    {
      name: "GestionInterne",
      picture: "/assets/projets/GestionHome.jpg",
      techno: [
        { name: "PHP", url: "https://www.php.net/manual/en/index.php" },
        { name: "Laravel", url: "https://laravel.com/docs" },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" }
      ]
    },
    {
      name: "Medina Bus",
      picture: '/assets/projets/me2.jpg',
      techno: [
        { name: "Java", url: "https://docs.oracle.com/en/java/" },
        { name: "SWING", url: "https://docs.oracle.com/javase/tutorial/uiswing/" },
        { name: "JDBC", url: "https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/" },
       
      ]
    },
    {
      name: "Consultor Site Web",
      picture: '/assets/projets/consultorHome.jpg',
      techno: [
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
        { name: "JQuery", url: "https://api.jquery.com/" },
        { name: "Bootstrap", url: "https://getbootstrap.com/docs/5.3/getting-started/introduction/" }
      ]
    },
    {
      name: "cabMedical",
      picture: '/assets/projets/cabinet-medical.jpg',
      techno: [
        { name: "Visual Basic .Net", url: "https://learn.microsoft.com/fr-fr/dotnet/visual-basic/" },{name:"MySQL",url:"https://dev.mysql.com/doc/"},
      
       
      ]
    },
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
        <h1 className=" text-4xl text-center sm:text-start font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl font-poppins">Réalisations</h1>

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
           projets.map((projetdetails, index) => (
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
