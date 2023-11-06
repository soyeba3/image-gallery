import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import ImageCard from "./components/ImageCard";
import { data } from "./data";

function App() {
  const [imageList, setImageList] = useState(data);
  const [selectedItems, setSelectedItems] = useState([]);

  //handle delete items
  const handleDelete = () => {
    const newImageList = imageList.filter((i) => !selectedItems.includes(i));
    setImageList(newImageList);
    setSelectedItems([]);
  };

  return (
    <>
      <div className="min-h-screen px-10 lg:px-20 py-10 bg-slate-200">
        <div className="bg-white rounded-md shadow-lg">
          <div className="flex justify-between items-center px-5 sm:px-10 py-4 border-b border-gray-200">
            {selectedItems.length > 0 ? (
              <>
                <div className="text-lg font-bold flex gap-2 items-center">
                  <input className="h-4 w-4" type="checkbox" checked readOnly />
                  <span>{selectedItems.length} Files Selected</span>
                </div>
                <span
                  onClick={handleDelete}
                  className="text-base font-medium text-red-500 cursor-pointer hover:underline"
                >
                  Delete files
                </span>
              </>
            ) : (
              <h1 className="text-lg font-bold">Gallery</h1>
            )}
          </div>
          <ReactSortable
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-5 p-5 sm:p-10"
            list={imageList}
            setList={setImageList}
            animation={300}
            delayOnTouchStart={true}
            delay={3}
          >
            {imageList.map((item, index) => (
              <ImageCard
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
          </ReactSortable>
        </div>
      </div>
    </>
  );
}

export default App;
