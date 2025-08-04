export default function Contact(props){
    console.log(props)
    return(
           <div className="contacts">
            <article className="contact-card">
                <img 
                    src={props.img}
                    alt={props.name}
                />
                <h3>{props.name}</h3>
                
                <div className="info-group">
                    <img 
                        src={props.phoneIcon}
                        alt={props.phoneAlt}
                    />
                    <p>{props.phone}</p>
                </div>
            </article>
        </div>
    )
}