import React from 'react'
import { StyledHeader , Logo , Nav  } from './Styles/Header.styled'
import { Container } from './Styles/Container.styles'
import {Button} from './Styles/Button.styled' 
import { Flex } from './Styles/Flex.styles'
import {Image} from './Styles/Images.styled'
export default function Header  () {
    return (
        <StyledHeader >
            <Container>
                <Nav>
                    <Logo  src = './images/logo.svg' alt = '' />
                    <Button>
                        Try it for free
                    </Button>
                </Nav>
             <Flex>
            <div>
                <h1>Build the community Your Fans Will </h1>
                <p>Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.</p>
                <Button bg = '#ff0099' color= '#fff'>
                    Get free trial
                </Button>
            </div>
            <Image src = './images/illustration-mockups.svg' alt = '' />
            </Flex>   
            </Container>
        </StyledHeader>
    )
}
