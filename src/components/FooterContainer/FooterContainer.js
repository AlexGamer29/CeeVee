import React from 'react'
import Footer from '../Footer/index'
import Icon from '../Icons/index'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>Work</Footer.Title>
                        <Footer.Link href="#">Blog</Footer.Link>
                        <Footer.Link href="#">How we work</Footer.Link>
                        <Footer.Link href="#">Testimonials</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Services</Footer.Title>
                        <Footer.Link href="#">Marketing Strategy</Footer.Link>
                        <Footer.Link href="#">Website Optimization</Footer.Link>
                        <Footer.Link href="#">Marketing</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Business Solution</Footer.Title>
                        <Footer.Link href="#">Partnership</Footer.Link>
                        <Footer.Link href="#">About Project</Footer.Link>
                        <Footer.Link href="#">Corporate</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Language</Footer.Title>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}