import logo from "../assets/ytredLogo.png"
const Nav = () => {
    return ( 
        <>
            <div className="flex flex-row items-center justify-around pt-5 ">
                <div className="flex flex-row items-center justify-center gap-4">
                    <span className="material-symbols-outlined hover:cursor-pointer text-white ">menu</span>
                    <img src={logo} alt="Youtube" className="w-35"/>
                </div>
                <div className="w-[600px] h-10 text-center flex flex-row bg-[#2A2A2A] border rounded-full items-center justify-around gap-2 px-4">
                    <span className="material-symbols-outlined hover:cursor-pointer text-white">search</span>
                    <input 
                    type="text" 
                    placeholder="Pesquisar" 
                    maxLength={250}
                    className="w-[600px] h-full rounded-full border-none focus:outline-none text-md" />
                    <span className="material-symbols-outlined hover:cursor-pointer text-white">mic</span>
                </div>
                <div className="flex flex-row gap-8 pr-5">
                    <button><span className="material-symbols-outlined hover:cursor-pointer text-white ">add_circle</span></button>
                    <button><span className="material-symbols-outlined hover:cursor-pointer text-white ">notifications</span></button>
                    <button><span className="material-symbols-outlined hover:cursor-pointer text-white ">settings</span></button>
                    <button><span className="material-symbols-outlined hover:cursor-pointer text-white ">account_circle</span></button>
                </div>
            </div>
        </>
     );
}
 
export default Nav;