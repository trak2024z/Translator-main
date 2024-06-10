import React from 'react';
import { Textarea } from 'components/atoms/Textarea/Textarea.style';
import { Select } from 'components/atoms/Select/Select.style';
import {
    StyledForm,
    Top,
    Bottom,
    Column,
} from 'components/organisms/Form/Form.style';
import Button from 'components/atoms/Button/Button'; // Dodaj import Button

const Form = ({
    languages,
    error,
    translatedText,
    handleSelectedFromLanguage,
    handleSelectedToLanguage,
    handleText,
    translateAPI,
}) => {
    return (
        <StyledForm>
            <Top>
                <Column>
                    <Select onChange={(e) => handleSelectedFromLanguage(e)}>
                        {languages.data.languages.map((language) => (
                            <option key={language.language}>
                                {language.language}
                            </option>
                        ))}
                    </Select>
                    <Textarea
                        onChange={(e) => handleText(e)}
                        rows="5"
                        type="text"
                        name="from"
                        placeholder="Text to translate"
                    />
                </Column>
                <Column>
                    <Select onChange={(e) => handleSelectedToLanguage(e)}>
                        {languages.data.languages.map((language) => (
                            <option key={language.language}>
                                {language.language}
                            </option>
                        ))}
                    </Select>
                    <Textarea as="div" className={error ? 'error' : null}>
                        {error ? error : translatedText}
                    </Textarea>
                </Column>
            </Top>
            <Bottom>
                <Button onClickFunction={translateAPI} primary>
                    Translate
                </Button>
            </Bottom>
        </StyledForm>
    );
};

export default Form;
