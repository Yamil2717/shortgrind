import './Sections.css';

const Sections = (props) => {
    return(
        <div className={props.className} value={props.value} >
            <div className='div-how-to'>
                <span className='text-button-link'>{props.value}</span>
                {
                    props.href1 && props.href2
                        ? (
                            <div className='buttons-link-absolute-one'>
                                <a className='btn-download' href={props.href1}>Download</a>
                                <a className='btn-connect' href={props.href2}>How to connect</a>
                            </div>
                        ) : (
                            <div className='buttons-link-absolute-two'>
                                <a className='btn-connect' href={props.href2}>How to connect</a>
                            </div>
                        )
                }
            </div>
            <div className={props.bg}></div>
        </div>
    )
}

export default Sections;