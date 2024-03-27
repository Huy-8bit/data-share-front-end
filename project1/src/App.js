 import React, { useState } from "react";
 import * as Components from './components/Components';
 import { login } from "./api/login";
 import {register} from "./api/register";

 function App() {
        const [signIn, toggle] = React.useState(true);

        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        //
        const loginAccount = async (event) => {
            event.preventDefault();
            console.log(username + ' '+password);
            login(username, password);
        };
        //
        const registerAccount = async (event) => {
            event.preventDefault();
            register(username, email, password);
        };
        //
       
      return(
          <Components.Container>
            <Components.SignInContainer signinIn={signIn}>
                   <Components.Form onSubmit={loginAccount}>
                       <Components.Title>Sign in</Components.Title>
                       <Components.Input type='text' placeholder='Username' onChange={e => setUsername(e.target.value)}/>
                       <Components.Input type='password' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <Components.Button type="submit">Sigin In</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form onSubmit={registerAccount}>
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input type='text' placeholder='Username'  onChange={e => setUsername(e.target.value)}/>
                      <Components.Input type='email' placeholder='Email'  onChange={e => setEmail(e.target.value)}/>
                      <Components.Input type='password' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                      <Components.Button type="submit">Sign Up</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sigin Up    
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
      )
 }

 export default App;