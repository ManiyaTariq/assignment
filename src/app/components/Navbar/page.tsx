

const Navbar = ()=>{
    return(<div className="bg-black h-13">
        <div className=" font-bold text-purple-400 flex justify-between items-center">
            <h1 className="text-xl m-2">My PortFolio</h1>
            <ul className="flex gap-4 mr-4 cursor-pointer">
                <a className="hover:text-white">Home</a>
                <a className="hover:text-white">Contact</a>
                <a className="hover:text-white">About</a>
            </ul>
        </div>

    </div>
    )
}
export default Navbar