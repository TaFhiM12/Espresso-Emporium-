import { Link, useLoaderData } from "react-router";
import Hero from "./Hero";
import "../index.css";
import FollowPage from "./FollowPage";
import PopularProducts from "./PopularProducts";

const Home = () => {
  const coffeesData = useLoaderData();
  return (
    <div>
      <Hero />
      <PopularProducts coffeesData = {coffeesData}/>
      <FollowPage/>
    </div>
  );
};

export default Home;
