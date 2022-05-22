import './styles.css'

const Header = () => {

    const toggleMenuMobile = () => {
        return (
            alert('clicou no menu mobile')
        )
    }
    return(
        <div className="header">
            <div className="col">
                <img 
                    src='/img/hitech.png'
                    height={100}
                />
            </div>
            <div className="col">
                <ul>
                    <li>Ação</li>
                    <li>Ação</li>
                    <li>Ação</li>
                    <li>Ação</li>
                </ul>

                <button onClick={toggleMenuMobile}>
                    <div className='btnMenuMobile'/>
                    <div className='btnMenuMobile'/>
                    <div className='btnMenuMobile'/>
                </button>
            </div>
        </div>
    )
}

export default Header

