class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            page: 0,
            name: '',
            email: '',
            password: '',
            addressLineOne: '',
            addressLineTwo: '',
            city: '',
            state: '',
            zipCode: '',
            phoneNumber: '',
            creditCard: '',
            expiryDate: '',
            cvv: '',
            billZipCode: ''
        }

        this.handleNext = this.handleNext.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePurchase = this.handlePurchase.bind(this);
    }
 
    handleNext(e) {
        this.setState(
            {page: this.state.page + 1}
        )
    }

    handlePurchase(e) {
        this.setState(
            {page: 0}
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
            <button onClick={this.handleNext} id='nextPage'>Next</button>
            </div>
            )
        } else if (this.state.page === 2) {
            return (
            <div>
            <form id='f2'>
                <label>
                    Address Line 1:
                    <input type='text' id='addressLineOne' onChange={this.handleChange} value={this.state.addressLineOne}></input>
                </label><br></br>
                <label>
                    Address Line 2:
                    <input type='text' id='addressLineTwo' onChange={this.handleChange} value={this.state.addressLineTwo}></input>
                </label><br></br>
                <label>
                    City:
                    <input type='text' id='city' onChange={this.handleChange} value={this.state.city}></input>
                </label><br></br>
                <label>
                    State:
                    <input type='text' id='state' onChange={this.handleChange} value={this.state.state}></input>
                </label><br></br>
                <label>
                    Zip Code:
                    <input type='text' id='zipCode' onChange={this.handleChange} value={this.state.zipCode}></input>
                </label><br></br>
                <label>
                    Phone Number:
                    <input type='text' id='phoneNumber' onChange={this.handleChange} value={this.state.phoneNumber}></input>
                </label><br></br>
            </form>
            <button onClick={this.handleNext} id='nextPage'>Next</button>
            </div>
            )
        } else if (this.state.page === 3) {
            return (
                <div>
                <form id='f3'>
                    <label>
                        Credit Card #:
                        <input type='text' id='creditCard' onChange={this.handleChange} value={this.state.creditCard}></input>
                    </label><br></br>
                    <label>
                        Expiry Date:
                        <input type='text' id='expiryDate' onChange={this.handleChange} value={this.state.expiryDate}></input>
                    </label><br></br>
                    <label>
                        CVV:
                        <input type='text' id='cvv' onChange={this.handleChange} value={this.state.cvv}></input>
                    </label><br></br>
                    <label>
                        Billing Zip Code:
                        <input type='text' id='billZipCode' onChange={this.handleChange} value={this.state.billZipCode}></input>
                    </label><br></br>
                </form>
                <button onClick={this.handleNext} id='nextPage'>Next</button>
                </div>
                )
        } else if (this.state.page === 4) {
            return (
                <div id='final'>
                    <h2>Confirmation</h2>
                    <div>Name: {this.state.name}</div>
                    <div>Email: {this.state.email}</div>
                    <div>Password: {this.state.password}</div>
                    <div>Address Line 1: {this.state.addressLineOne}</div>
                    <div>Address Line 2: {this.state.addressLineTwo}</div>
                    <div>City: {this.state.city}</div>
                    <div>State: {this.state.state}</div>
                    <div>Zip Code: {this.state.zipCode}</div>
                    <div>Phone Number: {this.state.phoneNumber}</div>
                    <div>Credit Card #: {this.state.creditCard}</div>
                    <div>Expiry Date: {this.state.expiryDate}</div>
                    <div>CVV: {this.state.cvv}</div>
                    <div>Billing Zip Code: {this.state.billZipCode}</div>
                <button onClick={this.handlePurchase} id='purchase'>Purchase</button>
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