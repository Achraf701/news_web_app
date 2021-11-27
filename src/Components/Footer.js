import { FooterStyled } from "./Styles/Footer.stytled"
import {Container} from "./Styles/Container.styles"
import {Flex} from "./Styles/Flex.styles"
import SocialIcons from "./SocialIcons"
export default function Footer (){
    return(
         <FooterStyled>
            <Container>
            <img src='./images/logo_white.svg' alt='' />
         <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons/>
        </Flex>

        <p>&copy; 2021 Huddle. All rights reserved</p>
      </Container>
         
      </FooterStyled>
    )
}