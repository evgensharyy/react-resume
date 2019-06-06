import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

class Skill extends React.Component {
    constructor(props) {
        super(props);
        }

    render(){

        const popover = (
            <Popover id="popover-basic" title={props.title}>
              {props.text}
            </Popover>
          );

        return (
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              {props.skillButton}
            </OverlayTrigger>                   
        );

    }
}

export default Skill;

