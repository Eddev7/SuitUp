import { LiaShoppingBagSolid } from "react-icons/lia";
export default function Bag(props) {
    return <div className="relative">
        <div 
        className={`border solid border-black w-4 h-4 rounded-full absolute -right-2 -top-1 text-xs font-bold flex items-center justify-center ${props.qnt > 0 ? '' : 'hidden'}`}>
            {props.qnt}
        </div>
        <LiaShoppingBagSolid size={props.size}/>
    </div>
}