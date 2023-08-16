import Layout from "../../components/layout";
import Content from "../../components/layout/content";
import RelatedMovie from "../../components/relatedMovie";
import movie_bg from "../../assets/images/movie_bg.jpg";
import { useSearchParams } from "react-router-dom";


export default function Search({ type }: { type: string }) {
    const [searchParams] = useSearchParams();

    const url = `/search/${type}?query=${searchParams.get("query")}`
    return (
        <Layout>
            <Content title={type.toLocaleUpperCase()} width="full" background={movie_bg}>
                <div className="mx-4 lg:mx-16 pb-20 pt-10">
                    <h1 className="text-4xl text-white text-center w-full mb-5">
                        Search Result for <span className="text-red-500">"{searchParams.get("query")}"</span>
                    </h1>
                    <RelatedMovie query={url} maxList={20} />
                </div>
            </Content>
        </Layout>
    )
}