import { useState } from "react";

function ImageCard({
  item,
  onDragStart = () => {},
  onDragEnter = () => {},
  onDragEnd = () => {},
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      onDragOver={(e) => e.preventDefault()}
      onMouseOver={() => setVisible(true)}
      onMouseOut={() => setVisible(false)}
      className={`relative border border-gray-300 rounded-md hover:bg-gray-300 first:row-span-2 first:col-span-2`}
    >
      <img className="rounded-md" src={item.img} alt="img" />
      {visible && <input className="absolute top-4 left-4" type="checkbox" />}
    </div>
  );
}

export default ImageCard;
