import classes from './Sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={ classes.main }>
            <h3 className={ classes.menu }>MENU</h3>
            <ul>
                <li>Zestawy</li>
                <li>Burgery</li>
                <li>2forU</li>
                <li>Kurczaki</li>
                <li>Desery</li> 
                <li>Kawa</li>
            </ul>
        </div>
    )
}