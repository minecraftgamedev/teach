import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.pagination = (
            <ul className="pagination">
                <li className="active"><a href="/">TEACHING RESOURCES</a></li>
                <li><a href="https://minecraftgamedev.github.io/resources/">STUDENT RESOURCES</a></li>
            </ul>);
    }

    render() {
        return (
            <div>
                <div className="header">
                    <span>
                        <h4>Game Design and Development with Minecraft and Java — HSSP 2020</h4>
                        <p>Taught by Sandra Tang (design) and Darren Lim (development)</p>
                    </span>
                </div>

                <div className="container dashboard">
                    <h1>RESOURCES</h1>

                    {this.pagination}
                </div>
            </div>
        );
    }
}

export default Header;