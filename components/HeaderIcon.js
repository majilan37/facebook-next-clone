function HeaderIcon({Icon, active}) {
    return (
        <div className="cursor-pointer md:px-4 flex items-center md:py-2 hover:text-blue-500
        md:hover:bg-gray-100 rounded-md sm:h-14 active:border-b-2 border-blue-400" >
            <Icon className={`h-5 sm:h-7 mx-auto text-center text-gray-500 ${active && 'text-blue-500'}`} />
        </div>
    )
}

export default HeaderIcon
