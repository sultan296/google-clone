import React from 'react'

function Google() {
    return (
        <>
            <div className='bg-white h-screen'>
                <nav className='flex h-15 items-center justify-between px-10'>
                    <div className='flex gap-5'>
                        <h5 className='text-md font-semibold cursor-pointer'>About</h5>
                        <h5 className='text-md font-semibold cursor-pointer'>Store</h5>
                    </div>
                    <div className='flex gap-5'>
                        <h5 className='text-md font-semibold mt-0.5 cursor-pointer'>Gmail</h5>
                        <h5 className='text-md font-semibold  mt-0.5 cursor-pointer'>Images</h5>
                        <h5 className='text-lg cursor-pointer'>
                            <i class="fa-solid fa-flask"></i>
                        </h5>
                        <h5 className='text-lg cursor-pointer'>
                            <i class="fa-solid fa-bars"></i>
                        </h5>
                        <h5 className='text-lg cursor-pointer'>
                            <i class="fa-solid fa-circle-user"></i>
                        </h5>
                    </div>
                </nav>
                <div className='grid place-content-center'>
                    <img src="https://th.bing.com/th/id/R.2edf43b2747343d772177dff4de67ca1?rik=N4WLUOfpf92Q9A&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fGoogle-Logo-PNG-Free-Image.png&ehk=Jlh0o0mll7YsNeyVsDTaKxQ%2bIc8e4BKw4%2bXfbX73tPY%3d&risl=&pid=ImgRaw&r=0" alt="google logo" className=' mx-auto w-lg' />
                    <div className='relative'>
                        <input type="search" name="search box" className='bg-gray-300 rounded-2xl outline-none pl-10 text-sm w-xl h-10' />
                        <p className='text-md text-black absolute top-2 left-3 cursor-pointer'>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </p>
                        <p className='text-md text-black absolute top-2 right-17.5 cursor-pointer'>
                            <i class="fa-solid fa-xmark"></i>
                        </p>
                        <span className='absolute top-2 right-14.5 h-6.5 w-0.5 bg-black cursor-default'></span>
                        <p className='text-md text-black absolute top-2 right-9.5 cursor-pointer'>
                            <i class="fa-solid fa-microphone"></i>
                        </p>
                        <p className='text-md text-black absolute top-2 right-3 cursor-pointer'>
                            <i class="fa-solid fa-camera"></i>
                        </p>
                    </div>
                    <div className='flex justify-center gap-5 mt-5'>
                        <button className='text-md text-black font-semibold bg-gray-200 rounded-sm p-1.5 cursor-pointer'>Google Search</button>
                        <button className='text-md text-black font-semibold bg-gray-200 rounded-sm p-1.5 cursor-pointer'>I,m Feeling Lucky</button>
                    </div>
                    <div className='flex justify-center text-md font-semibold mt-5 align-middle'>
            <p className='mt- mr-1.5'>Google offered in:</p>
            <ul className='flex gap-2 text-md  text-blue-600'>
                <li><a href="#">kannada</a></li>
                <li><a href="#">hindi</a></li>
                <li><a href="#">urdu</a></li>
                <li><a href="#">english</a></li>
                <li><a href="#">telugu</a></li>
                <li><a href="#">tamil</a></li>
                <li><a href="#">malyalim</a></li>
            </ul>
        </div>
                </div>
            </div>
        </>
    )
}

export default Google
