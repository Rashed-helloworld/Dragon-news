import React from "react";
import Header from "../components/Header";
import RightAside from "../components/homelayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
//   console.log(id, news);
  useEffect(() => {
    const clickedNewsData = data.find((singleNews) => singleNews.id == id);
    setNews(clickedNewsData);
  }, [data, id]);
  return (
    <div>
      <header className="w-11/12 mx-auto py-3">
        <Header />
      </header>
      <main className="py-5 w-11/12 mx-auto grid grid-cols-12 gap-3">
        <section className="col-span-9">
          <h2 className="font-semibold text-xl">News Details</h2>
          <NewsDetailsCard news={news} />
        </section>
        <section className="col-span-3">
          <RightAside />
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
