export default function ItemShowcase({imagelink, title, price = "0.00", link}) {
    const addImageFallback = (event) => {
        event.currentTarget.src = import.meta.env.VITE_APP_URL +
            `/fallback${Math.floor(Math.random() * 20) + 1}.png`;
        event.currentTarget.className += ' scale-50'
      };
    return (
        <div className="bg-gray-50 text-center rounded-md p-10 hover:scale-105 transition duration-150 border">
            <img src={imagelink} alt="" className="object-cover w-full aspect-square mb-2" onError={addImageFallback}/>
            <h1 className="font-bold text-lg">{title}</h1>
            <span className="flex justify-center align-middle">
                <a className="bg-red-500 text-black hover:bg-black hover:text-white
                transition duration-200 px-3 py-2 rounded-[1em] cursor-pointer" href={link}>Check product</a>
                <h4 className="text-red-500 font-bold py-2 mx-4">{price}DZD</h4>
            </span>
        </div>
    )
}