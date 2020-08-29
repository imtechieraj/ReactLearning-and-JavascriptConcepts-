import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

 function Hoc(HocComponent) {
    //  alert("hi")
    return class extends Component {
        render() {
            return (
                <div>
                    <HocComponent></HocComponent>

                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item action href="#link1">
                            Link 1
                         </ListGroup.Item>
                        <ListGroup.Item action href="#link2" disabled>
                            Link 2
                      </ListGroup.Item>
                        <ListGroup.Item>
                            This one is a button
                      </ListGroup.Item>
                    </ListGroup>
                    <HocComponent></HocComponent>
                    <HocComponent></HocComponent>
                    <HocComponent></HocComponent>
                    <HocComponent></HocComponent>
                </div>

            );
        }
    }
}

export default Hoc;