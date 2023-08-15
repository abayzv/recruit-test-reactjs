import { useParams } from "react-router-dom"

export default function MovieDetails() {
    const { movie_id } = useParams()

    return (
        <div>
            <h1>Movie Details</h1>
            <h2>{movie_id}</h2>
        </div>
    )
}