import React from 'react';

interface Props {
  setSize: React.Dispatch<React.SetStateAction<string>>;
}

const ProductSize = ({ setSize }: Props) => {
  const handleSizeChange = (size: React.SetStateAction<string>) => {
    setSize(size);
  };

  return (
    <fieldset className="mt-4">
      <legend className="mb-1 text-sm font-medium">Size</legend>

      <div className="flow-root">
        <div className="-m-0.5 flex flex-wrap">
          <label htmlFor="size_xs" className="cursor-pointer p-0.5">
            <input
              type="radio"
              value="xs"
              name="size"
              id="size_xs"
              className="sr-only peer"
              onChange={(e) => handleSizeChange(e.target.value)}
            />

            <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
              XS
            </span>
          </label>

          <label htmlFor="size_s" className="cursor-pointer p-0.5">
            <input
              type="radio"
              name="size"
              value="s"
              id="size_s"
              className="sr-only peer"
              onChange={(e) => handleSizeChange(e.target.value)}
            />

            <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
              S
            </span>
          </label>

          <label htmlFor="size_m" className="cursor-pointer p-0.5">
            <input
              type="radio"
              name="size"
              id="size_m"
              className="sr-only peer"
              value="m"
              onChange={(e) => handleSizeChange(e.target.value)}
            />

            <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
              M
            </span>
          </label>

          <label htmlFor="size_l" className="cursor-pointer p-0.5">
            <input
              type="radio"
              name="size"
              id="size_l"
              className="sr-only peer"
              value="l"
              onChange={(e) => handleSizeChange(e.target.value)}
            />

            <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
              L
            </span>
          </label>

          <label htmlFor="size_xl" className="cursor-pointer p-0.5">
            <input
              type="radio"
              name="size"
              id="size_xl"
              className="sr-only peer"
              value="xl"
              onChange={(e) => handleSizeChange(e.target.value)}
            />

            <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
              XL
            </span>
          </label>
        </div>
      </div>
    </fieldset>
  );
};

export default ProductSize;
