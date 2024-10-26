import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCountries } from "@/lib/getCountries";

export default function AddressRoute(){
    const {getAllCountries } = useCountries()
    return(
     <>
     <div className="w-3/5 mx-auto">
       <h2 className="text-3xl font-semibold transition-colors mb-10"> where is your home Located</h2>
     </div>

     <form>
        <div className="w-3/5 mx-auto">
            <div className="mb-5">
                <Select required>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Country" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>
                                Countries
                                {getAllCountries().map((item => (
                                    <SelectItem key={item.value} value={item.value}>
                                        {item.flag} {item.label} | {item.region}
                                    </SelectItem>
                                )))}
                            </SelectLabel>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
     </form>
     </>
    )
}