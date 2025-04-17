import logo from "../assets/ytredLogo2.png"
const Nav = () => {
    return ( 
        <>
            <div className="flex flex-row items-center justify-around pt-5 ">
                <div>
                    <img src={logo} alt="Youtube" className="w-40"/>
                </div>
                <div className="w-[600px] text-center">
                    <input type="text" placeholder="Pesquisar" className="w-[600px] rounded-md border-2 border-neutral-600" />
                </div>
                <div className="flex flex-row gap-8 pr-5">
                    <button>+</button>
                    <div>n</div>
                    <div>conf</div>
                    <div>perfil</div>
                </div>
            </div>
        </>
     );
}
 
export default Nav;