import { useState } from "react";

function ImageCard(props) {
  const [visible, setVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { item, selectedItems, setSelectedItems = () => {} } = props;

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
      onMouseOver={() => setVisible(true)}
      onMouseOut={() => setVisible(false)}
      className="min-h-[100px] relative border border-gray-300 rounded-md first:row-span-2 first:col-span-2"
    >
      <img className="rounded-md" src={item.img} alt="img" />

      <div
        className={`absolute h-full w-full top-0 left-0 right-0 bottom-0 transition ${
          isChecked && "bg-[#1312121a] hover:bg-[#1312121a]"
        } hover:bg-[#13121252] cursor-pointer rounded-md`}
      >
        {(visible || isChecked) && (
          <input
            className="absolute h-4 w-4 top-3 md:top-4 left-3 md:left-4"
            type="checkbox"
            onChange={handleInputChange}
          />
        )}
      </div>
    </div>
  );
}

export default ImageCard;
