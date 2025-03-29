import competanceProps from "./Competeance.interface"


export default function Card( {titre,compétances}:competanceProps) {
  return (
    <div>
    <div className=" w-full sm:w-[388px] h-[348px] rounded-md overflow-hidden  bg-white  p-6 shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:bg-slate-50">
        <h5 className="text-xl font-medium text-gray-700 leading-[48px]">{/* <i className={`fas ${titre.icon}`}></i>*/}<span>{titre.name}</span></h5>
        {/*
         <p className="text-gray-500 text-base  "><i className="fab fa-html5 icon"></i><span className="pl-2">HTML</span></p>
         <p className="text-gray-500 text-base"><i className="fab fa-css3 icon"></i><span className="pl-2">CSS</span></p>
         <p className="text-gray-500 text-base"> <i className="fab fa-js-square icon"></i><span className="pl-2">JavaScript</span></p>
         <p className="text-gray-500 text-base">Bootsrap</p>
         <p className="text-gray-500 text-base">JQuery</p>
         <p className="text-gray-500 text-base">React</p>
         */}
      {compétances.map((comp,index)=>(
          <p className="text-gray-500 text-base " key={index}><i className={`${comp.icon} icon text-secondary`}></i><span className="pl-2">{comp.name}</span></p>

      ))}
    </div>
    <div className="block h-6 sm:h-0"></div>
    </div>
  )
}
