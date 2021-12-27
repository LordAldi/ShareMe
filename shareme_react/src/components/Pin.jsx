import { urlFor } from "../client";

const Pin = ({ pin: { postedBy, image, _id, destination } }) => {
  return (
    <div>
      <img
        className="rounded-lg w-full"
        alt="userPost"
        src={urlFor(image).width(250).url()}
      />
    </div>
  );
};

export default Pin;
