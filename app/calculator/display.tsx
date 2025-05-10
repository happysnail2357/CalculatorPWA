import './digital-font.css';

type DisplayProps = {
    text: string;
};

export function Display({ text }: DisplayProps) {
    return (
        <div class="w-[80vw] sm:w-[400px] h-10 mx-auto bg-gray-200 rounded-md px-1">
            <p class="text-right h-10 text-4xl digital-font">{text}</p>
        </div>
    );
}
