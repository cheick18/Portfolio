
import Projet from '../components/Projet'
import Space from '../components/Space'

import Footer from '../components/Footer/Footer'
import Skeleton from '../components/Realisation/Skeleton'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import projetProps from '../components/Realisation/Projet.interface'

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
  const projetNames = [
    {
      name: "Recipe API",
      picture: '/assets/projets/api.jpg',
      techno: [
        { name: "React", url: "https://reactjs.org/docs/getting-started.html" },
        { name: "LightGallery", url: "https://www.lightgalleryjs.com/" },
        { name: "TypeScript", url: "https://expressjs.com/en/starter/installing.html" },
        { name: "Tailwind CSS", url: "https://mui.com/getting-started/installation/" }
      ],
      description:'Plateforme de partage de recettes avec gestion des utilisateurs et du contenu',
      buttons:[{type:'code',link:'https://github.com/cheick18/FoodArea---Api.git'}]
   
    },
    {
      name: "Wague Portfolio",
      picture: '/assets/projets/porfolioHome.jpg',
      techno: [
        { name: "React", url: "https://reactjs.org/docs/getting-started.html" },
        { name: "LightGallery", url: "https://www.lightgalleryjs.com/" },
        { name: "TypeScript", url: "https://expressjs.com/en/starter/installing.html" },
        { name: "Tailwind CSS", url: "https://mui.com/getting-started/installation/" }
      ],
      description:'Portfolio pour ullustrer mes competances et mon parcours profetionel',
      buttons:[{type:'code',link:'https://portfoliowague.netlify.app/'}]
   
    },


    {
      name: "Faminda Site Web",
      picture: '/assets/projets/famindaHeader2.jpg',
      techno: [
        { name: "React", url: "https://reactjs.org/docs/getting-started.html" },
        { name: "Node.js", url: "https://nodejs.org/docs/latest/api/" },
        { name: "Express", url: "https://expressjs.com/en/starter/installing.html" },
    
        { name: "Material UI", url: "https://mui.com/getting-started/installation/" }
      ],
         description:"Site web pour le buréau d'éutde Faminda Concept",
         buttons:[{type:'web',link:'https://www.famindaconcept.com/'}]
       
    },
    {
      name: "ExpenseTracker",
      picture: '/assets/projets/expense1.jpg',
      techno: [
        { name: "React Native", url: "https://reactnative.dev/docs/getting-started" },
        { name: "Node.js", url: "https://nodejs.org/docs/latest/api/" },
        { name: "Express", url: "https://expressjs.com/en/starter/installing.html" },
        { name: "Firebase", url: "https://firebase.google.com/docs" }
      ],
         description:'Application mobile inteliigente permetant la gestion de dépenses',
         buttons:[{  type:'capture', link:'/expense-tracker'}]
    },
    {
      name: "FoodArea",
      picture: '/assets/projets/food.jpg',
      techno: [
        { name: "React", url: "https://reactjs.org/docs/getting-started.html" },
        { name: "Material UI", url: "https://mui.com/getting-started/installation/" }
      ],
         description:'Site web permetant',
         buttons:[{type:'capture',link:'/food-area'},{type:'code',link:'github'}]
      
    },
    {
      name: "GestionInterne",
      picture: "/assets/projets/GestionHome.jpg",
      techno: [
        { name: "PHP", url: "https://www.php.net/manual/en/index.php" },
        { name: "Laravel", url: "https://laravel.com/docs" },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" }
      ],
         description:'Application web permettant la gestion interne de Uts',
         buttons:[{type:'capture',link:'/gestion-interne'},{type:'code',link:'https://github.com/cheick18/gestionInterne.git'}]
    },
    {
      name: "Medina Bus",
      picture: '/assets/projets/me2.jpg',
      techno: [
        { name: "Java", url: "https://docs.oracle.com/en/java/" },
        { name: "SWING", url: "https://docs.oracle.com/javase/tutorial/uiswing/" },
        { name: "JDBC", url: "https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/" },
       
      ],
         description:'Application desktop permetant la gestion de transport',
         buttons:[{type:'capture',link:'/medina-bus'},{type:'code',link:'https://github.com/cheick18/Medina_app.git'}]
       
    },
    {
      name: "Consultor Site Web",
      picture: '/assets/projets/consultorHome.jpg',
      techno: [
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
        { name: "JQuery", url: "https://api.jquery.com/" },
        { name: "Bootstrap", url: "https://getbootstrap.com/docs/5.3/getting-started/introduction/" }
      ],
         description:'Site web vitrine de consulting',
         buttons:[{type:'web',link:'https://site-vitrine-h6fk.onrender.com/'}]
    },
    {
      name: "MedicCab",
      picture: '/assets/projets/cabinet-medical.jpg',
      techno: [
        { name: "Visual Basic .Net", url: "https://learn.microsoft.com/fr-fr/dotnet/visual-basic/" },{name:"MySQL",url:"https://dev.mysql.com/doc/"},
      
       
      ],
         description:'Applcation destop de gestion complete de cabinet medical',
         buttons:[{type:'capture',link:'cabinet-medical'},{type:"code",link:"https://github.com/cheick18/CabinetMedicalApp.git"}]
       
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
