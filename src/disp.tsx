import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row,Col,Alert } from 'react-bootstrap';
import Emplist from './data/data.json';
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';
import image6 from './images/6.png';
import image7 from './images/7.png';
import image8 from './images/8.png';
import image9 from './images/9.png';
import image10 from './images/10.png';
import image11 from './images/11.png';
import image12 from './images/12.png';

var notassign:any[]=Emplist;
var assign:any[]=[];

function Display(a:number){
    if(a===1){
        return <img src={image1} alt="logo1" />
    }
    else if(a===2){
        return <img src={image2} alt="logo2" />
    }
    else if(a===3){
        return <img src={image3} alt="logo3" />
    }
    else if(a===4){
        return <img src={image4} alt="logo4" />
    }
    else if(a===5){
        return <img src={image5} alt="logo5" />
    }
    else if(a===6){
        return <img src={image6} alt="logo6" />
    }
    else if(a===7){
        return <img src={image7} alt="logo7" />
    }
    else if(a===8){
        return <img src={image8} alt="logo8" width="50px" height="50px" className="setimage" />
    }
    else if(a===9){
        return <img src={image9} alt="logo9" width="50px" height="50px" className="setimage" />
    }
    else if(a===10){
        return <img src={image10} alt="logo10" width="50px" height="50px" className="setimage" />
    }
    else if(a===11){
        return <img src={image11} alt="logo11" width="50px" height="50px" className="setimage" />
    }
    else if(a===12){
        return <img src={image12} alt="logo12" width="50px" height="50px" className="setimage" />
    }
}
function Assign(){
    if(notassign.length===0){
        ReactDOM.render(<div className="alertbox"><Alert variant="danger">
            All the Employee had been Assigned
          </Alert></div>,document.getElementById('leftresult'));
    }
    else{
        var x=notassign.pop();
        var y={"name":x.name,"val":x.val};
        assign.push(y);
        ReactDOM.render(<p>{notassign.map((list,index)=>{
            return <div><div>
                {Display(list.val)}&nbsp;&nbsp;&nbsp;&nbsp;
                {list.name}
            </div><br></br></div>
        })}</p>,document.getElementById('leftresult'));
        ReactDOM.render(<p>{assign.map((list,index)=>{
            return <div><div>
                {Display(list.val)}&nbsp;&nbsp;&nbsp;&nbsp;
                {list.name}
            </div><br></br></div>
        })}</p>,document.getElementById('rightresult'));
        if(notassign.length===0){
            ReactDOM.render(<div className="alertbox"><Alert variant="danger">
                All the Employee had been Assigned
              </Alert></div>,document.getElementById('leftresult'));
        }
    }
}
function Revok(){
    if(assign.length===0){
        ReactDOM.render(<div className="alertbox"><Alert variant="danger">
            No Employee, Assigned to any Task
            </Alert></div>,document.getElementById('rightresult'));
    }
    else{
        var x=assign.pop();
        var y={"name":x.name,"val":x.val};
        notassign.push(y);
        ReactDOM.render(<p>{notassign.map((list,index)=>{
            return <div><div>
                {Display(list.val)}&nbsp;&nbsp;&nbsp;&nbsp;
                {list.name}
            </div><br></br></div>
        })}</p>,document.getElementById('leftresult'));
        ReactDOM.render(<p>{assign.map((list,index)=>{
            return <div><div>
                {Display(list.val)}&nbsp;&nbsp;&nbsp;&nbsp;
                {list.name}
            </div><br></br></div>
        })}</p>,document.getElementById('rightresult'));
        if(assign.length===0){
            ReactDOM.render(<div className="alertbox"><Alert variant="danger">
                No Employee, Assigned to any Task
                </Alert></div>,document.getElementById('rightresult'));
        }
    }
}
const Prog: React.FC = () => {
  return (
    <Container>
        <Row>
            <Col className="Left scrollbar scrollbar-primary  mt-5 mx-auto">
                <p id="leftresult">{Emplist.map((list,index)=>{
                    return <div><div>
                                {Display(list.val)}&nbsp;&nbsp;&nbsp;&nbsp;
                                {list.name}
                            </div><br></br></div>
                })}</p>
            </Col>
            <Col className="Middle text-center">
                <Button variant="info" onClick={Assign}>&nbsp;&nbsp;&nbsp;&nbsp;Move &#62;&#62;&nbsp;&nbsp;&nbsp;&nbsp;</Button><br></br><br></br>
                <Button variant="primary" onClick={Revok}>&nbsp;&nbsp;&nbsp;&nbsp;&#60;&#60; Move&nbsp;&nbsp;&nbsp;&nbsp;</Button>
            </Col>
            <Col className="Right scrollbar scrollbar-primary  mt-5 mx-auto">
                <p id="rightresult">
                    <div className="alertbox">
                        <Alert variant="danger">
                            No Employee, Assigned to any Task
                        </Alert>
                    </div>
                </p>
            </Col>
        </Row>
    </Container>
  );
}

export default Prog;