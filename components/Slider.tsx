'use client'

import * as RadixSlider from '@radix-ui/react-slider'

interface SliderProps {
    value?: number;
    onChange?: (value: number) => void;
}


const Slider: React.FC<SliderProps> = ({
    value = 1,
    onChange
}) => {

    const handleChange = (newValue: number[]) => {
        onChange?.(newValue[0])
    }

  return (
    <RadixSlider.Root
        className='
        relative flex items-center select-none touch-none w-full h-10
        '
        defaultValue={[1]}
        onValueChange={handleChange}
        max={1}
        step={0.01}
        aria-label='Volume'
    >
        <RadixSlider.Track className='relative rounded-full grow bg-neutral-600 h-[3px]'>
            <RadixSlider.Range className='absolute rounded-full bg-white h-full'>
            
            </RadixSlider.Range>
        </RadixSlider.Track>
    </RadixSlider.Root>
  )
}

export default Slider