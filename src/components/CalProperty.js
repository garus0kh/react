import React, { Component, useState } from "react";
import Tab from 'react-bootstrap/Tabs';
import Tabs from 'react-bootstrap/Tabs';
import Sonnet from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function ShowCalOne () {
    const [count, setCount] = useState(100);
    const [c, setc] = useState(0);
    const [b, setb] = useState(0);

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>공시지가</Form.Label>
                    <Form.Control type="text" value={0} />
                    <Form.Text className="text-muted">
                    공시지가는 여기서 확인하세요 {count}
                    <Button onClick={() => setCount(count+1)}>+1억</Button>
                    <button placeholder="0">+1천</button>
                    <button placeholder="0">+1백</button>
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>평형</Form.Label>
                    <Form.Control type="text" placeholder="평형" />
                    <Form.Text className="text-muted">
                    평형은 여기서 확인하세요
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formLocation">
                    <Form.Label>지역</Form.Label>
                    <Form.Control type="text" placeholder="지역" />
                    <Form.Text className="text-muted">
                    지역은 여기서 확인하세요
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    계산하기
                </Button>
                </Form>
        </div>
    );
}
function ShowCalTwo () {

    return (
        <div>
        <input value="공시지가를 넣으세요"></input>
        <Button variant="primary">계산하기</Button>{' '}
    </div>
    );
}
function ShowCalThree () {

    return (
        <div>
        <input value="공시지가를 넣으세요"></input>
        <Button variant="primary">계산하기</Button>{' '}
    </div>
    );
}


function ControlledTabs() {
    const [key, setKey] = useState('home');

    const [contents, setContents] = useState([ShowCalOne(), ShowCalTwo(), ShowCalThree()])

    var _main = contents[0]
    if(key === 'one') {
        _main = contents[0]
    } else if(key === 'two') {
        _main = contents[1]
    } else if(key === 'three') {
        _main = contents[2]
    }
  
    return (
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="one" title="1주택자">
          <Sonnet />
          { _main }
        </Tab>
        <Tab eventKey="two" title="다주택자">
          <Sonnet />
          { _main }
        </Tab>
        <Tab eventKey="three" title="오피스텔">
          <Sonnet />
          { _main }
        </Tab>
      </Tabs>
    );
  }

class CalProperty extends Component {
    render () {
        return (
            <div>
                <h1>재산세!!</h1>
                <ControlledTabs />
            </div>
        )
    }
}

export default CalProperty;