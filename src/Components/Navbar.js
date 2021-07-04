import React, {Component} from 'react'
import '../Assets/portfolio.css'
import {Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

class NavItem extends Component{ 

    toggleClass = ()  => { 
      this.props.toggleClass(this.props.text);
    };

   render(){
       return(
               <li><NavLink exact={true}
                   to={ this.props.href } 
                   className={ this.props.active ? 'active' : null } 
                   onClick={this.toggleClass}>{ this.props.text }</NavLink>
               </li>
           )
   }

}

class Navbar extends Component{ 
   constructor(props) {
      super(props);

      this.state = {
         navigation: '',
      };
   }
   toggleClass = (items) => {
      this.setState(prevState => ({ navigation: prevState.navigation === items? '': items }));
   };
   render() {

    return(
    <Container>
        <nav className="d-flex justify-content-between">
            <a href="/" title="Homepage">
                <img src="images/myLogo.png" alt="SheCodes logo" className="logo d-none d-md-block" />
                <img src="images/myLogo-small.png" alt="SheCodes logo small" className="logo d-block d-md-none" />
            </a>
            <ul>
                <NavItem href="/" text='Home' title="Homepage" toggleClass={this.toggleClass} active={this.state.navigation === 'Home'}/>
                <NavItem href="/about" text='About' title="About Veronica" toggleClass={this.toggleClass} active={this.state.navigation === 'About'}/>
                <NavItem href="/work" text='Work' title="Veronica's work" toggleClass={this.toggleClass} active={this.state.navigation === 'Work'}/>
                <NavItem href="/contact" text='Contact' title="Contact Veronica" toggleClass={this.toggleClass} active={this.state.navigation === 'Contact'}/>
            </ul>
        </nav>
    </Container>
       )
   }

}

export default Navbar
