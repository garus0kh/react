import { Button, Tab, Tabs, Form, Dropdown } from "react-bootstrap";
import React, { useState } from "react";

function MyButton() {
    const [count, setCount] = useState(0);
    return ([count, 
        <>
        <Button value="Primary" size="sm" onClick={() => setCount(count+10)}>+10억</Button>{' '}
        <Button value="Primary" size="sm" onClick={() => setCount(count+1)}>+1억</Button>{' '}
        <Button value="Primary" size="sm" onClick={() => setCount(count-10)}>-10억</Button>{' '}
        <Button value="Primary" size="sm" onClick={() => setCount(count-1)}>-1억</Button>{' '}
        </>
    ])
}

function ControlledTabs() {
    const [key, setKey] = useState('home');
    const [loc, setLoc] = useState('서울시');

    var _main = null
    var [one_v, one_b] = MyButton()
    var [two_v, two_b] = MyButton()
    var rate_loc = 0.3

    if((loc === "서울시") || (loc === "경기도")) rate_loc = 0.3
    else if(loc === "강원도") rate_loc = 0.2
    else rate_loc = 0.1

    var _main = <p>이상해요</p>
    if(key === 'one') {
        _main = 
        <div>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>취득가액</Form.Label>
                <Form.Control type="text" value={ one_v } />
                <Form.Text className="text-muted">
                얼마에 사셨나요?
                </Form.Text>
            </Form.Group>
            { one_b }
            <Form.Group controlId="formBasicEmail">
                <Form.Label>시세</Form.Label>
                <Form.Control type="text" value={ two_v } />
                <Form.Text className="text-muted">
                시세는 호가예요
                </Form.Text>
            </Form.Group>
            { two_b }
            <Form.Group controlId="formBasicPassword">
                    <Form.Label>평형</Form.Label>
                    <Form.Control type="text" placeholder="평형" />
                    <Form.Text className="text-muted">
                    평형은 여기서 확인하세요
                    </Form.Text>
            </Form.Group>
            <Form.Group controlId="formLocation">
                    <Form.Label>지역</Form.Label>
                    <Form.Control type="text" placeholder={ loc } />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                지역
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item onClick={() => setLoc("서울시")}>서울시</Dropdown.Item>
                <Dropdown.Item onClick={() => setLoc("경기도")}>경기도</Dropdown.Item>
                <Dropdown.Item onClick={() => setLoc("충청도")}>충청도</Dropdown.Item>
                <Dropdown.Item onClick={() => setLoc("경상도")}>경상도</Dropdown.Item>
                <Dropdown.Item onClick={() => setLoc("강원도")}>강원도</Dropdown.Item>
                <Dropdown.Item onClick={() => setLoc("제주도")}>제주도</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>    
            <Button variant="primary" type="submit" >
                계산결과 : { ((two_v - one_v) * rate_loc).toFixed(1) }
            </Button>
        </div>
    } else if(key === 'two') {
        _main = <p>H2</p>
    } else if(key === 'three') {
        _main = <p>H3</p>
    }

    return (
        <>
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="one" title="1주택자">
            { _main }
            </Tab>
            <Tab eventKey="two" title="다주택자">
            { _main }
            </Tab>
            <Tab eventKey="three" title="오피스텔">
            { _main }
            </Tab>
        </Tabs>
        </>
    )
  }

function CalGet() {
    return (
        <>
            <ControlledTabs />
        </>
    )
}

export default CalGet;