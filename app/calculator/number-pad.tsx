import { DigitButton } from "./digit"
import { FunctionButton } from "./function"
import type { CallbackWithNumber, CallbackWithFunction } from "./+types/calculator"

type NumberPadProps = {
    digitCallback: CallbackWithNumber;
    functionCallback: CallbackWithFunction;
};

export function NumberPad({ digitCallback, functionCallback }: NumberPadProps) {
    return (
        <div class="grid grid-cols-4 grid-rows-5 gap-2 justify-items-center m-4">
            <FunctionButton func={'C'} onClick={functionCallback} />
            <div></div>
            <div></div>
            <FunctionButton func={'+'} onClick={functionCallback} />
            
            <DigitButton digit={9} onClick={digitCallback} />
            <DigitButton digit={8} onClick={digitCallback} />
            <DigitButton digit={7} onClick={digitCallback} />
            <FunctionButton func={'−'} onClick={functionCallback} />
            
            <DigitButton digit={6} onClick={digitCallback} />
            <DigitButton digit={5} onClick={digitCallback} />
            <DigitButton digit={4} onClick={digitCallback} />
            <FunctionButton func={'×'} onClick={functionCallback} />
            
            <DigitButton digit={3} onClick={digitCallback} />
            <DigitButton digit={2} onClick={digitCallback} />
            <DigitButton digit={1} onClick={digitCallback} />
            <FunctionButton func={'÷'} onClick={functionCallback} />
            
            <FunctionButton func={'±'} onClick={functionCallback} />
            <DigitButton digit={0} onClick={digitCallback} />
            <FunctionButton func={'.'} onClick={functionCallback} />
            <FunctionButton func={'='} onClick={functionCallback} />
        </div>
    );
}
