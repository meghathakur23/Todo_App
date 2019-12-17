import React  from 'react';
function Header() {
    return (
        <header style={headerStyle}> 
            <h1>TodoList</h1>
        </header>
    )
}
const headerStyle = {
    background: '#333',
    color: '#ffff00',
    textAlign:'left',
    padding: '10px'
}
 
export default Header;