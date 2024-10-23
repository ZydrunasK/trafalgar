import s from './header.module.css';

export function Header() {
    return (
            <header className={s.head}>
                <div className={s.logo}>
                    <img src="../src/assets/logo.svg" alt="logo" />
                    <p className={s.logoLetter}>T</p>
                    <h2>Trafalgar</h2>
                </div>

                <div className={s.nav}>
                    <ul className={s.list}>
                        <li className={s.activeLink}>Home</li>
                        <li>Find a doctor</li>
                        <li>Apps</li>
                        <li>Testimonials</li>
                        <li>About us</li>
                    </ul>
                </div>
            </header>
    );
}