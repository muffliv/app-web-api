import {Outlet, Link} from 'react-router-dom';
import styles from './NavBar.module.css';
import Container from './Container';

function Navbar() {
    return(
        <>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/livros'>Livros</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/novolivro'>Cadastrar Livros</Link>
                    </li>

                </ul>
            </Container>
            <Outlet/>
        </>
    );
}

export default Navbar;