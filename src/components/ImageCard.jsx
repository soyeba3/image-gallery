import { useState } from "react";

function ImageCard({ item }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative border border-gray-300 rounded-md hover:bg-gray-300 hover:cursor-pointer first:row-span-2 first:col-span-2"
      onMouseOver={() => setVisible(true)}
      onMouseOut={() => setVisible(false)}
    >
      <img className="rounded-md" src={item.img} alt="img" />
      {visible && <input className={`absolute top-4 left-4`} type="checkbox" />}
    </div>
  );
}

export default ImageCard;
