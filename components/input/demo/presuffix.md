---
order: 2
title: 前缀和后缀
---


````jsx
import { Input ,Icon} from 'b-rc';

class App extends React.Component{
    constructor(props) {
        super(props)
        this.emitEmpty = this.emitEmpty.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.state = {
            userName:''
        }
    }

    emitEmpty(){
        this.userNameInput.focus
        this.setState({
            userName:''
        })
    }

    onChangeUserName(e){
        this.setState({
            userName:e.target.value
        })
    }

    render(){

        const {userName} = this.state;
        const suffix = userName? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return (
            <Input 
                placeholder="Enter your Name"
                prefix={<Icon type="user" />}
                suffix={suffix}
                value={userName}
                onChange={this.onChangeUserName}
                ref={input => {this.userNameInput = input}}
            />
        )
    }

}

ReactDOM.render(<App />, mountNode);
````
