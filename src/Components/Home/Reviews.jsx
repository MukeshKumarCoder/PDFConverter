import React from "react";
import Heading from "../Common/Heading";
import reviewData from "../../Data/ReviewData";
import StarRatings from "react-star-ratings";
import Trustpilot from "../../assets/Trustpilot.svg";
import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-y-10 py-10">
      <Heading text={"What Teams Are Saying About Us"} />
      <div className="flex justify-between gap-x-10 h-[25rem] px-12">
        {reviewData.map((review) => (
          <div
            key={review.id}
            className="flex flex-col justify-center items-center gap-y-3 px-5"
          >
            <div className="flex justify-center items-center gap-x-5">
              <img
                src={review.image}
                alt={review.name}
                className="w-[5rem] h-[5rem] rounded-full object-cover "
              />
              <div>
                <h2 className="text-xl font-semibold">{review.name}</h2>
                <p className="text-textGray">{review.role}</p>
              </div>
            </div>
            <div>
              <StarRatings
                rating={review.rating}
                starRatedColor="gold"
                numberOfStars={5}
                starDimension="1.8rem"
                starSpacing="2px"
              />
            </div>
            <p className="text-xl font-semibold">{review.title}</p>
            <p className="text-textGray">{review.review}</p>
          </div>
        ))}
      </div>
      <Link
        to={"https://www.trustpilot.com/review/smallpdf.com"}
        className="flex justify-center items-center py-10"
      >
        <h2 className="text-xl font-semibold">Reviews from</h2>

        <img src={Trustpilot} alt="Trustpilot" />
      </Link>
    </section>
  );
};

export default Reviews;
