import experienceProps from "./Experience.interface"
export default function Exprerience({mission, entreprise,periode}:experienceProps) {
  return (
    <div className="w-auto text-center sm:text-start ">
        <h5 className="text-xl font-medium text-gray-700 leading-[48px]">{mission}</h5>
        <p className="text-gray-500 text-base">Entreprise :<span className="text-gray-800 pl-3">{entreprise}</span></p>
        <p className="text-gray-500 text-base">Période : <span className="text-gray-800 pl-3">{periode}</span></p>
        
        <div className=" block h-0  sm:h-[1px] max-w-[58px] bg-secondary mt-3"></div>

    </div>
  )
}
