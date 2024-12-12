import { useState } from 'react'
import './Menu.css'

function Menu() {
    const [expanse, setExpanse] = useState(null);

    const menus = [
        {id: 1, title: 'WHY', items: [ 
            {
                id: 1, 
                name: "Why", 
                desc: 'Why because'}
            ] 
        },
        {id: 2, title: 'WHAT', items: [ 
            {
                id: 2, 
                name: "What", 
                desc: 'fi$pond is a fun saving event type, being tasked with a simple yet feasible multi-event environment, chaining notifications. This user interactive session is not without an urge to save. fi$pond is a savings delight game.'}
            ] },
        {id: 3, title: 'HOW', items: [ 
            {
                id: 3, 
                name: "How", 
                desc: 'How because'
            }] },
        {id: 4, title: 'THAT', items: [
             {
                id: 4, 
                name: "That", 
                desc: 'That because'
            }
        ] },
    ];

    const handleMenuClick = (menu) =>   {
        if (expanse === menu.id) {
            setExpanse(null);
        }   else    {
            setExpanse(menu.id);
        }
    };

    return (
        <nav className = "menu">
            
            {menus.map((menu) => (
                <div 
                key = {menu.id} 
                className = "menu-item" >
                    <button 
                    onClick = {() => handleMenuClick(menu)} > {menu.title} </button>

                    {(expanse === menu.id) && (
                        <ul
                        id = {`menu-${menu.id}`} 
                        className = "expanded-menu">
                            {menu.items.map((item, index) => (
                                <li key = {item.id}>
                                    <h4>The "{item.name} fi$pond"</h4>
                                    <p>{item.desc}</p>
                                </li>
                                ))}
                        </ul>
                    )}
                </div>
            ))}
        </nav>
    );
}

export default Menu