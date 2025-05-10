import type { CallbackWithFunction } from "./+types/calculator"

type FunctionButtonProps = {
    func: string;
    onClick: CallbackWithFunction;
};

export function FunctionButton({ func, onClick }: FunctionButtonProps) {
    return (
        <div class="bg-orange-400 text-white flex items-center justify-center rounded-full w-[15vw] sm:w-16 h-16" onClick={() => onClick(func)}>
            <p class="text-xl font-bold">{func}</p>
        </div>
    )
}
