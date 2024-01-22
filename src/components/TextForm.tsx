import { useState, ChangeEvent } from 'react';
import './TextForm.css';

interface Props {
    heading: string
}

export default function TextForm(props: Props) {

    const [text, setText] = useState("")
    const [outputText, setOutputText] = useState("");
    const [copyButtonText, setCopyButtonText] = useState("copy text");

    const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const value: string = event.target.value
        setText(value);
    }

    const toUpperCase = () => {
        setText(text.toUpperCase())
    }
    const toInputArray = () => {
        const numbersString = text.slice(1, -1).replace(/,/g, " ");

        let result = "";
        let inSpace = false;
        for (let i = 0; i < numbersString.length; i++) {
            const char = numbersString[i];
            if (char !== " ") {
                result += char;
                inSpace = false;
            } else if (!inSpace) {
                result += " ";
                inSpace = true;
            }
        }
        const output = `${result.split(" ").length} \n${result}`;

        setOutputText(output)
    }

    const copyDataToClipboard = () => {

        if (outputText) {
            const originalName = copyButtonText;
            navigator.clipboard.writeText(outputText);
            setCopyButtonText("text copied")
            setTimeout(() => {
                setCopyButtonText(originalName);
            }, 1000)

        }
    }
    return (
        <>
            <div className='input-text-container'>
                <div className='text-area-head'>
                    <label htmlFor="text-output">{props.heading}</label>
                </div>
                <div className="input-text">
                    <textarea className="text-area" placeholder="Enter Text" value={text} onChange={handleOnChange} id="text-box" rows={6} />
                    <div className='text-information'>
                        <p> length: {text.length}, words: {text.trim().split(" ").length} </p>
                    </div>
                </div>
                <div className="button-container">
                    <button className="button" onClick={toUpperCase}>To UpperCase</button>
                    <button className="button" onClick={toInputArray}>To Input Array</button>
                </div>
            </div>
            <div>

                <div className='output-text-container'>
                    <div className='text-area-head'>
                        <label htmlFor="text-output">Formatted Text</label>
                        <button className="copy-text-button" onClick={copyDataToClipboard}>
                            {copyButtonText}
                        </button>
                    </div>
                    <div>
                        <textarea className="text-area" value={outputText} readOnly id="text-box" />
                    </div>
                </div>

            </div>
        </>
    )
}
