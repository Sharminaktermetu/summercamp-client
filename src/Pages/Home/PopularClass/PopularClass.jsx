
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useClasses from "../../../hooks/useClasses";
import ClassItem from "./ClassItem";

const PopularClass = () => {
   const [activities]=useClasses();
   
    const sortedActivities = activities.sort((a, b) => b.enrollmentCount - a.enrollmentCount);
  
    const topClasses = sortedActivities.slice(0, 6);
    
    return (
        <div className="mx-auto">
        <SectionTitle
            title={'Our popular classes'}
            heading={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, iure."}
        ></SectionTitle>

        <div className="grid grid-cols-3 gap-10 mt-10">
            {topClasses.map((classItem) => (
                <ClassItem key={classItem.enrollmentCount} classItem={classItem}></ClassItem>
            ))}
        </div>
    </div>
    );
};

export default PopularClass;