import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Documentation.css'
import Panel from './Panel'
import Loading from './Loading'

const elements = [
    {
        name: 'Panel',
        component: <Panel header={'Pannel heading'} footer={'Footer'}>Deserunt laboris incididunt fugiat laborum non sint sunt cillum exercitation quis tempor sunt. Ea magna adipisicing ut Lorem non. Elit aliqua ea et dolore veniam nulla reprehenderit duis in. </Panel>
    },
    {
        name: 'Loading One',
        component: <Loading />
    },
]

const Documentation = () => {
    return (
        <div className='documentation'>
            <Container>
                <Row>
                    {elements.map(d =>
                        <Col xs='12' sm='6' className='mt-2'>
                            <div style={{textAlign:"center",fontWeight:'bold',color:'#fd43a1'}}>{d.name}</div>
                            <div className='pt-1'>{d.component}</div>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    )
}
export default Documentation