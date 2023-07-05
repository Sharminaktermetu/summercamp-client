import Instructors from "../Instructors/Instructors";
import Banner from "./Banner/Banner";
import PopularClass from "./PopularClass/PopularClass";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;