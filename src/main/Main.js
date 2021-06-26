import React from "react"
import Search from "./search/Search";
import Summary from "./summary/Summary";

const envObj = process.env;
const env = envObj.NODE_ENV;
const endpoint = env === 'development' ?
    envObj.REACT_APP_DEV_ENDPOINT : envObj.REACT_APP_PROD_ENDPOINT

class Main extends React.Component {
    constructor(props) {
        super();
        this.state = {
            stock: undefined
        }
    }

    queryString = (searchText) => {
        return endpoint + (env === 'development' ? '' : searchText);
    }

    fetchData = (searchText) => {
        fetch(this.queryString(searchText))
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        stock: res
                    })
                    console.log(this.state.stock);
                },
                (error) => {
                    console.log("an error has occured:" + error)
                }
            )
    }

    componentDidMount() {
        this.fetchData("BPI");
    }

    render() {
        return (
            <div className="container-fluid mt-4">
                <Search onSearch={this.fetchData}></Search>
                <div className="row">
                    <div className="w-100 border-top mt-3">
                        <Summary data={this.state.stock}></Summary>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;