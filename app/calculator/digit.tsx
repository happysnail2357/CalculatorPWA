import type { CallbackWithNumber } from "./+types/calculator"

type DigitButtonProps = {
    digit: number;
    onClick: CallbackWithNumber;
};

export function DigitButton({ digit, onClick }: DigitButtonProps) {
    return (
        <div className="bg-blue-500 text-white flex items-center justify-center rounded-full w-[15vw] sm:w-16 h-16" onClick={() => onClick(digit)}>
            <p className="text-xl font-bold">{digit}</p>
        </div>
    )
}
