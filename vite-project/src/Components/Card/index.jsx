
const Card = ({id}) => {

  console.log(id)

  return (
    
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs px-3 py-0.5 m-2">{id}</span>
            <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="headphones" />
            <div className="m-2 absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1">
            +
            </div>
        </figure>
        <p className="flex justify-between p-1">
            <span className="text-sm font-light">HeadPhones</span>
            <span className="text-lg font-medium">$300</span>
        </p>
        
    </div>
  )
}

export default Card