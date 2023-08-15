import { useParams } from "react-router-dom"
import MovieDetails from "../../components/movieDetails"
import Layout from "../../components/layout"

export default function Details() {
    const { movie_id } = useParams()

    if (!movie_id) return null

    return (
        <Layout>
            <MovieDetails id={movie_id} />
        </Layout>
    )
}