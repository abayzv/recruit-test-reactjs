import Layout from "../../components/layout";
import Content from "../../components/layout/content";
import RelatedMovie from "../../components/relatedMovie";
import movie_bg from "../../assets/images/movie_bg.jpg";


export default function TvPage() {
    return (
        <Layout>
            <Content title="TV Shows" width="full" background={movie_bg}>
                <div className="mx-4 lg:mx-16 pb-20 pt-10">
                    <RelatedMovie query="/tv/popular" maxList={20} />
                </div>
            </Content>
        </Layout>
    )
}