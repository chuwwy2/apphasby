export async function fetchDataQuran():
    Promise<{
        nomor:number
        namaLatin:string
        JumlahAyat:number
    }[]> // 

{
    const res = await fetch ("https://equran.id/api/v2/surat")
    const json = await res.json()
    return json.data 

}

// tugas 
// mentranslite kan nomer value data di kolom nama surat menjadi namaLatin sesuai json api 
// from create maupun edit  =  tambah input