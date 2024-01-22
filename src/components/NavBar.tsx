import './NavBar.css'
interface Props{
    app_name: string
}

export default function NavBar(props: Props) {
    return (
        <>
            <nav className="navbar">
                <div>
                    <a className="app-name" href="/">{props.app_name}</a>    
                </div>
            </nav>
        </>
    )
}
