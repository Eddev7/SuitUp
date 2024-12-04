import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function QntSelector({ qnt, setQnt }) {
    return <div className="bg-transparent border rounded-sm border-black w-36 h-10 flex gap-8 items-center justify-center">
        <MdOutlineKeyboardArrowUp size={32} className="cursor-pointer hover:bg-secundary transition h-full w-full border-r border-black" onClick={() => setQnt(qnt <= 99 ? qnt + 1 : qnt)}/>
        {qnt}
        <MdOutlineKeyboardArrowDown size={32} className="cursor-pointer hover:bg-secundary transition h-full w-full border-l border-black" onClick={() => setQnt(qnt > 1 ? qnt - 1 : qnt)}/>
    </div>
}