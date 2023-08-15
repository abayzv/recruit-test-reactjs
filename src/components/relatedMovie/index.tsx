import { useQuery } from "react-query"
import api from "../../utils/api"
import { Movie } from "../../services/movie.services"
import { AiFillPlayCircle } from 'react-icons/ai'
import { Link } from "react-router-dom"
import Loading from "../Loading"
import Pagination from "../Pagination"
import { useState, useEffect } from 'react'

export default function RelatedMovie({ title, query, maxList, random }: { title?: string, query: string, maxList: number, random?: boolean }) {
    const [currentPage, setCurrentPage] = useState(1)

    const getMovies = async () => {
        const { data } = await api.get(`${query}?page=${currentPage} `)
        return data
    }

    const { data, isLoading, isError, refetch, isFetching } = useQuery(query, getMovies)

    useEffect(() => {
        refetch()
    }, [currentPage, refetch])

    if (isLoading) return <Loading />
    if (isFetching) return <Loading />

    if (isError) return <div>Error</div>

    const { page, total_pages } = data
    const imageUrl = 'https://image.tmdb.org/t/p/w500'
    const movies = data.results as Movie[]

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
                <div key={index} className="rounded-lg overflow-clip hover:scale-105 transition-all group/card hover:ring-2 ring-blue-500 hover:shadow-xl hover:shadow-blue-700 relative duration-300">
                    <div className="w-full h-full absolute top-0 left-0 bg-black opacity-0 group-hover/card:opacity-50 duration-1000" />
                    <img src={`${imageUrl}${movie.poster_path}`} alt="" />
                    <Link to={`/movies/${movie.id}`} >
                        <button className="hidden group-hover/card:flex w-full h-full absolute top-0 left-0 justify-center items-center">
                            <AiFillPlayCircle size={70} className="drop-shadow-[0_5px_15px_rgba(255,255,255)] text-red-600 hover:text-red-500 transition-all" />
                        </button>
                    </Link>
                </div>
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
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-7">
                {renderMovies()}
            </div>
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