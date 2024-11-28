import { LiaShoppingBagSolid } from "react-icons/lia";
export default function Bag(props) {
    return <div className="relative">
        <div 
        className={`border solid border-black  w-7 h-7 rounded-full absolute -right-5 -top-1 text-lg font-bold flex items-center justify-center ${props.qnt > 0 ? '' : 'hidden'}`}>
            {props.qnt}
        </div>
        <LiaShoppingBagSolid size={props.size}/>
    </div>
}