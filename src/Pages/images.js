import React, {useState} from 'react'
import image1 from './images/slide1.jpg'
import image2 from './images/slide2.jpg'
import image3 from './images/slide3.jpg'
import image4 from './images/slide4.jpg'
import image5 from './images/slide5.jpg'
import image6 from './images/slide6.jpg'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import './images.css'


let ImageData = [
    {image: image1},
    {image: image2},
    {image: image3},
    {image: image4},
    {image: image5},
    {image: image6},
]

function Images() {
    const [current, setCurrent] = useState(0)
    const length = ImageData.length
    const nextSlide = () => {
        setCurrent(current===length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current=== 0 ? length - 1 : current - 1)
    }

    return (
        <>
            <section className='slider'>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
                {ImageData.map((image, index) => {
                    return (
                        <div className={index===current ? "slide active" : "slide"} key={index}>
                            {index === current && (<img src={image.image} alt="image" className="image" onClick={nextSlide}></img>)}
                        </div>  
                    )
                })}
            </section>
        </>
    )
}

export default Images