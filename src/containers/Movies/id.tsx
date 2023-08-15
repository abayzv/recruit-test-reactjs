import api from "../../utils/api"
import { useQuery } from "react-query"
import Loading from "../../components/Loading"
import { Movie } from "../../services/movie.services"
import RelatedMovie from "../../components/relatedMovie"
import Content from "../../components/layout/content"
import { useParams } from "react-router-dom"
import Layout from "../../components/layout"

export default function MovieDetails() {
    const { id } = useParams<{ id: string }>()

    const getMovieDetails = async () => {
        const { data } = await api.get(`/movie/${id}`)
        return data
    }
    const { data, isLoading, isError } = useQuery(`${id}`, getMovieDetails)

    if (isLoading) return <Loading className="min-h-screen" />
    if (isError) return <h1>Error</h1>

    const imgUrl = `https://image.tmdb.org/t/p/original${data.backdrop_path}`
    const movie: Movie = data

    return (
        <Layout>
            <Content title="Movie Details" background={imgUrl}>
                <div className="w-full mt-10 lg:mt-20 max-h-[600px] overflow-clip rounded">
                    <img src={imgUrl} alt={movie.title} />
                </div>
                <div className="mt-5">
                    <h1 className="text-3xl text-white">{movie.title}</h1>
                    <div>
                        {movie.genres.map((genre, index) => (
                            <span key={index} className="text-gray-400">{genre.name}{index !== movie.genres.length - 1 && ", "}</span>
                        ))}
                    </div>
                    <div className="bg-gray-900 p-5 rounded grid lg:grid-cols-2 mt-5 gap-5">
                        {/* overview */}
                        <div>
                            <h2 className="text-gray-200 text-xl mb-2">Details</h2>
                            <p className="text-gray-400 text-lg leading-8">{movie.overview}</p>
                        </div>
                        <div>
                            <h2 className="text-gray-200 text-xl mb-2">Information</h2>
                            {/* table */}
                            <table className="text-gray-400">
                                <tbody>
                                    <tr>
                                        <td className="pr-5 py-1">Release Date</td>
                                        <td className="pr-5 py-1">:</td>
                                        <td>{movie.release_date}</td>
                                    </tr>
                                    <tr>
                                        <td className="pr-5 py-1">Status</td>
                                        <td className="pr-5 py-1">:</td>
                                        <td>{movie.status}</td>
                                    </tr>
                                    <tr>
                                        <td className="pr-5 py-1">Original Title</td>
                                        <td className="pr-5 py-1">:</td>
                                        <td>{movie.original_title}</td>
                                    </tr>
                                    <tr>
                                        <td className="pr-5 py-1">Production Company</td>
                                        <td className="pr-5 py-1">:</td>
                                        <td>{movie.production_companies.map((company, index) => (
                                            <span key={index}>{company.name}{index !== movie.production_companies.length - 1 && ", "}</span>
                                        ))}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="py-20">
                    <RelatedMovie title="Related Movies" query={`/movie/popular`} maxList={5} random />
                </div>
            </Content>
        </Layout>
    )
}