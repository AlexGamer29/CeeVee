import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './CV.css'
import icon1 from '../../assests/img/card-icons-1.png'
import { HiOutlineArrowRight } from "react-icons/hi";
import { FooterContainer } from '../../components/FooterContainer/FooterContainer';

const CV = () => {
    return (
        <>
            <div className='cv__header__container'>
                <h1 className='cv__header__title'>How to write a proper CV for beginners</h1>
                <p className="cv__header__para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ipsum massa. Suspendisse ullamcorper in erat sed interdum. Donec justo velit, scelerisque non iaculis non, maximus in justo. Donec eleifend placerat malesuada. Sed luctus, dolor ac vehicula tempor, metus est ullamcorper tellus, non finibus lacus eros in tortor.
                </p>
            </div>
            <div className="cv__features__container">
                <div className="features__cards__container">
                    <div id="text__container">
                        <h1 className='card__title'>We have different guides for different majors</h1>
                        <p className="card__para">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et.
                        </p>
                    </div>
                    <div className="cards__container">
                        <div className="card">
                            <div className="card__element">
                                <div className="icons__container">
                                    <img src={icon1} alt="" />
                                </div>
                                <div id="content__container">
                                    <div className="header__container">
                                        <h3 className="header__card">Architecture</h3>
                                    </div>
                                    <div className="para__container">
                                        <p className="para">
                                            Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam
                                            nonumy eirmod tempor invidunt ut
                                        </p>
                                    </div>
                                </div>
                                <Stack
                                    direction={'row'}
                                    spacing={2}
                                >
                                    <Button variant="text"
                                        sx={{
                                            padding: 0,
                                        }}>Read More &nbsp; <HiOutlineArrowRight /></Button>

                                </Stack>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__element">
                                <div className="icons__container">
                                    <img src={icon1} alt="" />
                                </div>
                                <div id="content__container">
                                    <div className="header__container">
                                        <h3 className="header__card">Biological Science</h3>
                                    </div>
                                    <div className="para__container">
                                        <p className="para">
                                            Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam
                                            nonumy eirmod tempor invidunt ut
                                        </p>
                                    </div>
                                </div>
                                <Stack
                                    direction={'row'}
                                    spacing={2}
                                >
                                    <Button variant="text"
                                        sx={{
                                            padding: 0,
                                        }}>Read More &nbsp; <HiOutlineArrowRight /></Button>

                                </Stack>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__element">
                                <div className="icons__container">
                                    <img src={icon1} alt="" />
                                </div>
                                <div id="content__container">
                                    <div className="header__container">
                                        <h3 className="header__card">Computer Science</h3>
                                    </div>
                                    <div className="para__container">
                                        <p className="para">
                                            Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam
                                            nonumy eirmod tempor invidunt ut
                                        </p>
                                    </div>
                                </div>
                                <Stack
                                    direction={'row'}
                                    spacing={2}
                                >
                                    <Button variant="text"
                                        sx={{
                                            padding: 0,
                                        }}>Read More &nbsp; <HiOutlineArrowRight /></Button>

                                </Stack>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__element">
                                <div className="icons__container">
                                    <img src={icon1} alt="" />
                                </div>
                                <div id="content__container">
                                    <div className="header__container">
                                        <h3 className="header__card">Education</h3>
                                    </div>
                                    <div className="para__container">
                                        <p className="para">
                                            Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam
                                            nonumy eirmod tempor invidunt ut
                                        </p>
                                    </div>
                                </div>
                                <Stack
                                    direction={'row'}
                                    spacing={2}
                                >
                                    <Button variant="text"
                                        sx={{
                                            padding: 0,
                                        }}>Read More &nbsp; <HiOutlineArrowRight /></Button>

                                </Stack>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__element">
                                <div className="icons__container">
                                    <img src={icon1} alt="" />
                                </div>
                                <div id="content__container">
                                    <div className="header__container">
                                        <h3 className="header__card">Engineering</h3>
                                    </div>
                                    <div className="para__container">
                                        <p className="para">
                                            Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam
                                            nonumy eirmod tempor invidunt ut
                                        </p>
                                    </div>
                                </div>
                                <Stack
                                    direction={'row'}
                                    spacing={2}
                                >
                                    <Button variant="text"
                                        sx={{
                                            padding: 0,
                                        }}>Read More &nbsp; <HiOutlineArrowRight /></Button>

                                </Stack>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__element">
                                <div className="icons__container">
                                    <img src={icon1} alt="" />
                                </div>
                                <div id="content__container">
                                    <div className="header__container">
                                        <h3 className="header__card">Social Sciences</h3>
                                    </div>
                                    <div className="para__container">
                                        <p className="para">
                                            Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam
                                            nonumy eirmod tempor invidunt ut
                                        </p>
                                    </div>
                                </div>
                                <Stack
                                    direction={'row'}
                                    spacing={2}
                                >
                                    <Button variant="text"
                                        sx={{
                                            padding: 0,
                                        }}>Read More &nbsp; <HiOutlineArrowRight /></Button>

                                </Stack>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner">
                <h1 className='banner__header'>Interested about new major guide ?</h1>
                <p className="banner__para">
                    Send a line here get and update daily
                </p>
                <Button
                    variant="contained"
                    id='btn_get_started'
                    sx={{
                        width: '300px',
                        height: '45px',
                        borderRadius: 8,
                        fontSize: '12px',
                        backgroundColor: '#292525',
                        textTransform: 'none',
                    }}
                >
                    cee.vee@vnuk.com.vn
                </Button>

            </div>
            <div className="presence__container">
            </div>
            <div className="footer">
                <FooterContainer />
            </div>
        </>
    )
}

export default CV