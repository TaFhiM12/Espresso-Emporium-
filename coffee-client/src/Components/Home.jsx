import { Link, useLoaderData } from "react-router";
import Hero from "./Hero";
import "../index.css";
import FollowPage from "./FollowPage";
import PopularProducts from "./PopularProducts";
import {Helmet} from "react-helmet";

const Home = () => {
  const coffeesData = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Espresso Emporium | Home</title>
      </Helmet>
      <Hero />
      <PopularProducts coffeesData = {coffeesData}/>
      <FollowPage/>
    </div>
  );
};

export default Home;
