// type declaration = deklarasi tipe data 
type TipeDataParameterQuran = {
    nomorsurat:string
}
type TipeDataHasilFetchinganAPIQuran = {
    data:{
        namaLatin:string 
        jumlahAyat:number 
    }
}
type TipeDataUntukDisentilKeAPI = string

async function fetchDataQuran(angkaUrutan:TipeDataUntukDisentilKeAPI){
    const mentahanAPIquran = await fetch(`https://equran.id/api/v2/surat/${angkaUrutan}`)
    const dataSurat:TipeDataHasilFetchinganAPIQuran = await mentahanAPIquran.json()
    return dataSurat.data 
}

export default async function quranTersortir(
    { params }: { params: Promise<TipeDataParameterQuran> }
){
    const {nomorsurat} = await params
    const informasiSurat = await fetchDataQuran(nomorsurat)
    return(
        <div>
            <h1>nama surat nya adalah: {informasiSurat.namaLatin}</h1>
            <h1>jumlah surat nya adalah: {informasiSurat.jumlahAyat}</h1>
        </div>
    )
}