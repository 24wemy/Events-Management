class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            angka1: "0",
            angka2: "0",
            result: "0"
        };
    }

    setValue1 = (val1) => { this.setState({ angka1: ""+val1 }); }
    setValue2 = (val2) => { this.setState({ angka2: ""+val2 }); }

    funcMultiply = (val1) => {
        let hasil = parseInt(this.state.angka1) * parseInt(this.state.angka2);
        this.setState({ result: ""+hasil });
    }

    funcDevide = (val1) => {
        let hasil = parseInt(this.state.angka1) / parseInt(this.state.angka2);
        this.setState({ result: ""+hasil });
    }

    funcSubtract = (val1) => {
        let hasil = parseInt(this.state.angka1) - parseInt(this.state.angka2);
        this.setState({ result: ""+hasil });
    }

    funcAdd = (val1) => {
        let hasil = parseInt(this.state.angka1) + parseInt(this.state.angka2);
        this.setState({ result: ""+hasil });
    }

    render() {
        return (
            <div>
                <h1>Simple Calculator ReactJS</h1>
                input 1: <input value={this.state.angka1} onChange={ (e) => {this.setValue1(e.target.value)}} />
                <br/>
                input 2: <input value={this.state.angka2} onChange={ (e) => {this.setValue2(e.target.value)}} />
                <h1>Result: {this.state.result}</h1>
                <button onClick={this.funcMultiply}>Mulitply</button>
                <button onClick={this.funcDevide}>Devide</button>
                <button onClick={this.funcSubtract}>Subtract</button>
                <button onClick={this.funcAdd}>Addition</button>
            </div>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById("app"));