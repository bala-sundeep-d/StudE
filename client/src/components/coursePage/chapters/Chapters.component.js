import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Card from '../../card/Card';


const Chapters = (props) => {
    let location = useLocation();
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        if(location && location.state && location.state.cid){
            const urlToGetAllChapters = "/chapters?subjectId=" + location.state.cid;
            axios.get(urlToGetAllChapters).then(response => {
                const chaptersList = response.data;
                setChapters(chaptersList);
            });
        }
        
    }, []);

    return (
        <div>
            {
                chapters.map((chapter, index) => <Card static={true} key={index} title={chapter.title} />)
            }
        </div>
    );
}

export default Chapters;
