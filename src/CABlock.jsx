import { useRef, useState } from 'react';
import './styles/CABlock.scss';


const CA = 'TKaPzvnXD9Tb2E5XHb54vwDCyHz2LbKAnc'


export default () => {
    const [caText, setcaText] = useState(CA);

    const copyTO = useRef(null);

    const copyCa = () => {
        navigator.clipboard.writeText(CA)
        setcaText('Copied!')
        clearTimeout(copyTO.current)
        copyTO.current = setTimeout(() => {
            setcaText(CA)
        }, 3000);
    }

    return (
        <div className='App_ca' onClick={copyCa} >
            {caText}
        </div>
    )
}