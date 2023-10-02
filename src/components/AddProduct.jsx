export const AddProduct = ({ onAddProduct }) => {
    return (
        <div className="flex justify-end">
            <button onClick={onAddProduct} className="bg-yellow-500 hover:bg-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-lg mt-2"><span>+</span></button>
        </div>
    )
}