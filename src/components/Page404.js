import React from "react";
import { Container } from "react-bootstrap";
const Page404 = () => {
    return (
        <div className='page-not-found mt-5' style={{textAlign:"center"}}>
            <Container>
                <h2>Page <span style={{fontWeight:'bold',color:'#fd43a1'}}>Not Found. 404</span></h2>
            </Container>
        </div>
    )
}
export default Page404