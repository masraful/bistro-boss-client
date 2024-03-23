import React from 'react';

const NavBar = () => {
    const NavOption = <>
        <li><a>Item 1</a></li>
        <li><a>Item2</a> </li>
        <li><a>Item 3</a></li>
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-40 max-w-screen-xl bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavOption}
                        </ul>
                    </div>
                    <a className=" btn-ghost text-xl">
                        <h1 className='cinzel-decorative-black text-2xl'>BISTRO BOSS</h1>
                        <h2 className='cinzel-decorative-regular'>R E S T A U R A N T</h2>

                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;