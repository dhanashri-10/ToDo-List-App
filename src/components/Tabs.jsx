import { TABS } from "../redux/actions/type";

import { useDispatch } from 'react-redux';

import { toggleTab, toggleTodo } from "../redux/actions";

const Tabs = ({ currentTab}) => {
    const dispatch = useDispatch();
    return (
        TABS.map(tab => {
            <button
                className={tab === currentTab ?  'button selected' : 'button'}
                onClick={() => dispatchEvent(toggleTab(tab))}
               
            >
                {tab}
            </button>
        })
    )
}

export default Tabs;