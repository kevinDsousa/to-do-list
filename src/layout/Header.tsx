import logo from '../assets/rocket.png'

export const Header = () => {
    return (
        <header className="w-full h-[200px] flex gap-5 justify-center items-center bg-gray-600">
            <img className="w-[24px] h-9" src={logo} />
            <p className='font-inter font-extrabold text-4xl text-blue'>to<span className='text-purple-dark'>do</span></p>
        </header>
    )
}