import { useQuery } from "react-query"
import api from "../../utils/api"
import { Movie } from "../../services/movie.services"
import { AiFillEye, AiFillStar } from "react-icons/ai"

export default function MoviePromotion({ query }: { query: string }) {
    const getMovie = async () => {
        const { data } = await api.get(`/search/movie?query=${query}`)
        return data
    }

    const { data, isLoading, isError } = useQuery("movie", getMovie)

    if (isLoading) return <div>Loading...</div>

    if (isError) return <div>Error</div>

    const imgUrl = `https://image.tmdb.org/t/p/original/${data.results[0].backdrop_path}`
    const movie: Movie = data.results[0]


    return (
        <div className={`py-10 lg:py-24 bg-cover bg-center relative bg-gray-900 bg-opacity-90`}>
            <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-70" style={{ backgroundImage: `url(${imgUrl})` }} />
            <div className="mx-4 lg:mx-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <img className="w-full h-96 object-cover rounded-lg" src={imgUrl} alt="" />
                    </div>
                    <div>
                        <h1 className="text-3xl lg:text-5xl font-bold text-white">{movie.title}</h1>
                        <div className="flex gap-5 text-white mt-5">
                            <div className="flex items-center gap-2">
                                <AiFillEye color="skyblue" />
                                {Math.floor(movie.popularity / 100)}k views
                            </div>
                            <div className="flex items-center gap-2">
                                <AiFillStar color="yellow" /> {movie.vote_average}
                            </div>
                        </div>
                        <p className="text-white mt-5">{movie.overview}</p>
                        <button className="mt-5 bg-red-500 text-white p-3 px-6 rounded-lg">Watch Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}