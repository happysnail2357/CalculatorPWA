import './digital-font.css';

type DisplayProps = {
    text: string;
    iconAdd: boolean;
    iconSub: boolean;
    iconMult: boolean;
    iconDiv: boolean;
    iconRes: boolean;
};

export function Display({ text, iconAdd, iconSub, iconMult, iconDiv, iconRes }: DisplayProps) {
    return (
        <div className="relative flex items-center w-[80vw] sm:w-[400px] h-15 mx-auto bg-gray-200 rounded-md px-3 py-2">
            <div className="absolute top-2 left-10 flex space-x-2">
                {iconAdd && <p className="w-3 h-3 rounded-full bg-black text-xs text-gray-200 text-center leading-[0.9]">+</p> || <p className="w-3 h-3"></p>}
                {iconSub && <p className="w-3 h-3 rounded-full bg-black text-xs text-gray-200 text-center leading-[0.9]">−</p> || <p className="w-3 h-3"></p>}
                {iconMult && <p className="w-3 h-3 rounded-full bg-black text-xs text-gray-200 text-center leading-[0.9]">×</p> || <p className="w-3 h-3"></p>}
                {iconDiv && <p className="w-3 h-3 rounded-full bg-black text-xs text-gray-200 text-center leading-[0.9]">÷</p>}
            </div>
            {iconRes && <p className="text-4xl digital-font">=</p>}
            <p className="ml-auto text-4xl digital-font">{text}</p>
        </div>
    );
}
