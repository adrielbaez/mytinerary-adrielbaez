const Input = ({value, onChnageFunction,iconFontAwesone, errores}) => {
    return (
        <>
            <div className="input-field">
                <i className={iconFontAwesone}></i>
                <input type="text" name="firstName" value={newUser.firstName} placeholder="Your First Name" onChange={readDataNewUser} />
            </div>
            { errores.firstName !== '' ? (<div className="mensaje-error-signup">{errores.firstName}</div>) : null}
        </>
    );
}

export default Input;