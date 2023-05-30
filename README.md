## How to run:
- npm install
- npm run dev


# Pendekatan:
Penyebab penurunan performa react terutama muncul dari unnecessary render. Salah satu penyebab hal itu adalah menggunakan objek state yang disimpan di parent atas. Perubahan state pada parent suatu komponen akan merender 

## 1. Pendekatan Pertama: Controlled Components dengan React.memo
- memo lets you skip re-rendering a component when its props are unchanged.
- Kita bisa menggunakan seperti [dokumentasi ini](https://react.dev/reference/react/memo). 
- Nilai yang akan dipass adalah value, index atau mahasiswa, dan fungsi handleChange 
- untuk menghindari render ulang akibat handleChange, maka gunakan useCallback dengan dependency data yang diubah
- Kita bisa membuat state untuk setiap aspek_penilaian, sehingga yang akan diupdate setiap kali nilai difield berubah adalah 10 field. 

## 2. Pendekatan Kedua: Local Controlled Components
- Setiap field akan punya state value masing-masing, sehingga tidak disimpan di parent component
- Ketika tombol simpan ditekan, akan diakses menggunakan ref
- Tetap ada rerender di komponen field

## 3. Pendekatan Ketiga: React Hook Form
- Menggunakan uncontrolled component
- Selain meminimalisir render, Library ini dapat melakukan banyak hal seperti validasi dan konsistensi.
- Sangat berguna untuk meningkatkan productivity

# Kesimpulan:
Berdasarkan ketiga pendekatan itu, saya memilih menggunakan React Hook Form karena paling efektif mencegah rerender terjadi# glowing-guacamole
