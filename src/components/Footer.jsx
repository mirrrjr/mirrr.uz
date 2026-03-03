export default function Footer() {
    return (
        <div className='bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16'>
            <img className='invert h-10 md:h-15 lg:h-20' src="/assets/mirrr.svg" alt="" />

            <div className='text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3'>
                <p className="text-xs md:text-sm tracking-wide">
                    © 2021-{new Date().getFullYear()}
                    . All rights reserved.
                </p>

                <p className="text-xs md:text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200">
                    Made by <span className="text-zinc-300 font-mono">MIRRR jr.</span>
                </p>
            </div>
        </div>
    )
}
