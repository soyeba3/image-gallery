function Header({ selectedItems, handleDelete = () => {} }) {
  return (
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
  );
}

export default Header;
