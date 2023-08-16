import { useQuery } from "react-query"
import api from "../../utils/api"
import { useRef, useEffect } from "react"
import { Movie } from "../../services/movie.services"

// icon
import { AiFillStar, AiFillEye } from 'react-icons/ai'
import Loading from "../Loading"
import { Link } from "react-router-dom"

export default function MovieSlider({ title, query }: { title: string, query: string }) {
    const slider: any = useRef(null)

    const getUpcomingMovies = async () => {
        const { data } = await api.get(query)
        return data
    }

    const nextSlide = (num: number) => {
        slider.current.style.scrollBehavior = 'smooth'
        slider.current.scrollLeft += num

        // if scroll max left, scroll to start
        if (slider.current.scrollLeft >= slider.current.scrollWidth - slider.current.clientWidth) {
            slider.current.scrollLeft = 0
        }
    }

    const prevSlide = (num: number) => {
        slider.current.scrollLeft -= num
    }

    // auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide(500)
        }, 3000);

        return () => clearInterval(interval)
    }, [])

    const { data, isLoading, isError } = useQuery(query, getUpcomingMovies)
    if (isLoading) return <Loading />
    if (isError) return <div> Error </div>

    const imageUrl = "https://image.tmdb.org/t/p/w500"
    const movies = data.results as Array<Movie>

    const renderSlider = () => {
        return movies.map((movie: Movie) => {
            return (
                <li key={movie.id} className="w-36 lg:w-80 flex-shrink-0 snap-center rounded-lg overflow-clip">
                    <Link to={`/movie/${movie.id}`}>
                        <img src={imageUrl + movie.poster_path} alt={movie.title} />
                        {/* <div className="text-white mt-2 absolute bottom-0 left-1/2 transform translate-x-[-50%] text-center bg-gradient-to-t from-black to-transparent w-full h-full px-5 flex-col justify-end py-5">
                        {movie.title}
                    </div> */}
                        <div className="hidden lg:block bg-gray-900 text-white p-5">
                            <div className="truncate">
                                {movie.title}
                            </div>
                            <div className="flex justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <AiFillEye color="skyblue" />
                                    {Math.floor(movie.popularity / 100)}k views
                                </div>
                                <div className="flex items-center gap-2">
                                    <AiFillStar color="yellow" /> {movie.vote_average}
                                </div>
                            </div>
                        </div>
                    </Link>
                </li>
            )
        });
    }

    const renderTitle = (title: string) => {
        return title.split(' ').map((word, index) => {
            if (index === title.split(' ').length - 1) {
                return <span key={index} className="text-red-500">{word} </span>
            }
            return <span key={index}>{word} </span>
        }
        )
    }

    return (
        <div className="slider bg-gray-800 py-10 lg:py-24">
            <div className="mx-4 lg:mx-16">
                <div className="flex justify-between w-full mb-5 lg:mb-10">
                    <h1 className="text-xl lg:text-3xl text-white font-bold">
                        {renderTitle(title)}
                    </h1>
                    <div className="hidden lg:flex gap-5 text-white">
                        <button className="bg-red-500 px-5 rounded" onClick={() => prevSlide(500)}>Prev</button>
                        <button className="bg-red-500 px-5 rounded" onClick={() => nextSlide(500)}>Next</button>
                    </div>
                </div>
                <div className="relative">
                    <ul ref={slider} className="flex overflow-x-auto gap-5">
                        {renderSlider()}
                    </ul>
                </div>
            </div>
        </div>
    )
}