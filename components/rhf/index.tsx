import { FC } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { DATA, IForm, IPenilaianMahasiswa } from "../types";
import { RHFRows } from "./row";

export const RHFForm: FC = () => {
  const { control, register, handleSubmit } = useForm<IForm>({
    defaultValues: {
      form: DATA,
    },
  });
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "form", // unique name for your Field Array
  });
  const tambah = () => {
    append({
      ...DATA[0],
      nama: `mahasiswa_${fields.length + 1}`,
    });
  };
  const hapus = (idx: number) => {
    return () => remove(idx);
  };
  const print = (obj: IForm) => {
    const fields = obj.form;
    const firstAspect = fields.map((field) => {
      return {
        [field.nama]: Number(field.aspek_penilaian_1),
      };
    });
    const secondAspect = fields.map((field) => {
      return {
        [field.nama]: Number(field.aspek_penilaian_2),
      };
    });
    const thirdAspect = fields.map((field) => {
      return {
        [field.nama]: Number(field.aspek_penilaian_3),
      };
    });
    const fourthAspect = fields.map((field) => {
      return {
        [field.nama]: Number(field.aspek_penilaian_4),
      };
    });
    console.log({ firstAspect, secondAspect, thirdAspect, fourthAspect });
  };
  console.log("RENDER");
  return (
    <form className="grid gap-y-2 w-full max-w-[780px] mx-auto mt-8" onSubmit={handleSubmit(print)}>
      <div className="text-white text-center font-bold w-full grid grid-cols-6 gap-x-4 gap-y-2">
        <p>Nama</p>
        <p>Aspek Penilaian 1</p>
        <p>Aspek Penilaian 2</p>
        <p>Aspek Penilaian 3</p>
        <p>Aspek Penilaian 4</p>
        <p>Remove</p>
      </div>
      {fields.map((field, index) => (
        <RHFRows key={field.id} field={field} hapus={hapus} index={index} register={register} />
      ))}
      <div className="flex flex-row-reverse gap-x-4 mt-8">
        <button type="submit" className="px-4 py-2 bg-slate-600 cursor-pointer rounded-md">
          Simpan
        </button>
        <div onClick={tambah} className="px-4 py-2 bg-slate-600 cursor-pointer rounded-md">
          Tambah
        </div>
      </div>
    </form>
  );
};
