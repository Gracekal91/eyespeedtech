import React from 'react'
import { projects } from '../../assets/data'

const SectionOne = () => {
    return (
        <div className="sectionOne">
            <h1>Who Are <span style={{ color: '#0B5eda' }}>We?</span></h1>
            <p> We are a digital transformation consultancy and software development Company
                that provides cuting edge engineering solutions, helping more than 50 companies
                and enterprise clients untangle complex issues that always emerge during
                their digital evolution journey. We have been visionary and a reliable software enginering and development partner for several well known brands</p>
        </div>
    )
}

const SectionTwo = () => {
    return (
        <div className="sectionTwo">
            <div className="container">
                <h1>What <span style={{ color: '#0B5eda' }}>We</span> Offer?</h1>
                <div className="sectionTwoBox">
                    <div className="box1">
                        <h4>Web Design & Development</h4>
                        <p>Eye Speed Technology has grown into contestant in enterprise software enginering with wide-ranging expertise.</p>
                    </div>
                    <div className="box2">
                        <h4>Mobile App Development</h4>
                        <p>Eye Speed Technology has grown into contestant in enterprise software enginering with wide-ranging expertise.</p>
                    </div>
                    <div className="box3">
                        <h4>Software Development</h4>
                        <p>Eye Speed Technology has grown into contestant in enterprise software enginering with wide-ranging expertise.</p>
                    </div>
                    <div className="box4">
                        <h4>Greign Tech & Custom Enginering Solution</h4>
                        <p>Eye Speed Technology has grown into contestant in enterprise software enginering with wide-ranging expertise.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

//Contact section

const SectionThree = () => {
    return (
        <div className='sectionThree'>
            <div className="form">
                <form action="">
                    <div className="input-group">
                        <input type="text" placeholder='Fullname' />
                    </div>
                    <div className="input-group">
                        <input type="tel" placeholder='Cellphone' />
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder='email' />
                    </div>
                    <button className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </div>
    )
}

//Single Projects

const Project = ({ item }) => {
    return (
        <a href={item.link} target='_blank'>
            <div className='singleProject' style={{ backgroundImage: `url(${item.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="cardContent">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                </div>
            </div>
        </a>
    )
}

const Projects = () => {
    return (
        <div className='projects'>
            <div className="container">
                <h1>Recent Projects</h1>
                <div className="projectsBox">
                    {projects.map((item) => {
                        return <Project item={item} key={item.id} />
                    })}
                </div>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <p>Copyright eyespeedTech 2022</p>
            </div>
        </div>
    )
}

const Contents = () => {

    return (
        <div className='contents'>
            <div className="container">
                <SectionOne />
            </div>
            <SectionTwo />
            <SectionThree />
            <Projects />
            <Footer />
        </div>
    )
}

export default Contents
