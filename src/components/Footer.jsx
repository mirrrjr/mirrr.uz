
export default function Footer() {
    return (
        <div className='bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16'>
            <img className='invert h-20 lg:h-20' src="/assets/mirrr.svg" alt="" />

            <div className='text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3'>
                <p>@ 2021-{new Date().getFullYear()} Copyright</p>
                <p>Made by MIRRR jr.</p>
            </div>
        </div>
    )
}
