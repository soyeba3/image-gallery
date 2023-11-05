import { useRef, useState } from "react";
import ImageCard from "./components/ImageCard";
import { data } from "./data";

function App() {
  const [imageList, setImageList] = useState(data);
  const [selectedItems, setSelectedItems] = useState([]);

  //save reference for dragItem and dragOverItem
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  //handle sort item
  const handleSort = () => {
    //duplicate items
    let copiedImageList = [...imageList];

    //remove and save the dragged item
    const draggedItem = copiedImageList.splice(dragItem.current, 1)[0];

    //change the position
    copiedImageList.splice(dragOverItem.current, 0, draggedItem);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the original array
    setImageList(copiedImageList);
  };

  //handle delete items
  const handleDelete = () => {
    const newImageList = imageList.filter((i) => !selectedItems.includes(i));
    setImageList(newImageList);
    setSelectedItems([]);
  };

  return (
    <>
      <div className="min-h-screen px-20 py-10 bg-slate-200">
        <div className="bg-white rounded-md shadow-lg">
          <div className="flex justify-between items-center px-5 sm:px-10 py-4 border-b border-gray-200">
            {selectedItems.length > 0 ? (
              <>
                <div className="text-xs sm:text-lg font-medium sm:font-bold flex gap-1 sm:gap-2 items-center">
                  <input
                    className="h-3 sm:h-4 w-3 sm:w-4"
                    type="checkbox"
                    checked
                    readOnly
                  />
                  <span>{selectedItems.length} Files Selected</span>
                </div>
                <span
                  onClick={handleDelete}
                  className="text-xs sm:text-base font-medium text-red-500 cursor-pointer"
                >
                  Delete files
                </span>
              </>
            ) : (
              <h1 className="text-base sm:text-lg font-medium sm:font-bold">
                Gallery
              </h1>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-5 p-5 sm:p-10">
            {imageList.map((item, index) => (
              <ImageCard
                onDragStart={() => (dragItem.current = index)}
                onDragEnter={() => (dragOverItem.current = index)}
                onDragEnd={handleSort}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                key={item.id}
                item={item}
              />
            ))}
            <div className="h-auto flex flex-col items-center justify-center gap-1 sm:gap-2 border-2 border-gray-300 border-dashed rounded-md py-[25%] sm:py-0">
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 sm:w-6 h-4 sm:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <div className="text-xs sm:text-base font-normal sm:font-semibold">
                Add Images
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
