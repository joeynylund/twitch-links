import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col, Accordion, Form } from 'react-bootstrap';
import { PopoverPicker } from "./PopoverPicker";

function App() {

  const [blocks, setBlocks] = useState([]);

  const [color, setColor] = useState("#121212");

  const [profileImage, setProfileImage] = useState('none');

  const [nameColor, setNameColor] = useState('#ffffff');

  const [nameSize, setNameSize] = useState(0);

  const [bold, setBold] = useState(false);

  const [italics, setItalics] = useState(false);

  const [underline, setUnderline] = useState(false);

  const [bio, setBio] = useState("");

  const [headerImage, setHeaderImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setHeaderImage(base64);
    console.log(base64)
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const Preview = () => {
    
    return (
      <>
      <div style={{backgroundColor:'#ccc',height:'15%', width:'100%'}}>

      </div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',marginTop:'-50px'}}>
        <img src='https://static-cdn.jtvnw.net/jtv_user_pictures/d14b8337-b987-4977-b312-5f54aa58ec55-profile_image-70x70.png' style={{borderRadius: profileImage === 'none' ? '0px' : profileImage === 'rounded' ? '20px' : '50%' }} width="100px" />
      </div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%'}}>
        <p style={{marginTop: '0.5rem',marginBottom: '0.5rem',color: nameColor,fontSize:'1.' + nameSize + 'rem', fontWeight: bold ? 'bold' : 'normal', fontStyle: italics ? 'italic' : 'normal', textDecoration: underline ? 'underline' : 'none'}}>@AmericanDad</p>
      </div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%'}}>
        <p style={{color: nameColor,fontSize:'0.75rem',whiteSpace:'pre-line'}}>{bio}</p>
      </div>
      </>
    )
    
  }

  return (
    <>
      <Container>
        <Row>
          <Col md="8">
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>General Appearance</Accordion.Header>
                <Accordion.Body>
                  <Row style={{marginTop:'15px',display:'flex',alignItems:'center'}}>
                    <Col md="6" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'stretch'}}>
                      <Row>
                        <Col md="6" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                          <PopoverPicker color={color} onChange={setColor} />
                          <p style={{margin:'0'}}>Background Color</p>
                        </Col>
                        <Col md="6" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                          <input
                            type="file"
                            onChange={(e) => {
                              uploadImage(e);
                            }}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Header</Accordion.Header>
                <Accordion.Body>
                  <Row style={{borderBottom:'1px solid #ccc'}}>
                    <Col md="12">
                      <h6>Profile Image</h6>
                    </Col>
                  </Row>
                  <Row style={{marginTop:'15px'}}>
                    <Col md="12">
                      <Row>
                        <Col md="4" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}} onClick={() => setProfileImage('none')}>
                          <div style={{width:'50px',height:'50px',border:'1px solid #ccc',display:'block',cursor:'pointer',backgroundColor: profileImage === 'none' ? '#ccc' : null}}></div>
                          <p>Square</p>
                        </Col>
                        <Col md="4" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}} onClick={() => setProfileImage('rounded')}>
                          <div style={{width:'50px',height:'50px',border:'1px solid #ccc',borderRadius:'10px',display:'block',cursor:'pointer',backgroundColor: profileImage === 'rounded' ? '#ccc' : null}}></div>
                          <p>Rounded Corners</p>
                        </Col>
                        <Col md="4" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}} onClick={() => setProfileImage('circle')}>
                          <div style={{width:'50px',height:'50px',border:'1px solid #ccc',borderRadius:'50%',display:'block',cursor:'pointer',backgroundColor: profileImage === 'circle' ? '#ccc' : null}}></div>
                          <p>Circle</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row style={{borderBottom:'1px solid #ccc'}}>
                    <Col md="12">
                      <h6>Account Name</h6>
                    </Col>
                  </Row>
                  <Row style={{marginTop:'15px',display:'flex',alignItems:'center'}}>
                    <Col md="6" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'stretch'}}>
                      <Row>
                        <Col md="6" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                          <PopoverPicker color={nameColor} onChange={setNameColor} />
                          <p style={{margin:'0'}}>Text Color</p>
                        </Col>
                        <Col md="6" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                          <Form.Range min="0" max="3" step="1" value={nameSize} onChange={(e) => setNameSize(e.target.value)} />
                          <p style={{margin:'0'}}>Text Size</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col md="6" style={{display:'flex',flexDirection:'column',alignItems:'stretch'}}>
                      <Row>
                        <Col md="4" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',padding:'10px'}} onClick={() => setBold(!bold)}>
                         <div style={{width:'100%',paddingTop:'10px',paddingBottom:'10px',border:'1px solid #ccc', borderRadius:'10px',cursor:'pointer',backgroundColor: bold ? '#ccc' : 'transparent'}}>
                            <p style={{margin:'0',textAlign:'center',fontWeight:'bold'}}>B</p>
                            <p style={{margin:'0',textAlign:'center'}}>Bold</p>
                          </div>
                        </Col>
                        <Col md="4" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',padding:'10px'}} onClick={() => setItalics(!italics)}>
                          <div style={{width:'100%',paddingTop:'10px',paddingBottom:'10px',border:'1px solid #ccc', borderRadius:'10px',cursor:'pointer',backgroundColor: italics ? '#ccc' : 'transparent'}}>
                            <p style={{margin:'0',textAlign:'center',fontStyle:'italic'}}>I</p>
                            <p style={{margin:'0',textAlign:'center'}}>Italics</p>
                          </div>
                        </Col>
                        <Col md="4" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',padding:'10px'}} onClick={() => setUnderline(!underline)}>
                          <div style={{width:'100%',paddingTop:'10px',paddingBottom:'10px',border:'1px solid #ccc', borderRadius:'10px',cursor:'pointer',backgroundColor: underline ? '#ccc' : 'transparent'}}>
                            <p style={{margin:'0',textAlign:'center',textDecoration:'underline'}}>U</p>
                            <p style={{margin:'0',textAlign:'center'}}>Underline</p>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Bio</Accordion.Header>
                <Accordion.Body>
                  <Row style={{borderBottom:'1px solid #ccc'}}>
                    <Col md="12">
                      <h6>Tell Us A Little About Yourself</h6>
                    </Col>
                  </Row>
                  <Row style={{marginTop:'15px'}}>
                    <Col md="12">
                      <Row>
                        <Form>
                          <Form.Group>
                            <Form.Control as='textarea' rows={4} value={bio} onChange={(e) => setBio(e.target.value)}></Form.Control>
                          </Form.Group>
                        </Form>
                      </Row>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Socials</Accordion.Header>
                <Accordion.Body>
                  <Row style={{marginTop:'15px'}}>
                    <Col md="12">
                      <Row>
                        <Col md="4" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}} onClick={() => setProfileImage('none')}>
                          <div style={{width:'50px',height:'50px',border:'1px solid #ccc',display:'block',cursor:'pointer',backgroundColor: profileImage === 'none' ? '#ccc' : null}}></div>
                          <p>Square</p>
                        </Col>
                        <Col md="4" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}} onClick={() => setProfileImage('rounded')}>
                          <div style={{width:'50px',height:'50px',border:'1px solid #ccc',borderRadius:'10px',display:'block',cursor:'pointer',backgroundColor: profileImage === 'rounded' ? '#ccc' : null}}></div>
                          <p>Rounded Corners</p>
                        </Col>
                        <Col md="4" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}} onClick={() => setProfileImage('circle')}>
                          <div style={{width:'50px',height:'50px',border:'1px solid #ccc',borderRadius:'50%',display:'block',cursor:'pointer',backgroundColor: profileImage === 'circle' ? '#ccc' : null}}></div>
                          <p>Circle</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md="4" style={{height:'700px',overflow:'auto', backgroundColor:color, borderRadius:'20px', padding:'0px'}}>
            <Preview />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
