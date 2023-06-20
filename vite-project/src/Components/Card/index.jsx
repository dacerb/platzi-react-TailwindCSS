
const Card = ({id, price, category: {name:category_label}, title, images}) => {

  return (
    
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs px-3 py-0.5 m-2">{category_label}</span>
            <img className="w-full h-full object-cover rounded-lg" src={images[0]} alt={title} />
            <div className="m-2 absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1">
            +
            </div>
        </figure>
        <p className="flex justify-between p-1">
            <span className="text-sm font-light">{title}</span>
            <span className="text-lg font-medium">${price}</span>
        </p>

    </div>
  )
}

export default Card