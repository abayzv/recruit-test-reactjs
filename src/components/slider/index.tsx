import React, { useState, useEffect, useCallback } from "react"
import { SliderData } from "../../services/slider.services"

export default function Slider(props: React.PropsWithRef<{ sliderData: SliderData }>) {

    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = useCallback(() => {
        if (currentSlide === props.sliderData.length - 1) {
            return setCurrentSlide(0)
        }

        setCurrentSlide(currentSlide + 1)
    }, [currentSlide, props.sliderData.length])

    const setSlide = (index: number) => {
        setCurrentSlide(index)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(interval)

    }, [currentSlide, nextSlide])

    const renderSlider = () => {
        return props.sliderData.map((item, index) => {
            return (
                <div key={index} className="absolute transition-transform duration-500" style={{ transform: `translateX(${index - currentSlide}00%)` }}>
                    <img src={item.url} alt={item.title} className="aspect-[2.7/1] object-cover object-bottom" />
                </div>
            )
        })
    }

    const renderSelectors = () => {
        return props.sliderData.map((item, index) => {
            return (
                <div key={index} className={`${currentSlide === index ? 'bg-white w-10' : 'bg-white w-2'} h-2 rounded-full mx-1 cursor-pointer`} onClick={() => setSlide(index)}></div>
            )
        })
    }

    return (
        <>
            <div className="relative aspect-[2.7/1] overflow-hidden mt-14 -mb-1 lg:-mb-3 lg:mt-0">
                {renderSlider()}
                {/* slider select */}
                <div className="flex absolute bottom-[10%] justify-center w-full">
                    {renderSelectors()}
                </div>
            </div>
        </>
    )
}