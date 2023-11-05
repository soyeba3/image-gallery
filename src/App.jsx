import { useRef, useState } from "react";
import ImageCard from "./components/ImageCard";
import { data } from "./data";

function App() {
  const [imageList, setImageList] = useState(data);

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

  return (
    <>
      <div className="px-20 py-10 bg-slate-200">
        <div className="bg-white rounded-md shadow-lg">
          <div className="px-10 py-4 border-b border-gray-200">
            <h1 className="text-lg font-bold">Gallery</h1>
          </div>
          <div className="grid grid-cols-5 gap-5 p-10">
            {imageList.map((item, index) => (
              <ImageCard
                onDragStart={() => (dragItem.current = index)}
                onDragEnter={() => (dragOverItem.current = index)}
                onDragEnd={handleSort}
                key={item.id}
                item={item}
              />
            ))}
            <div className="flex flex-col items-center justify-center gap-2 border-2 border-gray-300 border-dashed rounded-md">
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <div className="text-base font-semibold">Add Images</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
