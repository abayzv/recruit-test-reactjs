import { useQuery } from "react-query"
import api from "../../utils/api"
import { Movie } from "../../services/movie.services"
import { AiFillPlayCircle } from 'react-icons/ai'
import { Link } from "react-router-dom"
import Loading from "../Loading"
import Pagination from "../Pagination"
import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { motion } from 'framer-motion'

export default function RelatedMovie({ title, query, maxList, random }: { title?: string, query: string, maxList: number, random?: boolean }) {
    const [currentPage, setCurrentPage] = useState(1)
    const path = useLocation().pathname
    const firstPath = path.split('/')[1]

    const getMovies = async () => {
        // if query has ? then add &page=currentPage else add ?page=currentPage
        const url = query.includes('?') ? `${query}&page=${currentPage}` : `${query}?page=${currentPage}`
        const { data } = await api.get(url)
        return data
    }

    const { data, isLoading, isError, refetch, isFetching } = useQuery(query, getMovies)

    useEffect(() => {
        refetch()
    }, [currentPage, refetch])

    if (isLoading) return <Loading className="bg-transparent" />
    if (isFetching) return <Loading className="bg-transparent" />

    if (isError) return <div>Error</div>

    const { page, total_pages } = data

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
        hidden: { y: 100, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    }


    const renderTitle = (title?: string) => {
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
        // randomize movies
        let randomMovies: Movie[] = []

        if (random) {
            randomMovies = movies.sort(() => Math.random() - 0.5)
        } else {
            randomMovies = movies
        }

        return randomMovies.slice(0, maxList).map((movie, index) => {
            return (
                <motion.div variants={item} key={index} className="rounded-lg max-h-60 lg:max-h-none overflow-clip hover:scale-105 transition-all group/card hover:ring-2 ring-blue-500 hover:shadow-xl hover:shadow-blue-700 relative duration-300">
                    <div className="w-full h-full absolute top-0 left-0 bg-black opacity-0 group-hover/card:opacity-50 duration-1000" />
                    {movie.poster_path ? <img src={`${imageUrl}${movie.poster_path}`} alt="" className="h-full object-cover" /> : <img src="https://www.altavod.com/assets/images/poster-placeholder.png" alt="" className="h-full object-cover" />}
                    <Link to={`/${firstPath === 'tv' ? 'tv' : 'movie'}/${movie.id}`} >
                        <button className="hidden group-hover/card:flex w-full h-full absolute top-0 left-0 justify-center items-center">
                            <AiFillPlayCircle size={70} className="drop-shadow-[0_5px_15px_rgba(255,255,255)] text-red-600 hover:text-red-500 transition-all" />
                        </button>
                    </Link>
                </motion.div>
            )

        })
    }

    return (
        <div>
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
            <div className="mt-5">
                <Pagination page={page} totalPage={total_pages} onNext={() => {
                    if (currentPage === total_pages) return
                    setCurrentPage(currentPage + 1)
                }} onPrev={() => {
                    if (currentPage === 1) return
                    setCurrentPage(currentPage - 1)
                }} />
            </div>
        </div>
    )
}