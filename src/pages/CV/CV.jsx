import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './CV.css'

const CV = () => {
    return (
        <>
            <div className='cv__container'>
                <NavBar />
            </div>
            <div className='cv__header__container'>
                <h1 className='cv__header__title'>How to write a proper CV for beginners</h1>
                <p className="cv__header__para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ipsum massa. Suspendisse ullamcorper in erat sed interdum. Donec justo velit, scelerisque non iaculis non, maximus in justo. Donec eleifend placerat malesuada. Sed luctus, dolor ac vehicula tempor, metus est ullamcorper tellus, non finibus lacus eros in tortor.
                </p>
            </div>
            <div className="cv__features__container">
                <div className="features__cards__container">
                    <div className="text__container">
                        <h1 className='card__title'>We have different guides for different majors</h1>
                        <p className="card__para">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CV