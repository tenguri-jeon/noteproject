import React from 'react';
import { MordernListHeaderCompoenet } from '../mordern/style';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/modules/themeProvider';
import { darkTheme, lightTheme } from '../../theme/theme';



const MordernListHeader = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    return (
        <MordernListHeaderCompoenet theme={isDarkMode ? darkTheme : lightTheme}>
            <ul>
                <li className='circle red' ></li>
                <li className='circle yellow' ></li>
                <li className='circle green' ></li>
            </ul>
            {/* <button onClick={()=>dispatch(toggleTheme())}>
                {isDarkMode ? <MdSunny /> : <BsFillMoonStarsFill />}
            </button> */}
        </MordernListHeaderCompoenet>
    );
};

export default MordernListHeader;