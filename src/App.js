import {Container} from './Components/Styles/Container.styles'
import Header from './Components/Header';
import Footer  from './Components/Footer';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Components/Styles/Global';
import content  from './Components/content';
import Card from './Components/Card';
function App() {
const theme = {
  colors : {
    header  : '#ebfbff' , 
    body : '#fff' ,
    footer: '#003333',  
  }, 
  mobile: '768px'
}


  return (
    <ThemeProvider theme  = {theme}>
    <>
    <GlobalStyles/>
      <Header/>      
        <Container>
        {content.map((item , index)=>(
          <Card key = {index} item = {item}/>
          // <p>{item.title}</p>
          )

        )}


        </Container>
        <Footer/>    
    </>
    </ThemeProvider>
  );
}

export default App;
