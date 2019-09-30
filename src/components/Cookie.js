import React from 'react'
import ccCookie from './../assets/ccCookie.jpg'
class Cookie extends React.Component{
constructor(){
    super();
    this.state={
        noClick:'click cookies to add cookies to your cart',
        cookies:0
        }}
cookieClicked(){
    this.state.cookies++
    this.setState({noClick:'you have '+this.state.cookies+' cookies in your cart.'})
}

    render(){
        return(
            <div>
<h3>{this.state.noClick}</h3>

<img src={ccCookie}  onClick={()=> this.cookieClicked()}/>
            </div>



        )
    }
}
export default Cookie