"use client";
import { Input } from "./input";

export default function InputLabel({
  label,
  className,
  error,
  register,
  value,
  disabled,
}: any) {
  return (
    <div className="mb-2">
      <div className="sm:flex flex-row items-center gap-2">
        <label className="text-sm text-end w-20 font-sans font-semibold">
          {label}
        </label>

        <Input
          {...register}
          disabled={disabled}
          value={value}
          className={className}
          autoComplete="off"
        />
      </div>
      {error && (
        <label className="text-sm text-red-400 p-2 ml-20">
          Preencha este campo
        </label>
      )}
    </div>
  );
}
