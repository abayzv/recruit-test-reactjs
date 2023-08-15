import { useQuery } from "react-query"
import api from "../../utils/api"
import { useRef, useEffect } from "react"
import { Movie } from "../../services/movie.services"

export default function MovieSlider() {
    const slider: any = useRef(null)

    const getUpcomingMovies = async () => {
        const { data } = await api.get('/movie/upcoming')
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

    const { data, isLoading, isError } = useQuery('upcomingMovies', getUpcomingMovies)
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div> Error </div>

    const imageUrl = "https://image.tmdb.org/t/p/w500"
    const movies = data.results as Array<Movie>

    const renderSlider = () => {
        return movies.map((movie: Movie) => {
            return (
                <li key={movie.id} className="w-40 lg:w-80 flex-shrink-0 snap-center">
                    <img src={imageUrl + movie.poster_path} alt={movie.title} className="rounded-lg" />
                </li>
            )
        });
    }

    return (
        <div className="slider bg-gray-800 py-10 lg:py-24">
            <div className="mx-4 lg:mx-16">
                <div className="flex justify-between w-full mb-5 lg:mb-10">
                    <h1 className="text-xl lg:text-3xl text-white font-bold">Upcoming <span className="text-red-500">Movies</span></h1>
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