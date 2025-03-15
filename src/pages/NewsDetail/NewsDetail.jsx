import "./NewsDetail.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function NewsDetail () {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState([]);

    useEffect (() => {
        const fetchDetail = async () => {
            try {
                const response = await axios.get(`${backendUrl}/`)
            } catch (error) {
                
            }
        }
    })

    return (
        <>
        </>
    );
}

export default NewsDetail;