

export const Menuitem = ({item}) => {
    const {name, image, category, price, _id,recipe } = item
  return (
    <div className="flex space-x-4">
        <img 
        className="w-[100px] object-cover "
        style={{borderRadius:'0px 200px 200px 200px'}}
        src={image}  />
        <div>
            <h3>{name}------------------</h3>
            <p>{recipe}</p>
        </div>
        <p className="text-yellow-500">${price}</p>

    </div>
  )
}
