import React from 'react';


class Navbar extends React.Component {
    render() {
        return (
          <div>
                <nav>
                    <div class="nav-wrapper">
                    <a href="/" class="brand-logo">Welcome to the covid-19 Portal</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                    </div>
                </nav>
          </div>
      );
    }

}

export default Navbar;
