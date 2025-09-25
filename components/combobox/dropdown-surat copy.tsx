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

export default function DropdownSurat(
  {suratTerpilih,suratYgBerubah}:{
  suratTerpilih:string
  suratYgBerubah:(value:string) => void
  }
) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(suratTerpilih)
  const [quranData, setQuranData] = React.useState<{
    value:string
    label:string
}[]>([])//menyesuaikan value dan label agar ber-object array []
React.useEffect(()=> {
  const getData = async() => {
    const data = await fetchDataQuran()
    const formattedData = data.map((isijson)=>({
      value: isijson.nomor.toString(),
      label: isijson.namaLatin
    }))
    setQuranData(formattedData)
  }
  getData() // pangggil sekali untuk nampilin di combobobx
},[]) // [] agar fetching data api nya ga bertubitubi/ sekali saja
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? quranData.find((nomorSurat) => nomorSurat.value === value)?.label 
            : "Pilih Surat"}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>Surat tidak ditemukan.</CommandEmpty>
            <CommandGroup>
              {quranData.map((isiformattedQuran) => (
                <CommandItem
                  key={isiformattedQuran.value}
                  value={isiformattedQuran.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    suratYgBerubah(currentValue)
                    setOpen(false)
                  }}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === isiformattedQuran.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {isiformattedQuran.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}