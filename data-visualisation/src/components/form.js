import React from 'react'

class Form extends React.Component {

    state = {
        city: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchFormInput(this.state.city)
    }

    handleChange = (e) => {
        this.setState({ city: e.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <input value={this.state.city} type="text" name="city" placeholder="City...default manchester" onChange={this.handleChange} />
                    <button type="submit"> Get Weather </button>
                </form>
            </div >
        )

    }


}

export default Form