import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import AddImages from "./components/AddImages";
import Header from "./components/Header";
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
          <Header selectedItems={selectedItems} handleDelete={handleDelete} />
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
            <AddImages />
          </ReactSortable>
        </div>
      </div>
    </>
  );
}

export default App;
