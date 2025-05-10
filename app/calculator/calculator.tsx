import { useState } from "react";
import { Display } from "./display"
import { NumberPad } from "./number-pad"

type CallbackWithNumber = (digit: number) => void;
type CallbackWithFunction = (func: string) => void;


export function Calculator() {
    let [displayString, setDisplayString] = useState<string>('');
    let [firstNumber, setFirstNumber] = useState<number>(NaN);
    let [isFloatingPoint, setIsFloatingPoint] = useState<boolean>(false);
    let [isSecondNumber, setIsSecondNumber] = useState<boolean>(false);
    let [isResult, setIsResult] = useState<boolean>(false);
    let [wantsAddtition, setWantsAddtition] = useState<boolean>(false);
    let [wantsSubtraction, setWantsSubtraction] = useState<boolean>(false);
    let [wantsMultiplication, setWantsMultiplication] = useState<boolean>(false);
    let [wantsDivision, setWantsDivision] = useState<boolean>(false);
    
    function resetEverything() {
        setDisplayString('');
        setFirstNumber(NaN);
        setIsFloatingPoint(false);
        setIsSecondNumber(false);
        setIsResult(false);
        setWantsAddtition(false);
        setWantsSubtraction(false);
        setWantsMultiplication(false);
        setWantsDivision(false);
    }
    
    function grabNumber() {
        let parsedValue = parseFloat(displayString);
        setDisplayString('');
        setIsFloatingPoint(false);
        return parsedValue;
    }
    
    const handleDigit: CallbackWithNumber = (digit) => {
        
        if (isResult) {
            setDisplayString(digit);
            setIsResult(false);
        }
        else
        {
            setDisplayString(displayString + digit);
        }
    };
    
    const handleFunction: CallbackWithfunction = (func) => {
        if (func === 'C') {
            resetEverything();
        }
        else if (func === '.') {
            if (isResult) {
                setDisplayString('.');
                setIsFloatingPoint(true);
                setIsResult(false);
            }
            else if (!isFloatingPoint) {
                setDisplayString(displayString + '.');
                setIsFloatingPoint(true);
            }
        }
        else if (isSecondNumber) {
            if (func === '=' && displayString !== '' && displayString !== '.') {
                let secondNumber: number = grabNumber();
                if (wantsAddtition) {
                    setDisplayString(firstNumber + secondNumber);
                    setWantsAddtition(false);
                }
                else if (wantsSubtraction) {
                    setDisplayString(firstNumber - secondNumber);
                    setWantsSubtraction(false);
                }
                else if (wantsMultiplication) {
                    setDisplayString(firstNumber * secondNumber);
                    setWantsMultiplication(false);
                }
                else if (wantsDivision) {
                    setDisplayString(firstNumber / secondNumber);
                    setWantsDivision(false);
                }
                setIsResult(true);
                setIsSecondNumber(false);
            }
        }
        else {
            switch (func) {
                case '+':
                    if (displayString !== '' && displayString !== '.') {
                        setWantsAddtition(true);
                        setFirstNumber(grabNumber());
                        setIsSecondNumber(true);
                    }
                    break;
                case '−':
                    if (displayString !== '' && displayString !== '.') {
                        setWantsSubtraction(true);
                        setFirstNumber(grabNumber());
                        setIsSecondNumber(true);
                    }
                    break;
                case '×':
                case '*':
                    if (displayString !== '' && displayString !== '.') {
                        setWantsMultiplication(true);
                        setFirstNumber(grabNumber());
                        setIsSecondNumber(true);
                    }
                    break;
                case '÷':
                case '/':
                    if (displayString !== '' && displayString !== '.') {
                        setWantsDivision(true);
                        setFirstNumber(grabNumber());
                        setIsSecondNumber(true);
                    }
                    break;
            }
            setIsResult(false);
        }
    };
    
    return (
        <div class="bg-stone-50 flex items-center justify-center min-h-screen">
            <div class="p-6 rounded-lg bg-white shadow-lg">
                <Display text={displayString} />
                <NumberPad digitCallback={handleDigit} functionCallback={handleFunction} />
            </div>
        </div>
    );
}
