import React from "react";
import { ListGroup } from 'react-bootstrap';
import Hoc from './Hoc';
console.log("this is HOC",Hoc)

class HocExample extends React.Component {
    render() {
        return (
            <div>
                {/* <Hoc/> */}
                <ListGroup>
                    <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
            </div>

        )
    }
}
HocExample = Hoc(HocExample);
export default HocExample;


// import React, { Component } from 'react';
// import Hoc from './Hoc';

// class HocExample extends Component {

//   render() {
//     return (
//       <div>
//         Higher-Order Component Tutorial
//       </div>
//     )
//   }
// }
// HocExample = Hoc(HocExample);
// export default HocExample;