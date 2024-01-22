import logo from '../assets/rocket.png'

export const Header = () => {
    return (
        <header className="w-full flex items-center">
            <img src={logo} />
            <p>Todo</p>
        </header>
    )
}