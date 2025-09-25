"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { fetchDataQuran } from "@/lib/quran"
import { set } from "zod"
import { get } from "http"

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

export default function DropdownAyat(
    {valueSurat,ayatTerpilih,ayatYgBerubah}:{
        valueSurat: string
        ayatTerpilih: string
        ayatYgBerubah: (value: number) => void
    }
) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [opsiAyat,setOpsiAyat] = React.useState<number[]>([]) // [] biar dieksekusi 1 kali
    
  React.useEffect(() => {
        const getData = async () => {
        const data = await fetchDataQuran()
        const surat = data.find((nomerDarucomboboxsurat)=>
          nomerDarucomboboxsurat.nomor.toString() === valueSurat// cek nomer dari combobox surat
        )
        if (surat) {
            setOpsiAyat(Array.from({length:surat.jumlahAyat}, (_, i) => i + 1))
            }
        }
        if (valueSurat) getData()
  }, [valueSurat]) // ketika value surat berubah, maka akan mendapatkan data ayat
/*
bentuk umum usetEffect dengan api buat function yg aka di panggil sekali:
    -misalnya get data di dalamnya variable untunk pemanggil api
    perintah untuk mengolah data
    setelah di buat dipanggil agar tereksekusi sekali ketika komponen ini di render oleh browser
*/
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {ayatTerpilih ? `ayat ${ayatTerpilih}`: "silahkan pilih ayat"}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="silahkan pilih ayat" />
          <CommandList>
            <CommandEmpty>pilih surat nya dlu agar pilihan ayat nya muncul</CommandEmpty>
            <CommandGroup>
              {opsiAyat.map((ayat) => (
                <CommandItem
                  key={ayat}
                  value={ayat.toString()}
                  onSelect={(currentValue) => {
                    const valueAngka = parseInt(currentValue, 10)
                    ayatYgBerubah(valueAngka)
                    setOpen(false)
                  }}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      ayatTerpilih === ayat.toString() ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {`ayat.$(ayat}`}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}