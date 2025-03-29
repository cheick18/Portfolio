
 import projetProps from './Realisation/Projet.interface';
 
export default function Projet({name,picture,techno}:projetProps) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg sm:hover:-translate-y-2">
        <img className="w-full h-60 object-contain transition duration-300 ease-in-out sm:hover:scale-110" src={picture} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 hover:text-gray-700">{name}</div>
        </div>
        <div className="px-6 pt-4 pb-2">
          {techno.map((tech,index)=>(
             <a href={`${tech.url}`} target="_blank" rel="noopener noreferrer" key={index}>
             <span className="inline-block bg-gray-200 hover:bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:text-white  mr-2 mb-2">#{tech.name}</span>
           </a>

          ))}
          {/*
          <a href="https://reactnative.dev" target="_blank" rel="noopener noreferrer">
            <span className="inline-block bg-gray-200 hover:bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:text-white  mr-2 mb-2">#React Native</span>
          </a>
          <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer">
            <span className="inline-block bg-gray-200 hover:bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:text-white  mr-2 mb-2">#Express</span>
          </a>
          <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer">
            <span className="inline-block bg-gray-200 hover:bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:text-white  mr-2 mb-2">#Firebase</span>
          </a>
          */}
        </div>
      </div>
    );
  }
  