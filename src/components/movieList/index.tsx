import { useQuery } from "react-query"
import api from "../../utils/api"
import { Movie } from "../../services/movie.services"
import { AiFillPlayCircle } from 'react-icons/ai'
import { Link } from "react-router-dom"
import Loading from "../Loading"
import { motion } from 'framer-motion'

export default function MovieList({ title = "", query, maxList }: { title?: string, query: string, maxList: number }) {

    const getMovies = async () => {
        const { data } = await api.get(`${query}`)
        return data
    }

    const { data, isLoading, isError } = useQuery(query, getMovies)

    if (isLoading) return <Loading />

    if (isError) return <div>Error</div>

    const imageUrl = 'https://image.tmdb.org/t/p/w500'
    const movies = data.results as Movie[]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    const renderTitle = (title: string) => {
        if (!title) return null

        return title.split(' ').map((word, index) => {
            if (index === title.split(' ').length - 1) {
                return <span key={index} className="text-red-500">{word} </span>
            }
            return <span key={index}>{word} </span>
        }
        )
    }

    const renderMovies = () => {

        return movies.slice(0, maxList).map((movie, index) => {
            return (
                <motion.div variants={item} key={index} className="rounded-lg overflow-clip hover:scale-105 transition-all group/card hover:ring-2 ring-blue-500 hover:shadow-xl hover:shadow-blue-700 relative duration-300">
                    <div className="w-full h-full absolute top-0 left-0 bg-black opacity-0 group-hover/card:opacity-50 duration-1000" />
                    <img src={`${imageUrl}${movie.poster_path}`} alt="" />
                    <Link to={`/movie/${movie.id}`} >
                        <button className="hidden group-hover/card:flex w-full h-full absolute top-0 left-0 justify-center items-center">
                            <AiFillPlayCircle size={70} className="drop-shadow-[0_5px_15px_rgba(255,255,255)] text-red-600 hover:text-red-500 transition-all" />
                        </button>
                    </Link>
                </motion.div>
            )

        })
    }

    return (
        <div className="slider bg-gray-800 py-10 lg:py-24">
            <div className="mx-4 lg:mx-16">
                <div className="flex justify-between w-full mb-5 lg:mb-10">
                    <h1 className="text-xl lg:text-3xl text-white font-bold">
                        {renderTitle(title)}
                    </h1>
                </div>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 lg:grid-cols-5 gap-7">
                    {renderMovies()}
                </motion.div>
            </div>
        </div>
    )
}