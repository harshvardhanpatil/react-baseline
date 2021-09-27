import React from "react";
import { Container } from "react-bootstrap";
import './Home.css'
import {AiOutlineLink} from 'react-icons/ai'

const Home = ({ history }) => {
    return (
        <div className='home'>
            <span class="material-icons-outlined" onClick={() => history.push('/documentation')}>
                <Container className='mt-5'>
                    <h4> Welcome to <span style={{fontWeight:'bold',color:'#fd43a1'}}>react-component-framework</span></h4>
                    <p className='mt-5'>
                        This project will inteded to serve as template for other projects. We intend to build components that can support the rapid building of projects.<br/>
                        For more information checkout the documentation section.
                    </p>
                    <div className='mt-5'>
                        <AiOutlineLink href='/documentation' style={{width:'40px',height:'40px'}}/>
                    </div>
                </Container>
            </span>
        </div>
    )
}
export default Home;