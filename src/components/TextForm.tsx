import { useState, ChangeEvent } from 'react'


interface Props {
    heading: string
}

export default function TextForm(props: Props) {

    const [text, setText] = useState("")
    const [outputText, setOutputText] = useState("");
    const [copyButtonText, setCopyButtonText] = useState("copy");

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
            setCopyButtonText("copied")
            setTimeout(() => {
                setCopyButtonText(originalName);
            }, 1000)

        }
    }
    return (
        <>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="text-box" rows={6} />
                <button className="btn btn-primary my-2 mx-1" onClick={toUpperCase}>To UpperCase</button>
                <button className="btn btn-success my-2 mx-1" onClick={toInputArray}>To Input Array</button>
            </div>
            <div className="container">
                <h1>Your text Summery</h1>
                <p>{text.length} characters and words {text.trim().split(" ").length} </p>
                <p>{outputText}</p>
                <div className='output-text-container '>
                    <textarea className="output-text-area" value={outputText} readOnly id="text-box" rows={6} />
                    <button className="copy-text-button" onClick={copyDataToClipboard}>{copyButtonText}</button>
                </div>

            </div>
        </>
    )
}
