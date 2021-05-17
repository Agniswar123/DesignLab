import logo from '../logo.svg';
import React from 'react';
function Navbarfunction(){
	return(
		<div style={{color : "seagreen"   }}>
		<h1>This is Navbar</h1>
 		<table cellpadding="5">	
		<tr>
		<td><h3>About Us</h3></td>
		<td><h3>Contact Us</h3></td>
		<td><h3>info</h3></td>
		<td><img src={logo} height= "200" width = "200" align= "center"/></td>
		<td><input type="text"/></td>
		<td><h2>Agniswar Roy</h2></td>
		</tr>
		</table>
		</div>
	);
}
export default Navbarfunction;
