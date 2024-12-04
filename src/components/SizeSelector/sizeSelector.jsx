import { useState } from "react"
export default function SizeSelector({tamanhos, onSizeSelector, setError}) {
    const [selectedSize, setSelectedSize] = useState('');

    const handleSizeClick = (size) => {
        setError('');
        setSelectedSize(size);
        onSizeSelector(size);
    };

    return <div className='grid grid-cols-8 gap-4'>
        {tamanhos.map((el) => (
            <button 
                key={el} 
                className={`p-2 w-10 h-10 flex justify-center items-center hover:text-white hover:bg-black border border-black transition ${selectedSize === el ? 'text-white bg-black' : ''}`}
                onClick={() => handleSizeClick(el)}
                >{el}
            </button>
        ))}
    </div>
}