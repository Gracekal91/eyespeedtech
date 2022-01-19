import './HomeComponents.scss'
import eyetech_logo from '../../assets/images/eyetech_logo.png'


const Navigation = () => {
    return (
        <div className='navigation'>
            <div className="overlay"></div>
            <div className="container navContent">
                <img src={eyetech_logo} alt="" className="logo img-fluid" />
                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
        </div>
    )
}

export default Navigation

