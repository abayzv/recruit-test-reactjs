import Layout from "../../components/layout";
import Content from "../../components/layout/content";
import RelatedMovie from "../../components/relatedMovie";
import movie_bg from "../../assets/images/movie_bg.jpg";
import { useState } from "react";


export default function MoviePage() {
    return (
        <Layout>
            <Content title="Movie" width="full" background={movie_bg}>
                <div className="mx-16 pb-20 pt-10">
                    <RelatedMovie query="/movie/top_rated" maxList={20} />
                </div>
            </Content>
        </Layout>
    )
}