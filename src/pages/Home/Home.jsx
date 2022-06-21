import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../assests/img/header.png'
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import './Home.css'
import { FooterContainer } from '../../components/FooterContainer/FooterContainer';


const Home = () => {
  return (
    <>
      <div className='home__container'>
        <NavBar />
      </div>
      <div className='home__header__container'>
        <div className="text__container">
          <h1 className='home__header__title'>
            We help you create your Curriculum Vitae
          </h1>
          <p className="home__header__para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo non. At donec egestas cras in libero pellentesque. Donec amet phasellus
          </p>
          <div className="home__header__button">
            <Button
              variant="contained"
              id='btn_get_started'
              sx={{
                width: '188px',
                height: '68px',
                borderRadius: 8,
                fontSize: '12px',
                backgroundColor: '#60E1CB',
              }}
            >
              Get Started
            </Button>
            <Button
              variant="contained"
              id='btn_upload_cv'
              sx={{
                width: '188px',
                height: '68px',
                borderRadius: 8,
                fontSize: '12px',
                color: '#60E1CB',
                backgroundColor: 'white',
              }}
            >
              Upload your own CV
            </Button>
          </div>
        </div>
        <div className="illustration__container">
          <img src={Header} alt="" />
        </div>
      </div>
      <div className="footer">
        <FooterContainer />
      </div>
    </>
  )
}

export default Home