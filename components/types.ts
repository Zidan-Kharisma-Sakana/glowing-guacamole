export interface IForm {
  form: IPenilaianMahasiswa[];
}

export interface IPenilaianMahasiswa {
  nama: string;
  aspek_penilaian_1: number;
  aspek_penilaian_2: number;
  aspek_penilaian_3: number;
  aspek_penilaian_4: number;
}

export const DATA: IPenilaianMahasiswa[] = Array(10)
  .fill(null)
  .map((_, index) => {
    return {
      nama: `mahasiswa_${index + 1}`,
      aspek_penilaian_1: 1,
      aspek_penilaian_2: 1,
      aspek_penilaian_3: 1,
      aspek_penilaian_4: 1,
    };
  });
