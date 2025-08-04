export default function JOkes(props){
    console.log(props)
    return(
<div className="joke">
    <h3>{props.setup}</h3>
    <p>{props.punchline}</p>
</div>
    )
}