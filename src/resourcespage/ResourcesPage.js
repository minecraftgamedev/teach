import React from 'react';
import './ResourcesPage.css';
import Header from "../Header";
import ReactMarkdown from "react-markdown";

class ResourcesPage extends React.Component {
    constructor(props) {
        super(props);

        this.activeWeeks = [];
        const currentWeek = 6;
        for(let i = 1; i <= currentWeek; i++) {
            this.activeWeeks.push(i);
        }
        
        this.loadedMarkdowns = {};
        this.state = {};
    }

    componentDidMount() {
        document.getElementById("defaultOpen").click();
    }

    loadMarkdownAsActiveTab(name) {
        if(name in this.loadedMarkdowns) {
            this.setState({
                activeTab: this.loadedMarkdowns[name]
            });
        } else {
            this.setState({
                activeTab: <ReactMarkdown className="activeTab tabcontent" source={"Loading..."}/>
            });

            try {
                fetch(require("../markdown/" + name + ".md")).then((response) => response.text()).then((text) => {
                    this.loadedMarkdowns[name] = <ReactMarkdown className="activeTab tabcontent" source={text}/>;
                    this.setState({
                        activeTab: this.loadedMarkdowns[name]
                    });
                });
            } catch(e) {
                this.setState({
                    activeTab: <ReactMarkdown className="activeTab tabcontent" source={"WIP. Check back later!"}/>
                });
            }
        }
    }

    setTabActive(event) {
        if(event) {
            var tablinks = document.getElementsByClassName("tablinks");
            for (let i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            event.currentTarget.className += " active";
        }
    }

    openMarkdownFile(event, filename) {
        this.setTabActive(event);
        this.loadMarkdownAsActiveTab(filename, true);
    }

    render() {
        return (
            <div>
                <Header title="RESOURCES"/>

                <div className="container resourcesContainer">
                    <div className="tab">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <button className="tablinks specialButton" onClick={(event) => this.openMarkdownFile(event, "important information")} id="defaultOpen">Important Information</button>
                            </h4>
                        </div>

                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <button className="tablinks specialButton" onClick={(event) => this.openMarkdownFile(event, "class prereqs")} id="defaultOpen">Student Prerequisites (Development)</button>
                            </h4>
                        </div>

                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <button className="tablinks specialButton" onClick={(event) => this.openMarkdownFile(event, "teaching game design")} id="defaultOpen">Teaching Game Design</button>
                            </h4>
                        </div>

                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <button className="tablinks specialButton" onClick={(event) => this.openMarkdownFile(event, "should i teach development")} id="defaultOpen">Should I Teach Minecraft Game Development?</button>
                            </h4>
                        </div>

                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <button className="tablinks specialButton" onClick={(event) => this.openMarkdownFile(event, "teaching game development")} id="defaultOpen">Teaching Minecraft Game Development</button>
                            </h4>
                        </div>

                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" href="#collapse1">Additional Development Content (+)</a>
                            </h4>
                        </div>
                        <div id="collapse1" className="collapse">
                            <ul className="list-group">
                                <li className="list-group-item"><button className="tablinks" onClick={(event) => this.openMarkdownFile(event, "game development lesson plans")}>Lesson Plans</button></li>
                                <li className="list-group-item"><button className="tablinks" onClick={(event) => this.openMarkdownFile(event, "game development react webserver")}>React Frontend Server</button></li>
                                <li className="list-group-item"><button className="tablinks" onClick={(event) => this.openMarkdownFile(event, "game development nodejs backend")}>NodeJS Backend Server</button></li>
                                <li className="list-group-item"><button className="tablinks" onClick={(event) => this.openMarkdownFile(event, "game development local database")}>Local Database</button></li>
                                <li className="list-group-item"><button className="tablinks" onClick={(event) => this.openMarkdownFile(event, "game development MongoDB database")}>MongoDB Database</button></li>
                                <li className="list-group-item"><button className="tablinks" onClick={(event) => this.openMarkdownFile(event, "game development hosting student servers")}>Hosting Student Servers</button></li>
                                <li className="list-group-item"><button className="tablinks" onClick={(event) => this.openMarkdownFile(event, "game development helper plugins")}>Helper Plugins</button></li>
                            </ul>
                        </div>
                    </div>

                {this.state.activeTab}

                </div>
            </div>
        );
    }
}

export default ResourcesPage;