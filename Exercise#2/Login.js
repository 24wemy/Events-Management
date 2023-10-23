function LoginButton (props) {
    return (
        <button onClick={() => props.onClick(props)}>Login</button>
    );
}

function LogOutButton (props) {
    return (
        <button onClick={() => props.onClick(props)}>Logout</button>
    );
}