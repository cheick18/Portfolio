
import Navbar from "../components/Navbar/Navbar"
import Space from "../components/Space"
import Footer from "../components/Footer/Footer"
import Contactcard from "../components/Contact/Contactcard"
import { Link } from "react-router-dom"

export default function Contact() {
  const details=[
    {title:"Email",body:"wachechek@gmail.com",url:{link:"mailto:wachechek@gmail.com",isurl:true}},
    {title:"Téléphone",body:"+212771676213",url:{link:"tel:+212 771 67 62 13",isurl:true}},
    {title:"Adresse",body:"Aïn Sebaâ Casablanca",url:{link:"none",isurl:false}}
  ]
  return (
    <div>
      <Navbar />
      <Space />
      <div className="container-fluid ">
        <h1 className=" text-4xl text-center font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl font-poppins sm:text-start">Contact</h1>
          <div className="contact-details pt-[48px]">
            <p className="w-auto text-md font-light text-center sm:text-start text-pretty sm:text-xl/8 text-gray-500">Je serais ravi de discuter de vos projets !<br></br> N'hésitez pas à me contacter via les informations ci-dessous.</p>
            <div className="contaact-details-card flex flex-col items-center w-full sm:w-[980px] sm:justify-between sm:flex-row pt-[28px]">
           
                {
                  details.map((contact)=>(<Contactcard title={contact.title} body={contact.body} url={contact.url} />))
                }
          
             
            </div>
          </div>
          <div className="social-link pt-[28px]">
          <p className="w-auto text-md font-light text-center sm:text-start text-pretty sm:text-xl/8 text-gray-500">Vous pouvez aussi me joindre sur :</p>
            <div className="flex items-center gap-3 pt-[28px] justify-center sm:justify-start">
            <span className="text-sm text-secondary"><Link to='https://github.com/cheick18'>GitHub</Link></span>
            <span className="text-sm text-secondary"><Link to='https://www.linkedin.com/feed/'>LinkedIn</Link></span>
            <span className="text-sm text-secondary"><Link to='https://wa.me/+212771676213'>WhatsApp</Link></span>
            </div>
           
          </div>
         </div>
         <Space/>
         <Footer />
    </div>
  )
}
