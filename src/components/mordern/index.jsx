import React, { useEffect, useState } from 'react';
import MordernListHeader from '../firstpage/MordernListHeader';
import { Outlet } from 'react-router-dom';
import { MordernListComponents, WholeBg } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { darkTheme, lightTheme } from '../../theme/theme';
import { MdSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { toggleTheme } from '../../store/modules/themeProvider';

const MordernList = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0'); 
            const minutes = String(now.getMinutes()).padStart(2, '0'); 
            setTime(`${hours}:${minutes}`); 
        };

        updateTime(); 
        const intervalId = setInterval(updateTime, 60000); 

        return () => clearInterval(intervalId); 
    }, []);

    const today = new Date();
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = week[today.getDay()];

    return (
        <WholeBg theme={isDarkMode ? darkTheme : lightTheme}>
            <div className='wrap'>
                <MordernListComponents theme={isDarkMode ? darkTheme : lightTheme}>
                    <MordernListHeader />
                    <div className="header-wrap">
                        <div className='time-wrap'>
                            <h1>{time}</h1>
                            <p className='calender'>{dayOfWeek}요일 {today.getMonth() + 1}월 {today.getDate()}일</p>
                        </div>
                        <button onClick={()=>dispatch(toggleTheme())}>
                            {isDarkMode ? <MdSunny /> : <BsFillMoonStarsFill />}
                        </button>
                    </div>
                    <Outlet />
                </MordernListComponents>
            </div>
        </WholeBg>
    );
};

export default MordernList;
