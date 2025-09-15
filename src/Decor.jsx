import { useState } from "react";

export default () => {
    const [showSmall, setshowSmall] = useState(0);
    return (
        <>
            <div className='App_decor_large free_img'>
                <img src="/decor.webp" alt="" onPointerEnter={() => {
                    setshowSmall(1)
                }} onPointerLeave={() => {
                    setshowSmall(0)
                }} />
            </div>
            <div className='App_decor_small free_img' style={{
                opacity: showSmall
            }}>
                <img src="/won/4.webp" alt="" />
            </div>
        </>
    )
}