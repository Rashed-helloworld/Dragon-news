import { Link } from "react-router";

const NewsDetailsCard = ({news}) => {
    // console.log(news);
    const { title, image_url, details, category_id } = news;
    return (
        <div className="space-y-5 mt-5">
            <img className="w-full h-[350px] object-cover" src={image_url} alt="" />
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p>{details}</p>
            <Link to={`/category/${category_id}`} className="btn btn-secondary mt-12auto">
                Back to Category
            </Link>
        </div>
    );
};

export default NewsDetailsCard;