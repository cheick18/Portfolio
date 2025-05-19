import { Link } from "react-router-dom";
import contactcardProps from "./Contact.interface";

export default function Contactcard({title,body,url}:contactcardProps) {
  return (
    <div>
    <div className="contact-details-card-item w-[300px] p-6 h-[100px]  border border-gray-200 rounded-lg shadow-xs text-center py-2 ">
                <h5 className="text-xl font-medium text-gray-700">{title}</h5>
                {url.isurl?(<Link to={`${url.link}`}> <p className="text-secondary text-base pt-4 ">{body}</p></Link>):
                (<p className="text-gray-500 text-base pt-4 ">{body}</p>)
                }   

              </div>
              <div className="block h-3 sm:h-0"></div>
    </div>
  )
}
