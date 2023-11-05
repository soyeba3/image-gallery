import { useState } from "react";

function ImageCard(props) {
  const [visible, setVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const {
    item,
    onDragStart = () => {},
    onDragEnter = () => {},
    onDragEnd = () => {},
    selectedItems,
    setSelectedItems = () => {},
  } = props;

  const handleInputChange = () => {
    const existingItem = selectedItems.find((i) => i.id === item.id);
    // Check if item is already selected if so, remove it, otherwise add it.
    if (existingItem) {
      const newSeletedItems = selectedItems.filter((i) => i.id !== item.id);
      setSelectedItems(newSeletedItems);
    } else {
      setSelectedItems([...selectedItems, item]);
    }

    setIsChecked((prev) => !prev);
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      onDragOver={(e) => e.preventDefault()}
      onMouseOver={() => setVisible(true)}
      onMouseOut={() => setVisible(false)}
      className="relative border border-gray-300 rounded-md hover:bg-gray-300 first:row-span-2 first:col-span-2"
    >
      <img className="rounded-md" src={item.img} alt="img" />
      {visible || isChecked ? (
        <input
          className="absolute h-3 sm:h-4 w-3 sm:w-4 top-1 sm:top-4 left-1 sm:left-4"
          type="checkbox"
          onChange={handleInputChange}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default ImageCard;
