import React, { Component } from "react";
import Header from "./widgets/header";


class Home extends Component {
    render() {
        return (
            <div className="container">
                <div class="row mt-4">
                    <div className="col-md-10 mx-auto">
                        <Header />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;