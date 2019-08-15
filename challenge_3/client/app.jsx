class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            page: 0,
            name: '',
            email: '',
            password: ''
        }

        this.handleNext = this.handleNext.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
 
    handleNext(e) {
        this.setState(
            {page: this.state.page + 1}
        )
    }

    handleChange(e) {
        this.setState(
            {[e.target.id]: e.target.value}
        )
    }


    render() {
        if (this.state.page === 0) {
            return <button onClick={this.handleNext} id='checkout'>Checkout</button>
        } else if (this.state.page === 1) {
            return (
            <div>
            <form id='f1'>
                <label>
                    Name:
                    <input type='text' id='name' onChange={this.handleChange} value={this.state.name}></input>
                </label><br></br>
                <label>
                    Email:
                    <input type='text' id='email' onChange={this.handleChange} value={this.state.email}></input>
                </label><br></br>
                <label>
                    Password:
                    <input type='text' id='password' onChange={this.handleChange} value={this.state.password}></input>
                </label><br></br>
            </form>
            </div>
            )
        }
    }



}
// page 0 = checkout button
// page 1 = F1 + next button (name, email, password)
// page 2 = F2 + next button (line 1, line 2, city, state, zip code, phone number)
// page 3 = F3 + next button (credit card #, expiry date, CVV, billing zip code)
// page 4 = summary + purchase button



ReactDOM.render(<App/>, document.getElementById('root'));