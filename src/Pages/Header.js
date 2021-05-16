import React, { Component } from 'react';
import logo from '../Images/Avatar.gif';
import random from 'random';
import { Link } from 'react-router-dom';
import { MDBCol, MDBRow } from 'mdbreact';
import { FiGithub, FiMail, RiTelegramLine, AiOutlineProject } from 'react-icons/all';

var slogans = ["I use Linux ♿", "Doing things 🤯", "I love Python 🐍", "I hate JavaScript 🔥"];
var slogan = slogans[random.int(0, slogans.length - 1)]

class Header extends Component {
  render() {
    return (
      <div className={'row text-center p-5'}>
        <img
          alt="logo"
          className="img-fluid shadow-lg"
          src={logo}
          style={{
            borderRadius: '50%',
            maxWidth: '120px',
            maxHeight: '120px',
          }}
        />
        <MDBCol middle className={'text-left'}>
          <h1 className={'m-0'}>Igor 🐞</h1>
          <h3 className={'text-muted mx-0 mt-0 mb-2'}>{slogan}</h3>
          <MDBRow around>
            <a href={'https://github.com/igorechek06'} style={{ color: '#211F1F' }}>
              <FiGithub fontSize={26} />
            </a>
            <a href={'https://t.me/igorechek06'} style={{ color: '#0088CC' }}>
              <RiTelegramLine fontSize={30} />
            </a>
            <a href={'mailto:me@igorek.dev'} style={{ color: '#EA4335' }}>
              <FiMail fontSize={26} />
            </a>
            <Link to="/projects">
              <AiOutlineProject fontSize={26} />
            </Link>
          </MDBRow>
        </MDBCol>
      </div>
    );
  }
}

export default Header;
