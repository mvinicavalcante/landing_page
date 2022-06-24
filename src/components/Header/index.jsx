import './styles.css'

const Header = () => {

    const toggleMenuMobile = () => {
        return (
            alert('clicou no menu mobile')
        )
    }

    const goHome = () => {
        return(
            window.location.href = '/'
        )
    }

    return(
        <div className="header">
            <div className="col">
                <img 
                onClick={goHome}
                    src='/img/hitech.png'
                    height={100}
                />
            </div>
            <div className="col">
                <ul className='header-list'>
                    <li><a href='/experiences'>Experiências</a></li>
                    <li><a href='/about-me'>Sobre mim</a></li>
                    <li><a href='/contact'>Contato</a></li>
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

