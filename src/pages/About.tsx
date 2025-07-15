

import Card from "../components/About/Card"
import Space from "../components/Space"
import Exprerience from "../components/About/Exprerience"
import compétences from "../components/About/data"
import { experiences } from "../components/About/data"
import Footer from "../components/Footer/Footer"
import Navbar from '../components/Navbar/Navbar'


export default function About() {
 

  console.log("liste des comptetances:",compétences)
  
  return (
    <div>
      <Navbar />
      <Space />
      <div className="container-fluid ">
        <h1 className=" text-4xl text-center sm:text-start font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl font-poppins">Qui suis-je?</h1>

        <div className="description grid grid-cols-2 items-center  pt-6 sm:pt-0 gap-3">
          <div className=" description-text col-span-2 order-2 sm:col-span-1   sm:order-1 ">
            <p className=" mt-8 text-md font-light text-pretty text-center sm:text-start sm:text-xl/8 text-gray-500">Je m'appelle Wague Cheickne, Ingénieur logiciel passionné basé au Maroc. Mon parcours a commencé par curiosité, et s’est rapidement transformé en vocation.<br></br>

Je travaille principalement avec React, JavaScript, HTML/CSS, Node.js et Spring, tout en m'intéressant aux nouvelles technologies et à l'optimisation de l'expérience utilisateur.<br></br>

J'aime résoudre des problèmes, construire des interfaces modernes, et collaborer avec des équipes dynamiques. Je suis curieux, rigoureux et toujours prêt à apprendre.

<br></br><em>Mon objectif ? Créer des expériences web performantes, accessibles et visuellement impactantes.</em></p>
          </div>
          <div className="description-text bg-slate-50 order-1  col-span-2 sm:col-span-1  sm:order-2 p-4">
            <img src='assets/autre_contact.jpg' className="rounded-sm  " />
          </div>
        </div>
      </div>
      <Space />
      <div className="container-fluid px-3 grid ">
        <h4 className="text-2xl  sm:text-3xl text-center ">Mes compétences</h4>
        <div className="container flex flex-col sm:flex-row   pt-8 gap-4 flex-1 md:flex-wrap">
          {
            compétences.map((comp,index)=>(
              <Card  titre={comp.titre} compétances={comp.compétences} key={index} />

            ))
          }


        </div>
{/*

        <div className="container-fluid flex gap-4 justify-center pt-6">
            <Shortcard />
            <Shortcard />

        </div>
 */}
      </div>
     
      <Space />
        <div className="container-fluid">
        <h4 className="text-2xl text-center  sm:text-3xl sm:text-start ">Mes expériences professionnelles</h4>
        <div className="experienceitem pt-8">
          {
               experiences.map((experience,index)=>(
                <Exprerience  mission={experience.mission} entreprise={experience.entreprise} periode={experience.periode} key={index} />
  
              ))
          }
     
        </div>
        </div>
        <Space />
        <Footer />
    </div>
  )
}
