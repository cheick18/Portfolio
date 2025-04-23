import  ButtonProps from "./Buttons.interface"

type technology={
    name:string
    url: string
   }

export default interface projetProps{

 
    name:string,
    picture:string,
    techno:technology[],
    description:string,
    buttons:ButtonProps[]

}