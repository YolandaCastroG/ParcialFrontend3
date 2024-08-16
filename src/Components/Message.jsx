const infoStyles = {
    maxWidth: "200px",
    backgroundColor: "#4cb5f5",
    color: "black",
    width: "80%",
    margin: "10px auto",
    padding: "10px auto",
    borderRadius: "10px",
};

const Message = ({ person }) => {
    return (
        <div style={infoStyles}>
            <h4>Hola {person.name}!</h4>
            <h4>Sabemos que tu película favorita es: {person.favoriteMovie}</h4>
        </div>
    );
};

export default Message;