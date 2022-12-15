import n from './Login.module.css'

const Logout = (props) => {

    return (
        <div>
            <span>You are login!</span>
            <button className={n.logoutButton} onClick={() => {props.logout()}} >LOGOUT</button>
        </div>
    )
}

export default Logout