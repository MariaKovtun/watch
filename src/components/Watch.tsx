import {faTrash} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type WatchProps = {
    title?: string,
    offset?:number;
    onDelete: () => void
}
const Watch = (props: WatchProps) => {
    if (typeof props?.offset === "undefined") return null;
    else {
        return (
            <>
            <div className="watch-header">
             <h3>Время в зоне UTC+{props?.offset}, {props?.title}</h3>
             <div className="closeModal" onClick={props.onDelete}></div>
            </div>
             <div id="clockDisplay" className="clockStyle"></div>
             </>
        )
    }
}

export default Watch;