import React, { Component } from 'react'
import {Card, Input, Button, Table} from 'antd';
import {InputStyle} from '../../style/stryle';
import 'antd/dist/antd.css';
import { range, compile } from 'mathjs';

var dataInTable = []

const หัว = {
    title: "หัว",
    dataIndex: "no",
    key: "no"
}
const ข้อมูล = {
    title: "1"
    dataIndex: "no",
    key: "no"
}
const xValues = range(-10, 10, 0.5).toArray();
var fx = " ";
class false_position extends Component {
    
    constructor() {
        super();
        this.state = {
            fx: "",
            xl: 0,
            xr: 0,
            showOutputCard: false,
            showGraph: false,
            moveLeft: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.false_position = this.false_position.bind(this);
       
    }
    false_position(){
        var { fx ,xl,xr } = this.state
        
    }
    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value

        });
    }
    render() {
        return(
            <div style={{ background: "#FFFF", padding: "30px" }}>
            <h2 style={{color: "black", fontWeight: "bold"}}>False Position</h2>
                <div style={{float:"left"}}>
                    <Card
                    
                    bordered={true}
                    style={{ width: 300, background: "#0066FF", color: "#FFFFFFFF", float:"left"}}
                    onChange={this.handleChange}
                    id="inputCard"
                    >
                        <h2 style={{color: "yellow", fontWeight: "bold"}}>Input Bisection</h2><br/>
                        <h2>f(x)</h2><Input size="large" name="fx" style={InputStyle}></Input>
                        <h2>X<sub>L</sub></h2><Input size="large" name="xl" style={InputStyle}></Input>
                        <h2>X<sub>R</sub></h2><Input size="large" name="xr" style={InputStyle}></Input><br/><br/>
                        <Button onClick = {this.false_position}
                        style={{background: "#4caf50", color: "white", fontSize: "20px"}}>Submit</Button>
                    </Card>
                        
                    <div>
                        <Table columns={หัว} dataSource={ข้อมูล}></Table>
                    </div>
                                      
                </div>

                
            </div>
        );
    }
}
export default false_position;