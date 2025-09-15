import { useEffect, useState } from "react";
import "./MovingRows.scss";

const images = [
    "/won/1.webp", "/won/2.webp", "/won/3.webp", "/won/4.webp",
    "/won/5.webp", "/won/6.webp", "/won/7.webp", "/won/8.webp",
    "/won/9.webp", "/won/10.webp", "/won/11.webp", "/won/12.webp",
    "/won/13.webp", "/won/14.webp", "/won/15.webp"
];

export default () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        let count = 0;
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                count++;
                if (count === images.length) setLoaded(true);
            };
        });
    }, []);

    return (
        <div
            className="MovingRows"
            style={{
                opacity: loaded ? 1 : 0,
                transition: "opacity 1s ease"
            }}
        >
            {Array(Math.ceil(window.innerHeight / 200 + 4))
                .fill(0)
                .map((_, index) => (
                    <div
                        className={`MovingRows_row MovingRows_row_${index % 2 === 0 ? "left" : "right"
                            }`}
                        key={`MovingRows_${index}`}
                    >
                        {Array(20)
                            .fill(0)
                            .map((_, jndex) => (
                                <div
                                    className="MovingRows_img free_img"
                                    key={`MovingRows_img_${index}-${jndex}`}
                                >
                                    <img
                                        src={images[Math.floor(Math.random() * images.length)]}
                                        alt=""
                                        style={{
                                            width: `${Math.random() * 100 + 200}px`,
                                            rotate: `${Math.random() * 50 - 25}deg`
                                        }}
                                    />
                                </div>
                            ))}
                    </div>
                ))}
        </div>
    );
};
