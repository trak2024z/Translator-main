import React, { useEffect, useState } from 'react';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { Container } from 'components/templates/Container/Container.styles';
import { ApiButtons } from 'components/molecues/ApiButtons/ApiButtons.style';
import Form from 'components/organisms/Form/Form';
import Button from 'components/atoms/Button/Button';

function Root() {
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [languages, setLanguages] = useState([]);
    const [selectedFromLanguage, setSelectedFromLanguage] = useState('');
    const [selectedToLanguage, setSelectedToLanguage] = useState('');
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('Translation');

    const url_1 = 'https://google-translator9.p.rapidapi.com/v2/languages';
    const options_1 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${process.env.REACT_APP_API_TOKEN}`,
            'X-RapidAPI-Host': 'google-translator9.p.rapidapi.com',
        },
    };

    const url_2 = 'https://google-translator9.p.rapidapi.com/v2';
    const options_2 = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': `${process.env.REACT_APP_API_TOKEN}`,
            'X-RapidAPI-Host': 'google-translator9.p.rapidapi.com',
        },
        body: JSON.stringify({
            q: text,
            source: selectedFromLanguage,
            target: selectedToLanguage,
            format: 'text',
        }),
    };

    useEffect(() => {
        if (window.localStorage !== undefined) {
            const data = window.localStorage.getItem('languages');
            setLanguages(JSON.parse(data));
            setLoading(false);
        }
    }, []);

    const callAPI = async () => {
        try {
            const response = await fetch(url_1, options_1);
            const data = await response.json();
            localStorage.setItem('languages', JSON.stringify(data));
            setLanguages(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const translateAPI = async (e) => {
        e.preventDefault();
        setTranslatedText('Translation in progress');
        try {
            const response = await fetch(url_2, options_2);
            const data = await response.json();
            console.log(data);
            setError('');
            setTranslatedText(data.data.translations[0].translatedText);
        } catch (error) {
            setError('Error. Something went wrong...');
            console.log(error);
        }
    };

    const deleteData = () => {
        window.localStorage.removeItem('languages');
        setLanguages(null);
    };

    const handleSelectedFromLanguage = ({ target }) => {
        setSelectedFromLanguage(target.value);
    };

    const handleSelectedToLanguage = ({ target }) => {
        setSelectedToLanguage(target.value);
    };

    const handleText = ({ target }) => {
        setText(target.value);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container>
                <ApiButtons>
                    <Button onClickFunction={callAPI} primary>
                        Call API
                    </Button>
                    <Button onClickFunction={deleteData}>DeleteData</Button>
                </ApiButtons>
                {languages && languages.data && !isLoading && (
                    <Form
                        languages={languages}
                        error={error}
                        translatedText={translatedText}
                        handleSelectedFromLanguage={handleSelectedFromLanguage}
                        handleSelectedToLanguage={handleSelectedToLanguage}
                        handleText={handleText}
                        translateAPI={translateAPI}
                    />
                )}
            </Container>
        </ThemeProvider>
    );
}

export default Root;
