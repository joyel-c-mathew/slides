import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Footer() {
  return (
    <>
    <div>
        <br></br>
    <Card className="text-center">
      <Card.Header style={{color:'whitesmoke',fontWeight:'bold'}}>Mi Services</Card.Header>
      <Card.Body>
        <Card.Title style={{color:'whitesmoke',fontWeight:'bold'}}>24 hrs helpline</Card.Title>
        <Card.Text style={{color:'lightblue'}}>
          With supporting of google and microsoft.
        </Card.Text>
        <Button variant="info">mi</Button>
      </Card.Body>
      <Card.Footer style={{color:'white',fontWeight:'bold'}} className="text-muted">Thrissur,westfort</Card.Footer>
    </Card>

    </div>
    </>
  )
}

export default Footer