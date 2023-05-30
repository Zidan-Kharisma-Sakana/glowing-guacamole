import { FC } from "react";
import { FieldArrayWithId, UseFormRegister } from "react-hook-form";
import { IForm } from "../types";

export const RHFRows: FC<{
  field: FieldArrayWithId<IForm, "form", "id">;
  register: UseFormRegister<IForm>;
  index: number;
  hapus: any;
}> = ({ field, register, hapus, index }) => {
  return (
    <div className="text-black w-full grid grid-cols-6 gap-x-4 gap-y-2">
      <p className="text-white">{field.nama}</p>
      <input max={10} min={1} type="number" {...register(`form.${index}.aspek_penilaian_1`)} />
      <input max={10} min={1} type="number" {...register(`form.${index}.aspek_penilaian_2`)} />
      <input max={10} min={1} type="number" {...register(`form.${index}.aspek_penilaian_3`)} />
      <input max={10} min={1} type="number" {...register(`form.${index}.aspek_penilaian_4`)} />
      <div onClick={hapus(index)} className="px-4 py-2 bg-red-700 text-white text-center cursor-pointer rounded-md">
        Remove
      </div>
    </div>
  );
};
