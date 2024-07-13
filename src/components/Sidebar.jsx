import { createContext, useContext, useState } from "react"
import IMAGES from "../images";
import { ExpandedContext } from "../context/Expanded";



export default function Sidebar({ children }) {
    const sidebarContext = useContext(ExpandedContext)
    return (
        <>
            <aside className="flex"  >
                <nav className="h-full flex flex-col bg-[#171717] border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">

                    </div>
                    <ul className="flex-1 px-3">{children}</ul>
                    {sidebarContext.expanded && (
                        <div className="flex flex-col gap-5 pl-6 pb-5">
                            <div className="flex flex-row gap-5 cursor-pointer ">
                                <img src={IMAGES.Ayuda} alt='' className='w-[18px] h-[18px]' />
                                <p className="text-white hover:text-[#B6B5FF]">Ayuda</p>

                            </div>
                            <div className="flex flex-row gap-5 cursor-pointer ">
                                <img src={IMAGES.RightSession} alt='' className='w-[18px] h-[18px]' />
                                <p className="text-white hover:text-[#B6B5FF]">Cerrar sesión</p>

                            </div>

                        </div>
                    )}

                </nav>

            </aside>
        </>
    )
}

export function SidebarItem({ image, text, active }) {
    const sidebarContext = useContext(ExpandedContext)


    return (
        <li className={`relative flex items-center py-2.5 px-3 my-1 rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-grey-200 to-grey-100" : "hover:bg-[#B6B5FF] text-gray-600"} ${active && "bg-[#B6B5FF] text-white"}`}>
            <div className={`flex flex-row ${sidebarContext.expanded ? "gap-1.5" : "gap-0"}`}>
                <img src={image} alt='' className='w-[18px] h-[18px]' />
                <span className={`overflow-hidden text-white transition-all ${sidebarContext.expanded ? "w-52 ml-3" : "w-5 text-[0px]"}`}>{text}</span>
                {!sidebarContext.expanded && (
                    <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-[#00638326] text-grey-500 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                        {text}
                    </div>
                )}
            </div>
        </li>
    )
}