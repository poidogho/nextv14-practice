'use client'
import React, { useEffect, useState } from 'react';

export const useGetQuestions = () => {
    const [questions, setQuestions] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            console.log("useeffect")
            try {
                const response = await fetch('/api/questions');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setQuestions(data);
            } catch (error) {
                console.error("Error fetching questions:", error);

            }
        };

        fetchQuestions();
    }, []);

    return questions;
};