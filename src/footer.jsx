import './css/footer.css'
import logo from './assets/logo.png'

function Footer() {

    return (
        <div id="footer">
            <div className="logoFooter">
                <img src={logo} alt="logo" />
            </div>
            <div className="text footerColumn">
                <div className="columnTitle">About us</div>
                <div className="columnItems">
                    <div className="columnItem">FAQ</div>
                    <div className="columnItem">Home</div>
                    <div className="columnItem">Contact us</div>
                </div>
            </div>
            <div className="text footerColumn productCollumn">
                <div className="columnTitle">Product</div>
                <div className="columnItems productCollumn">
                    <div className="columnItem">Course</div>
                    <div className="columnItem">Placeholder</div>
                    <div className="columnItem">Skill Exchange</div>
                </div>
            </div>
            <div className="text footerColumn newsletter">
                <div className="columnTitle">Newsletter</div>
                <form>
                    <label className="formText" htmlFor="email">Sign up for our spam free newsletter</label>
                    <div className="container">
                        <input type="email" />
                        <button className="text primary">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Footer
