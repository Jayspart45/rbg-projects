const Menu = ({onClick}) => {
  return (
    <div className="w-screen flex z-30 justify-between md:hidden bg-Green text-white">
    <div className="px-5 py-4">
        Logo
    </div>
    <button className="py-4 px-3" onClick={onClick}>Menu</button>
    </div>
  )
}

export default Menu