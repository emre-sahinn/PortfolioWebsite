import photo from "../selfie.png"
import "./Info.css"

function Info() {
    return (
        <div className="Info">
            <img className="Info-photo" src={photo} alt="emre sahin"></img>
            <h1 className="Info-text">Emre Şahin</h1>
            <h2 className="Info-text">Backend Engineer</h2>
            <h3 className="Info-text">emre-sahin.com</h3>
        </div>
    )
}

export default Info;