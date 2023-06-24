

const SectionTitle = ({ title, heading }) => {
    return (

        <div className="mt-16 mx-auto text-center">
            <h1 className="text-5xl font-bold">{title}<span className="text-red-500"></span></h1>
            <p className="py-6 w-9/12 mx-auto">{heading}</p>
            <div className="divider"></div>
        </div>

    );
};

export default SectionTitle;